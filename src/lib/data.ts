export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/services",
    children: [
      {
        label: "Energy Monitoring",
        href: "/services/energy-monitoring",
        description: "IoT smart meters, energy audits, solar & battery"
      },
      {
        label: "Generator Monitoring",
        href: "/services/generator-monitoring",
        description: "Fuel, engine health, run-hours & geolocation"
      },
      {
        label: "Cold Chain",
        href: "/services/cold-chain",
        description: "Vaccines, pharma & food — end-to-end integrity"
      },
      {
        label: "Truck & Fleet Telematics",
        href: "/services/truck-telematics",
        description: "Fuel, axle load, driver behaviour, reefer trucks"
      },
      {
        label: "Water & Gas Metering",
        href: "/services/water-gas-metering",
        description: "Leak detection, billing accuracy & LEL safety"
      },
      {
        label: "Smart Home & Locks",
        href: "/services/smart-home",
        description: "Smart locks, switches, lighting, CCTV & scenes"
      }
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

export const company = {
  name: "Powerise Solutions Limited",
  short: "Powerise",
  tagline: "Intelligent IoT for a connected Africa.",
  intro:
    "Powerise Solutions Limited is a cutting-edge IoT solutions provider specializing in smart technologies that enhance the efficiency, reliability, and sustainability of essential resources and infrastructure — from energy management and power backup to smart home automation and advanced supply-chain monitoring.",
  address:
    "Jabavu House, Jabavu Lane, off Argwings Kodhek Road, Hurlingham, Nairobi, Kenya",
  email: "info@powerise.co.ke",
  website: "www.powerise.co.ke",
  hours: "Mon – Sat · 08:00 – 18:00 · Sunday Closed",
  social: {
    linkedin: "https://linkedin.com/company/powerise",
    x: "https://x.com/powerise",
    facebook: "https://facebook.com/powerise",
    instagram: "https://instagram.com/powerise"
  }
} as const;

export const stats = [
  { value: "10,000+", label: "Parameters monitored" },
  { value: "24/7", label: "Real-time analytics" },
  { value: "±0.5°C", label: "Cold-chain accuracy" },
  { value: "60 s", label: "Meter reporting interval" }
];

/**
 * Vision & positioning statements sourced from client documents.
 */
export const vision = {
  headline: "Transforming industries and homes through IoT-driven innovation.",
  body: "By providing intelligent solutions that optimize resource use, enhance safety and reduce environmental impact, we empower our clients to build smarter, more sustainable operations and living spaces.",
  whyUs: [
    {
      title: "Comprehensive Solutions",
      body: "A single portfolio for energy, water, gas, logistics and home automation — one accountable partner across the stack."
    },
    {
      title: "Data-Driven Insights",
      body: "Continuous streams, automated reports and actionable intelligence that turn meters and sensors into decisions."
    },
    {
      title: "Reliability & Support",
      body: "Robust systems, resilient over 2G/4G/LoRaWAN, and a dedicated support team for seamless implementation."
    }
  ]
};

/**
 * Top-level offerings, mirrored from the client's IoT decks.
 * These are the six lead solutions surfaced on the homepage.
 */
export const pillars = [
  {
    slug: "energy-monitoring",
    icon: "gauge",
    title: "Energy Monitoring",
    tagline: "See every kWh — live.",
    description:
      "IoT-enabled Energy Audit powered by smart meters. Continuous, granular insight into voltage, current, power factor and load patterns across buildings, circuits and equipment.",
    features: [
      "Real-time consumption dashboards",
      "Automated audit reports & benchmarks",
      "Anomaly, peak-load & wastage detection",
      "Time-of-use billing and TOU tariffs"
    ]
  },
  {
    slug: "generator-monitoring",
    icon: "zap",
    title: "Generator Monitoring",
    tagline: "End fuel loss. Extend genset life.",
    description:
      "Retrofit any diesel generator with real-time fuel, engine and location telemetry. Detect theft the moment it happens and schedule maintenance before failure.",
    features: [
      "Fuel level, top-ups & sudden-drain alerts",
      "Engine speed, oil pressure, temperature",
      "Run-hours, load & frequency logging",
      "Geo-location tracking by genset & technician"
    ]
  },
  {
    slug: "cold-chain",
    icon: "snowflake",
    title: "Cold Chain",
    tagline: "Every degree, logged and defensible.",
    description:
      "Global real-time monitors for vaccines, pharma and perishable cargo. Temperature, humidity, light, shock and location — one platform, WHO-PQS aligned.",
    features: [
      "±0.5 °C TI digital sensors, −30 °C to 70 °C",
      "Global LTE 4G/5G with 2G fallback",
      "PDF reports via USB, cloud or mobile app",
      "SMS, email and app alerts, 24/7"
    ]
  },
  {
    slug: "truck-telematics",
    icon: "truck",
    title: "Truck & Fleet Telematics",
    tagline: "Full visibility over 250+ parameters.",
    description:
      "Comprehensive monitoring for trucks and reefer fleets: engine health, fuel, cargo weight, route and driver behaviour — with cold-chain telematics for perishable loads.",
    features: [
      "Fuel theft prevention & consumption analytics",
      "Axle-load and cargo tampering detection",
      "Driver behaviour, speeding & route deviation",
      "Reefer temperature & door-event logging"
    ]
  },
  {
    slug: "water-gas-metering",
    icon: "droplet",
    title: "Water & Gas Metering",
    tagline: "Bill accurately. Find leaks first.",
    description:
      "Smart water and gas meters over LoRaWAN and 4G — accurate consumption data, leak and tamper detection, remote valve control and audit-ready reporting.",
    features: [
      "Ultrasonic flow with tamper alerts",
      "Non-revenue water reduction",
      "LEL gas-safety monitoring & auto shut-off",
      "Prepaid, postpaid and TOU billing"
    ]
  },
  {
    slug: "smart-home",
    icon: "home",
    title: "Smart Home & Locks",
    tagline: "A home that thinks with you.",
    description:
      "Smart locks, lighting, switches, sockets and CCTV — unified in one app with mobile, PIN, RFID, fingerprint and mechanical-key access.",
    features: [
      "Fingerprint, PIN, RFID, app & key unlock",
      "Wi-Fi smart switches, sockets and dimmers",
      "Alexa & Google Home voice control",
      "AI encryption chip and anti-peep passwords"
    ]
  }
] as const;

/**
 * Deep-dive service lists per pillar. Keys match pillar slugs.
 */
export const services = {
  "energy-monitoring": [
    {
      title: "IoT Smart Energy Meters",
      description:
        "Connected meters capturing voltage, current, power factor, active and reactive power — automated billing, TOU tariffs and anomaly detection.",
      icon: "gauge"
    },
    {
      title: "Energy Audit (IoT-enabled)",
      description:
        "Continuous, data-driven audit combining on-site assessment with real-time monitoring: identify inefficiencies, peak loads, wastage and cost savings.",
      icon: "clipboard"
    },
    {
      title: "Solar & Backup Battery Monitoring",
      description:
        "Track production, consumption and battery health across hybrid systems. Balance loads intelligently and support renewable integration.",
      icon: "sun"
    },
    {
      title: "Sub-Metering & Tenant Billing",
      description:
        "Deploy prepaid or postpaid sub-meters across malls, estates and factories with automated invoicing and self-service tenant portals.",
      icon: "building"
    }
  ],
  "generator-monitoring": [
    {
      title: "Engine Health & Diagnostics",
      description:
        "Engine speed, oil pressure, coolant temperature, power output, runtime, voltage and frequency — logged continuously and analysed for predictive maintenance.",
      icon: "activity"
    },
    {
      title: "Fuel Monitoring & Theft Prevention",
      description:
        "Capacitive fuel-level sensors for stationary and mobile gensets. Alerts on sudden drains, top-ups and unauthorised siphoning.",
      icon: "droplet"
    },
    {
      title: "Genset Fleet & Geolocation",
      description:
        "Real-time geo-tracking of gensets and technicians, remote start/stop, and enterprise-view dashboards for large fleets.",
      icon: "map-pin"
    },
    {
      title: "Automated Alerts & Reports",
      description:
        "Configurable alarms for alarm codes, fuel loss and abnormal loads — delivered by SMS, email and app, with PDF and Excel reports.",
      icon: "bell"
    }
  ],
  "cold-chain": [
    {
      title: "Real-time Multi-use Loggers",
      description:
        "Rechargeable global loggers with 120-day run-time, ±0.5 °C accuracy, humidity, light, shock and LBS location tracking via Frigga cloud.",
      icon: "thermometer"
    },
    {
      title: "Single-use USB Loggers",
      description:
        "NIST-traceable disposable loggers for one-shot shipments — up to 14,400 readings, IP67, PDF + CSV reports over USB.",
      icon: "usb"
    },
    {
      title: "Cold Rooms, Coolers & Freezers",
      description:
        "Continuous 2–8 °C and sub-zero monitoring for life-science storage, retail cabinets and QSR cold rooms — with audit-ready reporting.",
      icon: "refrigerator"
    },
    {
      title: "Reefer Truck & Container Tracking",
      description:
        "Combine temperature, humidity, door-event, GPS and route telemetry to prove chain-of-custody from port to last mile.",
      icon: "truck"
    }
  ],
  "truck-telematics": [
    {
      title: "Truck Health & DTC Monitoring",
      description:
        "Read engine health, ECU errors and DTC codes; monitor tractor-unit parameters and drivetrain performance across the fleet.",
      icon: "activity"
    },
    {
      title: "Fuel & Axle-Load Monitoring",
      description:
        "Capacitive fuel probes and axle-load sensors detect theft, unauthorised loading and overloading in real time.",
      icon: "scale"
    },
    {
      title: "Driver Behaviour & Route Safety",
      description:
        "Speeding, harsh braking, cornering and route-deviation analytics with configurable geofences and risk scoring.",
      icon: "route"
    },
    {
      title: "Cold-chain Telematics",
      description:
        "Integrated reefer temperature, humidity, door and GPS telemetry — one screen for cargo integrity and vehicle status.",
      icon: "snowflake"
    }
  ],
  "water-gas-metering": [
    {
      title: "Smart Water Metering",
      description:
        "Ultrasonic meters over LoRaWAN. Flow, temperature and burst detection; reduce non-revenue water and renovate pipes proactively.",
      icon: "droplet"
    },
    {
      title: "IoT Gas Metering",
      description:
        "Ultrasonic and diaphragm meters for residential, commercial and industrial gas. Remote valve control and tamper detection.",
      icon: "flame"
    },
    {
      title: "Fluid & Steam Metering",
      description:
        "Level probes for diesel, chemicals and process fluids; steam metering for industrial energy accounting.",
      icon: "beaker"
    },
    {
      title: "Waste Management Sensors",
      description:
        "Fill-level sensors for bins and skips — optimise collection routes and cut fuel and labour costs.",
      icon: "trash"
    }
  ],
  "smart-home": [
    {
      title: "Smart Locks (Mortise & Commercial)",
      description:
        "Fingerprint, PIN, RFID, app and mechanical-key unlock. AI encryption chip, anti-peep passwords and strong electromagnetic protection.",
      icon: "lock"
    },
    {
      title: "Wi-Fi Switches, Sockets & Dimmers",
      description:
        "Touch, physical and dimmer switches; smart power strips and wall sockets — Amazon Alexa and Google Home ready.",
      icon: "toggle-right"
    },
    {
      title: "Smart Lighting & Scenes",
      description:
        "Colour-tunable bulbs and light strips over Wi-Fi. Circadian, movie, away and party scenes with schedules and timers.",
      icon: "sun"
    },
    {
      title: "CCTV, Climate & Voice",
      description:
        "AI-assisted IP cameras with local NVR, smart thermostats and motorised blinds — one app, Alexa & Google Home voice control.",
      icon: "camera"
    }
  ]
} as const;

export const industries = [
  {
    title: "Utilities & Energy",
    body: "Water service providers, IPPs and power distributors deploy our smart meters and audit platform to shrink non-revenue losses and monetise every kWh."
  },
  {
    title: "Health & Life Sciences",
    body: "Hospitals, blood banks, vaccine programmes and pharma distributors trust Powerise to keep temperature-sensitive stock defensibly in range."
  },
  {
    title: "Food & Beverage",
    body: "From breweries to QSR chains — protect margins with predictive maintenance and cut spoilage with real-time cold-chain alerts."
  },
  {
    title: "Logistics & Fleet",
    body: "Reefer operators, tanker fleets and distributors prove chain-of-custody in real time — from Mombasa port to the last mile."
  },
  {
    title: "Real Estate & Facilities",
    body: "Malls, estates and REITs use our sub-metering and BMS gateways to bill fairly, catch leaks and hit ESG reporting targets."
  },
  {
    title: "Homes & Estates",
    body: "Residential customers and gated communities upgrade to secure, cloud-optional smart-home ecosystems that simply work."
  }
] as const;

export const benefits = [
  {
    title: "Real-time Monitoring",
    body: "Live data on consumption, fuel, temperature and location — via web dashboards and mobile apps."
  },
  {
    title: "Predictive Maintenance",
    body: "Analyse trends to predict failures and maintenance needs — reducing downtime and repair costs."
  },
  {
    title: "Cost Reduction",
    body: "Improved efficiency, fewer manual reads and less waste translate directly to lower operating costs."
  },
  {
    title: "Higher Accuracy",
    body: "Removes human error from manual readings. Automatic tamper and anomaly detection built in."
  },
  {
    title: "Remote Access & Control",
    body: "Access data — and, where enabled, disconnect, reconnect or shut off — from anywhere in the world."
  },
  {
    title: "ESG-aligned Reporting",
    body: "Defensible Scope 1 and 2 numbers, waste reduction and safety metrics for your sustainability disclosures."
  }
];

/**
 * Platform layers — the technical stack behind every solution.
 * Wording aligns with the DIN-rail gateway architecture described in the docs.
 */
export const platformLayers = [
  {
    key: "sense",
    label: "Sense",
    title: "Sensors and meters built for the field.",
    body:
      "TI-grade digital temperature and humidity sensors, ultrasonic flow meters, capacitive fuel probes and IP64/IP67 enclosures rated for harsh African conditions.",
    bullets: [
      "±0.5 °C accuracy, resolution 0.1 °C",
      "Up to 50,000 readings on-device",
      "IP64/IP67 rugged enclosures"
    ]
  },
  {
    key: "connect",
    label: "Connect",
    title: "DIN-rail IoT gateway, any protocol.",
    body:
      "Our heart-of-system gateway connects RS485 Modbus devices, controllers and sensors — over 4G, Wi-Fi, WLAN or Ethernet — into cloud dashboards and mobile apps.",
    bullets: [
      "12–30 V power supply range",
      "4G / Wi-Fi / WLAN / Ethernet",
      "HTTP · MQTT · Modbus TCP & RTU",
      "OTA self-upgrade, AP Wi-Fi config"
    ]
  },
  {
    key: "analyze",
    label: "Analyze",
    title: "Real-time dashboards and analytics.",
    body:
      "Cloud analytics turn raw telemetry into consumption reports, KPI dashboards and predictive insights — from the building level down to individual assets.",
    bullets: [
      "Real-time power quadrants & load profiles",
      "Automated audits & benchmarks",
      "Top-consumers and daily-reading reports"
    ]
  },
  {
    key: "alert",
    label: "Alert",
    title: "Alerts that reach someone who cares.",
    body:
      "Configurable thresholds trigger multi-channel alerts — SMS, WhatsApp, email and in-app — with escalation ladders for ops managers and on-call teams.",
    bullets: [
      "SMS · Email · App · WhatsApp",
      "Escalation ladders & on-call rotations",
      "Signed audit trail per alert"
    ]
  },
  {
    key: "act",
    label: "Act",
    title: "Remote control and predictive action.",
    body:
      "Beyond monitoring — remote valve, meter and load control, PDF/Excel report exports and integration hooks to your ERP, billing or M-Pesa systems.",
    bullets: [
      "Remote valve & load control",
      "PDF, Excel and API exports",
      "M-Pesa, ERP & webhook integrations"
    ]
  }
];

export const process = [
  {
    step: "01",
    title: "Assess",
    body: "We walk your site, review load, cargo or fleet data and quantify the opportunity. You leave with a costed business case."
  },
  {
    step: "02",
    title: "Deploy",
    body: "Certified in-house crews install meters, sensors and gateways around live operations — no downtime, no drama."
  },
  {
    step: "03",
    title: "Monitor",
    body: "Continuous logging into Powerise Cloud with real-time dashboards, automated reports and multi-channel alerts."
  },
  {
    step: "04",
    title: "Optimise",
    body: "Ongoing analytics, energy-saving journey reports and firmware updates over-the-air for the life of every asset."
  }
];

/**
 * Capability strip shown on the homepage in place of fabricated client logos.
 * Numbers and phrasing sourced directly from the client's IoT decks.
 */
export const capabilities = [
  "10,000+ parameters monitored",
  "24/7 real-time analytics",
  "±0.5 °C cold-chain accuracy",
  "IP64 / IP67 rugged enclosures",
  "4G · Wi-Fi · WLAN · Ethernet",
  "MQTT · HTTP · Modbus TCP & RTU",
  "Over-the-air firmware updates",
  "M-Pesa · ERP · webhook ready"
];

/**
 * Deep-dive product & platform specifications taken from the client's
 * energy, generator, cold-chain and truck telemetry documentation.
 * Used on the homepage where a testimonials strip previously lived.
 */
export const highlights = [
  {
    eyebrow: "Energy monitoring",
    title: "Hierarchical audit — from building to individual asset.",
    body: "Powerise smart meters map consumption across four levels: building, circuit, critical asset and product condition. Every kWh is traceable, every anomaly is investigable.",
    bullets: [
      "Real-time voltage, current and power-factor logging",
      "Automated daily-reading and top-consumer reports",
      "Load-profile and TOU tariff analytics"
    ]
  },
  {
    eyebrow: "Generator telemetry",
    title: "Engine health, fuel and run-hours in one screen.",
    body: "Retrofit any diesel genset with capacitive fuel probes and CAN-bus / analog telemetry. Live RPM, oil pressure, coolant temperature, running hours and fuel level — with theft alerts the moment a drain occurs.",
    bullets: [
      "Predictive maintenance from CAN-bus DTCs",
      "Sudden-drain and unauthorised top-up alerts",
      "Remote start/stop and geo-tracking"
    ]
  },
  {
    eyebrow: "Cold chain",
    title: "WHO-PQS grade loggers with global 4G/5G reporting.",
    body: "TI-grade digital sensors with ±0.5 °C accuracy log up to 50,000 readings on-device. Global LTE with 2G fallback delivers PDF reports via USB, cloud and mobile app.",
    bullets: [
      "−30 °C to 70 °C operating range",
      "IP67 rechargeable multi-use loggers, 120-day run-time",
      "SMS · email · app alerts, 24/7"
    ]
  }
];
