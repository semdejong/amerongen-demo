import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { Further, SlotBand } from "@/components/PlanBits";
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
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="stucwerk">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border-t-2 border-marine bg-white px-5 py-6">
            <h2 className="text-2xl">Binnen: sausklaar</h2>
            <p className="mt-3">
              Het belangrijkste doel is een afwerklaag op muur of plafond, zodat het vlak sausklaar is. Met
              stucwerk kunt u alle kanten op. Naast die gladde laag kiest u bijvoorbeeld Spachtelputz of een
              andere afwerking.
            </p>
          </article>
          <article className="border-t-2 border-marine bg-white px-5 py-6 md:mt-8">
            <h2 className="text-2xl">Buiten: huis en tuin</h2>
            <p className="mt-3">
              Bij een nieuwe uitstraling in de tuin komt stucwerk vaak niet als eerste bij mensen op. Toch kan
              dit een manier zijn voor een snelle make-over van huis en tuin. Het stucen van een buitenmuur is
              een relatief eenvoudige onderneming, waarbij geen grote verbouwing aan te pas komt.
            </p>
          </article>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <h2 className="plan-rule text-2xl">Stucwerk voor</h2>
            <div className="mt-4">
              <PlanList items={voor} />
            </div>
            <p className="mt-4">Informeer naar uw mogelijkheden. Wij zeggen u graag wat bij het pand past.</p>
          </div>
          <PhotoFrame photo={photos.stuc} sizes="320px" />
        </div>
        <Further
          links={[
            { href: "/schilderwerk", label: "Sausen en schilderwerk na het stucen" },
            { href: "/gevelreiniging", label: "Gevelreiniging" },
            { href: "/particulier", label: "Particulier onderhoud" },
          ]}
        />
      </div>
      <SlotBand />
    </>
  );
}
