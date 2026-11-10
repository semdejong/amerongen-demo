import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { content, photos } from "@/content";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Professioneel schilderwerk voor binnen en buiten vanuit Borculo, inclusief verfspuiten. Bel 0545-273824.",
};

const voor = [
  "Bedrijfspanden",
  "Woningbouw",
  "VvE’s",
  "Monumenten",
  "Hoogbouw",
  "Huizen, schuren en garages",
];

export default function SchilderwerkPage() {
  return (
    <>
      <PageIntro
        title="Professioneel schilderwerk voor binnen en buiten"
        lede="Binnenschilderwerk is net zo belangrijk als buitenschilderwerk. Ook als de buitenzijde er prima uitziet."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_280px]" data-section="schilderwerk">
        <div className="space-y-4">
          <p>
            Vocht in huis wil naar buiten, daar is de luchtvochtigheid meestal lager. Wanneer uw kozijnen
            aan de binnenzijde niet goed in de verf staan, of de naden zijn slecht afgedicht, kan het vocht
            in huis via de kozijnen naar buiten. Ook als er aan de buitenzijde een prima verflaag op zit.
          </p>
          <p>
            Binnenschilderwerk is dus net zo belangrijk als buitenschilderwerk, en een must voor het
            onderhoud van het buitenschilderwerk.
          </p>
          <h2 className="plan-rule pt-6 text-2xl">Verfspuiten</h2>
          <p>
            Amerongen Schilderwerken is gespecialiseerd in het verfspuiten van zowel muurverf als
            plafondverf en natuurlijk de traditionele verven. Een greep uit de producten die wij spuiten:
          </p>
          <PlanList items={content.spuitwerk} />
          <h2 className="plan-rule pt-6 text-2xl">Schilderwerk voor</h2>
          <PlanList items={voor} />
        </div>
        <PhotoFrame photo={photos.kozijnDetail} sizes="280px" />
      </div>
    </>
  );
}
