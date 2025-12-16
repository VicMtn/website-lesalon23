/**
 * Configuration du site - Le Salon 23
 */

export const siteConfig = {
  // === INFORMATIONS DU SALON ===
  name: "Le Salon 23",
  tagline: "L'art de la coiffure depuis 2015",
  description: "Salon de coiffure situé au cœur de la ville de Crissier. Découvrez nos prestations personnalisées pour femmes, hommes et enfants.",
  
  // === COORDONNÉES ===
  contact: {
    phone: "0764892332",
    email: "contact@lesalon23.ch",
    address: "Rue de Cossonay 3",
    city: "1023 Crissier",
    country: "Suisse",
  },
  
  // === HORAIRES D'OUVERTURE ===
  hours: {
    monday: "Fermé",
    tuesday: "9h00 - 19h00",
    wednesday: "9h00 - 19h00",
    thursday: "9h00 - 19h00",
    friday: "9h00 - 20h00",
    saturday: "9h00 - 17h00",
    sunday: "Fermé",
  },
  
  // === RÉSEAUX SOCIAUX ===
  social: {
    instagram: "https://www.instagram.com/le.salon23/",
    facebook: "https://www.facebook.com/p/Le-Salon-23-61555919410450/"
  },
  
  // === LIEN DE RÉSERVATION ===
  bookingUrl: "#contact",
  
  // === GOOGLE MAPS EMBED ===
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.709012293403!2d6.5730133766989205!3d46.55399186006963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31a921fa22c1%3A0x44da7044cf7133d7!2sLe%20Salon%2023!5e1!3m2!1sfr!2sch!4v1765881939195!5m2!1sfr!2sch",
} as const;


// === SERVICES DU SALON ===
export const servicesConfig = [
  {
    id: "coupe-femme",
    title: "Coupe Femme",
    description: "Coupe personnalisée selon la forme de votre visage et votre style de vie.",
    price: "À partir de 45CHF",
    icon: "scissors",
  },
  {
    id: "coupe-homme",
    title: "Coupe Homme",
    description: "Coupe tendance ou classique, avec finitions soignées.",
    price: "À partir de 25CHF",
    icon: "scissors",
  },
  {
    id: "coloration",
    title: "Coloration",
    description: "Couleur sur-mesure avec des produits professionnels respectueux du cheveu.",
    price: "À partir de 55CHF",
    icon: "palette",
  },
  {
    id: "balayage",
    title: "Balayage & Mèches",
    description: "Techniques de décoloration pour un effet naturel et lumineux.",
    price: "À partir de 75CHF",
    icon: "sun",
  },
  {
    id: "soin",
    title: "Soins Capillaires",
    description: "Traitements nourrissants et réparateurs pour sublimer vos cheveux.",
    price: "À partir de 30CHF",
    icon: "heart",
  },
  {
    id: "coiffure",
    title: "Coiffure Événement",
    description: "Chignon, brushing ou coiffure sur-mesure pour vos occasions spéciales.",
    price: "À partir de 60CHF",
    icon: "sparkles",
  },
] as const;

// === TÉMOIGNAGES ===
export const testimonialsConfig = [
  {
    id: 1,
    name: "Victoria Werlen",
    text: "Je fais toujours mon blond ici depuis 2ans. J’ai toujours été satisfaite, c’est toujours ce que je demande. La coiffeuse et adorable, très accueillante. Je n’ai jamais été déçue.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Blaser",
    text: "Le salon 23 est une superbe adresse que je recommande les yeux fermés. Anaïs est douce, professionnelle, à l’écoute et toujours de bon conseil. On se sent tout de suite en confiance, et le résultat est toujours parfait.",
    rating: 5,
  },
  {
    id: 3,
    name: "Komlan Hohoadji",
    text: "Superbe ce salon 23! Anaïs est à l'écoute des demandes et conseille les clients sur ce qui se fait actuellement sur le plan capillaire. Ell aiguille le choix des enfants et des parents et donne des astuces d'entretien des cheveux et de la barbe",
    rating: 5,
  },
] as const;

// === NAVIGATION ===
export const navigationConfig = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#work" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type SiteConfig = typeof siteConfig;
export type ServiceConfig = typeof servicesConfig[number];
export type TestimonialConfig = typeof testimonialsConfig[number];
export type NavigationConfig = typeof navigationConfig[number];

