export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "IoT Utility Monitoring",
        href: "/services/utility-monitoring",
        description: "Water, gas, power & genset telemetry"
      },
      {
        label: "Cold Chain Management",
        href: "/services/cold-chain",
        description: "Vaccine, food & pharma temperature integrity"
      },
      {
        label: "Smart Home Automation",
        href: "/services/smart-home",
        description: "Locks, lighting, CCTV & scenes"
      }
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const company = {
  name: "Powerise Solutions Limited",
  short: "Powerise",
  tagline: "Intelligent IoT for a connected Africa.",
  address: "Jabavu House, Jabavu Lane, Off Argwings Kodhek Road, Nairobi",
  phone: "+254 733 816 010",
  email: "info@powerise.co.ke",
  hours: "Mon – Sat · 08:00 – 18:00 · Sunday Closed",
  social: {
    linkedin: "https://linkedin.com/company/powerise",
    x: "https://x.com/powerise",
    facebook: "https://facebook.com/powerise",
    instagram: "https://instagram.com/powerise"
  }
} as const;

export const stats = [
  { value: "250+", label: "Sensors deployed" },
  { value: "37", label: "Enterprise clients" },
  { value: "99.98%", label: "Platform uptime" },
  { value: "24/7", label: "SOC monitoring" }
];

export const pillars = [
  {
    slug: "utility-monitoring",
    icon: "gauge",
    title: "IoT Utility Monitoring",
    tagline: "See every watt, drop and cubic metre.",
    color: "from-brand-500 to-violet-500",
    description:
      "Real-time telemetry for water, gas, power and diesel gensets — turning meters and pipes into a live operations dashboard.",
    features: [
      "Smart water & gas metering with leak detection",
      "Genset run-hours, fuel level and geofencing",
      "Bill-quality energy analytics & carbon reporting",
      "MQTT, LoRaWAN, NB-IoT & 4G/5G gateways"
    ]
  },
  {
    slug: "cold-chain",
    icon: "snowflake",
    title: "IoT Cold Chain Management",
    tagline: "Every degree, logged and defensible.",
    color: "from-mint-500 to-brand-500",
    description:
      "Continuous temperature, humidity and door-event integrity for vaccines, food logistics and life-science storage — audit-ready by design.",
    features: [
      "Sub-zero to ambient probes with 5-year batteries",
      "GxP & WHO PQS-aligned reporting",
      "Route-level trailer & container tracking",
      "SMS + WhatsApp + email alert escalation"
    ]
  },
  {
    slug: "smart-home",
    icon: "home",
    title: "Smart Home Automation",
    tagline: "A home that thinks with you.",
    color: "from-violet-500 to-mint-500",
    description:
      "Locks, lighting, CCTV, HVAC and scenes unified in one app — with local-first control that keeps working when the internet doesn't.",
    features: [
      "Zigbee, Z-Wave, Matter & Wi-Fi interoperability",
      "AI-assisted scenes and presence detection",
      "Encrypted, on-premises hub — no cloud lock-in",
      "24-hour on-site commissioning across Kenya"
    ]
  }
] as const;

