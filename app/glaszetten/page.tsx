import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
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
    </>
  );
}
