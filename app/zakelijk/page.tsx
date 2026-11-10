import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import Jaarschijf from "@/components/Jaarschijf";
import PhotoFrame from "@/components/PhotoFrame";
import { content, photos } from "@/content";

export const metadata: Metadata = {
  title: "Zakelijk",
  description:
    "MJOP, mutatiewerk en vastgoedonderhoud voor corporaties, VvE’s en instellingen. Amerongen Schilderwerken, Borculo. Bel 0545-273824.",
};

export default function ZakelijkPage() {
  return (
    <>
      <PageIntro
        title="Vastgoed en corporaties"
        lede="Een middelgroot, full-service schildersbedrijf. Specialisatie: renovatie en totaalonderhoud van woningen, bedrijfspanden en overheidsgebouwen."
      />
      <div className="mx-auto max-w-6xl space-y-12 px-5 py-12" data-section="zakelijk">
        <div className="border border-haarlijn bg-white px-3 py-5 sm:px-6">
          <Jaarschijf variant="band" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p>
              Wij staan voor heldere communicatie, uitstekende voorbereiding, uitvoering en nazorg, een
              professionele en betrouwbare werkwijze, een prettige relatie met opdrachtgevers, ervaren
              vakkrachten en duurzaamheid in het werk, de materialen en de leveranciers.
            </p>
            <p>Dat doen wij voor ondernemers, particulieren, vastgoedbeheerders en (semi)overheid.</p>
            <p>
              Amerongen Schilderwerken is een innovatieve en betrouwbare partner met een visie op onderhoud.
              Uw vastgoed behoudt haar waarde met de juiste uitstraling. Wij nemen deze onderhoudszorg graag
              uit handen. Het team bestaat uit enthousiaste, vakkundige en betrokken medewerkers.
            </p>
          </div>
          <PhotoFrame photo={photos.bedrijfsgebouw} sizes="(max-width: 1024px) 100vw, 400px" />
        </div>

        <section>
          <h2 className="plan-rule text-3xl">Wat wij voor u kunnen betekenen</h2>
          <div className="mt-6">
            <PlanList items={content.zakelijkTaken} />
          </div>
        </section>

        <section>
          <h2 className="plan-rule text-3xl">Meerjarige onderhouds-planningen</h2>
          <p className="mt-4">
            Schilderwerk in combinatie met een MJOP, voor deze doelgroepen. Tijdens de uitvoering blijft de
            directie betrokken en is de communicatie direct.
          </p>
          <div className="mt-4">
            <PlanList items={content.doelgroepen} />
          </div>
          <p className="mt-4">
            <Link href="/onderhoudsplan" className="underline">
              Het onderhoudsplan, OnderhoudNL en GlansGarant
            </Link>
          </p>
        </section>

        <section id="prowonen" data-section="prowonen" className="grid gap-8 bg-marine px-5 py-8 text-white md:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <h2 className="border-t-2 border-white pt-3 text-3xl">Prowonen</h2>
            <p className="inline-flex items-center gap-2 border border-white px-2 py-1 font-mono text-[12px]">
              <span className="font-semibold">RGS</span>
              Resultaatgericht Samenwerken
            </p>
            <p>
              Woningcorporatie Prowonen, die woningen verhuurt in de Achterhoek, heeft eind november de
              intentieverklaring met drie onderhoudsbedrijven getekend om het schilderwerk van het vastgoed op
              basis van Resultaatgericht Samenwerken de komende jaren uit te voeren.
            </p>
            <p>
              Na een selectieproces met diverse schilderonderhoudsbedrijven zijn Van Amerongen schilderwerken,
              Reukers schilders en Gebr. van der Geest schilder- en vastgoedonderhoud geselecteerd. Amerongen
              Schilderwerken is één van deze drie.
            </p>
            <p>
              Op de foto staan, achterste rij van links naar rechts: dhr. J. Stoel (manager vastgoed) en W.
              Linthorst (contractbeheerder). Voorste rij van links naar rechts: Manfred Reukers, Dick van der
              Geest en Walter Amerongen.
            </p>
          </div>
          <PhotoFrame photo={photos.prowonen} sizes="280px" />
        </section>

        <PhotoFrame photo={photos.villa} sizes="(max-width: 768px) 100vw, 960px" />
      </div>
    </>
  );
}
