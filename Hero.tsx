import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const badges = [
  'Loft Conversions',
  'Kitchen Renovations',
  'Full House Refurbishment',
  'Bathroom Fitting',
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Modern kitchen renovation by Al-Banaa Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">

          {/* Local trust pill */}
          <div className="inline-flex items-center gap-2 text-white text-xs font-medium px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Serving Waltham Abbey, London &amp; Essex
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Your Local Builder —
            <span className="block text-brand-400 mt-1">Done Properly.</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            We're a local construction team based in Waltham Abbey. Whether it's a kitchen, a loft conversion, or a full house refurb — we treat every home like it's our own.
          </p>

          {/* Badge list */}
          <div className="flex flex-wrap gap-2 mb-10">
            {badges.map(b => (
              <span
                key={b}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <CheckCircle size={12} className="text-brand-400 flex-shrink-0" />
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447930070707"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200 shadow-2xl shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-1 group"
            >
              <Phone size={18} />
              Call Us — It's Free
            </a>
            <button
              onClick={() => scrollTo('#services')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200"
            >
              See What We Do
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-5">
            No hard sell. We'll pop round, take a look, and give you a straight quote.
          </p>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60" />
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
