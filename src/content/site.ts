import heroChicagoLagos from '../assets/images/hero_chicago_lagos_1791870675310.jpg';
import brandMosunFoodsImg from '../assets/images/brand_mosun_foods_1791870676325.jpg';
import brandMosunDrinksImg from '../assets/images/brand_mosun_drinks_1791870676276.jpg';
import brandMosunPropertyImg from '../assets/images/brand_mosun_property_1791870677608.jpg';
import leaderAdebowaleImg from '../assets/images/leader_adebowale_portrait_1791870677669.jpg';
import { AUTO_CONFIG, autoEnv } from '../config/autoEnv';

export const siteImages = {
  heroChicagoLagos,
  brandMosunFoods: brandMosunFoodsImg,
  brandMosunDrinks: brandMosunDrinksImg,
  brandMosunProperty: brandMosunPropertyImg,
  leaderAdebowale: leaderAdebowaleImg,
  // MSD holding brand neutral visual
  brandMsd: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  leaderFoodsPlaceholder: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
};

export interface BrandInfo {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  accentColor: string;
  externalUrl?: string;
  description: string;
  fullOverview: string;
  keyProducts: string[];
  operationalHubs: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

export const BRANDS: BrandInfo[] = [
  {
    id: 'mosun-foods',
    name: 'Mosun Foods',
    slug: 'mosun-foods',
    tagline: 'Authentic Nigerian food staples, dried catfish, and pantry heritage.',
    accentColor: '#9A5B2D',
    externalUrl: 'https://mosunfoods.com',
    description: 'Specializing in premium dried catfish, traditional grains, authentic spices, and staple provisions bridging West African culinary roots with North American diaspora communities.',
    fullOverview: 'Mosun Foods is the cornerstone agricultural and international grocery subsidiary of Mosun Investments Limited. Anchored by direct farmer-to-market sourcing networks across Nigeria and temperature-controlled distribution in Chicago, Mosun Foods brings authentic, FDA-inspected dried catfish, artisanal flours, crayfish, peppers, and grains to dining tables across the Midwest and beyond.',
    keyProducts: [
      'Artisanal Hardwood-Smoked Catfish Fillets',
      'Direct-Source West African Red Palm Oils',
      'Whole Dried Spices, Crayfish & Chili Condiments',
      'Premium Cassava & Yam Flours (Garri, Ijebu, Elubo)'
    ],
    operationalHubs: ['Chicago, Illinois, USA', 'Lagos Island & Lekki, Nigeria'],
    metrics: [
      { label: 'Imported Batches Annually', value: '180+' },
      { label: 'Retail & Foodservice Outlets', value: '250+' },
      { label: 'Independent Smallholder Farms', value: '45+' }
    ],
    image: siteImages.brandMosunFoods,
  },
  {
    id: 'mosun-drinks',
    name: 'Mosun Drinks',
    slug: 'mosun-drinks',
    tagline: 'Artisanal tropical botanicals, zobo elixirs, and spiced refreshments.',
    accentColor: '#8C1D40',
    description: 'Bottling West African herbal traditions—from slow-steeped hibiscus sabdariffa (zobo) to cold-pressed ginger and citrus refreshments formulated for contemporary hospitality.',
    fullOverview: 'Mosun Drinks translates centuries of West African botanical beverage heritage into shelf-stable, refined liquid formulations. Using clean floral harvests, wild-crafted ginger roots, and zero artificial preservatives, Mosun Drinks serves discerning retail shelves, catering partners, and lifestyle venues seeking vibrant, antioxidant-rich flavor profiles.',
    keyProducts: [
      'Artisanal Hibiscus Zobo Nectar (Spiced Hibiscus & Clove)',
      'Cold-Pressed Spiced Ginger Citrus Elixir',
      'Tamarind & Tropical Botanical Tonics',
      'Ready-to-Pour Hospitality Kegs & Bottled Formats'
    ],
    operationalHubs: ['Chicago Bottling Facilities', 'Kano Hibiscus Sourcing, Nigeria'],
    metrics: [
      { label: 'Botanical Ingredients', value: '100% Natural' },
      { label: 'Production Run Capacity', value: '50k Bottles/Mo' },
      { label: 'Retail Shelf Placements', value: '85+ Stores' }
    ],
    image: siteImages.brandMosunDrinks,
  },
  {
    id: 'msd',
    name: 'MSD',
    slug: 'msd',
    tagline: 'Strategic ventures, commercial assets, and expansion vehicle.',
    accentColor: '#4A5568',
    description: 'The core holding vehicle managing cross-border commercial opportunities, logistics infrastructure, and new market development across the Atlantic corridor.',
    fullOverview: 'MSD functions as the nimble investment and capitalization vehicle within Mosun Investments Limited. It holds strategic equity, cross-border trade collateral, freight distribution rights, and incubation pipelines for upcoming commercial ventures expanding between North America and West Africa.',
    keyProducts: [
      'Cross-Border Asset & Inventory Financing',
      'Cold Chain Logistics Capacity Management',
      'Commercial Equity & Corporate Holding',
      'Market Entry Strategy for Bilateral Ventures'
    ],
    operationalHubs: ['Corporate Office: Chicago, IL', 'Registered Entity: Lagos, NG'],
    metrics: [
      { label: 'Asset Management Focus', value: 'Commercial HoldCo' },
      { label: 'Corridor Expansion Markets', value: 'USA • Nigeria' },
      { label: 'Portfolio Health', value: 'Self-Funded Growth' }
    ],
    image: siteImages.brandMsd,
  },
  {
    id: 'mosun-property',
    name: 'Mosun Property',
    slug: 'mosun-property',
    tagline: 'Commercial real estate, storage assets, and residential holdings.',
    accentColor: '#1E3A8A',
    description: 'Curating sustainable commercial warehouses, diaspora residential spaces, and mixed-use properties in prime corridors across Lagos and the greater Chicagoland area.',
    fullOverview: 'Mosun Property acquires, develops, and stewards tangible real estate assets that underpin both the parent company’s logistics operations and long-term capital preservation. From temperature-controlled warehousing hubs in Illinois to residential and commercial holdings in high-demand Lagos enclaves, our physical footprint delivers enduring foundational value.',
    keyProducts: [
      'Industrial Cold Storage & Dry Distribution Centers',
      'High-Yield Residential Developments in Lekki & Ikeja',
      'Commercial Retail Spaces for Grocery Distribution',
      'Long-Term Land Banking in Atlantic Trade Zones'
    ],
    operationalHubs: ['Cook County, Illinois', 'Lekki Phase 1 & Ikeja, Lagos'],
    metrics: [
      { label: 'Commercial Square Footage', value: '65,000+ sq ft' },
      { label: 'Developments Under Portfolio', value: '12 Sites' },
      { label: 'Occupancy Rate', value: '98%' }
    ],
    image: siteImages.brandMosunProperty,
  },
];

export interface LeadershipMember {
  name: string;
  title: string;
  credentials: string;
  division: string;
  bio: string;
  image: string;
}

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Adebowale Adetule',
    title: 'Head of SDG Advisory Division',
    credentials: 'MBA Marketing Management',
    division: 'SDG Advisory Division',
    bio: 'Adebowale Adetule leads the impact advisory arm of Mosun Investments Limited. Holding an MBA in Marketing Management, he unites institutional strategy with ground-level enterprise execution. His advisory mandate focuses on resilient health systems, structured youth employment pipelines, and local agro-processing industrialization across Nigeria and the wider African continent.',
    image: siteImages.leaderAdebowale,
  },
  {
    name: 'Chief Commercial Officer',
    title: 'Director of International Agricultural Trade',
    credentials: 'B.Sc. Supply Chain & Agribusiness',
    division: 'Mosun Foods & Agricultural Logistics',
    bio: 'Directing the cross-border supply chain bridging Nigerian agricultural producers with Midwest American food distributors. Oversees rigorous FDA import adherence, export cold chain logistics, and smallholder farming collectives to ensure unbroken community food access.',
    image: siteImages.leaderFoodsPlaceholder,
  },
];

