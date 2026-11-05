import type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  Testimonial,
  Certificate,
  StatItem,
} from "@/types";

export const SKILLS: SkillCategory[] = [
  {
    category: "CMS Platforms",
    skills: [
      { name: "WordPress", level: 95, years: "4y" },
      { name: "Shopify", level: 92, years: "4y" },
      { name: "Squarespace", level: 88, years: "3y" },
      { name: "Wix", level: 85, years: "3y" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", level: 95, years: "4y" },
      { name: "CSS3", level: 92, years: "4y" },
      { name: "JavaScript", level: 85, years: "3y" },
      { name: "HTML to Shopify", level: 90, years: "3y" },
    ],
  },
  {
    category: "Marketing",
    skills: [{ name: "SEO", level: 85, years: "3y" }],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "apple-ecommerce",
    title: "Apple eCommerce Website",
    description:
      "A modern Apple-inspired eCommerce website built with React and Redux Toolkit — featuring secure Firebase authentication, product browsing, a persistent shopping cart, and a smooth, responsive user experience.",
    category: "Full Stack",
    status: "Live",
    tech: ["React.js", "Redux Toolkit", "React Router", "Firebase", "Tailwind CSS"],
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img1.png",
    demo: "https://apple-e-commerce-website-f9s3.vercel.app/",
  },
  {
    id: "diet-soda",
    title: "Diet Soda",
    description:
      "A striking product landing page for Diet Soda, built with Next.js and shadcn/ui — anchored by a fully interactive 3D hero section that lets visitors spin and explore the product up close, paired with crisp, minimal design throughout.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    features: ["Interactive 3D Hero", "Product Showcase", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img8.png",
    demo: "https://diet-soda-landing-page.vercel.app/index.html",
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce",
    description:
      "A polished, modern eCommerce storefront built with Next.js and React 19 — featuring a custom shadcn/ui component system, dark mode, smooth carousels, and form-driven checkout flows validated with React Hook Form and Zod.",
    category: "Frontend",
    status: "Live",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod"],
    features: ["Custom UI Components", "Dark Mode", "Form Validation", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img3.png",
    demo: "https://boty-ecommerce-template-eta-three.vercel.app/",
  },
  {
    id: "nova-commerce",
    title: "Nova Commerce",
    description:
      "A full-featured eCommerce platform built with TanStack Start and Supabase — featuring a custom shadcn/ui component system, Zustand state management, and smooth Framer Motion animations throughout the shopping experience.",
    category: "Full Stack",
    status: "Live",
    tech: [
      "TanStack Start",
      "React",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    features: ["Supabase Backend", "Product Catalog", "State Management", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img4.png",
    demo: "https://nova-commerce-platform.vercel.app/",
  },
  {
    id: "momo-x",
    title: "Momo X",
    description:
      "An award-worthy marketing landing page built with Next.js and Framer Motion — featuring a striking scroll-driven hero section, a custom shadcn/ui component system, and buttery-smooth animations tuned for top-tier performance.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    features: ["Scroll Animations", "Custom Hero Section", "SEO Optimized", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img5.png",
    demo: "https://apple-style-scroll-animation-3-pi.vercel.app/",
  },
  {
    id: "crystal-horizon",
    title: "Crystal Horizon",
    description:
      "A visually striking 3D landing page built with Next.js and React Three Fiber — featuring an immersive white-crystal hero scene, smooth camera-driven interactions, and a polished shadcn/ui component system.",
    category: "Landing",
    status: "Live",
    tech: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS", "shadcn/ui"],
    features: ["3D Hero Scene", "Interactive Camera", "SEO Optimized", "Responsive Design"],
    thumbnail: "/project-thumbnail/project-img6.png",
    demo: "https://agentic-build-orchestrate-a-mu-two.vercel.app/",
  },
  {
    id: "sky-high-dreams",
    title: "Sky High Dreams",
    description:
      "An elegant aviation-themed landing page built with TanStack Start and Framer Motion — featuring smooth scroll-triggered animations, a custom shadcn/ui component system, and a polished, cinematic feel throughout.",
    category: "Landing",
    status: "Live",
    tech: ["TanStack Start", "React", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    features: ["Scroll Animations", "Custom Hero Section", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img7.png",
    demo: "https://sky-high-dreams.vercel.app/",
  },
  {
    id: "wild-haven",
    title: "Wild Haven",
    description:
      "A beautifully designed camping and outdoor retreat website built with Next.js and shadcn/ui — featuring a seamless booking and reservation system, immersive visuals, and a clean, nature-inspired design throughout.",
    category: "Frontend",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    features: ["Booking System", "Photo Gallery", "Responsive Design", "SEO Optimized"],
    thumbnail: "/project-thumbnail/project-img9.png",
    demo: "https://remix-of-wild-haven.vercel.app/",
  },
];

export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Landing"];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Olive Digital Pvt Ltd",
    role: "CMS Developer",
    duration: "Feb 2025 — Present",
    location: "Karachi, Pakistan",
    points: [
      "Build and maintain dynamic, responsive websites on WordPress, Shopify, Squarespace, and Wix.",
      "Customize themes and layouts to match client designs and brand requirements.",
      "Apply on-page SEO best practices to improve site visibility.",
    ],
    achievements: [],
  },
  {
    company: "Metalink Systems",
    role: "CMS Developer",
    duration: "Aug 2023 — Mar 2025",
    location: "Karachi, Sindh, Pakistan",
    points: [
      "Developed and customized client websites across multiple CMS platforms.",
      "Converted HTML designs into working Shopify stores and themes.",
      "Added interactive features with JavaScript and improved page performance.",
    ],
    achievements: [],
  },
  {
    company: "Ossols Private Limited",
    role: "WordPress / Shopify Developer",
    duration: "Feb 2022 — Aug 2023",
    location: "Karachi, Sindh, Pakistan",
    points: [
      "Built and customized WordPress and Shopify websites for clients.",
      "Set up themes, plugins, and store configuration based on project requirements.",
      "Fixed layout and functionality issues to keep sites running smoothly.",
    ],
    achievements: [],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institute: "Iqra University",
    degree: "Bachelor of Science (BS)",
    duration: "2023 — 2027",
    description: "Currently pursuing a Bachelor of Science degree while working as a CMS developer.",
  },
  {
    institute: "Government Degree Boys College",
    degree: "Intermediate (Pre-Engineering)",
    duration: "2021 — 2022",
    description: "Completed Intermediate in Pre-Engineering.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "WordPress Development",
    description: "Custom, fast, and easy-to-manage WordPress websites built around your brand.",
    icon: "Layout",
  },
  {
    title: "Shopify Store Development",
    description: "Complete Shopify stores — setup, theme customization, and product configuration.",
    icon: "Layers",
  },
  {
    title: "Squarespace Websites",
    description: "Clean, stylish Squarespace sites designed to look great on every device.",
    icon: "Sparkles",
  },
  {
    title: "Wix Websites",
    description: "Professional Wix websites that are quick to launch and simple to update.",
    icon: "Rocket",
  },
  {
    title: "HTML to Shopify Conversion",
    description: "Turn your existing HTML designs into fully working Shopify themes.",
    icon: "Plug",
  },
  {
    title: "SEO Optimization",
    description: "On-page SEO and site improvements to help your website get found.",
    icon: "Gauge",
  },
  {
    title: "Responsive Web Design",
    description: "Layouts that look and work properly on phones, tablets, and desktops.",
    icon: "Smartphone",
  },
  {
    title: "Bug Fixing & Maintenance",
    description: "Quick fixes and regular upkeep for layout, plugin, and theme issues.",
    icon: "Bug",
  },
  {
    title: "Custom JavaScript Features",
    description: "Interactive features and small custom functionality added with JavaScript.",
    icon: "Flame",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Product Director",
    company: "Olive Digital ",
    rating: 5,
    feedback:
      "Talha delivered beyond expectations. The attention to detail and performance obsession is world-class — our conversion jumped 32% after launch.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "Nimbus Studio",
    rating: 5,
    feedback:
      "One of the most reliable engineers I've worked with. Clean architecture, great communication, and always ships on time.",
    initials: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Aura Commerce",
    rating: 5,
    feedback:
      "Our storefront finally feels premium. Alex turned a rough idea into a polished, blazing-fast product our customers love.",
    initials: "ER",
  },
  {
    name: "James Okoro",
    role: "Engineering Manager",
    company: "Bright Pixel",
    rating: 5,
    feedback:
      "A true craftsman. The design system Alex built became the foundation for everything we ship today.",
    initials: "JO",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Web and Mobile App Development",
    org: "Saylani Mass IT Training Program",
    year: "2024",
    url: "https://example.com",
    achievement: "/certificates/web_app_development.png",
  },
  {
    name: "WordPress Development",
    org: "DigiSkills",
    year: "2022",
    url: "https://example.com",
    achievement: "/certificates/wordpress_digi_skills.png",
  },
  {
    name: "Freelancing Essentials",
    org: "DigiSkills",
    year: "2022",
    url: "https://example.com",
    achievement: "/certificates/freelancing_digi_skills.png",
  },
  {
    name: "Front End Web Development",
    org: "Aptech Computer Education",
    year: "2019",
    url: "https://example.com",
    achievement: "/certificates/frontend_web_development.png",
  },
  {
    name: "Office Automation",
    org: "Aptech Computer Education",
    year: "2019",
    url: "https://example.com",
    achievement: "/certificates/office_automation.png",
  },
];

export const STATS: StatItem[] = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "CMS Platforms", value: 4, suffix: "" },
  { label: "Companies Worked With", value: 3, suffix: "" },
  { label: "Services Offered", value: 9, suffix: "" },
];
