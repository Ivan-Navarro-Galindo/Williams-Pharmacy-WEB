import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group border-navy-100 hover:border-navy-200 flex flex-col overflow-hidden rounded-2xl border bg-white transition-colors">
      <div className="bg-navy-50 relative aspect-square">
        <Image
          src={product.imageSrc}
          alt={`${product.name} (placeholder image)`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-gold-700 text-xs font-semibold tracking-[0.15em] uppercase">
          {product.category}
        </p>
        <h3 className="font-display text-navy-800 mt-2 text-lg font-semibold">
          {product.name}
        </h3>
        <p className="text-navy-600 mt-2 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </article>
  );
}
