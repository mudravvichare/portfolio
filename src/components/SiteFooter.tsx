const RESUME_URL =
  "https://drive.google.com/file/d/1jdJzeW8pBJiQYGr24QhuWniDmHJJvsfk/view?usp=sharing";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <small className="footer-note">
        <span>© 2026 |</span>{" "}
        <strong>Imagined in a fit of “I’ll fix it later” optimism</strong>
      </small>
      <div className="footer-links">
        <a
          className="icon-link"
          href="mailto:mudravichare@gmail.com"
          aria-label="Email Mudra Vichare"
        >
          <svg className="mail-icon" viewBox="0 0 25 18" aria-hidden="true">
            <path d="M1.8 0h21.4A1.8 1.8 0 0 1 25 1.8v14.4a1.8 1.8 0 0 1-1.8 1.8H1.8A1.8 1.8 0 0 1 0 16.2V1.8A1.8 1.8 0 0 1 1.8 0Zm10.7 10.6L22.7 2H2.3l10.2 8.6Z" />
          </svg>
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/mudravichare/"
          target="_blank"
          rel="noreferrer"
          aria-label="Mudra Vichare on LinkedIn"
        >
          in
        </a>
        <a className="footer-resume" href={RESUME_URL} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </div>
    </footer>
  );
}
