import Image from "next/image";
import type { GalleryPhoto } from "@/content";

export default function PhotoFrame({
  photo,
  sizes,
  preload = false,
  className = "",
}: {
  photo: GalleryPhoto;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={`min-w-0 bg-white ${className}`} style={{ maxWidth: photo.width }}>
      <div className="relative w-full" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          unoptimized={photo.width < 1000}
          className="object-cover"
        />
      </div>
      <figcaption className="border-t-2 border-marine bg-white px-3 py-2 font-mono text-[11px] leading-snug tracking-wide text-marine uppercase">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
