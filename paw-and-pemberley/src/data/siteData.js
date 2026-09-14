// Relative import: ek step bahar (src) jaakar assets folder me jana hai
import dog4 from '../assets/dog4.webp';
import dog5 from '../assets/dog5.webp';
import dog6 from '../assets/dog6.webp';
import dog7 from '../assets/dog7.webp';
import dog1 from '../assets/dog1.webp';
import dog2 from '../assets/dog2.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';

export const SERVICES = [
  {
    id: 'private-dog-walking',
    number: '01',
    title: 'Private Dog Walking',
    tagline: 'Solitary, enriched strolls across pristine parklands.',
    description: 'Bespoke walks designed exclusively around your companion’s natural cadence, joint health, and routine. Never grouped with unfamiliar companions.',
    price: 'From £55 / hour',
    image: dog4,
    features: [
      'Strict 1-to-1 dedicated attention',
      'Quiet, private GPS-logged routes',
      'Post-walk paw hydration & coat wipe-down',
      'Gentle sensory enrichment'
    ]
  },
  {
    id: 'home-pet-sitting',
    number: '02',
    title: 'Home Pet Sitting',
    tagline: 'Discreet, residential stewardship inside your private home.',
    description: 'Dedicated residential companionship within the security and familiar luxury of your own residence, preserving feeding and circadian rhythms without relocation stress.',
    price: 'From £165 / 24 hrs',
    image: dog5,
    features: [
      'Overnight residential carer presence',
      'Daily medication & customized dietary preparation',
      'Property discretion & quiet post collection',
      'Morning and evening photographic updates'
    ]
  },
  {
    id: 'luxury-boarding',
    number: '03',
    title: 'Luxury Countryside Boarding',
    tagline: 'A fireside countryside haven in the Surrey Hills.',
    description: 'A serene home-away-from-home limited strictly to two guest companions at any time. Features orthopaedic bedding, private enclosed gardens, and hearthside relaxation.',
    price: 'From £195 / night',
    image: dog6,
    features: [
      'Maximum 2 guest companions at once',
      'Private 2-acre fenced botanical gardens',
      'Chauffeured collection and return available',
      'Bespoke organic raw or cooked diets supported'
    ]
  },
  {
    id: 'grooming-wellness',
    number: '04',
    title: 'Atelier Grooming & Spa',
    tagline: 'Botanical, low-stress coat sculpting & skin therapies.',
    description: 'Unhurried grooming sessions utilizing natural British botanicals, hypoallergenic balms, and therapeutic warm water hydro-baths in a low-noise salon setting.',
    price: 'From £95 / session',
    image: dog7,
    features: [
      'Organic chamomile & oatmeal soak',
      'Hand scissor finishing tailored to breed lines',
      'Gentle ultrasonic dental cleaning',
      'Paw pad lavender balm massage'
    ]
  },
  {
    id: 'puppy-care',
    number: '05',
    title: 'Puppy Atelier & Foundations',
    tagline: 'Gentle developmental support for young companions.',
    description: 'Thoughtful early socialisation, calm desensitisation to household sounds, gentle garden leash pacing, and adherence to developmental training philosophies.',
    price: 'From £60 / visit',
    image: dog1,
    features: [
      'Micro-walks and bladder training continuity',
      'Separation calmness conditioning',
      'Enrichment puzzle and scent games',
      'Comprehensive developmental check-ins'
    ]
  },
  {
    id: 'bespoke-pet-concierge',
    number: '06',
    title: 'Bespoke Pet Concierge',
    tagline: 'Limitless stewardship for high-requirement patrons.',
    description: 'From VIP aviation chaperone services and discreet wedding ceremony companionship to specialist veterinary consultations across London.',
    price: 'Custom quotation',
    image: dog4,
    features: [
      'Dedicated personal pet lifestyle liaison',
      'Private vehicle transfer in climate-controlled cabins',
      'Equine & multi-companion household oversight',
      'Full discretion NDA protocols'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "From the initial consultation in our Belgravia townhouse, we realized Paw & Pemberley operates in an entirely different league. Winston was nurtured with immense dignity.",
    client: "Lady Camilla Kensington",
    location: "Kensington & Chelsea, London",
    pet: "Winston, Golden Retriever"
  },
  {
    quote: "Finding individuals whom you can trust implicitly with both your hounds and the keys to your country house is rare. Their discretion and warmth are incomparable.",
    client: "Sir Edward & Helena Vance",
    location: "Cobham, Surrey",
    pet: "Barnaby & Clementine, Hungarian Vizslas"
  },
  {
    quote: "The handwritten notes and calm photographic updates brought total peace of mind while we were overseas. Truly the Claridge’s of companion care.",
    client: "Julian Sterling-Ward",
    location: "Alderley Edge, Cheshire",
    pet: "Otis, Italian Greyhound"
  },
  {
    quote: "Our nervous rescue Whippet has never relaxed with anyone outside family until meeting Eleanor. Her understanding of canine body language is pure artistry.",
    client: "Dr. Marianne Davies",
    location: "Clifton, Bristol",
    pet: "Fleur, Whippet"
  }
];

export const JOURNAL_POSTS = [
  {
    slug: 'calm-canine-routines',
    title: 'The Architecture of a Calm Canine Routine',
    category: 'WELLBEING & CARE',
    readTime: '4 MIN READ',
    date: '18 AUG 2026',
    image: dog5,
    excerpt: 'How rhythmic consistency, olfactory stimulation, and reduced sensory friction nurture calm companions in modern cities.'
  },
  {
    slug: 'british-countryside-etiquette',
    title: 'A Discerning Guide to British Countryside Walks',
    category: 'LIFESTYLE & NATURE',
    readTime: '6 MIN READ',
    date: '04 JUL 2026',
    image: dog6,
    excerpt: 'Navigating bridleways, respecting livestock seasons, and our curated peaceful rambles across Oxfordshire and the Surrey Hills.'
  },
  {
    slug: 'botanical-grooming-elements',
    title: 'Botanical Ingredients in Fine Pet Grooming',
    category: 'GROOMING ATELIER',
    readTime: '5 MIN READ',
    date: '22 JUN 2026',
    image: dog7,
    excerpt: 'Why cold-pressed sweet almond oil, chamomile hydrosols, and colloidal oats restore the pet skin’s natural lipid mantle.'
  }
];

export const LOCATIONS = [
  { name: 'Mayfair, Kensington & Chelsea', region: 'Central London', desc: 'Townhouse residential sitting and Royal Park walks.' },
  { name: 'Cobham, Oxshott & Weybridge', region: 'The Surrey Hills', desc: 'Sprawling woodland paths & hearthside boarding.' },
  { name: 'Alderley Edge & Wilmslow', region: 'Cheshire', desc: 'Private estate visits and concierge assistance.' },
  { name: 'The Cotswolds & Chipping Norton', region: 'Oxfordshire', desc: 'Rural acreage management & weekend retreats.' },
  { name: 'New Town & Stockbridge', region: 'Edinburgh', desc: 'Highland trail rambles & bespoke travel sitting.' },
  { name: 'Clifton & Leigh Woods', region: 'Bristol', desc: 'Leisurely Downs promenades & boutique care.' }
];

export const TEAM_MEMBERS = [
  {
    name: 'Eleanor Pemberley-Cross',
    role: 'Founder & Head of Companion Care',
    bio: 'With a background in animal physiology and 14 years managing private rural estates, Eleanor established Paw & Pemberley to elevate companion care into an art form.',
    image: p1
  },
  {
    name: 'Dr. Alistair Finch, MRCVS',
    role: 'Veterinary Advisory Director',
    bio: 'Overseeing all clinical procedures, emergency protocols, and certified dietary balancing across every branch and carer in our network.',
    image: p2
  },
  {
    name: 'Margot Hetherington',
    role: 'Head of Canine Behaviour',
    bio: 'An accredited specialist in nervous, sighthound, and guardian breeds, Margot trains our stewards to understand micro-expressions and stress signals.',
    image: p3
  }
];