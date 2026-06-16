const bullets = [
  'No Nasty Surprises — You get a clear, itemised quote upfront. What we say it costs is what you pay — no hidden extras, ever.',
  'We Show Up When We Say — We know builders have a bad reputation for timekeeping. We take pride in being different — on time, every day.',
  'Fair, Honest Pricing — We\'ll work to your budget and tell you honestly what\'s achievable. No upselling, no pressure.',
  'One Point of Contact — You\'ll have one person looking after your job from first call to final clean-up, so nothing falls through the cracks.',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-200" aria-label="About Al-Banaa Construction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mt-3 mb-6 leading-tight">
            We're Locals —<br />
            <span className="text-brand-600">We Know These Streets</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            Al-Banaa — which means "to build" in Arabic — started right here in Waltham Abbey. We're not a big faceless company. We're a tight-knit team who've worked on homes all across London, Essex, and Hertfordshire for over 10 years.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            We know how much your home means to you — and we treat it with the same care we'd give our own. Whether it's a loft conversion, a new kitchen, or a full house refurb, you'll always know who's in charge, what's happening, and what it costs.
          </p>

          <ul className="space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
