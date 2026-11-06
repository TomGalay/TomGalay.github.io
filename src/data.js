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
  resume: asset("resume/Isaiah-Galay-Resume.pdf"),
  about: "I’m a developer with a creative eye. I build websites, mobile apps, and the systems that keep them running—from an idea on a screen to something people can actually use.",
  statement: ["A developer.", "A creative.", "A bit of both."],
};

export const NAVIGATION = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { href: PROFILE.resume, label: "Résumé" },
];

export const UI = {
  skip: "Skip to content",
  navigation: "Main navigation",
  home: "Isaiah Galay — back to top",
  explore: "Explore my work",
  heroMobile: "Explore the Mycarehub worker app",
  heroWeb: "Explore the Mycarehub public website",
  work: "Work",
  about: "About",
  contribution: "My contribution",
  background: "Education",
  certifications: "Certifications",
  resume: "View résumé",
  downloadResume: "Download PDF",
  resumeFilename: "Isaiah-Galay-Resume.pdf",
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
  { name: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco", issued: "Apr 2022", href: "https://www.credly.com/badges/346daed0-c0a0-467d-a068-2ef679bab10e?source=linked_in_profile" },
  { name: "IT Specialist: Java", issuer: "Certiport", issued: "Mar 2022", href: "https://www.credly.com/earner/earned/badge/fc06984a-d61a-4622-a4ff-66e8c3061ab5" },
  { name: "DevNet Associate", issuer: "Cisco", issued: "Aug 2021", href: "https://www.credly.com/earner/earned/badge/5c988029-642f-4e08-a418-b988bcfa98ce" },
  { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco", issued: "Jan 2022", href: "https://www.credly.com/earner/earned/badge/d2418596-c73e-423e-b738-decfe69f980b" },
  { name: "Azure Fundamentals", issuer: "Microsoft", issued: "May 2021", href: "https://www.credly.com/badges/f87d5260-f8a6-4cbb-accd-b3c475132585" },
  { name: "Microsoft 365 Fundamentals", issuer: "Microsoft", issued: "May 2021", href: "https://www.credly.com/badges/5c041b65-cad2-4071-abaf-92c64d764c4d" },
  { name: "Database Administration Fundamentals", issuer: "Microsoft", issued: "Nov 2019", href: "https://www.credly.com/badges/c6e5da4b-09a2-4147-ae5d-3e4eb5987bfa/linked_in_profile" },
];

export const FEATURED_PROJECT = {
  id: "mycarehub",
  name: "Mycarehub",
  year: "2023 — present",
  role: "Web & mobile development",
  summary: "A public website that connects people with support, and a Flutter worker app for schedules, shift reports, and the work that happens in between.",
  technologies: "WordPress · PHP · Flutter · Dart · AWS · Firebase",
  detail: [
    "Developed the website and supporting systems for intake, scheduling, reporting, and business operations.",
    "Built the multiplatform mobile app for bookings, schedules, shift reports, and on-shift GPS tracking.",
    "Maintain the AWS infrastructure behind the service.",
  ],
  links: [
    { label: "mycarehub.com.au", href: "https://mycarehub.com.au/" },
    { label: "iOS app", href: "https://apps.apple.com/au/app/mycarehub/id6450425879" },
    { label: "Android app", href: "https://play.google.com/store/apps/details?id=au.com.mycarehub" },
  ],
  web: {
    id: "mycarehub-web",
    name: "Mycarehub public website",
    label: "Public website",
    kind: "web",
    initialImage: 0,
    media: [
      ["home", "Home"], ["services", "Services"], ["about", "About"], ["how-we-work", "How we work"], ["contact", "Contact"],
    ].map(([file, label]) => ({src: asset(`projects/mycarehub/web/${file}.webp`), alt: `Mycarehub public website — ${label} page`, label, width:1280, height:720})),
  },
  mobile: {
    id: "mycarehub-app",
    name: "Mycarehub worker app",
    label: "Worker app",
    kind: "mobile",
    initialImage: 1,
    media: [
      ["01_login", "Login"], ["02_schedule", "Schedule"], ["03_reports", "Reports"], ["04_profile", "Profile"],
      ["05_shift_report_main", "Shift details"], ["06_shift_support", "Support notes"], ["07_shift_travel", "Travel"], ["08_shift_report_report", "Shift report"],
    ].map(([file, label]) => ({src: asset(`projects/mycarehub/mobile/${file}.webp`), alt:`Mycarehub worker app — ${label} screen`, label, width:680, height:1478})),
  },
};
