"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/catalog/ProductCard";
import type { Product, ProductCategory } from "@/data/products";

type Filter = "All" | ProductCategory;

/**
 * Client-side category filter over the catalog.
 * Adding a category is trivial: it appears automatically from the products passed in.
 */
export default function CatalogGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [active, setActive] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...categories];

  const visible = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active, products],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-3"
      >
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-navy-200 text-navy-700 hover:border-navy-400"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
