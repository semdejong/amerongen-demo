import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import { Further, SlotBand } from "@/components/PlanBits";
import { content, photos } from "@/content";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Amerongen Schilderwerken in Borculo: een schildersbedrijf met een lange historie, VCA* en OnderhoudNL. Bel 0545-273824.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageIntro
        title="Over ons"
        lede="Een schildersbedrijf met een lange historie en hart voor haar klanten."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[300px_1fr]" data-section="over-ons">
        <div>
          <PhotoFrame photo={photos.schilderKozijn} sizes="303px" />
          <div className="mt-4 flex gap-4">
            <Image src="/img/badges/vca.png" alt="VCA* gecertificeerd" width={120} height={120} unoptimized style={{ width: "auto", height: "72px" }} />
            <Image
              src="/img/badges/onderhoud-nl-garantie.png"
              alt="Onderhoud NL Garantie"
              width={120}
              height={130}
              unoptimized
              style={{ width: "auto", height: "72px" }}
            />
          </div>
        </div>
        <div className="space-y-4">
          <p>
            Door onze vakkundige medewerkers en het plezier waarmee wij het vak uitoefenen, bent u verzekerd
            van kwalitatief goed werk. Kenmerkend is onze persoonlijke benadering. Wij nemen de tijd voor een
            advies op maat en een zo helder mogelijk uitgewerkte offerte. Zo weet u als klant waar u aan toe bent.
          </p>
          <h2 className="plan-rule pt-4 text-2xl">Onze visie</h2>
          <p>
            Binnen het aangenomen project werkt {content.company.name} nauw samen met de opdrachtgever en
            eventueel betrokken partijen. Doelgericht samenwerken en teamvaardigheden leveren meer werkplezier
            op en minder frustratie. Er kan meer begrip worden opgebracht voor elkaar en voor elkaars belangen,
            zodat ieder werkt aan het gezamenlijke resultaat.
          </p>
          <p>De samenwerking is transparant, en uw tevredenheid bepaalt de continuïteit. Dat is onze visie van een duurzame en betrouwbare relatie.</p>
          <h2 className="plan-rule pt-4 text-2xl">Waar wij voor staan</h2>
          <ul className="divide-y divide-haarlijn border-y border-haarlijn">
            {content.pillars.map((pillar) => (
              <li key={pillar.title} className="py-3">
                <span className="font-display font-semibold">{pillar.title}. </span>
                {pillar.text}
              </li>
            ))}
          </ul>
          <h2 className="plan-rule pt-4 text-2xl">Klantenvertellen</h2>
          <p>
            Enkele malen mochten wij een Klantenvertellen.nl-award in ontvangst nemen, waaronder de award van
            2017. Op die prestatie zijn wij trots. Uw waardering betekent veel voor het hele team en geeft de
            wil om het werk op een blijvend hoog niveau uit te voeren.
          </p>
          <p>
            Wij zijn VCA*-gecertificeerd en aangesloten bij OnderhoudNL. {content.company.legalStyle} is
            gevestigd aan {content.contact.street}, {content.contact.postalCode} {content.contact.city}. KvK{" "}
            {content.contact.kvk}.
          </p>
          <Further
            links={[
              { href: "/referenties", label: "Opdrachtgevers" },
              { href: "/zakelijk", label: "Prowonen en Resultaatgericht Samenwerken" },
              { href: "/onderhoudsplan", label: "OnderhoudNL en GlansGarant" },
              { href: "/contact", label: "Contact en route" },
            ]}
          />
        </div>
      </div>
      <SlotBand />
    </>
  );
}
