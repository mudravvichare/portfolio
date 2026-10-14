import Link from "next/link";

const RESUME_URL =
  "https://drive.google.com/file/d/1jdJzeW8pBJiQYGr24QhuWniDmHJJvsfk/view?usp=sharing";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </nav>
    </header>
  );
}
