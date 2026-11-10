import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PlanList from "@/components/PlanList";
import { content } from "@/content";
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
      <div className="mx-auto max-w-6xl space-y-4 px-5 py-12" data-section="houtrot">
        <p>
          Verf is niet alleen een mooie afwerking van uw woning, het beschermt ook de houtdelen tegen de
          inwerking van vocht. Dan moet het huis wel goed in de verf zitten. Dat is meer dan een laagje kleur.
        </p>
        <p>
          Houtrot steekt vaak ongemerkt de kop op en is de belangrijkste oorzaak van problemen met kozijnen
          en andere houten onderdelen van uw woning. Tijdig herkennen voorkomt veel ergernis en bespaart u geld.
        </p>
        <h2 className="plan-rule pt-6 text-2xl">Houtrot herkennen</h2>
        <PlanList items={content.houtrotSignalen} />
        <p>
          Voor meer informatie kunt u contact met ons opnemen. Wij informeren u vrijblijvend naar de
          mogelijkheden. Bel <PhoneLink />.
        </p>
        <h2 className="plan-rule pt-6 text-2xl">Onderdelen</h2>
        <PlanList items={delen} />
      </div>
    </>
  );
}
