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
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const site = {
  name: "William's Pharmacy",
  // Real, public address of the pharmacy.
  address: {
    street: "Tower Road",
    locality: "Birkirkara",
    postalCode: "BKR 4018",
    country: "Malta",
  },
  // Replace the placeholders below with the real contact details.
  PLACEHOLDER_phone: "+356 0000 0000",
  PLACEHOLDER_email: "hello@example.com",
  // Absolute site URL used for metadata / sitemap. Update to the live domain.
  PLACEHOLDER_url: "https://www.williams-pharmacy.example",
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
