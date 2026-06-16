import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Waltham Abbey',
    service: 'Kitchen Renovation',
    rating: 5,
    text: 'Honestly couldn\'t be happier. They ripped out the old kitchen on Monday and by the end of the week it looked completely different. Lovely team — always left the place tidy at the end of each day. My neighbours have already asked for their number!',
  },
  {
    name: 'Priya K.',
    location: 'Cheshunt',
    service: 'Full Refurbishment',
    rating: 5,
    text: 'I was nervous about having so much work done at once but they really put my mind at ease. New kitchen, bathroom, flooring throughout — all done in one go. They managed everything so I didn\'t have to chase a dozen different tradespeople.',
  },
  {
    name: 'David R.',
    location: 'Epping',
    service: 'Flooring & Decorating',
    rating: 5,
    text: 'Got new hardwood floors put in downstairs and the whole place redecorated. The prep work they did before painting was really thorough — you can tell they don\'t rush. Great result and a fair price. Would definitely use them again.',
  },
  {
    name: 'Amina H.',
    location: 'Loughton',
    service: 'Bathroom Fitting',
    rating: 5,
    text: 'Our bathroom was in a terrible state. They came and had a look, gave us a sensible quote, and just got on with it. The tiling is immaculate. They were respectful of our home the whole time. Really good value for the quality.',
  },
  {
    name: 'Mark & Lisa C.',
    location: 'Broxbourne',
    service: 'Kitchen Renovation',
    rating: 5,
    text: 'Big project — a full new kitchen — but it never felt out of control. We always knew what was happening and who to ring if we had a question. The result is stunning. Our family couldn\'t believe it was the same house.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream-200" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">Real Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-5">
            From Your Neighbours
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what local homeowners across London, Essex and Hertfordshire have said.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 bg-brand-100 border border-brand-200 px-5 py-2.5 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-600 text-brand-600" />
              ))}
            </div>
            <span className="text-brand-900 font-semibold">5.0</span>
            <span className="text-gray-500 text-sm">· 100+ Reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-7 border border-cream-300 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 flex flex-col"
            >
              <Quote size={28} className="text-brand-200 mb-4 flex-shrink-0" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={14} className="fill-brand-500 text-brand-500" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
                <span className="text-xs bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
