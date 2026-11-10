"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryPhoto } from "@/content";

export type GalleryGroup = {
  id: string;
  title: string;
  intro?: string;
  photos: GalleryPhoto[];
};

export default function ProjectGallery({ groups }: { groups: GalleryGroup[] }) {
  const flat = groups.flatMap((group) => group.photos);
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current + 1) % flat.length));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current - 1 + flat.length) % flat.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, flat.length]);

  const photo = index === null ? null : flat[index];

  return (
    <>
      {groups.map((group) => (
        <section key={group.id} id={group.id} data-section={group.id} className="mt-14">
          <h2 className="plan-rule text-2xl md:text-3xl">{group.title}</h2>
          {group.intro ? <p className="mt-4 max-w-3xl text-loodgrijs">{group.intro}</p> : null}
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {group.photos.map((item) => {
              const itemIndex = flat.indexOf(item);
              return (
                <li key={item.src}>
                  <button
                    type="button"
                    onClick={() => setIndex(itemIndex)}
                    className="block w-full bg-white text-left"
                  >
                    <span className="relative block w-full" style={{ aspectRatio: `${item.width} / ${item.height}`, maxWidth: item.width }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        unoptimized={item.width < 1000}
                        className="object-cover"
                      />
                    </span>
                    <span className="block border-t-2 border-marine px-3 py-2 font-mono text-[11px] tracking-wide uppercase">
                      {item.caption}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Foto vergroten"
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIndex(null);
        }}
      >
        {photo ? (
          <div className="flex max-h-[calc(100vh-1.5rem)] flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-haarlijn px-3 py-2">
              <p className="font-mono text-[12px] tracking-wide uppercase">{photo.caption}</p>
              <button ref={closeRef} type="button" className="btn btn-marine min-w-11" onClick={() => setIndex(null)}>
                Sluiten
              </button>
            </div>
            <div className="overflow-auto bg-planpapier p-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                unoptimized={photo.width < 1000}
                style={{ width: "100%", height: "auto", maxWidth: photo.width }}
              />
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="btn btn-lijn"
                  onClick={() => setIndex((current) => (current === null ? current : (current - 1 + flat.length) % flat.length))}
                >
                  Vorige
                </button>
                <button
                  type="button"
                  className="btn btn-lijn"
                  onClick={() => setIndex((current) => (current === null ? current : (current + 1) % flat.length))}
                >
                  Volgende
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
