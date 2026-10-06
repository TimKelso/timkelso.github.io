import type { JSX } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from '../atoms/Logo';

function Intro(): JSX.Element {
  return (
    <section className="flex min-h-dvh snap-start flex-col items-center justify-between px-6 py-10 text-center">
      {/* Balances the "My Journey" link so the name block sits in the middle. */}
      <div aria-hidden="true" className="h-14" />

      <div className="flex flex-col items-center gap-6">
        <Logo title="" className="w-28 sm:w-36" />
        <h1 className="font-display text-6xl font-bold sm:text-8xl">Tim Kelso</h1>
        <p className="text-secondary-fg max-w-md text-lg text-pretty">
          Frontend developer creating intuitive web applications and engaging user experiences.
        </p>
      </div>

      {/* The section heading lives on the projects themselves; this is the visible way in. */}
      <a
        href="#portfolio"
        className="font-display text-secondary-fg hover:text-default-fg focus-visible:ring-ring flex h-14 flex-col items-center rounded-md px-3 text-3xl transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        My Journey
        <ChevronDown aria-hidden="true" className="size-6" />
      </a>
    </section>
  );
}

export default Intro;
