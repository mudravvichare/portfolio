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
          <svg className="mail-icon" viewBox="0 0 27 18" aria-hidden="true">
            <path d="M3.10876 0H23.3163C23.589 0 23.8617 0.0359271 24.1208 0.0958057C24.0799 0.119757 24.0526 0.143709 24.0117 0.179636L14.9851 9.1734C14.5352 9.62847 13.9079 9.87996 13.2125 9.87996C12.5171 9.87996 11.8899 9.62847 11.4399 9.1734L2.33154 0.0958057C2.57698 0.0359271 2.84969 0 3.12239 0H3.10876Z" />
            <path d="M26.4389 13.0264C26.4389 15.685 23.9845 17.8526 20.9439 17.8526H5.49504C2.46799 17.8526 0 15.6969 0 13.0264V2.71528C0 2.33206 0.0954473 1.97278 0.245436 1.63746L9.3811 10.751C10.3492 11.721 11.74 12.2719 13.2126 12.2719C14.6852 12.2719 16.076 11.721 17.0442 10.751L26.0707 1.75722C26.0707 1.75722 26.1389 1.67339 26.1798 1.62549C26.3435 1.96081 26.4389 2.33206 26.4389 2.71528V13.0264Z" />
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
