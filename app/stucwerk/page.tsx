import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Stucwerk",
  description:
    "Stucwerk in Borculo: wanden en plafonds sausklaar, Spachtelputz en buitenmuren. Bel 0545-273824.",
};

const voor = [
  "Bedrijfspanden",
  "Woningbouw",
  "Nieuwbouw",
  "VvE’s",
  "Monumenten",
  "Hoogbouw",
  "Renovatie van woningen",
];

export default function StucwerkPage() {
  return (
    <>
      <PageIntro
        title="Stucwerk"
        lede="Het belangrijkste doel van stucwerk is het aanbrengen van een afwerklaag en het sausklaar maken van een muur of plafond."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_320px]" data-section="stucwerk">
        <div className="space-y-4">
          <p>
            Met stucwerk kunt u alle kanten op. Naast een sausklare afwerklaag kunt u kiezen voor
            bijvoorbeeld Spachtelputz en andere afwerkingen.
          </p>
          <p>
            Bij een nieuwe uitstraling in de tuin komt stucwerk vaak niet als eerste bij mensen op. Toch kan
            dit een manier zijn voor een snelle make-over van huis en tuin. Het stucen van een buitenmuur is
            een relatief eenvoudige onderneming, waarbij geen grote verbouwing aan te pas komt. Informeer naar
            uw mogelijkheden.
          </p>
          <h2 className="plan-rule pt-6 text-2xl">Stucwerk voor</h2>
          <PlanList items={voor} />
        </div>
        <PhotoFrame photo={photos.stuc} sizes="320px" />
      </div>
    </>
  );
}
