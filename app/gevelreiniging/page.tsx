import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import PhotoFrame from "@/components/PhotoFrame";
import { Further, SlotBand } from "@/components/PlanBits";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Gevelreiniging",
  description:
    "Professionele gevelreiniging vanuit Borculo. Een dof geworden gevel weer schoon en opgeknapt. Bel 0545-273824.",
};

const voor = ["Woonhuizen", "Bedrijfspanden", "Winkelpanden", "Scholen"];
const voordelen = [
  "Uw woning krijgt een betere staat van onderhoud",
  "Uw woning wordt meer waard",
  "Uw woning onderscheidt zich positief ten opzichte van andere woningen in de buurt",
];

export default function GevelreinigingPage() {
  return (
    <>
      <PageIntro
        title="Gevelreiniging"
        lede="Gevelreiniging, uw huis knapt ervan op."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_320px]" data-section="gevelreiniging">
        <div className="space-y-4">
          <p>
            Woont u in een oudere woning en ziet u de buitenmuren en voegen steeds donkerder of grauw
            verkleuren? Dat is een normaal proces, dat bij het ene huis sneller gaat dan bij het andere.
            Woont u aan een drukke weg met veel vrachtverkeer, dan verloopt het verouderingsproces sneller.
            Buitenmuren en voegen worden dof van kleur en zien er niet meer verzorgd uit.
          </p>
          <p>Uw woning is dan toe aan professionele gevelreiniging.</p>
          <p>
            Het reinigen van een gevel of een gevelrenovatie kan tijd in beslag nemen en is geen eenvoudige
            klus. Veel mensen huren hier een specialist voor in. Wij helpen u graag en leveren de gevel van
            uw woning weer schoon en opgeknapt op. Vraag naar de mogelijkheden en de kosten.
          </p>
          <h2 className="plan-rule pt-6 text-2xl">Wat u ervan merkt</h2>
          <PlanList items={voordelen} />
          <h2 className="plan-rule pt-6 text-2xl">Gevelreiniging voor</h2>
          <PlanList items={voor} />
        </div>
        <div className="space-y-4">
          <PhotoFrame photo={photos.gevel} sizes="320px" />
          <PhotoFrame photo={photos.villa} sizes="320px" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-4">
        <Further
          links={[
            { href: "/stucwerk", label: "Stucen van een buitenmuur" },
            { href: "/schilderwerk", label: "Buitenschilderwerk" },
            { href: "/projecten", label: "Projecten" },
          ]}
        />
      </div>
      <SlotBand title="Vraag naar de mogelijkheden en de kosten" />
    </>
  );
}
