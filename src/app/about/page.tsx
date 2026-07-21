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
          <div className="lg:col-span-6">
            <div className="bg-navy-50 relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/storefront.svg"
                alt="Placeholder image of the pharmacy storefront on Tower Road"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
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
