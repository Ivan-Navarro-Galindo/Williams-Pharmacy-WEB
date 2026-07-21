import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100 mt-auto">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-semibold text-white">
            {site.name}
          </p>
          <address className="text-navy-200 mt-4 leading-relaxed not-italic">
            {site.address.street}
            <br />
            {site.address.locality} {site.address.postalCode}
            <br />
            {site.address.country}
          </address>
        </div>

        <div>
          <h2 className="text-gold-300 text-sm font-semibold tracking-[0.15em] uppercase">
            Contact
          </h2>
          <ul className="text-navy-200 mt-4 space-y-2">
            <li>
              <a
                className="hover:text-white"
                href={`tel:${site.PLACEHOLDER_phone.replace(/\s+/g, "")}`}
              >
                {site.PLACEHOLDER_phone}
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href={`mailto:${site.PLACEHOLDER_email}`}
              >
                {site.PLACEHOLDER_email}
              </a>
            </li>
          </ul>
          <h2 className="text-gold-300 mt-6 text-sm font-semibold tracking-[0.15em] uppercase">
            Hours
          </h2>
          <ul className="text-navy-200 mt-4 space-y-1 text-sm">
            {site.PLACEHOLDER_hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-navy-700 border-t">
        <Container className="text-navy-300 py-6 text-sm">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
