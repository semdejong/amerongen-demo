import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { MailLink, PhoneLink } from "@/components/Actions";

const links = [
  { label: "Diensten", href: "/diensten" },
  ...content.serviceNav,
  ...content.nav,
  { label: "Particulier", href: "/particulier" },
  { label: "Offerte", href: "/offerte" },
  { label: "Privacy", href: "/privacy" },
];

export default function SiteFooter() {
  return (
    <footer data-section="footer" className="border-t border-haarlijn bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <Image
            src={content.company.logo}
            alt={content.company.logoWordmark}
            width={content.company.logoWidth}
            height={content.company.logoHeight}
            unoptimized
            style={{ width: "auto", height: "52px", maxWidth: "190px" }}
          />
          <p className="mt-4 text-sm leading-relaxed text-loodgrijs">{content.company.tagline}</p>
          <p className="mt-4 text-sm">
            {content.company.legalStyle}
            <br />
            {content.footer.kvk}
          </p>
        </div>
        <div>
          <h2 className="plan-rule text-lg">Contact</h2>
          <address className="mt-4 text-base not-italic leading-relaxed">
            {content.contact.street}
            <br />
            {content.contact.postalCode} {content.contact.city}
            <br />
            <PhoneLink />
            <br />
            <MailLink />
            <br />
            {content.contact.hours}
          </address>
          <p className="mt-3">
            <a href={content.contact.facebook} className="underline decoration-haarlijn underline-offset-4">
              {content.contact.facebookLabel}
            </a>
          </p>
        </div>
        <div>
          <h2 className="plan-rule text-lg">Pagina’s</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-base">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline decoration-haarlijn underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-haarlijn">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-5 py-6">
          <Image
            src="/img/badges/vca.png"
            alt="VCA* gecertificeerd"
            width={120}
            height={120}
            unoptimized
            style={{ width: "auto", height: "56px" }}
          />
          <Image
            src="/img/badges/onderhoud-nl-garantie.png"
            alt="Onderhoud NL Garantie"
            width={120}
            height={130}
            unoptimized
            style={{ width: "auto", height: "56px" }}
          />
          <p className="text-sm text-loodgrijs">
            <a href="https://sleads.nl" target="_blank" rel="noopener" className="underline decoration-haarlijn underline-offset-4">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
