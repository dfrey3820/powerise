/**
 * Central image catalog — all URLs verified against images.unsplash.com.
 * Using next/image with `remotePatterns` allowing images.unsplash.com and
 * randomuser.me (for stable, well-lit portrait avatars).
 *
 * Widths are hinted in the URL; next/image will further resize per device.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroBg = u("1523805009345-7448845a9e53", 2000);

export const pillarImages = {
  "utility-monitoring": u("1509391366360-2e959784a276", 1400), // rooftop solar / infrastructure
  "cold-chain":         u("1553413077-190dd305871c",  1400), // warehouse / cold storage
  "smart-home":         u("1558618666-fcd25c85cd64",  1400)  // modern connected home
} as const;

export const industryImages: Record<string, string> = {
  "Health & Life Sciences": u("1519055548599-6d4d129508c4", 1200),
  "Food & Beverage":        u("1600880292203-757bb62b4baf", 1200),
  "Real Estate & Facilities": u("1497436072909-60f360e1d4b1", 1200),
  "Utilities & Energy":     u("1547471080-7cc2caa01a7e", 1200),
  "Logistics & Ports":      u("1493246507139-91e8fad9978e", 1200),
  "Homes & Estates":        u("1560518883-ce09059eeffa", 1200)
};

export const postImages: Record<string, string> = {
  "non-revenue-water":  u("1519055548599-6d4d129508c4", 1400),
  "cold-chain-2g":      u("1553413077-190dd305871c", 1400),
  "matter-in-kenya":    u("1558618666-fcd25c85cd64", 1400),
  "genset-fraud":       u("1547471080-7cc2caa01a7e", 1400),
  "esg-metering":       u("1509391366360-2e959784a276", 1400),
  "lorawan-vs-nbiot":   u("1573497019940-1c28c88b4f3e", 1400)
};

/**
 * Places we deploy — a rotating strip on the homepage. Each entry has a
 * city, a short beat, and a real photo. Images are cropped square in UI.
 */
export const places = [
  {
    city: "Nairobi",
    beat: "Water utility · 480 DMAs monitored",
    img: u("1611348524140-53c9a25263d6", 900)
  },
  {
    city: "Mombasa",
    beat: "Reefer terminal · chain-of-custody",
    img: u("1516684732162-798a0062be99", 900)
  },
  {
    city: "Kisumu",
    beat: "Life-science cold rooms · county rollout",
    img: u("1490718720478-364a07a997cd", 900)
  },
  {
    city: "Turkana",
    beat: "Solar-powered vaccine fridges · 62 sites",
    img: u("1594322436404-5a0526db4d13", 900)
  },
  {
    city: "Nakuru",
    beat: "Retail chain telemetry · 34 outlets",
    img: u("1600585154340-be6161a56a0c", 900)
  },
  {
    city: "Kampala",
    beat: "Genset fleet · 210 assets under SLA",
    img: u("1531973576160-7125cd663d86", 900)
  }
] as const;

/**
 * Portraits from randomuser.me — a stable, license-clean portrait service.
 * We keep the exact seed IDs so images are cache-stable.
 */
const portrait = (gender: "men" | "women", n: number) =>
  `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;

export const teamAvatars: Record<string, string> = {
  "Amina Otieno":  portrait("women", 68),
  "Brian Kariuki": portrait("men",   45),
  "Wanjiru Mbugua": portrait("women", 33),
  "Njeri Kamau":   portrait("women", 90),
  "Samir Patel":   portrait("men",   76),
  "Grace Njoroge": portrait("women", 51),
  "default":       portrait("women", 65)
};

export const testimonialAvatars = [
  portrait("women", 22),
  portrait("men",   32),
  portrait("men",   19),
  portrait("women", 44)
];

/**
 * Swahili greetings we rotate through as a tiny cultural signal in the hero.
 */
export const salutations = [
  { lang: "sw", text: "Karibu",  meaning: "welcome" },
  { lang: "sw", text: "Jambo",   meaning: "hello" },
  { lang: "sw", text: "Habari",  meaning: "how are you" },
  { lang: "sw", text: "Twende",  meaning: "let’s go" }
];
