export function createReel({ date, title, description, keywords, link, lightImage, darkImage }) {
  return `
    <article class="reel h-dvh">
      <div>
        <h5 class="px-5 py-3 text-3xl">${date}</h5>
      </div>
      <div>
        <picture class="dark:hidden">
          <source srcset="${lightImage}.avif" type="image/avif" />
          <source srcset="${lightImage}.webp" type="image/webp" />
          <img
            src="${lightImage}.jpg"
            alt="Screenshot of ${title}."
            loading="lazy"
          />
        </picture>
        <picture class="hidden dark:block">
          <source srcset="${darkImage}.avif" type="image/avif" />
          <source srcset="${darkImage}.webp" type="image/webp" />
          <img
            src="${darkImage}.jpg"
            alt="Screenshot of ${title}."
            loading="lazy"
          />
        </picture>
      </div>
      <div class="px-5 py-3">
        <div class="mb-5">
          <h4 class="mb-1 text-2xl">${title}</h4>
          <p class="mb-1 text-pretty">${description}</p>
          <ul class="flex gap-3 text-xs">
            ${keywords
              .map((keyword) => `<li class="select-none rounded-full border border-black px-1 py-0.5 dark:border-gray-300">${keyword}</li>`)
              .join('')}
          </ul>
        </div>
        <div class="flex justify-center gap-10">
          <a href="${link}" class="flex rounded-md bg-gray-300 px-2 py-1 font-semibold text-gray-950">
            View Project<i class="material-symbols-outlined ml-1">open_in_new</i>
          </a>
        </div>
      </div>
    </article>
  `;
}