export const services = {
  "utility-monitoring": [
    {
      title: "Smart Water Metering",
      description:
        "AMR-ready ultrasonic meters that publish consumption, pressure and quality data every 60 seconds — with anomaly detection tuned for African distribution networks.",
      icon: "droplet"
    },
    {
      title: "Gas Detection & Metering",
      description:
        "Multi-gas sensors that combine billing-grade metering with LEL safety monitoring. Automatic shut-off valves and SMS escalation on abnormal readings.",
      icon: "flame"
    },
    {
      title: "Genset Telemetry",
      description:
        "Retrofit any diesel generator with fuel-level, run-hours, load, coolant and GPS telemetry. Detect fuel theft the moment it happens, not on invoice day.",
      icon: "zap"
    },
    {
      title: "Sub-Metering & Tenant Billing",
      description:
        "Deploy prepaid or postpaid sub-meters in malls, estates and factories. Automated invoicing, M-Pesa top-ups and self-service tenant portals.",
      icon: "building"
    }
  ],
  "cold-chain": [
    {
      title: "Life-Science Cold Rooms",
      description:
        "Compliance-first monitoring for vaccines, blood products, reagents and pharmaceuticals. Continuous 2–8 °C logging with audit-ready reports.",
      icon: "beaker"
    },
    {
      title: "Cooler & Freezer Fleets",
      description:
        "Fleet-scale telemetry for retail and QSR chains — door events, defrost cycles, compressor health and predictive maintenance in one console.",
      icon: "refrigerator"
    },
    {
      title: "Temperature-Controlled Warehousing",
      description:
        "Multi-zone mapping and validation for large chilled and frozen warehouses. Wireless probes, redundant gateways and CFR-21 Part 11 style records.",
      icon: "warehouse"
    },
    {
      title: "Reefer Truck & Container Tracking",
      description:
        "GPS + temperature + door + fuel telemetry for reefer trailers. Prove chain-of-custody from Mombasa port to the last mile.",
      icon: "truck"
    }
  ],
  "smart-home": [
    {
      title: "Smart Locks & Access",
      description:
        "Keyless entry with PIN, RFID, fingerprint and mobile keys. Time-limited guest passes, delivery mode and full audit trails per user.",
      icon: "lock"
    },
    {
      title: "Lighting, Switches & Scenes",
      description:
        "Colour-tunable bulbs, dimmable switches and light strips over Zigbee and Matter — orchestrated into circadian, movie and away-mode scenes.",
      icon: "sun"
    },
    {
      title: "Smart IP CCTV",
      description:
        "AI-assisted 4K cameras with person, vehicle and package detection. Local NVR storage, no monthly cloud fees, on-device privacy zones.",
      icon: "camera"
    },
    {
      title: "Voice, Climate & Blinds",
      description:
        "HVAC, motorised blinds and voice control unified with Alexa, Google Home and Apple Home. One app, one bill, one commissioning day.",
      icon: "wind"
    }
  ]
} as const;

export const industries = [
  {
    title: "Health & Life Sciences",
    body: "Hospitals, blood banks, vaccine programmes and pharma distributors trust Powerise to keep temperature-sensitive stock defensibly in-range.",
    icon: "hospital"
  },
  {
    title: "Food & Beverage",
    body: "From breweries to QSR chains — protect margins with predictive maintenance and cut spoilage with real-time cold-chain alerts.",
    icon: "utensils"
  },
  {
    title: "Real Estate & Facilities",
    body: "Malls, estates and REITs use our sub-metering and BMS gateways to bill fairly, cut leaks and hit ESG reporting targets.",
    icon: "building2"
  },
  {
    title: "Utilities & Energy",
    body: "Water service providers and IPPs deploy our AMR platform to shrink non-revenue water and monetise every kWh generated.",
    icon: "bolt"
  },
  {
    title: "Logistics & Ports",
    body: "Reefer operators between Mombasa, Nairobi and Kampala prove chain-of-custody in real time to global shippers.",
    icon: "truck"
  },
  {
    title: "Homes & Estates",
    body: "Residential customers and gated communities upgrade to secure, cloud-optional smart-home ecosystems that just work.",
    icon: "home"
  }
] as const;

export const testimonials = [
  {
    quote:
      "Powerise cut our diesel spend by 22% in the first quarter — the genset dashboard paid for itself before the audit was signed off.",
    author: "Head of Facilities",
    role: "Pan-African bank, Nairobi HQ"
  },
  {
    quote:
      "Their cold-chain platform is the only WHO-PQS grade solution we've found that speaks fluent M-Pesa and works on 2G in Turkana.",
    author: "Programme Director",
    role: "National immunisation partner"
  },
  {
    quote:
      "The smart-home commissioning was done in a single day. Six months in, zero cloud outages and my kids can dim the lights by voice.",
    author: "R.O.",
    role: "Homeowner, Karen"
  },
  {
    quote:
      "We ripped out three vendors and replaced them with Powerise. Same dashboards, one throat to choke, a fraction of the price.",
    author: "COO",
    role: "East-African QSR chain"
  }
];

