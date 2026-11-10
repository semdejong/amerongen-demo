import { content } from "@/content";
import { BelButton, OfferteButton } from "@/components/Actions";

export default function PageIntro({
  title,
  lede,
  section = "paginakop",
}: {
  title: string;
  lede: string;
  section?: string;
}) {
  return (
    <header data-section={section} className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="text-base text-loodgrijs">{content.contact.hours}</p>
        <h1 className="mt-3 max-w-4xl text-4xl text-marine md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-loodgrijs">{lede}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <BelButton />
          <OfferteButton />
        </div>
      </div>
    </header>
  );
}
