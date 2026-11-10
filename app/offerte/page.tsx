import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import OfferteForm from "@/components/OfferteForm";
import { PhoneLink } from "@/components/Actions";
import { WeekStrip } from "@/components/PlanBits";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description: `Vraag een vrijblijvende offerte aan bij Amerongen Schilderwerken in Borculo. Bel ${content.contact.phoneDisplay}.`,
};

export default function OffertePage() {
  return (
    <>
      <PageIntro
        title="Vrijblijvende offerte"
        lede="Vertel kort wat er moet gebeuren. Wij nemen de tijd voor een advies op maat en een zo helder mogelijk uitgewerkte offerte."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[1fr_280px]" data-section="offerte-formulier">
        <OfferteForm />
        <aside className="space-y-8">
          <div className="border-t-2 border-marine bg-white px-4 py-5">
            <h2 className="text-xl">Wat er gebeurt</h2>
            <ol className="mt-3 space-y-3 text-sm text-loodgrijs">
              <li>U vult naam, telefoon en e-mail in. Die drie zijn verplicht.</li>
              <li>
                U kiest particulier, VvE, woningcorporatie of vastgoedbeheerder, bedrijf of instelling, of
                anders, en vinkt de diensten aan.
              </li>
              <li>Versturen opent uw mailprogramma met het bericht al ingevuld.</li>
              <li>U verstuurt de mail zelf. Er gaat niets stil de deur uit.</li>
            </ol>
            <p className="mt-4 text-sm">
              Liever bellen: <PhoneLink />
            </p>
          </div>
          <WeekStrip />
          <p className="text-sm text-loodgrijs">
            {content.company.legalStyle}
            <br />
            {content.contact.street}, {content.contact.postalCode} {content.contact.city}
          </p>
        </aside>
      </div>
    </>
  );
}
