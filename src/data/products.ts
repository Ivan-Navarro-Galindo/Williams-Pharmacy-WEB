/**
 * Placeholder product data.
 * Always read products through getProducts() — never import the raw array.
 * This indirection lets us swap the source (CMS, API) later without touching callers.
 */

export type ProductCategory = "Wellness" | "Skincare" | "Mother & Baby";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  imageSrc: string;
};

const products: Product[] = [
  {
    id: "wellness-multivitamin",
    name: "PLACEHOLDER Daily Multivitamin",
    category: "Wellness",
    description:
      "Placeholder description of a daily multivitamin. Replace with the real product name and details.",
    imageSrc: "/images/products/p1.svg",
  },
  {
    id: "wellness-vitamin-c",
    name: "PLACEHOLDER Vitamin C Tablets",
    category: "Wellness",
    description:
      "Placeholder description of a vitamin C supplement. Replace with real copy in store voice.",
    imageSrc: "/images/products/p2.svg",
  },
  {
    id: "skincare-moisturiser",
    name: "PLACEHOLDER Daily Moisturiser",
    category: "Skincare",
    description:
      "Placeholder description of a facial moisturiser. Replace with the real product details.",
    imageSrc: "/images/products/p3.svg",
  },
  {
    id: "skincare-sunscreen",
    name: "PLACEHOLDER SPF 50 Sunscreen",
    category: "Skincare",
    description:
      "Placeholder description of a high-protection sunscreen — useful under the Maltese sun.",
    imageSrc: "/images/products/p4.svg",
  },
  {
    id: "baby-lotion",
    name: "PLACEHOLDER Gentle Baby Lotion",
    category: "Mother & Baby",
    description:
      "Placeholder description of a gentle baby lotion. Replace with the real product details.",
    imageSrc: "/images/products/p5.svg",
  },
  {
    id: "baby-formula",
    name: "PLACEHOLDER Infant Formula",
    category: "Mother & Baby",
    description:
      "Placeholder description of an infant formula. Replace with the real product details.",
    imageSrc: "/images/products/p6.svg",
  },
];

/** The list of categories present in the catalog, in display order. */
export const categories: ProductCategory[] = [
  "Wellness",
  "Skincare",
  "Mother & Baby",
];

/** Single source of truth for reading products. */
export function getProducts(): Product[] {
  return products;
}
