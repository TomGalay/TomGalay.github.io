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
  heroMobile: "Explore the Mycarehub worker app",
  heroWeb: "Explore the Mycarehub website",
  work: "Work",
  about: "About",
  background: "Education",
  organizations: "Organizations",
  awards: "Awards & achievements",
  competitions: "Competitions",
  enlarge: (name) => `Enlarge ${name} screenshot`,
  closeViewer: "Close image viewer",
  previousImage: "Previous image",
  nextImage: "Next image",
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
    summary: "Helped build a church community app for announcements, events, videos, and livestreams, supported by a web CMS.",
    technologies: "iOS · Android · Web CMS",
    initialImage: 1,
    media: Array.from({ length: 6 }, (_, i) => ({
      src: asset(`projects/new-life-sta-rosa/newlife-${i + 1}.webp`),
      alt: `New Life Sta Rosa app — ${["splash", "home feed", "connect", "events", "media", "profile"][i]} screen`,
      label: ["Splash", "Home feed", "Connect", "Events", "Media", "Profile"][i],
      width: 560,
      height: 1217,
    })),
    links: [
      { label: "iOS app", platform: "ios", href: "https://apps.apple.com/ph/app/new-life-sta-rosa/id6787141995" },
      { label: "Android app", platform: "android", href: "https://play.google.com/store/apps/details?id=com.nl.newLifeStaRosa" },
    ],
  },
  {
    id: "winli",
    name: "WinLi Home",
    year: "2024",
    platform: "Website & identity",
    kind: "web",
    summary: "Designed and built a website and visual identity for a structural engineering company in Alhambra, California.",
    technologies: "Responsive web · Visual identity",
    initialImage: 0,
    media: Array.from({ length: 3 }, (_, i) => ({
      src: asset(`projects/winli/winlihome-${i + 1}.webp`),
      alt: `WinLi Home website — ${["project gallery", "services", "contact"][i]} page`,
      label: ["Project gallery", "Services", "Contact"][i],
      width: 1280,
      height: 633,
    })),
    links: [{ label: "Website", platform: "web", href: "https://winlihome.com/" }],
  },
];

