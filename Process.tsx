import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'Contact us and we\'ll arrange a free, no-obligation site visit to understand your vision, requirements, and budget.',
  },
  {
    number: '02',
    title: 'Detailed Quote',
    desc: 'We provide a comprehensive, itemised quote with clear timelines — no vague estimates, no hidden charges.',
  },
  {
    number: '03',
    title: 'Project Kick-Off',
    desc: 'Once you\'re happy to proceed, we agree a start date, introduce your site manager, and get underway.',
  },
  {
    number: '04',
    title: 'Build & Update',
    desc: 'Our team works diligently while keeping you informed throughout. Regular updates mean you\'re never left in the dark.',
  },
  {
    number: '05',
    title: 'Final Handover',
    desc: 'We complete a thorough walkthrough with you, address any snagging, and hand over your beautifully finished space.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream-100" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-5">
            Our Simple Process
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We make renovation stress-free. Here's what to expect from first contact to final handover.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 text-brand-300 text-xl">↓</div>
                )}

                <h3 className="text-gray-900 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-20 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-brand-200 mb-8 max-w-lg mx-auto">
            Step one is just a phone call or message away. Let's talk about your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447930070707"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-800 hover:bg-cream-100 px-8 py-3.5 rounded-md font-semibold transition-colors shadow-lg"
            >
              Call +44 7930 070707
            </a>
            <Link
              to="/getaquote"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white px-8 py-3.5 rounded-md font-semibold transition-colors"
            >
              Request Online Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
