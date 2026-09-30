import Image from "next/image";
import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type MetaItem = { label: string; content: ReactNode };

export function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="case-page">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function CaseHero({
  image,
  imageAlt,
  title,
  deck,
  challenge,
  outcome,
  meta,
}: {
  image: string;
  imageAlt: string;
  title: string;
  deck: string;
  challenge: ReactNode;
  outcome: ReactNode;
  meta: MetaItem[];
}) {
  return (
    <>
      <div className="case-shell">
        <div className="case-hero-media">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        </div>
      </div>
      <section className="case-intro" aria-labelledby="case-title">
        <div>
          <h1 id="case-title" className="case-title">{title}</h1>
          <p className="case-deck">{deck}</p>
          <div className="intro-columns">
            <div>
              <h2 className="case-label">Challenge</h2>
              <div className="case-copy">{challenge}</div>
            </div>
            <div>
              <h2 className="case-label">Outcome &amp; Impact</h2>
              <div className="case-copy">{outcome}</div>
            </div>
          </div>
        </div>
        <dl className="case-meta">
          {meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.content}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

export function MediaFrame({
  src,
  alt,
  contain = false,
  sizes = "(max-width: 800px) 100vw, 50vw",
  ratio,
}: {
  src: string;
  alt: string;
  contain?: boolean;
  sizes?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`media-frame${contain ? " contain" : ""}${ratio ? " has-ratio" : ""}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}

export function GalleryTile({
  src,
  alt,
  contain = false,
}: {
  src: string;
  alt: string;
  contain?: boolean;
}) {
  return (
    <div className={`gallery-tile${contain ? " contain" : ""}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 800px) 50vw, 25vw" />
    </div>
  );
}
