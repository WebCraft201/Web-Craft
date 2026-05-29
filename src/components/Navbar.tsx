import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="WebCraft home">
      <img src="/W logo.png" alt="w logo" className='h-10 w-15 object-cover' />


      <img src="/logo text.png" alt="logo text" className='h-25 w-40 object-cover relative top-1.5 right-7' />
    </a>
  );
}

type NavbarProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

function ThemeToggle({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-2.5 pr-4 text-sm font-black text-navy shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-primary-600 hover:shadow-card"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      onClick={onToggleTheme}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 text-primary-600 transition">
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </span>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || '#home');

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-navbar">
      <nav className="container-page flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-extrabold transition duration-300 hover:bg-white/10 hover:text-primary-600 ${activeHash === link.href ? 'bg-blue-50 text-primary-600 shadow-sm' : 'text-navy'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <a href="#contact" className="primary-button px-7">
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white/90 text-navy shadow-sm backdrop-blur transition hover:border-blue-200 hover:text-primary-600 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white/95 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-bold transition hover:bg-blue-50 hover:text-primary-600 ${activeHash === link.href ? 'bg-blue-50 text-primary-600' : 'text-navy'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
            <a
              href="#contact"
              className="primary-button mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
