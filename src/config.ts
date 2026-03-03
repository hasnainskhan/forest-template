// ============================================================================
// Configuration File for Forest Blog Website
// ============================================================================
// Edit this file to customize all content on your site.
// Do NOT modify component files - they read from this config.

// Navigation Configuration
export interface NavLinkConfig {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavLinkConfig[];
}

export const navConfig: NavConfig = {
  links: [
    { label: 'Nature', href: '#nature' },
    { label: 'Wildlife', href: '#wildlife' },
    { label: 'Conservation', href: '#conservation' },
    { label: 'Adventure', href: '#adventure' },
  ],
};

// Hero Section Configuration
export interface HeroConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  chocolateText: string;
  ctaText: string;
  heroImage: string;
  leafImages: [string, string];
}

export const heroConfig: HeroConfig = {
  subtitle: "Welcome to the Wild",
  titleLine1: "FOREST",
  titleLine2: "CHRONICLES",
  tagline: "Explore Nature · Discover Wildlife · Protect Our Planet",
  chocolateText: "Nature's Untold Stories",
  ctaText: "Start Exploring",
  heroImage: "images/hero_forest.jpg",
  leafImages: ["images/leaf_1.png", "images/leaf_2.png"],
};

// Story Section Configuration
export interface StoryStatConfig {
  value: string;
  label: string;
}

export interface StoryConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  paragraphs: string[];
  stats: StoryStatConfig[];
  storyImage: string;
}

export const storyConfig: StoryConfig = {
  label: "Our Story",
  heading: ["Journey Into the", "Heart of Nature"],
  headingAccent: "Wilderness",
  paragraphs: [
    "Forest Chronicles began with a simple belief: that the natural world holds infinite wisdom and beauty waiting to be discovered. Our team of passionate naturalists, photographers, and conservationists venture deep into the world's most pristine ecosystems.",
    "From the misty canopies of ancient rainforests to the silent depths of boreal woodlands, we document the intricate relationships between flora and fauna, capturing moments that reveal the delicate balance of life on Earth.",
    "Every story we share is a testament to the resilience and wonder of nature. We invite you to join us on this journey of discovery, to see the world through new eyes, and to become a guardian of the wild places that still remain."
  ],
  stats: [
    { value: "50+", label: "Ecosystems Explored" },
    { value: "1,200+", label: "Species Documented" },
    { value: "10M+", label: "Readers Inspired" },
    { value: "25", label: "Conservation Projects" }
  ],
  storyImage: "images/story_jungle.jpg",
};

// Product Section Configuration (Featured Article)
export interface ProductConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  productTitle: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  specs: string;
  specsLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
  productImage: string;
}

export const productConfig: ProductConfig = {
  label: "Featured Story",
  heading: ["Deep in the", "Amazon"],
  headingAccent: "Rainforest",
  productTitle: "The Hidden World of Canopy Life",
  description: "Journey 150 feet above the forest floor into a realm where 70% of rainforest life exists. Discover the extraordinary creatures that never touch the ground and the complex ecosystems thriving in the treetops.",
  features: [
    "Harpy Eagles: Masters of the Canopy",
    "Orchid Gardens in the Sky",
    "Sloths: Slow Life at the Top",
    "Poison Dart Frogs: Tiny but Deadly",
    "Bromeliads: Natural Water Towers",
    "Howler Monkeys: Voices of the Jungle"
  ],
  price: "15 min",
  priceLabel: "Read Time",
  specs: "Deep Dive Series",
  specsLabel: "Category",
  ctaPrimary: "Read Full Story",
  ctaSecondary: "Save for Later",
  productImage: "images/featured_canopy.jpg",
};

// Explore Section Configuration (Interactive Wildlife Map)
export interface HotspotConfig {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  iconType: "bird" | "pawprint" | "treepine" | "flower";
  image: string;
}

export interface ExploreConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  hint: string;
  exploreImage: string;
  hotspots: HotspotConfig[];
}

export const exploreConfig: ExploreConfig = {
  label: "Interactive Explorer",
  heading: ["Discover", "Wildlife"],
  headingAccent: "Hotspots",
  description: "Click on the interactive markers to learn about the incredible creatures that call these forests home. Each hotspot reveals a unique story from the wild.",
  hint: "Click the spots to explore more",
  exploreImage: "images/explore_jungle.jpg",
  hotspots: [
    {
      id: "toucan",
      x: 25,
      y: 30,
      title: "Toco Toucan",
      description: "With its massive orange bill accounting for one-third of its body length, the Toco Toucan is nature's most colorful fruit eater. Their bills help regulate body temperature in the tropical heat.",
      iconType: "bird",
      image: "images/toucan.png"
    },
    {
      id: "jaguar",
      x: 65,
      y: 55,
      title: "Jaguar",
      description: "The largest cat in the Americas, jaguars are apex predators with the strongest bite of any big cat. They can crack turtle shells and are excellent swimmers, often hunting in water.",
      iconType: "pawprint",
      image: "images/jaguar.png"
    },
    {
      id: "cacao",
      x: 45,
      y: 75,
      title: "Cacao Tree",
      description: "The source of chocolate, cacao trees grow in the shade of larger forest trees. Their colorful pods contain beans that have been cultivated for over 3,000 years by indigenous peoples.",
      iconType: "treepine",
      image: "images/cacao.png"
    },
    {
      id: "orchid",
      x: 80,
      y: 25,
      title: "Ghost Orchid",
      description: "One of the rarest and most beautiful orchids, the Ghost Orchid has no leaves and appears to float in mid-air. It blooms only briefly and is pollinated by giant sphinx moths.",
      iconType: "flower",
      image: "images/orchid.png"
    }
  ],
};

