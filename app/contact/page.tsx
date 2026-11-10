import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { MailLink, PhoneLink } from "@/components/Actions";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Amerongen Schilderwerken, Parallelweg 15, 7271 VB Borculo. Bel 0545-273824 of mail info@amerongenborculo.nl.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact en route"
        lede={`${content.company.legalStyle} ontvangt u op werkdagen op Parallelweg 15 in Borculo.`}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2" data-section="contact">
        <address className="not-italic">
          <h2 className="plan-rule text-2xl">Adres</h2>
          <p className="mt-4 leading-relaxed">
            {content.company.legalStyle}
            <br />
            {content.contact.street}
            <br />
            {content.contact.postalCode} {content.contact.city}
          </p>
          <p className="mt-4">
            Telefoon <PhoneLink />
            <br />
            E-mail <MailLink />
          </p>
          <p className="mt-4">{content.contact.hours}</p>
          <p className="mt-4">KvK {content.contact.kvk}</p>
          <p className="mt-4">
            <a href={content.contact.mapsHref} className="underline">
              {content.contact.mapsLabel}
            </a>
          </p>
          <p className="mt-3">
            <a href={content.contact.facebook} className="underline">
              {content.contact.facebookLabel}
            </a>
          </p>
        </address>
        <div>
          <h2 className="plan-rule text-2xl">Offerte</h2>
          <p className="mt-4 text-loodgrijs">
            Een vrijblijvende offerte opent uw mailprogramma met een ingevuld bericht. Er wordt niets
            automatisch verzonden.
          </p>
          <Link href="/offerte" data-cta="offerte" className="btn btn-rood mt-6">
            Naar het offerteformulier
          </Link>
        </div>
      </div>
    </>
  );
}
