import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('webcraft-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    localStorage.setItem('webcraft-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.fade-up, .reveal-on-scroll');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-700 transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
