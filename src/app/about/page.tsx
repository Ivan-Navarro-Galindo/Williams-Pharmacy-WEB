import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "About William's Pharmacy — a community pharmacy on Tower Road, Birkirkara.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              as="h1"
              eyebrow={about.PLACEHOLDER_eyebrow}
              title={about.PLACEHOLDER_title}
              intro={about.PLACEHOLDER_intro}
            />
            <div className="text-navy-600 mt-8 space-y-5">
              {about.PLACEHOLDER_body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-navy-50 relative aspect-16/10 overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery/Entrada.jpeg"
                alt="The entrance of William's Pharmacy on Tower Road, Birkirkara"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-50 relative aspect-3/4 w-24 shrink-0 overflow-hidden rounded-2xl sm:w-28">
                <Image
                  src="/images/gallery/Estante.jpeg"
                  alt="A framed portrait of the pharmacy's founder, on display in store"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <p className="text-navy-600 text-sm leading-relaxed">
                A portrait of our founder still watches over the shop floor —
                part of the story since 1882.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {about.values.map((value, i) => (
              <Reveal key={value.PLACEHOLDER_title} delay={i * 80}>
                <h2 className="font-display text-navy-800 text-xl font-semibold">
                  {value.PLACEHOLDER_title}
                </h2>
                <p className="text-navy-600 mt-3 leading-relaxed">
                  {value.PLACEHOLDER_body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
