export const SITE = {
  name: "Muhammad Haroon",
  firstName: "Muhammad",
  lastName: "Haroon",
  title: "CMS Developer",
  roles: [
    "CMS Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Squarespace & Wix Developer",
  ],
  tagline:
    "CMS web developer with 3+ years of experience creating dynamic websites on WordPress, Shopify, Squarespace, and Wix — passionate about delivering high-quality, innovative web solutions for every project.",
  email: "haroonrahimsher@gmail.com", // TODO: apni email likho,
  phone: "+92 317 2402969", // TODO: apna phone number likho,
  location: "Karachi, Pakistan",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/MuhammadHaroon21", // TODO: apna GitHub link,
    linkedin: "https://www.linkedin.com/in/muhammadharoonraheem",
    instagram: "https://www.instagram.com", // TODO: apna Instagram link,
    dribbble: "https://dribbble.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
