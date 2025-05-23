import GitHub from '../atoms/icons/GitHub';
import Bluesky from '../atoms/icons/Bluesky';
import LinkedIn from '../atoms/icons/LinkedIn';

interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: JSX.Element;
}

function Footer(): JSX.Element {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/TimKelso',
      ariaLabel: 'GitHub',
      icon: <GitHub />,
    },
    {
      href: 'https://timkelso.bsky.social',
      ariaLabel: 'Bluesky',
      icon: <Bluesky />,
    },
    {
      href: 'https://linkedin.com/in/KelsoTim',
      ariaLabel: 'LinkedIn',
      icon: <LinkedIn />,
    },
  ];

  return (
    <footer className="flex snap-end flex-col items-center gap-2 py-5 sm:flex-row-reverse sm:justify-between sm:px-9">
      <ul className="flex w-full max-w-36 min-w-24 justify-between">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} aria-label={link.ariaLabel} className="group">
              <div className="text-secondary-fg/75 group-focus:text-secondary-fg/90 hover:text-secondary-fg/90 group-active:bg-secondary-fg/50 hover:bg-secondary-fg/25 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                {link.icon}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-secondary-fg/75 text-center font-sans text-pretty">&copy; {new Date().getFullYear()} Tim Kelso</p>
    </footer>
  );
}

export default Footer;
