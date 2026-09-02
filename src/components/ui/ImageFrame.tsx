type ImageFrameProps = {
  alt: string;
  src?: string | null;
  width: number;
  height: number;
  label?: string;
  caption?: string;
};

export function ImageFrame({
  alt,
  src,
  width,
  height,
  label,
  caption,
}: ImageFrameProps) {
  return (
    <figure className="m-0">
      <div
        className="image-frame"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {src ? (
          // Phase 1: original artist files are not in the repo yet.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} width={width * 100} height={height * 100} />
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
