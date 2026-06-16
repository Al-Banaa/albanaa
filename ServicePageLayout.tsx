import { ArrowLeft, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavbarStatic from './NavbarStatic';

export interface ServiceSection {
  heading: string;
  body: string;
  image?: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  keywords: string[];
  sections: ServiceSection[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
}

interface Props {
  data: ServicePageData;
}

export default function ServicePageLayout({ data }: Props) {
  return (
    <div className="bg-cream-100 font-sans">
      <NavbarStatic />

      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.bannerImage}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {data.keywords.map(k => (
              <span
                key={k}
                className="text-xs text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-sm"
              >
                {k}
              </span>
            ))}
          </div>

          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase block mb-3">
            {data.subtitle}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5 max-w-3xl">
            {data.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447930070707"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200 shadow-2xl shadow-brand-600/30 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call for a Free Quote
            </a>
            <Link
              to="/getaquote"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200"
            >
              Get a Quote Online
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {data.sections.map((sec, i) => (
                <div key={i}>
                  {sec.image && (
                    <div className="rounded-xl overflow-hidden mb-8 h-72">
                      <img
                        src={sec.image}
                        alt={sec.heading}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-4">
                    {sec.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {sec.body}
                  </p>
                </div>
              ))}

              {/* FAQs */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {data.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-cream-300 pb-6">
                      <h3 className="text-gray-900 font-semibold mb-2">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Why Us */}
              <div className="bg-white rounded-2xl border border-cream-300 p-8 sticky top-28">
                <h3 className="font-display text-xl text-gray-900 mb-6">Why Choose Al-Banaa?</h3>
                <ul className="space-y-4">
                  {data.whyUs.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-cream-200 space-y-3">
                  <a
                    href="tel:+447930070707"
                    className="flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors"
                  >
                    <Phone size={15} />
                    Call +44 7930 070707
                  </a>
                  <Link
                    to="/getaquote"
                    className="flex items-center justify-center gap-2 w-full bg-cream-100 hover:bg-cream-200 border border-cream-300 text-gray-700 px-5 py-3 rounded-md text-sm font-semibold transition-colors"
                  >
                    Get a Quote Online
                  </Link>
                </div>
              </div>

              {/* Service keywords */}
              <div className="bg-white rounded-2xl border border-cream-300 p-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-widest">What We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {data.keywords.map(k => (
                    <span
                      key={k}
                      className="text-xs text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-sm"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">Ready to Start?</span>
          <h2 className="font-display text-3xl sm:text-4xl text-white mt-3 mb-5">
            Get Your Free {data.title} Quote Today
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            No obligation. We'll visit your property, understand your vision, and give you a clear, honest price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447930070707"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call Us Free
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
