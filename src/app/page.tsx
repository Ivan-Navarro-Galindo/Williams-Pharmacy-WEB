import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { home } from "@/content/pages";

export default function Home() {
  return (
    <>
      {/* Editorial split hero. Pulled up under the sticky, transparent header
          (matching its h-16/h-20 height) so the navy field sits behind it. */}
      <section className="bg-navy-900 relative -mt-16 text-white sm:-mt-20">
        <Container className="grid items-center gap-12 pt-32 pb-24 sm:pt-40 lg:grid-cols-12 lg:gap-8 lg:pt-48 lg:pb-32">
          <div className="lg:col-span-6">
            <p className="text-gold-300 text-sm font-semibold tracking-[0.18em] uppercase">
              {home.PLACEHOLDER_eyebrow}
            </p>
            <h1 className="font-display mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              {home.PLACEHOLDER_title}
            </h1>
            <p className="text-navy-100 mt-6 max-w-xl text-lg leading-relaxed">
              {home.PLACEHOLDER_lede}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Visit us</Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15">
              <Image
                src="/images/gallery/Mueble.jpeg"
                alt="Shelves of medicines and health products inside William's Pharmacy"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Intro + highlights (numbered editorial columns, not the icon-card cliché). */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Welcome"
            title="A pharmacy that knows its neighbours"
            intro={home.PLACEHOLDER_intro}
          />
          <div className="border-navy-100 mt-16 grid gap-12 border-t pt-12 md:grid-cols-3">
            {home.highlights.map((item, i) => (
              <Reveal key={item.PLACEHOLDER_title} delay={i * 80}>
                <p className="font-display text-gold-500 text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-navy-800 mt-4 text-xl font-semibold">
                  {item.PLACEHOLDER_title}
                </h3>
                <p className="text-navy-600 mt-3 leading-relaxed">
                  {item.PLACEHOLDER_body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
