import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import PlanList from "@/components/PlanList";
import { Further, SlotBand } from "@/components/PlanBits";
import { content, photos } from "@/content";
import { PhoneLink } from "@/components/Actions";

export const metadata: Metadata = {
  title: "Houtrotrenovatie",
  description:
    "Houtrotrenovatie in Borculo. Wat goed in de verf zit, rot niet. Vrijblijvend advies via 0545-273824.",
};

const delen = ["Vensters", "Kozijnen", "Deuren", "Zolders", "Schuren"];

export default function HoutrotPage() {
  return (
    <>
      <PageIntro
        title="Houtrotrenovatie"
        lede="Wat goed in de verf zit, rot niet. Een pas geschilderd huis is nog geen goed beschermd huis."
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="houtrot">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <p>
              Verf is niet alleen een mooie afwerking van uw woning. Het beschermt de houtdelen tegen de
              inwerking van vocht. Dan moet het huis wel goed in de verf zitten. Dat is meer dan een laagje kleur.
            </p>
            <p>
              Houtrot steekt vaak ongemerkt de kop op en is de belangrijkste oorzaak van problemen met kozijnen
              en andere houten onderdelen van uw woning. Tijdig herkennen voorkomt veel ergernis en bespaart u geld.
            </p>
            <h2 className="plan-rule pt-4 text-2xl">Vijf tekens bij een controle</h2>
            <p className="text-loodgrijs">
              Deze punten horen bij een inspectie, hetzelfde soort blik als in een meerjarenplan: niet wachten
              tot de schade groot is.
            </p>
            <ul className="divide-y divide-haarlijn border-y border-haarlijn">
              {content.houtrotSignalen.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <span aria-hidden className="mt-2.5 h-2 w-4 shrink-0 bg-marine" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Voor meer informatie kunt u contact met ons opnemen. Wij informeren u vrijblijvend naar de
              mogelijkheden. Bel <PhoneLink />.
            </p>
          </div>
          <div className="space-y-4">
            <PhotoFrame photo={photos.kozijnDetail} sizes="(max-width: 1024px) 100vw, 420px" />
            <div className="border-t-2 border-marine bg-white px-5 py-5">
              <h2 className="text-2xl">Waar wij naar kijken</h2>
              <ul className="mt-4 space-y-2">
                {delen.map((item) => (
                  <li key={item} className="border-b border-haarlijn py-2 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Further
          links={[
            { href: "/schilderwerk", label: "Schilderwerk dat het hout beschermt" },
            { href: "/winterschilder", label: "Winterschilder voor woning of appartement" },
            { href: "/onderhoudsplan", label: "Inspectie en bijwerken in het meerjarenplan" },
          ]}
        />
      </div>
      <SlotBand title="Vrijblijvend naar de mogelijkheden" text="Wij informeren u vrijblijvend. Geen stille aanvraag: bellen kan direct, een offerte opent uw mailprogramma." />
    </>
  );
}
