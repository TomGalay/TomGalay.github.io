const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const PROFILE = {
  name: "Isaiah Galay",
  fullName: "Isaiah Thomas Galay",
  firstName: "Isaiah",
  lastName: "Galay",
  role: ["Web & mobile", "developer."],
  location: "Based in the Philippines",
  email: "tomgalay@gmail.com",
  github: "https://github.com/TomGalay",
  linkedin: "https://www.linkedin.com/in/isaiah-thomas-galay-376990175/",
  archive: "https://tomgalay.github.io/TomGalay.github.io.3.0/",
  about: "I’m a developer with a creative eye. I build websites, mobile apps, and the systems that keep them running—from an idea on a screen to something people can actually use.",
  statement: ["A developer.", "A creative.", "A bit of both."],
};

export const NAVIGATION = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const UI = {
  skip: "Skip to content",
  navigation: "Main navigation",
  home: "Isaiah Galay — back to top",
  explore: "Explore my work",
  heroMobile: "Explore New Life Sta Rosa, a mobile app project",
  heroWeb: "Explore WinLi Home, a web project",
  work: "Work",
  about: "About",
  contribution: "My contribution",
  background: "Education & credentials",
  experience: "Experience",
  selectedScreen: (active, total) => `Screen ${active} of ${total}`,
  viewScreen: (name, active) => `View ${name} screenshot ${active}`,
  gallery: (name) => `${name} screenshots`,
  contact: ["Let’s build", "something good."],
  copy: "Copy email address",
  copied: "Email copied",
  copyFailed: "Select the email address to copy it.",
  github: "GitHub",
  linkedin: "LinkedIn",
  archive: "Previous portfolio",
  backTop: "Back to top",
  copyright: (year) => `© ${year} ${PROFILE.fullName}`,
};

export const PROJECTS = [
  {
    id: "new-life",
    name: "New Life Sta Rosa",
    year: "2026",
    platform: "Mobile app",
    kind: "mobile",
    summary: "A place for a church community to stay connected through announcements, events, videos, and livestreams.",
    role: "Team project · App & CMS development",
    technologies: "iOS · Android · Web CMS",
    initialImage: 1,
    media: Array.from({ length: 6 }, (_, i) => ({
      src: asset(`projects/new-life-sta-rosa/newlife-${i + 1}.webp`),
      alt: `New Life Sta Rosa app — ${["splash", "home feed", "connect", "events", "media", "profile"][i]} screen`,
      width: 560,
      height: 1217,
    })),
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/ph/app/new-life-sta-rosa/id6787141995" }],
    detail: [
      "Worked in a team on the mobile application and supporting web CMS.",
      "The app brings announcements, events, video, and livestreams together for members and guests.",
      "The project includes Firebase login, reminders, and push notifications.",
    ],
  },
  {
    id: "winli",
    name: "WinLi Home",
    year: "2024",
    platform: "Website & identity",
    kind: "web",
    summary: "Branding and a website for a structural engineering company in Alhambra, California. A home for the spaces they help create.",
    role: "Design · Development · Branding",
    technologies: "Responsive web · Visual identity",
    initialImage: 0,
    media: Array.from({ length: 3 }, (_, i) => ({
      src: asset(`projects/winli/winlihome-${i + 1}.webp`),
      alt: `WinLi Home website — ${["project gallery", "services", "contact"][i]} page`,
      width: 1280,
      height: 633,
    })),
    links: [{ label: "Visit the website", href: "https://winlihome.com/" }],
    detail: [
      "Designed and developed the company’s website.",
      "Worked on branding and the visual identity alongside the web design.",
      "Presented the company’s engineering services and project imagery in a responsive layout.",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Mycarehub",
    roles: [
      { title: "Mobile Developer", period: "2025 — present", summary: "A multiplatform app for bookings, schedules, shift reports, and on-shift GPS tracking." },
      { title: "WordPress Developer", period: "2023 — present", summary: "Intake, scheduling, reporting, business operations, and AWS infrastructure." },
    ],
  },
  {
    company: "Freelance",
    roles: [{ title: "Web Developer", period: "2021 — 2023", summary: "Websites and custom systems, from e-commerce to an international symposium." }],
  },
];

export const SKILL_GROUPS = [
  { name: "Web", items: "JavaScript, PHP, WordPress, HTML & CSS" },
  { name: "Mobile", items: "Flutter, Dart, iOS & Android" },
  { name: "Systems", items: "AWS, Firebase, MySQL & REST APIs" },
];

export const EDUCATION = {
  institution: "FEU Alabang",
  degree: "BS Information Technology",
  specialization: "Web & Mobile Applications",
  honors: "Summa cum laude",
  period: "2018 — 2022",
};

export const CREDENTIALS = [
  { name: "Microsoft Azure Fundamentals", href: "https://www.credly.com/badges/f87d5260-f8a6-4cbb-accd-b3c475132585" },
  { name: "Cisco DevNet Associate", href: "https://www.credly.com/earner/earned/badge/5c988029-642f-4e08-a418-b988bcfa98ce" },
];
