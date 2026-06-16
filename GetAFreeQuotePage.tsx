import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavbarStatic from '../components/NavbarStatic';
import Footer from '../components/Footer';

const services = [
  'Loft Conversion',
  'Kitchen Renovation',
  'Bathroom Installation',
  'Painting & Decorating',
  'Full Home Refurbishment',
  'Interior Flooring',
  'Maintenance & Plumbing',
  'Other',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const trustPoints = [
  'Free, no-obligation site visit',
  'Clear itemised quote — no hidden costs',
  'Response within 24 hours',
  'All trades in-house, fully insured',
  'Serving London, Essex & Hertfordshire',
];

export default function GetAFreeQuotePage() {
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
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream-100 font-sans">
      <NavbarStatic />

      {/* Page Hero */}
      <section className="bg-gray-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase block mb-3">
            Free Consultation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Get Your Free Quote
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Tell us about your project and we'll get back to you within 24 hours. We'll visit your property, understand your vision, and give you a straight, honest price — no hard sell, no commitment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: Contact info + trust signals */}
            <aside className="lg:col-span-2 space-y-8">
              {/* Trust points */}
              <div className="bg-white rounded-2xl border border-cream-300 p-8">
                <h2 className="font-display text-xl text-gray-900 mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  {trustPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl border border-cream-300 p-8 space-y-5">
                <h2 className="font-display text-xl text-gray-900 mb-2">Prefer to Call?</h2>
                <a href="tel:+447930070707" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center group-hover:bg-brand-200 transition-colors flex-shrink-0">
                    <Phone size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Phone</div>
                    <div className="text-gray-900 font-semibold text-sm group-hover:text-brand-600 transition-colors">+44 7930 070707</div>
                    <div className="text-gray-500 text-xs">+44 7999 099982</div>
                  </div>
                </a>
                <a href="mailto:info@al-banaa.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center group-hover:bg-brand-200 transition-colors flex-shrink-0">
                    <Mail size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Email</div>
                    <div className="text-gray-900 font-semibold text-sm group-hover:text-brand-600 transition-colors">info@al-banaa.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-700" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Address</div>
                    <div className="text-gray-900 font-semibold text-sm">24A Sun St, Waltham Abbey</div>
                    <div className="text-gray-500 text-xs">EN9 1EE, London</div>
                  </div>
                </div>
              </div>

              {/* Area coverage */}
              <div className="bg-brand-700 rounded-2xl p-8">
                <h3 className="text-white font-semibold text-sm mb-2">Where We Work</h3>
                <p className="text-brand-200 text-sm leading-relaxed">
                  Based in Waltham Abbey — covering London, Essex &amp; Hertfordshire including Enfield, Cheshunt, Epping, Broxbourne, Loughton, and all areas in between.
                </p>
              </div>
            </aside>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-cream-300 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="font-display text-2xl text-gray-900 mb-3">Enquiry Received!</h2>
                    <p className="text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
                      Thank you for getting in touch. One of our team will contact you within 24 hours to discuss your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                        className="text-brand-600 text-sm hover:text-brand-700 font-medium transition-colors border border-brand-200 px-5 py-2.5 rounded-md"
                      >
                        Submit another enquiry
                      </button>
                      <Link
                        to="/"
                        className="text-gray-600 text-sm font-medium border border-gray-200 px-5 py-2.5 rounded-md hover:bg-cream-100 transition-colors"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h2 className="font-display text-2xl text-gray-900 mb-1">Tell Us About Your Project</h2>
                      <p className="text-gray-500 text-sm">Even a rough idea is fine — we'll help you work out the details.</p>
                    </div>

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
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us what you have in mind — size, location, timescale, any other details that might help."
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
