import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout';

const data: ServicePageData = {
  title: 'Kitchen Renovations',
  subtitle: 'The Heart of Your Home, Transformed',
  description:
    'From bespoke fitted kitchens and premium worktops to complete open-plan remodels, Al-Banaa Construction delivers kitchen transformations that combine stunning design with expert craftsmanship — across London, Essex, and Hertfordshire.',
  bannerImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  keywords: ['Fitted Kitchens', 'Worktops & Splashbacks', 'Appliance Integration', 'Open-Plan Remodels'],
  sections: [
    {
      heading: 'Fitted Kitchens',
      body: 'A new fitted kitchen transforms how your home looks, feels, and functions. We supply and install kitchens from leading manufacturers as well as bespoke hand-painted cabinetry — tailored precisely to your space and lifestyle. Our kitchen fitters are fully employed craftsmen who take pride in perfectly aligned doors, seamless end panels, and invisible joins. From simple refreshes to full gutting and rebuilding, every project receives the same meticulous attention to detail.',
    },
    {
      heading: 'Worktops & Splashbacks',
      body: 'The worktop is the centrepiece of any kitchen. We work with quartz, granite, Silestone, solid timber, and ultra-compact surfaces — templating on-site to guarantee a perfect fit around your appliances, windows, and architectural features. Our tiling team installs ceramic, porcelain, and glass splashbacks to complement your chosen worktop, with precision grout lines and a flawless finish that elevates the entire room.',
      image: '/bluewater-sweden-ZFz78dSdaRc-unsplash.jpg',
    },
    {
      heading: 'Appliance Integration',
      body: 'Seamlessly integrating appliances makes the difference between a good kitchen and a great one. Our team handles all electrical first-fix wiring, plumbing connections, and gas supply for hobs and ovens — ensuring every appliance is correctly installed to manufacturer specifications and building regulations. We fit integrated fridges, dishwashers, washing machines, and AEG, Bosch, Neff, and Siemens built-in appliances with care and precision.',
    },
  ],
  whyUs: [
    'End-to-end service: design, supply, and installation',
    'All trades in-house: no third-party subcontractors',
    'Templated worktops for a guaranteed perfect fit',
    'Gas Safe registered engineers on staff',
    'Dedicated project manager throughout',
    'Fully insured with comprehensive aftercare',
    'Serving London, Essex & Hertfordshire',
  ],
  faqs: [
    {
      q: 'How long does a kitchen renovation take?',
      a: 'A standard kitchen refurbishment typically takes 2-3 weeks. A full open-plan remodel with structural work takes 8-14 weeks depending on the scope involved.',
    },
    {
      q: 'Can you help with kitchen design?',
      a: 'Yes. We work with experienced kitchen designers who will produce detailed 3D plans for your approval before any work begins. We offer free design consultations at our showroom or at your home.',
    },
    {
      q: "Do I need to source my own appliances?",
      a: "Not at all. We can supply all appliances through our trade accounts, often at better prices than high street retailers. We are also happy to install appliances you have purchased yourself.",
    },
    {
      q: 'Will you knock through walls for an open-plan kitchen?',
      a: 'Yes. We carry out all structural work including steel beam installation and building control sign-off. All structural alterations are fully engineered and certified.',
    },
  ],
};

export default function KitchenRenovationsPage() {
  return <ServicePageLayout data={data} />;
}
