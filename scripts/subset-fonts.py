#!/usr/bin/env python3
"""Regenerate the subset WOFF2 webfonts in public/assets/fonts/.

The upstream Noto variable fonts are ~2 MB each because they carry every
script Noto supports plus a `wdth` axis this site never uses. This script
pins `wdth` to 100, keeps `wght` variable, and splits each family into a
"latin" and a "latin-ext" file so the browser only fetches the ranges a
page actually renders.

Usage:
    pip install fonttools brotli
    # Download the variable TTFs from https://fonts.google.com and put them
    # in a directory, then:
    python3 scripts/subset-fonts.py /path/to/downloaded/ttfs

Keep the unicode-range values in src/styles/fonts.css in sync with the
ranges below.
"""

import os
import subprocess
import sys

LATIN = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,"
    "U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,"
    "U+2215,U+FEFF,U+FFFD"
)
LATIN_EXT = (
    "U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,"
    "U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
)

# (upstream TTF filename, output directory, output filename stem)
FAMILIES = [
    ("NotoSans-VariableFont_wdth,wght.ttf", "Noto_Sans", "NotoSans"),
    ("NotoSerifDisplay-VariableFont_wdth,wght.ttf", "Noto_Serif_Display", "NotoSerifDisplay"),
    ("NotoSansMono-VariableFont_wdth,wght.ttf", "Noto_Sans_Mono", "NotoSansMono"),
]

OUT_ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "fonts")
LAYOUT_FEATURES = "kern,liga,clig,calt,ccmp,locl,mark,mkmk"


def main(src_dir: str) -> None:
    for ttf, out_dir, stem in FAMILIES:
        src = os.path.join(src_dir, ttf)
        if not os.path.isfile(src):
            sys.exit(f"missing source font: {src}")

        pinned = "/tmp/subset-fonts-pinned.ttf"
        subprocess.run(
            ["python3", "-m", "fontTools.varLib.instancer", src, "wdth=100", "-o", pinned],
            check=True,
        )

        target_dir = os.path.join(OUT_ROOT, out_dir)
        os.makedirs(target_dir, exist_ok=True)

        for name, unicodes in (("latin", LATIN), ("latin-ext", LATIN_EXT)):
            out = os.path.join(target_dir, f"{stem}-{name}.woff2")
            subprocess.run(
                [
                    "python3", "-m", "fontTools.subset", pinned,
                    f"--unicodes={unicodes}",
                    "--flavor=woff2",
                    f"--layout-features={LAYOUT_FEATURES}",
                    "--no-hinting",
                    "--desubroutinize",
                    f"--output-file={out}",
                ],
                check=True,
            )
            print(f"{os.path.getsize(out) / 1024:6.1f} KB  {out}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
