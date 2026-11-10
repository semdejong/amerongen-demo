"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { content } from "@/content";
import Jaarschijf from "@/components/Jaarschijf";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const menuId = useId();
  const dienstenId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-haarlijn bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-5">
        <Link href="/" className="shrink-0" onClick={close}>
          <Image
            src={content.company.logo}
            alt={content.company.logoWordmark}
            width={content.company.logoWidth}
            height={content.company.logoHeight}
            unoptimized
            className="logo-mark"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          <div
            className="relative"
            onMouseEnter={() => setDienstenOpen(true)}
            onMouseLeave={() => setDienstenOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setDienstenOpen(false);
            }}
          >
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 text-[17px] text-marine"
              aria-expanded={dienstenOpen}
              aria-controls={dienstenId}
              onClick={() => setDienstenOpen((value) => !value)}
            >
              Diensten
              <span aria-hidden className="font-mono text-xs">
                ▾
              </span>
            </button>
            <div
              id={dienstenId}
              className={`${dienstenOpen ? "block" : "hidden"} absolute left-0 top-full z-20 min-w-56 border border-haarlijn bg-white py-1`}
            >
              <Link href="/diensten" className="block min-h-11 px-4 py-2.5 hover:bg-planpapier" onClick={() => setDienstenOpen(false)}>
                Alle diensten
              </Link>
              {content.serviceNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block min-h-11 px-4 py-2.5 hover:bg-planpapier"
                  onClick={() => setDienstenOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {content.nav.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-[17px]">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={content.contact.phoneHref}
          data-cta="bellen"
          className="ml-auto inline-flex min-h-11 shrink-0 items-center whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-marine sm:text-[17px] lg:ml-2"
        >
          {content.contact.phoneDisplay}
        </a>
        <Link href="/offerte" data-cta="offerte" className="btn btn-rood btn-desktop">
          Offerte
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-marine text-marine lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <span aria-hidden className="font-mono text-sm">
            {open ? "Sluit" : "Menu"}
          </span>
        </button>
      </div>

      <p className="border-t border-haarlijn px-4 py-1.5 text-center font-mono text-[12px] text-loodgrijs sm:px-5 sm:text-left">
        <span className="mx-auto block max-w-6xl">
          {content.contact.hours} · {content.contact.street}, {content.contact.city}
        </span>
      </p>

      <div id={menuId} hidden={!open} className="border-t border-haarlijn bg-white lg:hidden">
        <nav aria-label="Mobiel menu" className="mx-auto flex max-w-6xl flex-col px-2 py-2">
          <Link href="/diensten" className="min-h-11 px-3 py-2 font-semibold" onClick={close}>
            Diensten
          </Link>
          {content.serviceNav.map((item) => (
            <Link key={item.href} href={item.href} className="min-h-11 px-6 py-2 text-loodgrijs" onClick={close}>
              {item.label}
            </Link>
          ))}
          {content.nav.map((item) => (
            <Link key={item.href} href={item.href} className="min-h-11 px-3 py-2" onClick={close}>
              {item.label}
            </Link>
          ))}
          <Link href="/particulier" className="min-h-11 px-3 py-2" onClick={close}>
            Particulier
          </Link>
          <Link href="/offerte" data-cta="offerte" className="min-h-11 px-3 py-2 font-semibold text-planrood-text" onClick={close}>
            Offerte aanvragen
          </Link>
        </nav>
      </div>

      <Jaarschijf variant="edge" />
    </header>
  );
}
