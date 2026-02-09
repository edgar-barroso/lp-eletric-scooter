// Constantes do projeto
export const APP_CONFIG = {
  name: "LP Electric Scooter",
  version: "1.0.0",
  description: "Landing page moderna para scooters elétricos",
  author: "Your Name",
  year: new Date().getFullYear(),
} as const;

export const ROUTES = {
  home: "/",
  products: "/products",
  gallery: "/gallery",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.5,
  slow: 1,
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export const SCOOTER_SPECS = {
  maxSpeed: "65 km/h",
  range: "150 km",
  chargingTime: "4 horas",
  weight: "98 kg",
  power: "4000W",
  battery: "72V 40Ah",
} as const;

export const FEATURES = [
  {
    title: "Alta Velocidade",
    description: "Atinge até 65 km/h com total segurança",
    icon: "⚡",
  },
  {
    title: "Grande Autonomia",
    description: "Percorra até 150 km com uma única carga",
    icon: "🔋",
  },
  {
    title: "Design Moderno",
    description: "Visual futurista e elegante",
    icon: "✨",
  },
  {
    title: "Eco-Friendly",
    description: "100% elétrico, zero emissões",
    icon: "🌱",
  },
] as const;

export const NAV_ITEMS = [
  { label: "HOME", href: ROUTES.home },
  { label: "PRODUCTS", href: ROUTES.products },
  { label: "GALERY", href: ROUTES.gallery },
  { label: "CONTACT", href: ROUTES.contact },
] as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_PATTERN = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
