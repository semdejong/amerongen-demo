import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { Further, SlotBand } from "@/components/PlanBits";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Glaszetten",
  description:
    "Glaszetten in Borculo: nieuw glas, glasschade, isolatieglas en BENGglas. Bel 0545-273824.",
};

const voor = ["Woonhuizen", "Bedrijfspanden", "Winkelpanden", "Scholen", "Diversen"];

export default function GlaszettenPage() {
  return (
    <>
      <PageIntro
        title="Glaszetten"
        lede="Voor het plaatsen van glas, het herstellen van glasschade of het aanbrengen van isolatie-, zonwerend- of veiligheidsglas."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1fr_360px]" data-section="glaszetten">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="border-t-2 border-planrood pt-3">
              <h2 className="text-lg">Plaatsen</h2>
              <p className="mt-2 text-sm">Nieuw glas in bestaande kozijnen, met de kennis die bij glaszetten hoort.</p>
            </article>
            <article className="border-t-2 border-marine pt-3">
              <h2 className="text-lg">Schade</h2>
              <p className="mt-2 text-sm">Herstel van glasschade, ook in het zakelijke onderhoud naast mutatiewerk.</p>
            </article>
            <article className="border-t-2 border-marine pt-3">
              <h2 className="text-lg">Speciaal glas</h2>
              <p className="mt-2 text-sm">Isolatieglas, zonwerend glas of veiligheidsglas, waaronder BENGglas.</p>
            </article>
          </div>
          <p>Ook voor glaswerkzaamheden kunt u bij ons terecht. Wij bezitten daarvoor de juiste kennis en ervaring.</p>
          <p>
            Nieuw geplaatst glas wordt standaard wind- en waterdicht afgekit. Indien gewenst kunnen wij uw
            kozijnen in hetzelfde bezoek een schilderbeurt geven.
          </p>
          <p>
            Amerongen Schilderwerken is leverancier van BENGglas.{" "}
            <a href="https://www.bengglas.nl" className="underline" rel="noopener">
              Meer informatie over BENGglas
            </a>
            .
          </p>
          <h2 className="plan-rule pt-6 text-2xl">Glaszetten voor</h2>
          <PlanList items={voor} />
          <p>Glasschadeherstel voeren wij ook uit in het zakelijke onderhoud, naast mutatiewerk en calamiteiten.</p>
        </div>
        <PhotoFrame photo={photos.bengglas} sizes="(max-width: 1024px) 100vw, 360px" />
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-4">
        <Further
          links={[
            { href: "/schilderwerk", label: "Kozijnen in hetzelfde bezoek schilderen" },
            { href: "/zakelijk", label: "Glasschadeherstel voor vastgoed" },
            { href: "/offerte", label: "Vrijblijvende offerte" },
          ]}
        />
      </div>
      <SlotBand />
    </>
  );
}
