import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import { CycleSheet, Further, SlotBand } from "@/components/PlanBits";
import Jaarschijf from "@/components/Jaarschijf";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onderhoudsplan",
  description:
    "Meerjaren onderhoudsplan, OnderhoudNL en GlansGarant via Amerongen Schilderwerken in Borculo. Bel 0545-273824.",
};

const voordelen = [
  "U weet van tevoren wat u financieel te wachten staat",
  "Uw huis staat altijd strak in de verf",
  "Meerjarenonderhoud is levensduurverlengend en beter voor het milieu",
  "U hoeft zelf niet de ladder op",
];

const onderhoudNlPunten = [
  "Uw woning wordt niet alleen fraaier",
  "Uw woning krijgt een betere staat van onderhoud",
  "Uw woning wordt meer waard",
  "Uw woning onderscheidt zich positief ten opzichte van andere woningen in de buurt",
];

export default function OnderhoudsplanPage() {
  return (
    <>
      <PageIntro
        title="Meerjaren onderhoudsplan"
        lede="Schilderwerk in combinatie met meerjarige onderhouds-planningen (MJOP), voor particulieren en voor vastgoed."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-12" data-section="onderhoudsplan">
        <div className="border border-haarlijn bg-white px-3 py-5 sm:px-6">
          <Jaarschijf variant="band" />
          <p className="mt-3 font-mono text-[12px] text-loodgrijs">
            Jaar 1 in de verf. Elk jaar controle en onderhoud. Na vijf of zes jaar een complete herschilderbeurt.
          </p>
          <div className="mt-6">
            <CycleSheet />
          </div>
        </div>

        <section data-section="mjop" className="space-y-4">
          <h2 className="plan-rule text-3xl">MJOP</h2>
          <p>
            Deze werkzaamheden voeren wij uit bij particulieren, nieuwbouw, utiliteitsbouw, zorgobjecten,
            VvE-objecten en woningbouwverenigingen. De betrokkenheid tijdens de uitvoering en de directe
            communicatie met de opdrachtgever zorgen voor de kwaliteit die van ons wordt verwacht. Wij zijn en
            werken open en transparant.
          </p>
          <p>
            Ook zijn wij gespecialiseerd in mutatiewerk. Daardoor kunt u voor grotere werken en speciale
            projecten bij ons terecht.{" "}
            <Link href="/zakelijk" className="underline">
              Lees het zakelijke aanbod
            </Link>
            .
          </p>
          <PlanList items={content.doelgroepen} />
        </section>

        <section data-section="onderhoudnl" className="space-y-4">
          <h2 className="plan-rule text-3xl">Aangesloten bij OnderhoudNL</h2>
          <p>
            Amerongen Schilderwerken is als onderhoudsbedrijf aangesloten bij OnderhoudNL. De schilders- en
            onderhoudsbedrijven die daarbij zijn aangesloten, luisteren naar uw ideeën en wensen. Vakkennis en
            jarenlange ervaring staan centraal.
          </p>
          <PlanList items={onderhoudNlPunten} />
          <p>
            Met een meerjarenonderhoudsplan wordt de woning volgens hun tekst goed onderhouden. Bij de start
            kan, afhankelijk van de kwaliteit van het huidige schilderwerk, iets meer werk nodig zijn. Daarna
            draait het schema om tijdige preventieve maatregelen. De conditie wordt bijgehouden, zodat grote
            dure beurten worden voorkomen.
          </p>
          <p>
            Het onderhoudsschema bestaat uit volledige schilderbeurten, afgewisseld met preventieve inspectie
            en/of bijwerkbeurten. De kosten op lange termijn zijn lager. OnderhoudNL schrijft bij dit werk over
            een btw-tarief van 9% — in hun tekst een extra voordeel van 12 procentpunt — en over een voordeel
            dat, afhankelijk van schema en materialen, kan oplopen tot wel 25%. Dat is hun informatie bij het
            meerjarenplan, geen aparte actie van ons.
          </p>
          <PlanList items={voordelen} />
        </section>

        <section data-section="glansgarant" className="space-y-4">
          <h2 className="plan-rule text-3xl">Exclusief partner van GlansGarant</h2>
          <p>
            GlansGarant is het meerjarige onderhoudsplan waarbij vanaf jaar 1 de woning in de verf staat, met
            elk jaar controle en onderhoud, en na vijf of zes jaar een complete herschilderbeurt. Zonder grote
            uitgaven ineens, tegen een vast bedrag per maand. Amerongen Schilderwerken is exclusief partner van
            GlansGarant.
          </p>
          <p>
            In de regio Borculo, Lochem, Ruurlo en Vorden werkt GlansGarant Berkelland-Lochem B.V. samen met
            de vakmensen van {content.company.partnershipStyle}.
          </p>
          <blockquote className="border-t-2 border-marine bg-white px-4 py-4">
            <p>
              “Met vele jaren ervaring durven we wel te zeggen dat meerjaren onderhoud bij ons in goede handen
              is.”
            </p>
            <p className="mt-3">
              “Wij geloven in deze formule. Niet alleen door de topverven die we gebruiken en het
              gecertificeerde onderhoudsabonnement, maar ook omdat u kunt kiezen voor een vaste maandelijkse
              betaling. Daardoor wordt vakwerk weer betaalbaar en is kwalitatief schilderwerk voor elke
              woningbezitter bereikbaar.”
            </p>
            <footer className="mt-3 text-loodgrijs">Walter Amerongen</footer>
          </blockquote>
          <p>
            GlansGarant schrijft dat, net als Amerongen, ruim 75 schilders in Nederland voor deze kwaliteit
            hebben gekozen, en dat alleen perfect schilderwerk GlansGarant-schilderwerk is: niet tevreden
            betekent overschilderen. Zo houdt GlansGarant naar eigen zeggen tien jaar tevreden klanten. Een
            offerte vraagt u aan bij GlansGarant Berkelland-Lochem B.V., of via onze{" "}
            <Link href="/offerte" data-cta="offerte" className="underline">
              vrijblijvende offerte
            </Link>
            .
          </p>
        </section>
        <Further
          links={[
            { href: "/zakelijk", label: "Vastgoed en corporaties" },
            { href: "/particulier", label: "Particulieren en GlansGarant" },
            { href: "/houtrot", label: "Waarom inspectie houtrot voorkomt" },
          ]}
        />
      </div>
      <SlotBand title="Een plan voor de komende jaren" />
    </>
  );
}