export const EXPERIENCE = [
  {
    company: "Mycarehub",
    period: "Nov 2023 — present",
    summary: "Building the web systems and mobile app behind an Australian NDIS service provider.",
    roles: [
      {
        title: "Mobile Developer", period: "Nov 2025 — present",
        summary: "Developed a Flutter app for support workers and administrators on iOS and Android.",
        points: [
          "Worker schedules, booking acceptance, and shift reports with support notes and travel details.",
          "Mobile administration for participant and worker bookings, plus review and management of submitted reports.",
          "Background GPS tracking during active shifts to support worker safety, flag anomalies, and help validate on-site details and timing.",
        ],
      },
      {
        title: "WordPress Developer", period: "Nov 2023 — present",
        summary: "Developed the public website and custom systems for day-to-day service operations.",
        points: [
          "Multi-step participant and support-worker intake, referrals, and lead conversion for client relationship tracking.",
          "User administration, NDIS plans, service agreement renewals, payments, documents, and checklists.",
          "Recurring bookings and shift management with calendars and locations.",
          "Automated shift-report PDFs, email and push reminders, and SEO.",
          "AWS EC2 production and development infrastructure, automated backups, server upgrades, and security configuration.",
        ],
      },
    ],
  },
  {
    company: "Freelance", period: "2021 — 2023",
    roles: [
      { title: "WordPress Developer", project: "E-commerce & matrix system", period: "May — Aug 2023", summary: "Built an e-commerce storefront with a matrix-based multilevel marketing system, user and admin dashboards, profiles, payments, store management, and email notifications." },
      { title: "Lead Developer", project: "International ophthalmology symposium", period: "Mar — Apr 2023", summary: "Built registration, doctor verification, itineraries, speaker galleries, certificates, feedback forms, and admin dashboards. Maintained cPanel backups and email." },
      { title: "WordPress Developer", project: "Website development", period: "Dec 2021 — Apr 2022", summary: "Built and updated website pages using WordPress, CSS, and Divi." },
    ],
  },
  {
    company: "Internships", period: "2022",
    roles: [
      { title: "WordPress Developer Intern", project: "Qadra Studio", period: "Aug — Dec 2022", summary: "Translated Figma designs into responsive WordPress pages with Elementor and Bricks, including custom post types and dynamic content." },
      { title: "Web & Mobile Developer Intern", project: "JLCG", period: "Apr — Jul 2022", summary: "Created website redesigns and e-commerce concepts in WordPress." },
    ],
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
  honors: "Summa Cum Laude",
  honorsLink: "https://www.facebook.com/photo/?fbid=608447027958485&set=a.482462397223616",
  period: "2018 — 2022",
  organizations: [
    { name: "Junior Philippine Computer Society", role: "Internal Vice President", period: "2018 — 2020" },
    { name: "Tertiary Honor Society", role: "Creatives Member", period: "2019 — 2020" },
    { name: "Association for Computing Machinery", role: "Member", period: "2018 — 2020" },
    { name: "Google Developer Student Club", role: "Member", period: "2019 — 2020" },
  ],
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
  summary: "Developed the website, business management systems, and Flutter app for Mycarehub Pty Ltd, an Australian company and registered NDIS provider. The web platform handles participant and worker intake, referrals, recurring bookings, NDIS plans, service agreements, documents, and reporting. The iOS and Android app supports schedules, booking management, shift reports, and on-shift GPS tracking, backed by automated notifications and AWS infrastructure.",
  technologies: "WordPress · PHP · Flutter · Dart · AWS · Firebase",
  links: [
    { label: "Website", platform: "web", href: "https://mycarehub.com.au/" },
    { label: "iOS app", platform: "ios", href: "https://apps.apple.com/au/app/mycarehub/id6450425879" },
    { label: "Android app", platform: "android", href: "https://play.google.com/store/apps/details?id=au.com.mycarehub" },
  ],
  web: {
    id: "mycarehub-web",
    name: "Mycarehub website",
    label: "Website",
    kind: "web",
    initialImage: 0,
    media: [
      ["home", "Home"], ["services", "Services"], ["about", "About"], ["how-we-work", "How we work"], ["contact", "Contact"],
    ].map(([file, label]) => ({src: asset(`projects/mycarehub/web/${file}.webp`), alt: `Mycarehub website — ${label} page`, label, width:1280, height:720})),
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

export const AWARDS = [
  {
    title: "Most Outstanding ITE Student",
    issuer: "Philippine Society of Information Technology Educators — PSITE NCR",
    year: "2022",
    href: "https://www.facebook.com/FEUAlabang/posts/tamaraw-spotlight-congratulations-to-our-bsit-wma-student-isaiah-thomas-a-galay-/5346110262103764/",
  },
  {
    title: "Best Research — Eureka 2022",
    issuer: "FEU Alabang · CryptSim capstone",
    year: "2022",
    href: "https://www.facebook.com/Eureka2022/posts/pfbid0xSqN8hugqB3RwYx3PWAYtMVaTbBYFPnV9aTfc4MueuizXSYBC4BoTWX6fzdZ4eqnl",
  },
  {
    title: "Academic Excellence Award",
    issuer: "Junior Philippine Computer Society — JPCS",
    year: "2022",
    href: "https://www.facebook.com/FEUAlabang/photos/a.1304249696289861/5460492983998824/",
  },
];

export const COMPETITIONS = [
  {
    title: "Microsoft Azure Fundamentals Challenge",
    event: "Microsoft Cloud Skills Challenge · 2021",
    result: "Champion",
    href: "https://www.facebook.com/FEUAlabang/posts/pfbid038M4S1smQvnA2BqsG5w5dAv4KQJPpQfymBivm8qLk244Qfn48wGYjzwZnY2kZFF6pl",
  },
  {
    title: "Ideathon Competition",
    event: "UP CURSOR Computer Science Summit · 2021",
    result: "Champion",
    href: "https://www.facebook.com/JPCSFEUA/posts/pfbid02TbBuBbhN8o1hwFcHVpz2Rqo1UXPeEQ3vLKQuTapMFrg9oD6s5CEVtmmX8Hhheoiyl",
  },
  {
    title: "Java Programming Competition",
    event: "10th IT Skills Olympics · 2021",
    result: "Champion",
    href: "https://www.facebook.com/FEUAlabang/photos/4514163658631766/",
  },
  {
    title: "Young Software Engineering Coding Competition",
    event: "UP Los Baños · 2021",
    result: "Champion",
    href: "https://feualabang.edu.ph/features/feu-alabang-continues-to-charge-further-emerges-as-new-champions-in-local-coding-competition",
  },
];
