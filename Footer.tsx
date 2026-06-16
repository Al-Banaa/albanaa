import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Loft Conversions', href: '/services/loft-conversions' },
  { label: 'Kitchen Renovations', href: '/services/kitchen-renovations' },
  { label: 'Bathroom Fitting', href: '/services/bathroom-fitting' },
  { label: 'Maintenance & Plumbing', href: '/services/maintenance-plumbing' },
  { label: 'Painting & Decorating', href: '/services/painting-decorating' },
];

const areaLinks = [
  'Waltham Abbey',
  'Enfield',
  'Cheshunt',
  'Epping',
  'Broxbourne',
  'Loughton',
  'North London',
  'East London',
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <img
                src="/2026-02-18.jpg"
                alt="Al-Banaa Construction"
                className="h-12 w-12 rounded-lg object-cover flex-shrink-0"
              />
              <div className="ml-2.5">
                <span className="block text-white font-display font-bold text-lg">Al-Banaa</span>
                <span className="block text-brand-400 text-xs font-medium tracking-widest uppercase">Construction</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A local building team you can actually trust. Based in Waltham Abbey, working across London, Essex &amp; Hertfordshire.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(s => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-gray-500 hover:text-brand-400 text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-5">Areas We Cover</h3>
            <ul className="space-y-2.5">
              {areaLinks.map(a => (
                <li key={a}>
                  <span className="text-gray-500 text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+447930070707" className="flex items-start gap-3 group">
                <Phone size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 text-sm group-hover:text-brand-400 transition-colors">+44 7930 070707</div>
                  <div className="text-gray-500 text-sm">+44 7999 099982</div>
                </div>
              </a>
              <a href="mailto:info@al-banaa.com" className="flex items-center gap-3 group">
                <Mail size={16} className="text-brand-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-brand-400 transition-colors">info@al-banaa.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-500 text-sm">
                  24A Sun St, Waltham Abbey<br />EN9 1EE, UK
                </div>
              </div>
            </div>

            <Link
              to="/getaquote"
              className="mt-6 block text-center bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Al-Banaa Construction Ltd. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Kitchen Renovations · Loft Conversions · Flooring · Painting · Full Refurbishment · London
          </p>
        </div>
      </div>
    </footer>
  );
}
