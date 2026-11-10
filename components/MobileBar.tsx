import Link from "next/link";
import { content } from "@/content";

export default function MobileBar() {
  return (
    <nav
      data-section="mobiele-balk"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden"
      aria-label="Snel contact"
    >
      <a
        href={content.contact.phoneHref}
        data-cta="bellen"
        className="op-donker inline-flex min-h-14 items-center justify-center bg-marine px-2 text-center font-display text-[17px] font-bold text-white"
      >
        Bel {content.contact.phoneDisplay}
      </a>
      <Link
        href="/offerte"
        data-cta="offerte"
        className="inline-flex min-h-14 items-center justify-center bg-planrood px-2 text-center font-display text-[20px] font-bold text-white"
      >
        Offerte
      </Link>
    </nav>
  );
}
