"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/1nEN23ER0e02FJAKSL0AWxxPDEkqfQGtR/view?usp=drive_link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="site-logo" href="/" onClick={close}>
        mudra vichare
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-lines" />
      </button>
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <Link href="/#work" onClick={close} tabIndex={open ? 0 : -1}>
          Work
        </Link>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          onClick={close}
          tabIndex={open ? 0 : -1}
        >
          Resume ↗
        </a>
        <small>
          <a href="mailto:mudravichare@gmail.com" tabIndex={open ? 0 : -1}>
            Say hi →
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/mudravichare/"
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            Let&apos;s connect →
          </a>
        </small>
      </nav>
    </header>
  );
}
