import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Loft Conversions',
    description: 'Transform your unused loft into a stunning bedroom, home office, or en-suite. We handle everything from planning permission to final fit-out.',
    image: 'https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    keywords: ['Dormer Loft', 'Velux Loft', 'Hip-to-Gable', 'Mansard Loft'],
    href: '/services/loft-conversions',
  },
  {
    title: 'Kitchen Renovations',
    description: 'Complete kitchen transformations — from bespoke fitted units and worktops to full structural remodels. We breathe new life into the heart of your home.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    keywords: ['Fitted Kitchens', 'Worktops & Splashbacks', 'Appliance Integration', 'Open-Plan Remodels'],
    href: '/services/kitchen-renovations',
  },
  {
    title: 'Bathroom Fitting',
    description: 'Luxury bathroom and en-suite installations with full plumbing, tiling, and bespoke cabinetry — turning functional spaces into relaxing retreats across London.',
    image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    keywords: ['Wet Rooms', 'En-Suites', 'Full Tiling', 'Bespoke Vanity Units'],
    href: '/services/bathroom-fitting',
  },
  {
    title: 'Maintenance & Plumbing',
    description: 'Reliable plumbing repairs, boiler servicing, leak detection, and general property maintenance across London and Essex. From emergency call-outs to planned upkeep, we keep your home running safely and efficiently.',
    image: '/Maintenance_&_Plumbing.png',
    keywords: ['Plumbing Repairs', 'Boiler Servicing', 'Leak Detection', 'General Maintenance'],
    href: '/services/maintenance-plumbing',
  },
  {
    title: 'Painting & Decorating',
    description: 'Flawless interior and exterior finishes from our skilled decorators. We use premium paints and meticulous preparation for results that last for years.',
    image: '/Al-Banna_Painting_Walls copy.png',
    keywords: ['Interior Painting', 'Exterior Painting', 'Wallpapering', 'Coving & Cornicing'],
    href: '/services/painting-decorating',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-100" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-5">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From a single room refresh to a full property transformation, we cover every aspect of home renovation with precision and care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-brand-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-600/10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image — clicking navigates to service page */}
              <Link to={s.href} className="block relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link to={s.href}>
                  <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-brand-700 transition-colors">
                    {s.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.keywords.map(k => (
                    <span
                      key={k}
                      className="text-xs text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-sm"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/getaquote"
                    className="flex items-center gap-1.5 text-brand-600 text-sm font-semibold hover:gap-3 transition-all duration-200 group/btn"
                  >
                    Get a Quote
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to={s.href}
                    className="text-xs text-gray-400 hover:text-brand-600 transition-colors font-medium"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
