import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout';

const data: ServicePageData = {
  title: 'Painting & Decorating',
  subtitle: 'Flawless Finishes, Inside & Out',
  description:
    'Premium interior and exterior painting and decorating by skilled tradespeople who care about the detail. Al-Banaa Construction uses the finest paints and the most meticulous preparation techniques to deliver finishes that look outstanding and last for years — across London, Essex, and Hertfordshire.',
  bannerImage: '/Al-Banna_Painting_Walls copy.png',
  keywords: ['Interior Painting', 'Exterior Painting', 'Wallpapering', 'Coving & Cornicing'],
  sections: [
    {
      heading: 'Interior Painting',
      body: "Exceptional interior painting begins with exceptional preparation. Our decorators fill and sand every surface, apply appropriate primers on new plaster, and use only premium trade paints — Farrow & Ball, Little Greene, Dulux Trade, and Johnstone's — for a finish that holds its colour and resists marks. From freshening up a single room to decorating an entire house after a renovation, we work cleanly, efficiently, and to the highest standard. We protect all carpets, furniture, and fittings as a matter of course.",
      image: '/Al-Banna_Painting_Walls copy.png',
    },
    {
      heading: 'Exterior Painting & Rendering',
      body: "Your property's exterior is the first thing people see. Our exterior decorating team prepares all surfaces correctly — removing flaking paint, treating bare timber, applying flexible masonry primer — before applying weather-resistant topcoats that protect your home for 5-10 years. We paint masonry, render, timber windows and doors, and metal railings, working safely from ladders, towers, and MEWP platforms as required. Exterior work is carried out in appropriate weather conditions to guarantee adhesion and longevity.",
    },
    {
      heading: 'Wallpapering',
      body: 'Wallpaper transforms a room in a way paint simply cannot. Our wallpapering specialists are experienced with all paper types — paste-the-wall, paste-the-paper, fabric-backed vinyls, delicate hand-printed designs, and feature murals. We prepare surfaces to a perfect level, match patterns precisely, and hang without bubbles, seam visibility, or border misalignment. A beautifully papered room is a sign of true craftsmanship, and that is exactly what we deliver.',
      image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    },
    {
      heading: 'Coving, Cornicing & Decorative Plasterwork',
      body: 'Period properties across London and Essex deserve period-appropriate detailing. We install and restore traditional plaster coving, deep cornicing, ceiling roses, dado rails, and picture rails — using both heritage moulded plaster and modern GRP profiles that replicate the original aesthetic. New coving and cornicing elevate the quality of any decorating scheme and add an authentic period character that buyers and occupiers consistently value.',
    },
  ],
  whyUs: [
    'Meticulous preparation before any paint is applied',
    'Premium trade paints including Farrow & Ball and Little Greene',
    'Experienced with period properties and heritage work',
    'Full property protection — floors, furniture, and fittings',
    'Interior and exterior work all year round',
    'Colour consultation available on request',
    'Covering London, Essex & Hertfordshire',
  ],
  faqs: [
    {
      q: 'What paints do you use?',
      a: "We use premium trade paints including Farrow & Ball, Little Greene, Dulux Trade, and Johnstone's. We advise on the most suitable product for each surface and finish — matt, eggshell, satinwood, or gloss.",
    },
    {
      q: 'How long does it take to paint a house interior?',
      a: 'A typical 3-bedroom house interior takes 5-8 working days depending on the condition of the surfaces and the number of coats required. We provide a detailed programme at quotation stage.',
    },
    {
      q: 'Do you move furniture before painting?',
      a: 'Yes. We move and protect furniture, cover floors, and mask all fittings before commencing work. We leave your home as clean and tidy as we found it.',
    },
    {
      q: 'Can you colour-match existing paint?',
      a: "Yes. We can colour-match to virtually any existing shade using our trade suppliers' tinting systems, enabling seamless touch-ups and feature wall additions without visible differences.",
    },
  ],
};

export default function PaintingDecoratingPage() {
  return <ServicePageLayout data={data} />;
}
