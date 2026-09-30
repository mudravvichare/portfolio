import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  title: string;
  metadata: string;
  alt: string;
  href?: string;
  wip?: boolean;
};

function CardContent({ image, title, metadata, alt, wip }: ProjectCardProps) {
  return (
    <>
      <div className="project-image">
        <Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
        {wip ? <span className="wip-overlay">Work in progress</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{metadata}</p>
      {wip ? <span className="wip-mobile">Work in progress</span> : null}
    </>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  if (props.href) {
    return (
      <Link className="project-card" href={props.href}>
        <CardContent {...props} />
      </Link>
    );
  }

  return (
    <article className="project-card project-card-wip" tabIndex={0}>
      <CardContent {...props} />
    </article>
  );
}
