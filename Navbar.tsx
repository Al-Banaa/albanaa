import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md shadow-gray-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center group">
          <img
            src="/2026-02-18.jpg"
            alt="Al-Banaa Construction"
            className="h-12 w-12 rounded-lg object-cover shadow-lg group-hover:opacity-90 transition-opacity"
          />
          <div className="ml-2.5 leading-tight">
            <span className={`block font-display font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>Al-Banaa</span>
            <span className="block text-brand-600 text-xs font-medium tracking-widest uppercase">Construction</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-brand-600 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+447930070707"
          className="hidden lg:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5"
        >
          <Phone size={15} />
          <span>Call Us Free</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 shadow-lg px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-gray-700 hover:text-brand-600 hover:bg-cream-100 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+447930070707"
            className="mt-2 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors"
          >
            <Phone size={15} />
            Call for a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
