/**
 * Central site configuration: navigation and business information.
 * Values prefixed PLACEHOLDER_ must be replaced by the pharmacist before launch.
 * Keeping copy here (not scattered in components) makes future i18n straightforward.
 */

export type NavItem = {
  href: string;
  label: string;
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const site = {
  name: "William's Pharmacy",
  tagline: "Your Health First Since 1882",
  // Real, public address of the pharmacy.
  address: {
    street: "Tower Road",
    locality: "Birkirkara",
    postalCode: "BKR 4018",
    country: "Malta",
    // Coordinates from the pharmacy's Google Maps listing, used for the map embed / directions link.
    lat: 35.8982022,
    lng: 14.4780673,
    // Google's internal place id (from the listing URL), used to embed the exact map card below.
    placeCid: "0x130e5bfb29ee8863:0x26d85f5958ef7976",
    // Google's public Place ID, used so "Open in Google Maps" opens the actual
    // listing (name, reviews, photo) instead of a bare pair of coordinates.
    placeId: "ChIJY4juKftbDhMRdnnvWFlf2CY",
  },
  // Replace the placeholders below with the real contact details.
  PLACEHOLDER_phone: "+356 0000 0000",
  PLACEHOLDER_email: "hello@example.com",
  // Live production URL, used for metadata, canonical links, the sitemap and
  // robots.txt. Update if a custom domain is connected in Vercel later.
  url: "https://williams-pharmacy-web.vercel.app",
  // Content of the "google-site-verification" meta tag from Google Search
  // Console (Settings > Ownership verification > HTML tag). Leave empty until
  // the property is created — the tag is only rendered when this is set.
  PLACEHOLDER_googleSiteVerification: "",
  // Opening hours are placeholders — confirm with the pharmacy.
  PLACEHOLDER_hours: [
    { days: "Monday – Friday", time: "08:00 – 19:00" },
    { days: "Saturday", time: "08:00 – 13:00" },
    { days: "Sunday & Public Holidays", time: "Closed" },
  ],
} as const;

/** Machine-readable opening hours for JSON-LD (placeholders — confirm real hours). */
export const openingHoursSpec = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "19:00",
  },
  {
    days: ["Saturday"],
    opens: "08:00",
    closes: "13:00",
  },
] as const;
