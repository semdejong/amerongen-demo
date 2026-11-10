import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectGallery from "@/components/ProjectGallery";
import { SlotBand } from "@/components/PlanBits";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Projecten van Amerongen Schilderwerken, waaronder korenmolen De Ster in Geesteren (2017). Bel 0545-273824.",
};

const groups = [
  {
    id: "monumentaal",
    title: "Speciaal en monumentaal",
    intro:
      "Veel speciale of monumentale panden hebben periodiek onderhoud nodig. Elke opdracht vraagt een andere aanpak en techniek. Onze schilders zetten elke kwaststreek met zorg en oog voor kwaliteit.",
    photos: [photos.korenmolen],
  },
  {
    id: "buitenschilderwerk",
    title: "Buitenschilderwerk",
    intro:
      "Verf beschermt houtdelen tegen vocht. Binnenschilderwerk is daarbij net zo belangrijk als de laag die het weer ziet.",
    photos: [photos.herenhuis, photos.luiken, photos.dakkapel, photos.kozijnDetail],
  },
  {
    id: "zakelijk",
    title: "Zakelijk vastgoed",
    intro:
      "Renovatie en totaalonderhoud van woningen, bedrijfspanden en overheidsgebouwen, vaak in een meerjarenplan.",
    photos: [photos.bedrijfsgebouw, photos.villa, photos.schilderDeur],
  },
  {
    id: "gevel",
    title: "Gevelreiniging",
    intro: "Een grauw geworden gevel wordt weer schoon en opgeknapt opgeleverd.",
    photos: [photos.gevel],
  },
  {
    id: "stuc",
    title: "Stucwerk",
    intro: "Een afwerklaag die sausklaar is, of stuc op een buitenmuur als make-over van huis en tuin.",
    photos: [photos.stuc],
  },
  {
    id: "glas",
    title: "Glaszetten",
    intro:
      "Nieuw glas, glasschade of isolatie-, zonwerend- of veiligheidsglas, standaard wind- en waterdicht afgekit. Amerongen Schilderwerken is leverancier van BENGglas.",
    photos: [photos.bengglas],
  },
  {
    id: "winter",
    title: "Winterschilder",
    intro: "Onderhoudsschilderwerk voor woning of appartement, buiten én binnen.",
    photos: [photos.winter, photos.winterGevel],
  },
  {
    id: "prowonen",
    title: "Intentieverklaring Prowonen",
    intro:
      "Ondertekening met Prowonen, Reukers schilders, Gebr. van der Geest en Amerongen Schilderwerken. Op de foto: dhr. J. Stoel, W. Linthorst, Manfred Reukers, Dick van der Geest en Walter Amerongen.",
    photos: [photos.prowonen],
  },
];

export default function ProjectenPage() {
  return (
    <>
      <PageIntro
        title="Projecten"
        lede="Een selectie uit het uitgevoerde werk. Bij de korenmolen staat het jaartal dat bij het project hoort; de overige foto’s blijven bij de werkzaamheid."
      />
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <ProjectGallery groups={groups} />
      </div>
      <SlotBand title="Een project als het uwe bespreken" />
    </>
  );
}