export const SDG_GOALS = [
  {
    number: '02',
    name: 'Zero Hunger',
    badge: 'Grocery & Nutrition Corridor',
    tieIn: 'Commercial Grocery Anchor',
    angle: 'Direct agricultural market access and diaspora food security.',
    outcome: 'Eliminating food desert gaps by connecting rural Nigerian smallholders directly to structured transatlantic grocery distribution.',
  },
  {
    number: '03',
    name: 'Good Health & Well-being',
    badge: 'Core Advisory Pillar',
    tieIn: 'Health System Strengthening',
    angle: 'Strengthening primary clinic logistics, preventive nutrition, and cold chain medical distribution.',
    outcome: 'Advising public-private healthcare stakeholders on resilient medicine supply chains and preventive micronutrient fortification.',
  },
  {
    number: '04',
    name: 'Quality Education',
    badge: 'Core Advisory Pillar',
    tieIn: 'Vocational Human Capital',
    angle: 'Apprenticeships in modern food safety, logistics technology, and international trade compliance.',
    outcome: 'Equipping emerging West African operators with accredited certifications in post-harvest preservation and export standards.',
  },
  {
    number: '08',
    name: 'Decent Work & Economic Growth',
    badge: 'Core Advisory Pillar',
    tieIn: 'Youth Employment & Fair Trade',
    angle: 'Formalizing fair-wage employment across processing, packaging, and multimodal logistics.',
    outcome: 'Creating durable, living-wage job pipelines for young African professionals in high-value value-add processing instead of raw commodity export.',
  },
  {
    number: '09',
    name: 'Industry, Innovation & Infrastructure',
    badge: 'Core Advisory Pillar',
    tieIn: 'Local Industrialization',
    angle: 'Domestic agro-processing factories, solarized storage, and packaging modernization.',
    outcome: 'Transitioning raw agricultural harvest into standardized, shelf-stable consumer goods manufactured locally in Nigeria.',
  },
];

export const SDG_PARTNER_STATEMENT =
  'Mosun Investments Limited is a parent company operating international grocery trade between Chicago and Nigeria, providing community food access. Its SDG Advisory Division, led by Adebowale Adetule, MBA Marketing Management, advises on health system strengthening, youth employment, and local industrialization.';

// Dynamic auto-calculated metrics powered by AUTO_CONFIG
export const YEARS_IN_CORRIDOR = AUTO_CONFIG.corridorYears;

export const TRADE_CORRIDOR_STATS = [
  { value: '2', label: 'Global Headquarters', sub: 'Chicago, IL • Lagos, NG' },
  { value: `${AUTO_CONFIG.corridorYears}+`, label: 'Years in Corridor Trade', sub: `Cross-border logistics since ${AUTO_CONFIG.foundingYear}` },
  { value: '4', label: 'Commercial Divisions', sub: 'Food, Drinks, MSD, Property' },
  { value: '120k+', label: 'Diaspora & Local Reach', sub: 'Consumers served annually' },
];

export const getAutomaticSiteUrl = (): string => {
  return AUTO_CONFIG.appUrl;
};
