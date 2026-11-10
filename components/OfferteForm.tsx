"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { content } from "@/content";

export default function OfferteForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const diensten = data.getAll("diensten").map(String).filter(Boolean);
    const lines = [
      "Offerteaanvraag",
      "",
      `Naam: ${String(data.get("naam") ?? "")}`,
      `Telefoon: ${String(data.get("telefoon") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Adres/plaats: ${String(data.get("adres") ?? "") || "—"}`,
      `Opdrachtgever: ${String(data.get("opdrachtgever") ?? "")}`,
      `Diensten: ${diensten.length ? diensten.join(", ") : "—"}`,
      "",
      "Toelichting:",
      String(data.get("toelichting") ?? "") || "—",
    ];
    const href = `mailto:${content.contact.email}?subject=${encodeURIComponent("Offerteaanvraag")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setOpened(true);
    window.location.href = href;
  }

  const field = "mt-1 w-full min-h-11 border border-haarlijn bg-white px-3 py-2 text-marine";

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-5" noValidate={false}>
      <p className="border-t-2 border-marine pt-4 text-base text-loodgrijs">
        Dit is een concept; uw mailprogramma opent met het bericht. Er wordt vanaf deze pagina niets
        automatisch verzonden. Liever bellen?{" "}
        <a href={content.contact.phoneHref} data-cta="bellen" className="text-marine underline">
          {content.contact.phoneDisplay}
        </a>
        .
      </p>

      <div>
        <label htmlFor="naam" className="font-display font-semibold">
          Naam <span className="text-planrood-text">*</span>
        </label>
        <input id="naam" name="naam" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="telefoon" className="font-display font-semibold">
          Telefoon <span className="text-planrood-text">*</span>
        </label>
        <input id="telefoon" name="telefoon" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="font-display font-semibold">
          E-mail <span className="text-planrood-text">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="adres" className="font-display font-semibold">
          Adres/plaats
        </label>
        <input id="adres" name="adres" autoComplete="street-address" className={field} />
      </div>
      <div>
        <label htmlFor="opdrachtgever" className="font-display font-semibold">
          Opdrachtgever <span className="text-planrood-text">*</span>
        </label>
        <select id="opdrachtgever" name="opdrachtgever" required defaultValue="" className={field}>
          <option value="" disabled>
            Kies een opdrachtgever
          </option>
          {content.opdrachtgevers.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="font-display font-semibold">Diensten</legend>
        <div className="mt-2 divide-y divide-haarlijn border-y border-haarlijn">
          {content.offerteDiensten.map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-3 py-1">
              <input type="checkbox" name="diensten" value={item} className="size-5 accent-marine" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="toelichting" className="font-display font-semibold">
          Toelichting
        </label>
        <textarea id="toelichting" name="toelichting" rows={5} className={field} />
      </div>
      <label className="flex min-h-11 items-start gap-3">
        <input type="checkbox" name="privacy" required className="mt-1 size-5 accent-marine" />
        <span>
          Ik ga akkoord dat deze gegevens worden gebruikt om contact op te nemen over de aanvraag. Lees de{" "}
          <Link href="/privacy" className="underline">
            privacyverklaring
          </Link>
          . <span className="text-planrood-text">*</span>
        </span>
      </label>
      <button type="submit" data-cta="offerte" className="btn btn-rood">
        Open het bericht in uw mailprogramma
      </button>
      {opened ? (
        <p role="status" className="border border-marine bg-white px-4 py-3">
          Dit is een concept; uw mailprogramma opent met het bericht. Er is niets automatisch verzonden.
          Geen mailprogramma geopend? Bel{" "}
          <a href={content.contact.phoneHref} data-cta="bellen" className="underline">
            {content.contact.phoneDisplay}
          </a>{" "}
          of mail{" "}
          <a href={content.contact.emailHref} data-cta="mail" className="underline">
            {content.contact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
