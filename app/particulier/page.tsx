import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { Further, SlotBand } from "@/components/PlanBits";
import { content, photos } from "@/content";

export const metadata: Metadata = {
  title: "Particulier",
  description:
    "Schilderwerk, houtrot, stucwerk, glas en gevelreiniging voor woningen in de Achterhoek. Amerongen Schilderwerken, Borculo.",
};

const routes = [
  { href: "/schilderwerk", label: "Schilderwerk binnen en buiten" },
  { href: "/houtrot", label: "Houtrotrenovatie" },
  { href: "/stucwerk", label: "Stucwerk" },
  { href: "/glaszetten", label: "Glaszetten" },
  { href: "/gevelreiniging", label: "Gevelreiniging" },
  { href: "/winterschilder", label: "Winterschilder" },
  { href: "/onderhoudsplan", label: "Meerjaren onderhoudsplan en GlansGarant" },
];

export default function ParticulierPage() {
  return (
    <>
      <PageIntro
        title="Particulier schilderwerk"
        lede="Als middelgroot, full-service schildersbedrijf zijn wij gespecialiseerd in renovatie en totaalonderhoud van woningen, bijgebouwen en garages."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-12" data-section="particulier">
        <div className="grid gap-8 md:grid-cols-2">
          <PhotoFrame photo={photos.herenhuis} sizes="(max-width: 768px) 100vw, 560px" />
          <PhotoFrame photo={photos.luiken} sizes="(max-width: 768px) 100vw, 560px" />
        </div>
        <p>
          Dat betekent voor u als particuliere klant: heldere communicatie, uitstekende voorbereiding,
          uitvoering en nazorg, een professionele en betrouwbare werkwijze, een prettige relatie, ervaren
          vakkrachten en duurzaamheid in het werk, de materialen en de leveranciers.
        </p>
        <p>Kan uw huis een opknap- of bijwerkbeurt gebruiken? Amerongen Schilderwerken staat voor u klaar, met een heldere offerte.</p>
        <h2 className="plan-rule text-3xl">Voor de woning</h2>
        <ul className="divide-y divide-haarlijn border-y border-haarlijn">
          {routes.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-4 font-display text-xl font-semibold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <section className="space-y-4">
          <h2 className="plan-rule text-3xl">GlansGarant in de regio</h2>
          <p>
            In Borculo, Lochem, Ruurlo en Vorden werkt GlansGarant Berkelland-Lochem B.V. samen met{" "}
            {content.company.partnershipStyle}. Vanaf jaar 1 staat de woning in de verf, elk jaar volgt
            controle en onderhoud, en na vijf of zes jaar een complete herschilderbeurt, tegen een vast bedrag
            per maand.
          </p>
          <blockquote className="border-t-2 border-marine pt-4">
            <p>“Met vele jaren ervaring durven we wel te zeggen dat meerjaren onderhoud bij ons in goede handen is.”</p>
            <p className="mt-3">
              “Wij geloven in deze formule. Niet alleen door de topverven die we gebruiken en het
              gecertificeerde onderhoudsabonnement, maar ook omdat u kunt kiezen voor een vaste maandelijkse
              betaling. Daardoor wordt vakwerk weer betaalbaar en is kwalitatief schilderwerk voor elke
              woningbezitter bereikbaar.”
            </p>
            <footer className="mt-2 text-loodgrijs">Walter Amerongen</footer>
          </blockquote>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl">Houtrot in het kort</h2>
          <PlanList items={content.houtrotSignalen} />
          <p>
            Wij informeren u vrijblijvend naar de mogelijkheden.{" "}
            <Link href="/houtrot" className="underline">
              Meer over houtrotrenovatie
            </Link>
            .
          </p>
        </section>
        <Further
          links={[
            { href: "/winterschilder", label: "Winterschilder" },
            { href: "/onderhoudsplan", label: "GlansGarant en het meerjarenplan" },
            { href: "/projecten", label: "Buitenschilderwerk in beeld" },
          ]}
        />
      </div>
      <SlotBand title="Een opknap- of bijwerkbeurt" />
    </>
  );
}
