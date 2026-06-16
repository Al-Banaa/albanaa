import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout';

const data: ServicePageData = {
  title: 'Loft Conversions',
  subtitle: 'Unlock Your Home\'s Hidden Space',
  description:
    'Transform your unused loft into a stunning bedroom, home office, en-suite, or playroom. Al-Banaa Construction delivers fully certified loft conversions across London and Essex — handling planning, structural work, and interior fit-out under one roof.',
  bannerImage: 'https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  keywords: ['Dormer Loft', 'Velux Loft', 'Hip-to-Gable', 'Mansard Loft'],
  sections: [
    {
      heading: 'Dormer Loft Conversions',
      body: 'A dormer is the most popular loft conversion type in London and Essex. By extending vertically through the existing roof slope, we create a box-shaped structure that adds significant headroom and floor area. Dormers can accommodate en-suite bathrooms, walk-in wardrobes, and full double bedrooms. Most rear dormers are Permitted Development and do not require planning permission. We handle all structural calculations, building regulations approval, and Party Wall matters as standard.',
      image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    },
    {
      heading: 'Velux Loft Conversions',
      body: 'A Velux conversion — sometimes called a rooflight conversion — is the simplest and most cost-effective way to convert a loft. The roof structure remains intact; we insert high-quality Velux skylights into the existing slope to bring in natural light and ventilation. With insulation, boarding, a new staircase, and full internal fit-out, a Velux conversion delivers a comfortable, usable room at the lowest price point. Ideal for houses where the loft height already meets requirements.',
      image: '/layton-diament-EAwV4grbzSc-unsplash.jpg',
    },
    {
      heading: 'Hip-to-Gable Loft Conversions',
      body: 'Semi-detached and detached homes with a hipped roof often lack sufficient headroom for a standard conversion. A hip-to-gable conversion replaces the sloping hip with a new vertical gable wall, dramatically increasing the internal volume of the loft. Combined with a rear dormer, this creates an exceptionally spacious master suite. Most hip-to-gable projects require planning permission, which our team manages end to end.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    },
    {
      heading: 'Mansard Loft Conversions',
      body: 'A Mansard conversion is the largest and most comprehensive loft conversion type, converting the entire roof into near-vertical walls with a flat, slightly pitched top. Common on London terraces and semi-detached Victorian properties, a Mansard delivers maximum space — often adding two bedrooms and a bathroom. They require planning permission and are a significant structural project, but offer the highest increase in property value of any conversion type.',
    },
  ],
  whyUs: [
    'Specialist loft conversion team with 15+ years experience',
    'Full building regulations and Party Wall compliance',
    'In-house structural engineers and architects',
    'Staircase design and installation included',
    'All electrical, plumbing, and finishing in-house',
    'Clean, boarded access maintained throughout',
    'Covering London, Essex & Hertfordshire',
  ],
  faqs: [
    {
      q: 'Do I need planning permission for a loft conversion?',
      a: 'Many loft conversions — including most rear dormers and Velux conversions — are Permitted Development. Hip-to-gable and Mansard conversions typically require planning permission. We advise you on this at your free consultation.',
    },
    {
      q: 'How much does a loft conversion cost?',
      a: 'A Velux conversion typically starts from £25,000–£35,000. A dormer conversion ranges from £40,000–£60,000, and a Mansard from £60,000–£90,000 depending on size and specification. We provide a full itemised quote after visiting your property.',
    },
    {
      q: 'How long does a loft conversion take?',
      a: 'Most loft conversions take 8–12 weeks from start to completion. We keep disruption to a minimum by weatherproofing the roof quickly and working systematically from top to bottom.',
    },
    {
      q: 'Will I need to vacate the property during the build?',
      a: 'In almost all cases, no. We manage the build carefully so that you can continue to live in your home throughout the project. We board over access points and keep communal areas clean and clear.',
    },
  ],
};

export default function LoftConversionsPage() {
  return <ServicePageLayout data={data} />;
}
