import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-labelledby="intro-heading">
          <div className={styles.portrait}>
            <Image
              src="/assets/home/portrait-original.png"
              alt="Portrait of Mudra Vichare"
              fill
              priority
              sizes="(max-width: 800px) 142px, 305px"
            />
          </div>
          <div className={styles.intro}>
            <h1 id="intro-heading">Heyaa, I&apos;m Mudra</h1>
            <p>I solve problems and build cool things</p>
            <div className={styles.heroLinks}>
              <a className="hero-link" href="mailto:mudravvichare@gmail.com">
                Say hi →
              </a>
              <a
                className="hero-link"
                href="https://www.linkedin.com/in/mudravichare/"
                target="_blank"
                rel="noreferrer"
              >
                Let&apos;s connect →
              </a>
            </div>
          </div>
        </section>

        <section id="work" className={styles.work} aria-labelledby="work-heading">
          <h2 id="work-heading">My approach to design</h2>
          <p className={styles.mobileNote}>Best experienced on desktop</p>
          <div className={styles.projects}>
            <ProjectCard
              href="/work/channels"
              image="/assets/channels/podcast-cover.png"
              title="Strengthening social connection between boaters and canal users"
              metadata="RCA Service Design • 2025"
              alt="Channels project artwork featuring a boater, canal touchpoints, and audio storytelling"
            />
            <ProjectCard
              href="/work/london-detour"
              image="/assets/london-detour/co-design-workshop.png"
              title="Redistributing tourist footfall through local discovery experiences"
              metadata="RCA Service Design • 2026"
              alt="London Detour research wall with colourful location prompt cards"
            />
            <ProjectCard
              image="/assets/home/rural-response-original.png"
              title="Building a connected approach to rural disaster response"
              metadata="RCA Service Design • Imperial School London • 2026"
              alt="Emergency preparedness leaflet being reviewed during a research session"
              wip
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
