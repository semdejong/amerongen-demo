import type { ReactNode } from "react";
import Link from "next/link";
import { content } from "@/content";

type Tone = "rood" | "marine" | "lijn" | "lijn-licht";

const tones: Record<Tone, string> = {
  rood: "btn btn-rood",
  marine: "btn btn-marine op-donker",
  lijn: "btn btn-lijn",
  "lijn-licht": "btn btn-lijn-licht op-donker",
};

export function BelButton({
  tone = "rood",
  label,
}: {
  tone?: Tone;
  label?: string;
}) {
  return (
    <a href={content.contact.phoneHref} data-cta="bellen" className={tones[tone]}>
      {label ?? `Bel ${content.contact.phoneDisplay}`}
    </a>
  );
}

export function OfferteButton({
  tone = "lijn",
  label = "Offerte",
}: {
  tone?: Tone;
  label?: string;
}) {
  return (
    <Link href="/offerte" data-cta="offerte" className={tones[tone]}>
      {label}
    </Link>
  );
}

export function MailLink({
  className = "underline decoration-haarlijn underline-offset-4 hover:decoration-marine",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={content.contact.emailHref} data-cta="mail" className={className}>
      {children ?? content.contact.email}
    </a>
  );
}

export function PhoneLink({
  className = "underline decoration-haarlijn underline-offset-4 hover:decoration-marine",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={content.contact.phoneHref} data-cta="bellen" className={className}>
      {children ?? content.contact.phoneDisplay}
    </a>
  );
}
