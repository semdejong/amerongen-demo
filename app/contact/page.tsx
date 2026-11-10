import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { BelButton, MailLink, OfferteButton, PhoneLink } from "@/components/Actions";
import { WeekStrip } from "@/components/PlanBits";
import { content } from "@/content";

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
        lede={`${content.company.legalStyle} is gevestigd aan de Parallelweg in Borculo. Bellen is de kortste weg; een offerte opent uw mailprogramma.`}
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="contact">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <address className="not-italic border-t-2 border-marine bg-white px-5 py-6">
            <p className="font-mono text-[12px] tracking-wide text-loodgrijs uppercase">Vestiging</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight">
              {content.contact.street}
              <br />
              {content.contact.postalCode} {content.contact.city}
            </p>
            <p className="mt-4 text-loodgrijs">{content.company.legalStyle}</p>
            <dl className="mt-6 divide-y divide-haarlijn border-y border-haarlijn">
              <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-mono text-xs text-loodgrijs uppercase">Telefoon</dt>
                <dd>
                  <PhoneLink />
                </dd>
              </div>
              <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-mono text-xs text-loodgrijs uppercase">E-mail</dt>
                <dd>
                  <MailLink />
                </dd>
              </div>
              <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
                <dt className="font-mono text-xs text-loodgrijs uppercase">KvK</dt>
                <dd>{content.contact.kvk}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <BelButton />
              <OfferteButton tone="lijn" />
            </div>
          </address>
          <div className="space-y-8">
            <WeekStrip />
            <div>
              <h2 className="plan-rule text-2xl">Route en Facebook</h2>
              <p className="mt-4 text-loodgrijs">
                De kaart opent bij Google Maps op dit adres. Facebook is het kanaal waar het bedrijf berichten deelt.
              </p>
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
            </div>
          </div>
        </div>
        <section className="mt-12 border border-haarlijn bg-planpapier px-5 py-6">
          <h2 className="text-2xl">Hoe een offerte hier werkt</h2>
          <p className="mt-3 max-w-2xl text-loodgrijs">
            Dit is een concept. Het formulier vult een bericht en opent uw eigen mailprogramma naar{" "}
            {content.contact.email}. Er wordt niets stil verzonden. Liever direct iemand spreken? Bel{" "}
            <PhoneLink /> op werkdagen tussen 08:00 en 18:00.
          </p>
        </section>
      </div>
    </>
  );
}
