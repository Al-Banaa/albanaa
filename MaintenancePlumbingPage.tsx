import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout';

const data: ServicePageData = {
  title: 'Maintenance & Plumbing',
  subtitle: 'Reliable Property Maintenance',
  description:
    'From emergency plumbing repairs and boiler servicing to planned property maintenance contracts, Al-Banaa Construction keeps homes and commercial properties running safely and efficiently across London, Essex, and Hertfordshire.',
  bannerImage: '/Maintenance_&_Plumbing.png',
  keywords: ['Plumbing Repairs', 'Boiler Servicing', 'Leak Detection', 'General Maintenance'],
  sections: [
    {
      heading: 'Plumbing Repairs & Installations',
      body: 'Whether you have a dripping tap, a burst pipe, or need a complete bathroom replumb, our Gas Safe and qualified plumbing team responds promptly and resolves the problem correctly first time. We carry out all plumbing work to current Water Regulations — from replacing isolation valves and waste traps to installing new pipework runs for loft conversions and renovations. No job is too small; no problem is left half-finished.',
      image: '/Maintenance_&_Plumbing.png',
    },
    {
      heading: 'Leak Detection & Damp Prevention',
      body: 'Hidden leaks cause significant structural damage if left unaddressed. Our team uses non-invasive moisture detection equipment to locate leaks behind walls, under floors, and within flat roofs without unnecessary destruction. Once located, we repair the source, dry the affected area, and treat any resulting damp or mould — preventing the secondary damage that turns a small leak into a major problem. We also install and maintain guttering, downpipes, and external waterproofing systems.',
    },
    {
      heading: 'Boiler Servicing & Central Heating',
      body: 'A regularly serviced boiler runs more efficiently, lasts longer, and keeps your home safe. Our Gas Safe registered engineers carry out annual boiler services on all makes and models, issue Landlord Gas Safety Certificates, and diagnose and repair faults on central heating systems. We also install new boilers, programme smart thermostats, and commission underfloor heating systems — keeping your home warm and your energy bills under control.',
      image: '/image.png',
    },
    {
      heading: 'General Property Maintenance',
      body: 'Landlords, homeowners, and property managers across London and Essex rely on Al-Banaa for ongoing property maintenance. From patching plasterwork and repairing fences to replacing broken roof tiles and fixing faulty electrics, we provide a reliable, multi-trade maintenance service with fast response times. We offer scheduled maintenance contracts for landlords and letting agents who need a single, trusted contractor for all repair and upkeep work.',
    },
  ],
  whyUs: [
    'Gas Safe registered engineers on staff',
    'Emergency call-out availability',
    'Multi-trade team: plumbing, electrical, carpentry',
    'Landlord Gas Safety Certificates issued same day',
    'Non-invasive leak detection technology',
    'Maintenance contracts for landlords and agents',
    'Covering London, Essex & Hertfordshire',
  ],
  faqs: [
    {
      q: 'Are your plumbers Gas Safe registered?',
      a: 'Yes. All gas work carried out by Al-Banaa is performed by Gas Safe registered engineers. We can provide our Gas Safe registration number on request and issue all required certificates.',
    },
    {
      q: 'Do you offer emergency call-outs?',
      a: 'Yes. We offer emergency plumbing and maintenance call-outs for serious issues such as burst pipes, boiler failures, and significant leaks. Contact us directly on +44 7930 070707 for urgent assistance.',
    },
    {
      q: 'Can you provide a maintenance contract for my rental properties?',
      a: 'Yes. We offer flexible maintenance contracts for landlords and letting agents, covering routine inspections, gas safety certificates, and reactive repairs. Contact us to discuss a package tailored to your portfolio.',
    },
    {
      q: 'How quickly can you respond to a plumbing issue?',
      a: 'For non-emergency call-outs we aim to attend within 24–48 hours. For emergencies such as burst pipes or no heating in winter, we prioritise attendance as quickly as possible.',
    },
  ],
};

export default function MaintenancePlumbingPage() {
  return <ServicePageLayout data={data} />;
}