export const clientLogos = [
  "AquaServ",
  "PharmaHub",
  "GreenGrid",
  "NairobiMall",
  "PortLink",
  "MediChain",
  "SolarWorks",
  "ChillLogix",
  "FarmFresh",
  "SecureNest"
];

export const posts = [
  {
    slug: "non-revenue-water",
    category: "Utilities",
    title: "Africa loses 45% of treated water. Here is how IoT closes the tap.",
    excerpt:
      "Non-revenue water is a governance problem disguised as a plumbing problem. A pragmatic playbook for utilities that want measurable wins in 90 days.",
    author: "Eng. Amina Otieno",
    date: "2026-06-24",
    readTime: "8 min read",
    tag: "Field notes"
  },
  {
    slug: "cold-chain-2g",
    category: "Cold Chain",
    title: "Why we still ship 2G-first cold-chain hardware in 2026",
    excerpt:
      "Fibre backhaul is beautiful. It is also absent in the last mile. Notes from deploying 4,000 temperature loggers between Lodwar and Lokichogio.",
    author: "Brian Kariuki",
    date: "2026-05-11",
    readTime: "6 min read",
    tag: "Engineering"
  },
  {
    slug: "matter-in-kenya",
    category: "Smart Home",
    title: "Matter, Thread and the end of vendor lock-in — a Nairobi installer's diary",
    excerpt:
      "Twelve months, forty-two homes, three ecosystems. What Matter actually delivers, what it doesn't, and how we plan around it.",
    author: "Wanjiru Mbugua",
    date: "2026-04-02",
    readTime: "9 min read",
    tag: "Perspective"
  },
  {
    slug: "genset-fraud",
    category: "Energy",
    title: "The anatomy of diesel fraud — and the telemetry that ends it",
    excerpt:
      "Siphoning, cocktail fuel, ghost run-hours. A forensic walk-through of the five most common genset scams and how sensors expose them.",
    author: "Eng. Amina Otieno",
    date: "2026-03-18",
    readTime: "7 min read",
    tag: "Case study"
  },
  {
    slug: "esg-metering",
    category: "Sustainability",
    title: "ESG is a data problem — start with your sub-meters",
    excerpt:
      "You cannot report what you do not measure. A CFO-friendly roadmap from spreadsheet estimates to defensible Scope 1 & 2 numbers.",
    author: "Njeri Kamau",
    date: "2026-02-05",
    readTime: "5 min read",
    tag: "Strategy"
  },
  {
    slug: "lorawan-vs-nbiot",
    category: "Architecture",
    title: "LoRaWAN vs. NB-IoT vs. 4G — a pragmatist's decision matrix",
    excerpt:
      "There is no single winner, only trade-offs. Range, battery, cost, coverage and politics — mapped to real deployment scenarios in East Africa.",
    author: "Brian Kariuki",
    date: "2026-01-20",
    readTime: "10 min read",
    tag: "Engineering"
  }
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We walk your site, map your pain and quantify the opportunity. You leave the workshop with a costed business case, not a slide deck."
  },
  {
    step: "02",
    title: "Design",
    body: "Reference architectures, hardware BoMs and integration blueprints — reviewed with your IT, OT and finance teams before a single sensor lands."
  },
  {
    step: "03",
    title: "Deploy",
    body: "In-house installation crews across Kenya and East Africa. Certified, insured, and trained to work around live operations without disruption."
  },
  {
    step: "04",
    title: "Operate",
    body: "24/7 monitoring from our Nairobi NOC, SLAs measured in minutes, and continuous firmware improvement over-the-air for the life of the asset."
  }
];
