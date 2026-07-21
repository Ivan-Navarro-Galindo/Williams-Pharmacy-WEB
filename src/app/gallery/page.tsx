import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { gallery } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description: "A gallery of William's Pharmacy in Birkirkara.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={gallery.PLACEHOLDER_eyebrow}
          title={gallery.PLACEHOLDER_title}
          intro={gallery.PLACEHOLDER_intro}
        />
        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((image, i) => (
            <li key={image.src}>
              <Reveal delay={(i % 3) * 80}>
                <div className="bg-navy-50 relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.PLACEHOLDER_alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
