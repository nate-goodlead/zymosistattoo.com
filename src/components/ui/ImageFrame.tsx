import Image from "next/image";

type ImageFrameProps = {
  alt: string;
  src?: string | null;
  width: number;
  height: number;
  label?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageFrame({
  alt,
  src,
  width,
  height,
  label,
  caption,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageFrameProps) {
  return (
    <figure className="m-0">
      <div
        className="image-frame"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="image-frame-placeholder" role="img" aria-label={alt}>
            <span>{label ?? "Artwork"}</span>
            <span>TODO_CONTENT</span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
