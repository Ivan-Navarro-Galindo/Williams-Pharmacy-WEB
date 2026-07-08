import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";
import { contact } from "@/content/pages";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact William's Pharmacy on Tower Road, Birkirkara. Phone, email and opening hours. (Placeholder details.)",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={contact.PLACEHOLDER_eyebrow}
          title={contact.PLACEHOLDER_title}
          intro={contact.PLACEHOLDER_intro}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-navy-800 text-xl font-semibold">
              Send us a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-navy-800 text-xl font-semibold">
              Find us
            </h2>
            <address className="text-navy-600 mt-6 leading-relaxed not-italic">
              {site.address.street}
              <br />
              {site.address.locality} {site.address.postalCode}
              <br />
              {site.address.country}
            </address>
            <dl className="text-navy-600 mt-6 space-y-2">
              <div className="flex gap-2">
                <dt className="text-navy-800 font-medium">Phone:</dt>
                <dd>
                  <a
                    className="hover:text-navy-900"
                    href={`tel:${site.PLACEHOLDER_phone.replace(/\s+/g, "")}`}
                  >
                    {site.PLACEHOLDER_phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-navy-800 font-medium">Email:</dt>
                <dd>
                  <a
                    className="hover:text-navy-900"
                    href={`mailto:${site.PLACEHOLDER_email}`}
                  >
                    {site.PLACEHOLDER_email}
                  </a>
                </dd>
              </div>
            </dl>

            {/* Map placeholder — a real Google Maps embed will load here behind a consent gate. */}
            <div
              role="img"
              aria-label="Placeholder for a map showing the pharmacy location"
              className="border-navy-300 bg-navy-50 mt-8 flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed p-6 text-center"
            >
              <p className="text-navy-500 max-w-xs text-sm">
                Map placeholder. A Google Maps embed will appear here once
                cookie consent is added.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
