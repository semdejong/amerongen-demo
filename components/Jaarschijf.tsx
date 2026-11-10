import type { CSSProperties } from "react";
import { content, type YearMark } from "@/content";

const note: Record<string, string> = {
  J1: "In de verf",
  J2: "Controle",
  J3: "Inspectie",
  J4: "Bijwerken",
  J5: "Herschilderen",
  J6: "Herschilderen",
};

function Mark({ mark }: { mark: YearMark }) {
  if (mark === "herschilder") {
    return (
      <svg viewBox="0 0 48 20" className="mx-auto h-5 w-12" aria-hidden>
        <rect x="6" y="0" width="36" height="8" fill="#E83643" />
      </svg>
    );
  }
  if (mark === "bijwerk") {
    return (
      <svg viewBox="0 0 48 20" className="mx-auto h-5 w-12" aria-hidden>
        <rect x="14" y="0" width="20" height="6" fill="#092356" />
      </svg>
    );
  }
  const height = mark === "inspectie" ? 16 : 12;
  return (
    <svg viewBox="0 0 48 20" className="mx-auto h-5 w-12" aria-hidden>
      <rect x="23" y="0" width="2" height={height} fill="#092356" />
    </svg>
  );
}

export default function Jaarschijf({ variant = "band" }: { variant?: "edge" | "band" }) {
  const edge = variant === "edge";
  return (
    <div className={`jaarschijf ${edge ? "bg-white" : ""}`} data-jaarschijf={variant}>
      <p className="sr-only">
        Meerjarenstrook van een onderhoudsplan. Jaar 1 in de verf, elk jaar controle, inspectie of
        bijwerken, en na vijf of zes jaar een herschilderbeurt.
      </p>
      <div className={`relative ${edge ? "mx-auto max-w-6xl px-5" : ""}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-haarlijn" aria-hidden />
        <ol className={`grid grid-cols-6 ${edge ? "pb-1 pt-0" : "pb-2 pt-1"}`}>
          {content.years.map((year, index) => (
            <li
              key={year.id}
              className="tick min-w-0 text-center"
              style={{ "--i": index } as CSSProperties}
            >
              <Mark mark={year.mark} />
              <span className="mt-0.5 block font-mono text-[11px] leading-none text-marine sm:text-xs">
                {year.id}
              </span>
              {edge ? null : (
                <span className="mt-1 hidden px-1 font-mono text-[11px] leading-tight text-loodgrijs sm:block">
                  {note[year.id]}
                </span>
              )}
            </li>
          ))}
        </ol>
        {edge ? null : (
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 px-1 font-mono text-[12px] text-loodgrijs sm:hidden">
            {content.years.map((year) => (
              <li key={year.id}>
                {year.id} {note[year.id]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
