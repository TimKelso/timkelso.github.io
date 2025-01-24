// ==================== IMPORTS ===============================================

// ==================== COMPONENT =============================================

function Footer() {
  // --------------------- DATA -----------------------------------------------

  const socialLinks = [
    {
      href: 'https://x.com',
      ariaLabel: 'X/Twitter',
      iconClass: 'fa-brands fa-twitter',
    },
    {
      href: 'https://github.com',
      ariaLabel: 'GitHub',
      iconClass: 'fa-brands fa-github',
    },
    {
      href: 'https://linkedin.com',
      ariaLabel: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin-in',
    },
  ];

  return (
    // --------------------- JSX ------------------------------------------------

    <>
      <footer className="flex flex-col items-center gap-2 py-5 sm:flex-row-reverse sm:justify-between sm:px-9">
        <ul className="flex w-full max-w-36 min-w-24 justify-between">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} aria-label={link.ariaLabel} className="group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors group-focus:text-gray-700 group-active:bg-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:group-focus:text-gray-300 dark:group-active:bg-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">
                  <i className={`${link.iconClass} text-2xl`}></i>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center font-sans text-pretty text-gray-500">&copy; 2024 Tim Kelso</p>
      </footer>
    </>
  );
}

// ==================== EXPORTS ===============================================

export default Footer;
