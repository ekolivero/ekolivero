// Site configuration - Edit these values to update across the site

export const siteConfig = {
  // Business Information
  business: {
    name: "Erik Olivero",
    owner: "Erik Olivero",
    piva: "IT12345678901", // Update with your real P.IVA
    location: "Remote, Italia",
    email: "info@ekolivero.com",
  },

  // Social Links
  socials: {
    linkedin: "https://linkedin.com/in/ekolivero",
    github: "https://github.com/ekolivero",
    twitter: "https://twitter.com/ekolivero",
    instagram: "", // Add if needed
    youtube: "https://youtube.com/@erikolivero", // Add if needed
  },

  // External Links
  links: {
    calcom: "https://app.cal.eu/ekolivero",
  },
} as const;

export type SiteConfig = typeof siteConfig;
