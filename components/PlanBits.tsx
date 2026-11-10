import Link from "next/link";
import { content } from "@/content";
import { BelButton, MailLink, OfferteButton, PhoneLink } from "@/components/Actions";

const cycle = [
  { id: "J1", title: "In de verf", text: "Vanaf jaar 1 staat de woning in de verf. Dat is de eerste volledige schilderbeurt van het schema." },
  { id: "J2", title: "Controle", text: "Elk jaar volgt controle en onderhoud, zodat de conditie niet uit het zicht raakt." },
  { id: "J3", title: "Inspectie", text: "Preventieve inspectie houdt bij hoe het schilderwerk ervoor staat." },
  { id: "J4", title: "Bijwerken", text: "Een bijwerkbeurt voorkomt dat een kleine schade uitgroeit tot een grote, dure beurt." },
  { id: "J5", title: "Herschilderen", text: "Na vijf of zes jaar volgt een complete herschilderbeurt." },
  { id: "J6", title: "Herschilderen", text: "Hetzelfde moment in de cyclus: jaar vijf of jaar zes, afhankelijk van het schema." },
];

export function CycleSheet() {
  return (
    <ol className="divide-y divide-haarlijn border-y border-haarlijn">
      {cycle.map((row) => (
        <li key={row.id} className="grid gap-2 py-4 sm:grid-cols-[5.5rem_9rem_1fr] sm:items-baseline">
          <span className="font-mono text-sm text-planrood-text">{row.id}</span>
          <span className="font-display text-lg font-semibold">{row.title}</span>
          <span className="text-loodgrijs">{row.text}</span>
        </li>
      ))}
    </ol>
  );
}

export function WeekStrip() {
  const days = ["ma", "di", "wo", "do", "vr"];
  return (
    <div>
      <p className="font-mono text-[12px] tracking-wide text-loodgrijs uppercase">Openingstijden</p>
      <ol className="mt-2 grid grid-cols-5 border-t-2 border-marine">
        {days.map((day) => (
          <li key={day} className="border-r border-haarlijn px-1 py-3 text-center last:border-r-0">
            <span className="block font-mono text-xs text-marine">{day}</span>
            <span className="mt-1 block font-mono text-[10px] leading-tight text-loodgrijs sm:text-[11px]">
              08:00
              <br />
              18:00
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-sm text-loodgrijs">{content.contact.hours}</p>
    </div>
  );
}

export function Further({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Verder op deze site" className="mt-12">
      <h2 className="plan-rule text-2xl">Verder op het plan</h2>
      <ul className="mt-4 divide-y divide-haarlijn border-y border-haarlijn">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex min-h-11 items-center justify-between gap-4 py-2">
              <span>{link.label}</span>
              <span aria-hidden className="font-mono text-sm text-planrood-text">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SlotBand({
  title = "Vrijblijvend de mogelijkheden doornemen",
  text = "Wij nemen de tijd voor een advies op maat en een zo helder mogelijk uitgewerkte offerte.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <aside data-section="slot" className="bg-marine text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="border-t-2 border-white pt-3 text-3xl">{title}</h2>
          <p className="mt-4">{text}</p>
          <p className="mt-3">
            <PhoneLink className="op-donker underline decoration-white/40 underline-offset-4" />
            <span className="px-2 text-white/40">·</span>
            <MailLink className="op-donker underline decoration-white/40 underline-offset-4" />
          </p>
          <p className="mt-2 text-sm text-white/80">{content.contact.hours}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BelButton tone="rood" />
          <OfferteButton tone="lijn-licht" />
        </div>
      </div>
    </aside>
  );
}
