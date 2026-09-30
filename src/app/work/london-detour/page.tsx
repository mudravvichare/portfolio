import type { Metadata } from "next";
import {
  CaseHero,
  CaseStudyLayout,
  GalleryTile,
  MediaFrame,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "London Detour",
  description:
    "Testing a multi-touchpoint service to shift tourist behaviour towards discovering lesser-visited sides of London.",
};

export default function LondonDetourPage() {
  return (
    <CaseStudyLayout>
      <CaseHero
        image="/assets/london-detour/hero-collage.jpg"
        imageAlt="A collage of London Detour prompt cards, workshops, public touchpoints, and prototype testing"
        title="London Detour"
        deck="Testing a multi-touchpoint service to shift tourist behaviour towards discovering lesser-visited, more authentic sides of London beyond its hotspots."
        challenge={
          <p>
            To understand what prevents visitors from exploring beyond the centre
            and remove that friction at the right moment in their journey.
          </p>
        }
        outcome={
          <>
            <p><strong>Changed behaviour:</strong> Visitors who received a prompt card changed their plans to visit locations they had not intended to explore.</p>
            <p style={{ marginTop: "1.2rem" }}><strong>Validated the model:</strong> 50+ visitors across four nationalities confirmed the intervention worked without an app, pre-commitment, or prior knowledge.</p>
            <p style={{ marginTop: "1.2rem" }}><strong>Generated investor interest:</strong> 5 investors expressed interest in taking the model forward at both city-wide and global scale.</p>
          </>
        }
        meta={[
          { label: "Timeline", content: "Mar–Jun ‘26" },
          { label: "Role", content: <>Research Lead,<br />Strategy, Concept and<br />Distribution Design</> },
          { label: "Team", content: "Royal College of Art" },
        ]}
      />

      <section className="case-section tinted" aria-labelledby="tourism-clustering">
        <div className="case-section-inner">
          <div className="two-col">
            <MediaFrame
              src="/assets/london-detour/tourism-map.jpg"
              alt="Map highlighting the London boroughs where visitor spend is concentrated"
              contain
            />
            <MediaFrame
              src="/assets/london-detour/crowding.jpg"
              alt="Crowded central London attractions and congested streets"
            />
          </div>
          <div className="two-col" style={{ marginTop: "3.5rem" }}>
            <div>
              <h2 id="tourism-clustering" className="section-heading">Tourism Clustering</h2>
              <h3 className="section-subheading">The Challenge</h3>
              <p className="section-lead">
                London&apos;s top 10 attractions cluster inside Kensington &amp; Chelsea,
                Camden, and Westminster—three of thirty-three boroughs—accounting
                for 71% of visitor spend and creating an uneven distribution of
                tourism revenue.
              </p>
            </div>
            <div>
              <p>
                Secondary research confirmed highest-volume inbound markets (US,
                Canada, Western Europe) skew 25–34, are mobile-first, and arrive
                with loosely structured plans. These are not visitors who resist
                exploration. They are visitors who default to the familiar because
                the alternative requires effort they didn&apos;t budget for.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Interviews with visitors and industry experts—including TfL&apos;s Head
                of Information, Design &amp; Partnerships and the Hilton Trafalgar&apos;s
                concierge manager—revealed a clear pattern.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                People wanted off-the-beaten-path experiences but defaulted to
                central London due to high uncertainty and distrust of generic
                lists. The intervention therefore had to be specific, physical,
                and feel like a local recommendation.
              </p>
            </div>
          </div>
          <div className="quote-grid">
            <blockquote><p>“I like going to a mix of both but stumbling upon places organically always end up being my favorite memories.”</p><cite>Erica (USA), 35 years</cite></blockquote>
            <blockquote><p>“People want something off-the-beaten path, a different offering to the usual (cheaper) tours.”</p><cite>Terry (Edinburgh), Tour Guide</cite></blockquote>
            <blockquote><p>“I avoid the touristy areas in London and prefer local bars, parks and friend-led exploration.”</p><cite>Saleem (France), 27 years</cite></blockquote>
            <blockquote><p>“Visitors arrive with plans but still seek trusted recommendations for off-the-beaten-path experiences.”</p><cite>Gabriel (London), Hilton Hotel, Trafalgar Sq.</cite></blockquote>
            <blockquote><p>“I have only planned a music gig and comedy show to go to in London and will explore in my free time.”</p><cite>Hil (Norway), 34 years</cite></blockquote>
            <blockquote><p>“Visitors who explore beyond Zone 1 are more likely to return to London.”</p><cite>Julie Dixon, TfL, Head of Information, Design &amp; Partnerships</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="detour-hypothesis">
        <div className="case-section-inner">
          <div className="two-col">
            <div>
              <h2 id="detour-hypothesis" className="section-heading">Desired Outcome</h2>
              <h3 className="section-subheading">Aim and Hypothesis</h3>
            </div>
            <p>
              The pattern framed “decision making at specific moments in the
              journey” as a challenge and hence we came to three criteria that had
              to be true to be successful and what determined the final form of the
              intervention.
            </p>
          </div>
          <div className="three-col" style={{ marginTop: "3.5rem" }}>
            <article className="content-card"><h3>Disperse visitors</h3><p>The first step needed to feel low-stakes and encourage exploration by connecting visitors to lesser-known places beyond iconic attractions.</p></article>
            <article className="content-card"><h3>Encourage detours</h3><p>Generic “hidden gems” lists that exist everywhere and are largely ignored. We had to be specific, curate and build trust.</p></article>
            <article className="content-card"><h3>Fit into the journey</h3><p>Visitors are already in motion, so anything requiring a download, sign-up, or advance planning adds friction. The intervention had to meet them where they were.</p></article>
          </div>
          <MediaFrame src="/assets/london-detour/journey-map.jpg" alt="Tourist journey map showing three intervention points" contain />
          <p style={{ marginTop: "1.5rem" }}>
            We identified three points in the tourist journey where these
            conditions could be created. Two visitor mindsets shaped how we
            designed for each: the Planned visitor, who needs permission to
            deviate, and the Spontaneous visitor, who needs a trusted starting
            point.
          </p>
          <div className="two-col" style={{ marginTop: "4rem" }}>
            <article className="content-card">
              <h3>The “Planned Visitor” mindset</h3>
              <p>“I like to book everything and like to plan my trip in advance!”</p>
              <ul className="inline-list"><li>Less likely to explore beyond central.</li><li>Researched a lot on socials for suggestions.</li><li>Weak understanding of London geography and travel time between scheduled activities.</li></ul>
            </article>
            <article className="content-card">
              <h3>The “Spontaneous Visitor” mindset</h3>
              <p>“I plan a few key stops and let the rest of the trip unfold.”</p>
              <ul className="inline-list"><li>Wants to do more local experiences.</li><li>Going with the flow.</li><li>Time-blocks specific pub and dinner plans.</li><li>Prefers cycling, taking the tube/bus or likes to walk.</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section tinted" aria-labelledby="detour-testing">
        <div className="case-section-inner">
          <div className="two-col">
            <div>
              <h2 id="detour-testing" className="section-heading">Experimenting in the wild</h2>
              <h3 className="section-subheading">Testing and Prototyping</h3>
            </div>
            <p>
              Tangible objects are more intriguing and easy to attract attention,
              so we tested it out with simplified approaches.
            </p>
          </div>
          <div className="two-col" style={{ marginTop: "3rem" }}>
            <article className="content-card">
              <h3>Short-stay tourists are unlikely to download a new app.</h3>
              <p>Rather than building a digital-first product that would face adoption friction before it delivered any value, we designed a physical-first system with a lightweight digital layer.</p>
              <h3 style={{ marginTop: "2rem" }}>Prompt cards as the main driver</h3>
              <p>A curated, pocket-sized guide to a specific off-centre neighbourhood, distributed at high-traffic tourist spots and placed at strategic low-traffic points across the city. Cards were designed to be immediately useful without setup, scannable via QR code for those who wanted more depth and shareable—intended to be left behind or passed on.</p>
            </article>
            <article className="content-card">
              <h3>Three distribution contexts were tested in parallel</h3>
              <p>Hand-distribution at tourist hotspots, card racks at visitor information points and QR stickers placed at street-level locations allowed us to test engagement and reach.</p>
              <h3 style={{ marginTop: "2rem" }}>Launched social media first to build credibility.</h3>
              <p>Visitors are more likely to act on a recommendation they can verify is real. Building an @LDNdetour presence first meant the QR code on every card led somewhere trustworthy.</p>
            </article>
          </div>
          <div className="research-grid" aria-label="London Detour prototype testing">
            <GalleryTile src="/assets/london-detour/testing-wall.jpg" alt="Testing a London Detour prompt wall" />
            <GalleryTile src="/assets/london-detour/touchpoint-wall.jpg" alt="Cards displayed at a public touchpoint" />
            <GalleryTile src="/assets/london-detour/prompt-board.jpg" alt="Prototype London Detour cards on a green board" />
            <GalleryTile src="/assets/london-detour/co-design.jpg" alt="Co-design workshop about London travel types" />
            <GalleryTile src="/assets/london-detour/prompt-test.jpg" alt="Testing prompt ideas at street level" />
          </div>
          <div className="image-pair" style={{ marginTop: "3rem" }}>
            <MediaFrame src="/assets/london-detour/kensington-touchpoint.jpg" alt="London Detour prompt attached to a Kensington street sign" />
            <MediaFrame src="/assets/london-detour/station-touchpoint.jpg" alt="London Detour prompt at a train station information sign" />
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="detour-findings">
        <div className="case-section-inner">
          <div className="two-col">
            <div><h2 id="detour-findings" className="section-heading">User Journey</h2><h3 className="section-subheading">Findings and Insights</h3></div>
            <p>Feedback from experts and users validated the interventions as well as revealed risks which urged us to keep developing the methods to fill in the gaps.</p>
          </div>
          <p className="section-lead" style={{ maxWidth: "100%" }}>
            Testing validated that visitors did deviate from their planned routes
            when given a prompt they trusted. Alongside revealing two other risks
            that would need to be designed for in the next iteration: first, the
            physical card created barriers for visitors with mobility limitations
            or those travelling with older family members; second, that without a
            lightweight digital companion—a save-to-phone function, a shareable
            link—the card&apos;s reach stopped at one visitor and one trip.
          </p>
          <MediaFrame src="/assets/london-detour/journey-map.jpg" alt="Service journey comparing planned and spontaneous visitors" contain />
          <p style={{ marginTop: "1.5rem" }}>The same card worked differently depending on visitor mindset. Two patterns emerged clearly from testing.</p>
          <div className="two-col" style={{ marginTop: "3rem" }}>
            <article className="content-card"><h3>The Planner</h3><p>Need permission to make room to discover something new. An unexpected gap in the schedule becomes an opportunity for low-stakes exploration. The QR touchpoint encourages a detour without disrupting existing plans, turning spontaneity into a memorable part of the journey.</p></article>
            <article className="content-card"><h3>The Spontaneous</h3><p>Driven by discovery, not a fixed itinerary. A recommendation card picked up at King&apos;s Cross becomes a gateway to authentic outer-borough experiences. The card becomes a shared artefact which is left for the next guest or passed to a friend.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section tinted" aria-labelledby="detour-outcome">
        <div className="case-section-inner">
          <div className="two-col">
            <div><h2 id="detour-outcome" className="section-heading">Outcome and Impact</h2><h3 className="section-subheading">Success Metrics</h3></div>
            <div>
              <p>Testing produced clear directional evidence. It validated the hypothesis that visitors would go if prompted.</p>
              <p style={{ marginTop: "1.4rem" }}><strong>Visitors took the deroute</strong><br />“I wouldn&apos;t have gone to this area without the prompt. I&apos;d planned on going to Big Ben on the way to Ruskin Park but skipped it and spent the day in Camberwell instead.” — Yuki (Japan)</p>
              <p style={{ marginTop: "1.4rem" }}>“I was initially a little nervous going to Brixton, but I was surprised how much fun I had and how cool the area was.” — Juliette (Canada)</p>
            </div>
          </div>
          <div className="image-pair" style={{ marginTop: "3rem" }}>
            <MediaFrame src="/assets/london-detour/test-notebook.jpg" alt="Notebook containing notes from London Detour field testing" />
            <MediaFrame src="/assets/london-detour/prompt-cards.jpg" alt="Colour-coded London Detour prompt cards used during testing" />
          </div>
          <div className="two-col" style={{ marginTop: "3rem" }}>
            <article className="content-card"><h3>Accessibility concerns</h3><p>“Walking was fine with me, but if I&apos;d been with my mother it would have been hard to complete the prompt.” — Finlay (Denmark)</p><p style={{ marginTop: "1rem" }}>“I really liked the card idea, I think a digital version or way of saving it to my phone would be good too.” — Harrison (USA)</p></article>
            <article className="content-card"><h3>What testing revealed</h3><p>Testing revealed mobility and navigation barriers, highlighting the need for clearer route information and a digital option to save detours. The next version would need to include nearest tube or bus stop, estimated walking time, and an option to save the detour digitally rather than rely on memory or paper.</p></article>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="detour-roadmap">
        <div className="case-section-inner">
          <h2 id="detour-roadmap" className="section-heading">Phased Distribution Plan</h2>
          <h3 className="section-subheading">Strategy and Roadmap</h3>
          <div className="two-col" style={{ marginTop: "2.5rem" }}>
            <div>
              <p>The physical pilot was scoped for five key TfL stations—King&apos;s Cross, Kensington &amp; Chelsea and Westminster—identified by visitor footfall data, giving enough geographic spread to test the intervention across both arrival contexts (Eurostar travellers, Heathrow transfers) and mid-trip moments.</p>
              <p style={{ marginTop: "1.3rem" }}>Over the medium term we would keep reiterating the prompt locations by taking suggestions for new additions and also permanently integrate the QR codes into the Legible London street maps instead of stickers.</p>
              <p style={{ marginTop: "1.3rem" }}>The long-term version is a data layer that uses time crowd signals to route visitors dynamically, taking pressure off saturated areas and distributing it to places that can absorb it.</p>
            </div>
            <div className="roadmap" style={{ gridTemplateColumns: "1fr" }}>
              <div><h3>In 1 year</h3><p>Trial across up to 5 key TfL stations, e.g. King&apos;s Cross and Westminster.</p></div>
              <div><h3>In 3–5 years</h3><p>Reiterate with new locations and prompts. Pre-arrival outreach on travel blogs. QR code across Legible London maps.</p></div>
              <div><h3>In 10 years</h3><p>Integrate with Google Maps crowd data to suggest areas which are less crowded via the digital platform.</p></div>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
