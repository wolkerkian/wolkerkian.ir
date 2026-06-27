export default function Navbar() {
  const links = [
    { label: 'Cyber Sec', href: '/cyber-security' },
    { label: 'Web Dev', href: '/web-development' },
    { label: 'Forex Bots', href: '/forex-automation' },
    { label: 'Experiences', href: '/experiences' },
  ];

  return (
  <nav className="
    sticky top-[4.5rem] z-40 
    flex justify-center items-center
    bg-white/70 dark:bg-gray-950/70 backdrop-blur-md 
    border-b border-gray-200/50 dark:border-gray-800/50 
    py-3.5 px-4 transition-colors
  ">
    <div className="flex gap-5 xs:gap-6 sm:gap-9 md:gap-12 text-[10px] xs:text-sm md:text-base font-medium">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            relative text-gray-700 dark:text-gray-300 whitespace-nowrap
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors
            after:content-[''] after:absolute after:bottom-[-5px] after:left-0
            after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all
            hover:after:w-full
          "
        >
          {link.label}
        </a>
      ))}
              <a
                key={'/write-up'}
                href={'/write-up'}
                className="
                  relative text-red-700 dark:text-red-300 whitespace-nowrap
                  hover:text-red-600 dark:hover:text-red-400 transition-colors
                  after:content-[''] after:absolute after:bottom-[-5px] after:left-0
                  after:h-[2px] after:w-0 after:bg-red-500 after:transition-all
                  hover:after:w-full
                "
              >My WriteUps🔥</a>
    </div>
  </nav>
  );
}