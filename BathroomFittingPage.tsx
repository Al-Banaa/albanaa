import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout';

const data: ServicePageData = {
  title: 'Bathroom Fitting',
  subtitle: 'Luxury Bathrooms & En-Suites',
  description:
    'Transform your bathroom into a private sanctuary. From stunning wet rooms and bespoke en-suites to full re-tiling and vanity installations, Al-Banaa Construction delivers flawless bathroom fitting across London, Essex, and Hertfordshire.',
  bannerImage: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  keywords: ['Wet Rooms', 'En-Suites', 'Full Tiling', 'Bespoke Vanity Units'],
  sections: [
    {
      heading: 'Wet Rooms',
      body: 'A wet room is the ultimate in modern bathroom design — a fully waterproofed, level-access shower area that creates a clean, open, and architecturally striking space. Our wet room specialists handle the complete process: tanking the floor and walls, screeding to the correct fall, laying large-format porcelain tiles with invisible drains, and installing frameless glass screens. The result is a seamless, maintenance-friendly shower area that feels both luxurious and practical.',
      image: 'https://images.pexels.com/photos/6444254/pexels-photo-6444254.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    },
    {
      heading: 'En-Suite Bathrooms',
      body: "An en-suite adds everyday convenience and significant value to your master bedroom. Whether we're converting an existing wardrobe space, carving into a landing, or building out into a loft conversion, our team designs the layout to make the most of every square metre. We handle all plumbing, electrical, tiling, and fit-out — including heated towel rails, underfloor heating, and bespoke mirrored cabinets — delivering a hotel-quality finish in your own home.",
    },
    {
      heading: 'Full Bathroom Tiling',
      body: 'The right tiling makes a bathroom. Our expert tilers work with all formats — large-slab porcelain, metro brick tiles, herringbone mosaics, and natural stone — laying to perfectly straight lines with consistent, precision grout joints. We prepare all surfaces correctly before tiling, applying waterproof tanking membranes to wet areas and using appropriate adhesive for each tile type. Feature walls, niche shelving, and underfloor heating installation are all part of our tiling service.',
      image: '/point3d-commercial-imaging-ltd-8RXUZg5h_QA-unsplash.jpg',
    },
    {
      heading: 'Bespoke Vanity Units',
      body: 'A well-designed vanity unit anchors the entire bathroom. We supply and install bespoke vanity cabinetry in a range of finishes — from gloss white and concrete-effect to painted hardwood — with integrated basins, soft-close drawers, and concealed plumbing. Our joinery team can design units to any shape and size, fitting around awkward pipework and maximising storage in compact bathrooms. Every unit is hand-finished and built to last.',
    },
  ],
  whyUs: [
    'All plumbing and electrical work in-house',
    'Fully waterproofed wet areas with tanking certificates',
    'Underfloor heating installation and commissioning',
    'Bespoke joinery and vanity units made to measure',
    'Dedicated bathroom design consultation',
    'Fully insured with 12-month workmanship guarantee',
    'Covering London, Essex & Hertfordshire',
  ],
  faqs: [
    {
      q: 'How long does a bathroom renovation take?',
      a: 'A full bathroom strip-out and renovation typically takes 10-15 working days. En-suites in smaller spaces can be completed in 5-8 days. We give you a precise programme at quotation stage.',
    },
    {
      q: 'Can you supply the sanitaryware and tiles?',
      a: 'Yes. We have trade accounts with leading suppliers and can source everything from tiles and sanitaryware to heated towel rails and underfloor heating systems. We are also happy to install products you have chosen yourself.',
    },
    {
      q: 'Do you install underfloor heating?',
      a: 'Yes. We install both electric mat systems and wet underfloor heating in bathrooms and en-suites. All systems are commissioned and tested before tiling commences.',
    },
    {
      q: 'How do I prepare for my bathroom renovation?',
      a: "We'll advise you during the pre-start meeting. Generally, you simply need to clear personal items from the room. We protect all surrounding areas and manage all waste removal ourselves.",
    },
  ],
};

export default function BathroomFittingPage() {
  return <ServicePageLayout data={data} />;
}