// Tasting Section Configuration (Nature Experience Guide)
export interface TastingCardConfig {
  iconType: "eye" | "wind" | "sparkles";
  title: string;
  description: string;
  notes: string[];
}

export interface FlavorBarConfig {
  label: string;
  value: number;
  color: string;
}

export interface TastingConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  tastingCards: TastingCardConfig[];
  flavorWheel: {
    title: string;
    description: string;
    tags: string[];
    bars: FlavorBarConfig[];
  };
}

export const tastingConfig: TastingConfig = {
  label: "Forest Experience",
  heading: ["Senses of the", "Wilderness"],
  headingAccent: "Journey",
  description: "Immerse yourself in nature through all your senses. The forest offers a symphony of experiences that awaken our primal connection to the natural world.",
  tastingCards: [
    {
      iconType: "eye",
      title: "Visual Wonders",
      description: "From the dappled sunlight filtering through leaves to the vibrant colors of tropical birds, the forest is a visual feast.",
      notes: ["Emerald Canopies", "Golden Sunbeams", "Crimson Macaws", "Misty Mornings"]
    },
    {
      iconType: "wind",
      title: "Sounds of Nature",
      description: "The forest orchestra plays continuously - from the whisper of wind through leaves to the chorus of frogs at dusk.",
      notes: ["Birdsong Symphony", "Rustling Leaves", "Flowing Streams", "Night Insects"]
    },
    {
      iconType: "sparkles",
      title: "Aromas & Scents",
      description: "The forest air carries a complex bouquet of earthy, sweet, and fresh scents that change with the seasons.",
      notes: ["Rich Earth", "Pine Resin", "Wildflowers", "Decay & Renewal"]
    }
  ],
  flavorWheel: {
    title: "Biodiversity Index",
    description: "Rainforest ecosystems contain the highest biodiversity on Earth. Here's how different forest types compare:",
    tags: ["Mammals", "Birds", "Reptiles", "Amphibians", "Insects", "Plants", "Fungi", "Microbes"],
    bars: [
      { label: "Tropical Rainforest", value: 95, color: "#2D6A4F" },
      { label: "Temperate Forest", value: 70, color: "#40916C" },
      { label: "Boreal Forest", value: 45, color: "#52B788" },
      { label: "Mangrove Forest", value: 60, color: "#74C69D" }
    ]
  },
};

// Footer Section Configuration
export interface SocialLinkConfig {
  platform: "instagram" | "facebook" | "twitter";
  href: string;
}

export interface NavLinkConfig {
  label: string;
  href: string;
}

export interface PolicyLinkConfig {
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandTagline: string;
  brandDescription: string;
  socialLinks: SocialLinkConfig[];
  navSectionTitle: string;
  navLinks: NavLinkConfig[];
  contactSectionTitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  copyright: string;
  policyLinks: PolicyLinkConfig[];
}

export const footerConfig: FooterConfig = {
  brandName: "FOREST CHRONICLES",
  brandTagline: "Stories from the Wild",
  brandDescription: "We are dedicated to sharing the beauty and importance of our planet's forests. Through storytelling, photography, and education, we inspire people to protect the natural world.",
  socialLinks: [
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "twitter", href: "https://twitter.com" }
  ],
  navSectionTitle: "Categories",
  navLinks: [
    { label: "Nature", href: "#nature" },
    { label: "Wildlife", href: "#wildlife" },
    { label: "Conservation", href: "#conservation" },
    { label: "Adventure", href: "#adventure" }
  ],
  contactSectionTitle: "Contact Us",
  contactAddress: "123 Forest Avenue\nPortland, OR 97201",
  contactPhone: "+1 (555) 123-4567",
  contactEmail: "hello@forestchronicles.com",
  newsletterTitle: "Subscribe to Our Newsletter",
  newsletterDescription: "Get weekly stories, photography, and conservation updates delivered to your inbox.",
  newsletterPlaceholder: "Enter your email",
  newsletterButton: "Subscribe",
  copyright: "© 2026 Forest Chronicles. All rights reserved.",
  policyLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" }
  ],
};

// Site Metadata
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Forest Chronicles",
  description: "Explore nature, discover wildlife, and join the movement to protect our planet's precious forests.",
  language: "en",
};
