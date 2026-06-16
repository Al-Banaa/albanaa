import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const services = [
  'Kitchen Renovation',
  'Interior Flooring',
  'Painting & Decorating',
  'Full Home Refurbishment',
  'Bathroom Installation',
  'Maintenance',
  'Other',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Quote() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/infor@al-banaa.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream-100" aria-label="Get a Free Quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <span className="text-brand-600 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mt-3 mb-6 leading-tight">
              Let's Have a Chat —<br />
              <span className="text-brand-600">No Pressure, No Cost</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Just tell us a bit about what you're thinking and we'll get back to you within 24 hours. We'll pop round, take a look, and give you a straight, honest quote — completely free.
            </p>

            <div className="space-y-5">
              <a href="tel:+447930070707" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center group-hover:bg-brand-200 transition-colors flex-shrink-0">
                  <Phone size={20} className="text-brand-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Phone</div>
                  <div className="text-gray-900 font-semibold group-hover:text-brand-600 transition-colors">+44 7930 070707</div>
                  <div className="text-gray-500 text-sm">+44 7999 099982</div>
                </div>
              </a>

              <a href="mailto:info@al-banaa.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center group-hover:bg-brand-200 transition-colors flex-shrink-0">
                  <Mail size={20} className="text-brand-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Email</div>
                  <div className="text-gray-900 font-semibold group-hover:text-brand-600 transition-colors">info@al-banaa.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Address</div>
                  <div className="text-gray-900 font-semibold">24A Sun St, Waltham Abbey</div>
                  <div className="text-gray-500 text-sm">EN9 1EE, London</div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-2xl p-5 border border-cream-300">
              <div className="text-brand-700 font-semibold text-sm mb-2">Where We Work</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We're based in Waltham Abbey and work across London, Essex, and Hertfordshire — including Enfield, Cheshunt, Epping, Broxbourne, Loughton, and all the areas in between. Not sure if we cover you? Just give us a ring.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-cream-300 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl text-gray-900 mb-3">Message Received!</h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. One of our team will contact you within 24 hours to discuss your project.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 text-brand-600 text-sm hover:text-brand-700 font-medium transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1.5">
                        Full Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-cream-50 border border-cream-300 focus:border-brand-500 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-1.5">
                        Phone Number <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000"
                        className="w-full bg-cream-50 border border-cream-300 focus:border-brand-500 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1.5">
                      Email Address <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-cream-50 border border-cream-300 focus:border-brand-500 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-600 text-sm font-medium mb-1.5">
                      Service Required <span className="text-brand-600">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-cream-50 border border-cream-300 focus:border-brand-500 focus:bg-white text-gray-900 rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you have in mind — even a rough idea is fine. We'll help you figure out the rest."
                      className="w-full bg-cream-50 border border-cream-300 focus:border-brand-500 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 disabled:bg-brand-300 text-white px-8 py-4 rounded-md font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-brand-700/20 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Request Free Quote
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    We'll get back to you within 24 hours. No pushy sales calls — just a friendly chat.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
