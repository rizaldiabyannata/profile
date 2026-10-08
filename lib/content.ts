// All site copy lives here. Edit text without touching components.

export const site = {
  name: "ATO Team",
  legalName: "ATO - A Technology Organization",
  // TODO(sprint 0): replace placeholders with the official domain, number, and email.
  url: "https://atoteam.tech",
  whatsapp: "6285238935528",
  email: "hello@atoteam.tech",
  city: "Mataram",
  region: "West Nusa Tenggara",
  country: "Indonesia",
  github: "https://github.com/ato-team",
  description:
    "A B2B software house from West Nusa Tenggara that builds operational systems, not just websites: ERP for distributors, tour & travel booking systems, and AI customer service.",
};

export const waLink = (text = "Hi ATO Team, I'd like a free consultation.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/services/", label: "Services", code: "B" },
  { href: "/products/", label: "Products", code: "C" },
  { href: "/case-studies/", label: "Case studies", code: "D" },
  { href: "/how-we-work/", label: "How we work", code: "E" },
  { href: "/about/", label: "About", code: "F" },
];

export type Status = "live" | "in-development" | "coming-soon";

export const statusLabel: Record<Status, string> = {
  live: "In production",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

export type Product = {
  slug: string;
  code: string;
  name: string;
  short: string;
  tagline: string;
  forWho: string;
  status: Status;
  highlights: string[];
  problems: string[];
  groups: { title: string; status?: Status; note?: string; items: string[] }[];
  stack: string[];
  cta: { label: string; href: string };
};

export const products: Product[] = [
  {
    slug: "erp-distribution",
    code: "ERP-01",
    name: "ERP for distributors",
    short: "Stock, orders, invoices, payments, and receivables in one system, with access by role.",
    tagline:
      "One system for stock, orders, invoices, and receivables, so the numbers stop living in a salesman's notebook.",
    forWho: "Distributors and wholesalers with several warehouses, a sales team, and stores that buy on credit.",
    status: "live",
    highlights: ["Multi-warehouse stock", "Orders & invoices", "Receivables", "Returns", "Role-based access"],
    problems: [
      "Stock is counted by hand in each warehouse and never quite matches.",
      "Orders and payments pass through salesmen, and the owner sees them last.",
      "Receivables are chased from memory and scattered notes.",
      "The month-end report takes days of copying between books.",
    ],
    groups: [
      {
        title: "Modules",
        items: [
          "Multi-warehouse stock",
          "Sales orders",
          "Invoices",
          "Payments",
          "Receivables",
          "Returns",
          "Warehouse transfers",
          "Automatic monthly reports & exports",
        ],
      },
      {
        title: "Who sees what",
        note: "Every role gets its own dashboard and only the actions its job needs.",
        items: ["Owner", "Admin", "Warehouse", "Invoicing clerk", "Accountant", "Sales"],
      },
      {
        title: "Integration",
        note: "Connects to the ERP you already run. When that system has a bad moment, requests back off and recover instead of piling up.",
        items: ["Existing ERP sync", "Fault-tolerant connection"],
      },
      {
        title: "Merchant & salesman app",
        status: "in-development",
        note: "A mobile app for stores to order and for salesmen in the field.",
        items: ["Store ordering", "Salesman visits"],
      },
    ],
    stack: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Redis job queues", "React", "Flutter"],
    cta: { label: "Request a demo", href: "/contact/?topic=erp" },
  },
  {
    slug: "tour-travel",
    code: "TRV-02",
    name: "Tour & travel system",
    short: "A booking website for your guests and an admin panel for packages, fleet, rental, and finance.",
    tagline: "A booking website your guests use, and an admin panel your team runs the whole business from.",
    forWho: "Travel agents, tour operators, and vehicle rentals in Lombok and beyond.",
    status: "live",
    highlights: ["Booking website", "Custom trips", "Fleet & rental", "Finance", "CMS"],
    problems: [
      "Bookings live in WhatsApp threads and get lost between staff.",
      "The fleet schedule sits in a spreadsheet only one person understands.",
      "Deposits and balances are matched to bank transfers by hand.",
      "The website shows packages but cannot take a booking.",
    ],
    groups: [
      {
        title: "Public booking website",
        items: [
          "Tour packages & categories",
          "Custom trip builder with itinerary",
          "Online deposit payment",
          "Vehicle rental",
          "Blog",
          "Testimonials & FAQ",
        ],
      },
      {
        title: "Admin panel",
        items: [
          "Bookings & approvals",
          "Fleet & driver assignment",
          "Rental schedule",
          "Promos",
          "Finance & cash-in",
          "Reports",
          "Content (CMS)",
        ],
      },
    ],
    stack: ["TypeScript", "Next.js", "React", "Bun", "Elysia", "PostgreSQL", "Prisma"],
    cta: { label: "Request a demo", href: "/contact/?topic=travel" },
  },
  {
    slug: "ticko",
    code: "AI-03",
    name: "Ticko: AI customer service",
    short: "An AI agent that answers repeat questions and steps aside the moment a person takes over.",
    tagline:
      "An AI customer-service agent that answers the questions you get a hundred times a day, and steps aside the moment one of your people takes over.",
    forWho: "Businesses whose customer service is buried under the same questions on WhatsApp.",
    status: "coming-soon",
    highlights: ["WhatsApp", "Telegram", "Human handoff", "Your knowledge base"],
    problems: [
      "Your CS answers the same price and schedule questions all day.",
      "Customers wait hours for a reply outside office hours.",
      "Chatbots that guess give customers wrong information you can't take back.",
    ],
    groups: [
      {
        title: "How it works",
        items: [
          "A customer writes on WhatsApp or Telegram.",
          "Ticko answers from your own knowledge base.",
          "Not sure? It hands over to a person instead of guessing.",
          "Once a person takes over, the AI is cut off before it is ever called. Not asked to stay quiet: switched off for that chat.",
          "When your agent is done, the chat can go back to Ticko.",
        ],
      },
      {
        title: "Planned channels",
        items: ["WhatsApp Business", "Telegram"],
      },
    ],
    stack: ["TypeScript", "Bun", "PostgreSQL"],
    cta: { label: "Join the waitlist", href: `mailto:${site.email}?subject=${encodeURIComponent("Ticko waitlist")}` },
  },
];

export const services = [
  {
    code: "SRV-A",
    title: "Custom systems",
    body: "Web apps, mobile apps, and backends built around how your business actually runs, not a template it has to bend to.",
    items: ["Web applications", "Mobile apps", "Backend & APIs"],
  },
  {
    code: "SRV-B",
    title: "ERP integration",
    body: "Connect new tools to the system you already use, so nobody types the same order twice.",
    items: ["Data sync", "Fault-tolerant connections", "Migration from spreadsheets"],
  },
  {
    code: "SRV-C",
    title: "Maintenance & hosting",
    body: "We keep it running after launch: updates, backups, and monitoring, on our servers or yours.",
    items: ["Deployment", "Backups", "Monitoring & fixes"],
  },
  {
    code: "SRV-D",
    title: "Digitalisation consulting",
    body: "Before any code, we map how work moves today and decide together what is worth automating.",
    items: ["Process mapping", "Scope & estimate", "Roadmap"],
  },
];

export const cases = [
  {
    code: "CASE-01",
    client: "An electronics distributor in Mataram",
    product: "erp-distribution",
    challenge:
      "Orders, stock across several warehouses, and store payments were tracked by hand. Salesmen held most of the transaction flow, and the owner had little view of it.",
    solution: [
      "A web ERP with separate dashboards for the owner, sales, warehouse, invoicing, accounting, and stores.",
      "Every order, invoice, payment, and return recorded once and visible to the roles that need it.",
      "Monthly reports and exports generated automatically in the background.",
      "A merchant & salesman mobile app, now in development.",
    ],
    outcome:
      "Stock, orders, and receivables now sit in one place the owner can check, and every movement of goods or money has a record and a responsible role.",
    stack: ["Express", "PostgreSQL", "Prisma", "Redis", "React", "Flutter"],
  },
  {
    code: "CASE-02",
    client: "A tour & rental operator in Lombok",
    product: "tour-travel",
    challenge:
      "Bookings came in over WhatsApp, the fleet and finances lived in spreadsheets, and the website could show packages but not take a booking.",
    solution: [
      "A public website with tour packages, a custom trip builder, and online deposit payment.",
      "An admin panel for bookings, fleet, vehicle rental, promos, finance, and the blog.",
      "Deposits and balances recorded as cash-in, so finance matches what was actually paid.",
    ],
    outcome:
      "Guests can plan and book a trip online, and the team runs bookings, vehicles, and money from one panel. The system is live in production.",
    stack: ["Next.js", "React", "Bun", "Elysia", "PostgreSQL", "Prisma"],
  },
];

export const steps = [
  {
    title: "Discovery",
    time: "1–2 weeks",
    body: "We sit with the people who do the work, map the current process, and agree on what the first release must do.",
  },
  {
    title: "Sprints",
    time: "2 weeks each",
    body: "We build in short sprints. Each one ends with working features, not a progress report.",
  },
  {
    title: "Demo",
    time: "End of every sprint",
    body: "You try the system yourself and steer the next sprint. Changes are cheap here, not after launch.",
  },
  {
    title: "Release",
    time: "1 week",
    body: "Deployment, moving your existing data in, and training for each role.",
  },
  {
    title: "Maintenance",
    time: "Ongoing",
    body: "Monitoring, fixes, and improvements as your business changes.",
  },
];

export const values = [
  {
    title: "Claims we can prove",
    body: "If it's on this site, it runs in code we wrote. Unfinished products are labelled unfinished.",
  },
  {
    title: "Built for the people who use it daily",
    body: "The warehouse clerk and the driver matter as much as the owner's dashboard.",
  },
  {
    title: "Close by",
    body: "We're in Mataram. You can meet us, and we understand how business here works.",
  },
  {
    title: "Engineering that holds up",
    body: "Role-based access, records for every transaction, background jobs that survive restarts.",
  },
];

export const stack = [
  "TypeScript",
  "Next.js",
  "React",
  "Flutter",
  "Express",
  "Elysia",
  "Bun",
  "PostgreSQL",
  "Prisma",
  "Redis",
];
