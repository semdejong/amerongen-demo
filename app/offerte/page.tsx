import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import OfferteForm from "@/components/OfferteForm";
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
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="offerte-formulier">
        <OfferteForm />
      </div>
    </>
  );
}
