import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Team",
  description:
    "Meet the pharmacists and staff at William's Pharmacy in Birkirkara. (Placeholder names and photos.)",
  path: "/team",
});

export default function TeamPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={team.PLACEHOLDER_eyebrow}
          title={team.PLACEHOLDER_title}
          intro={team.PLACEHOLDER_intro}
        />
        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member, i) => (
            <li key={member.PLACEHOLDER_name}>
              <Reveal delay={i * 60}>
                <div className="bg-navy-50 relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={member.imageSrc}
                    alt={`Placeholder portrait of ${member.PLACEHOLDER_name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="font-display text-navy-800 mt-4 text-lg font-semibold">
                  {member.PLACEHOLDER_name}
                </h2>
                <p className="text-navy-600 text-sm">
                  {member.PLACEHOLDER_role}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
