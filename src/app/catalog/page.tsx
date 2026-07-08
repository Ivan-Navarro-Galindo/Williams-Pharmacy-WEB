import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CatalogGrid from "@/components/catalog/CatalogGrid";
import { getProducts, categories } from "@/data/products";
import { catalog } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Catalog",
  description:
    "A placeholder selection of products stocked at William's Pharmacy in Birkirkara. Informational only — no online ordering.",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={catalog.PLACEHOLDER_eyebrow}
          title={catalog.PLACEHOLDER_title}
          intro={catalog.PLACEHOLDER_intro}
        />
        <div className="mt-16">
          <CatalogGrid products={getProducts()} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
