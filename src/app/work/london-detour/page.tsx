import type { Metadata } from "next";
import { CaseHero, CaseStudyLayout, MediaFrame } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "London Detour",
  description: "Testing a multi-touchpoint service to shift tourist behaviour towards discovering lesser-visited sides of London.",
};

const visitorQuotes = [
  { quote: "I like going to a mix of both but stumbling upon places organically always end up being my favorite memories.", source: "Erica (USA) - 35 years" },
  { quote: "I avoid the touristy areas in London and prefer local bars, parks and friend-led exploration", source: "Saleem (France) - 27 years" },
  { quote: "I have only planned a music gig and comedy show to go to in London and will explore in my free time.", source: "Hil (Norway) - 34 years" },
  { quote: "I enjoy walking, local pubs, parks and exploring by tube & bus", source: "Varun (Canada) - 26 years" },
];

const expertQuotes = [
  { quote: "People want something off-the-beaten path, a different offering to the usual (cheaper) tours.", source: "Terry (Edinburgh) - Tour Guide" },
  { quote: "Visitors arrive with plans but still seek trusted recommendations for off-the-beaten path experiences.", source: "Gabriel (London) - Hilton Hotel, Trafalgar Sq." },
  { quote: "Visitors who explore beyond Zone 1 are more likely to return to London.", source: "Julie Dixon - TfL, Head of Information, Design & Partnerships" },
  { quote: "Keeping parks and green spaces accessible is important for us, for visitors and Londoners alike", source: "Tim Webb - London Parks and Gardens, Interim Director" },
];

function SplitHeading({ first, second, id }: { first: string; second: string; id: string }) {
  return <h2 id={id} className="channels-split-heading"><span>{first}</span><span>{second}</span></h2>;
}

function QuoteColumn({ title, quotes }: { title: string; quotes: typeof visitorQuotes }) {
  return (
    <section className="detour-quote-column" aria-label={`${title} interview quotes`}>
      <h3>{title}</h3>
      {quotes.map((item) => <blockquote key={item.source}><p>“{item.quote}”</p><cite>{item.source}</cite></blockquote>)}
    </section>
  );
}

export default function LondonDetourPage() {
  return (
    <CaseStudyLayout>
      <div className="london-detour-page">
        <CaseHero
          image="/assets/london-detour/hero.svg"
          imageAlt="London Detour research, prompt cards, public touchpoints, and prototype testing"
          title="London Detour"
          deck="Testing a multi-touchpoint service to shift tourist behaviour towards discovering lesser-visited, more authentic sides of London beyond its hotspots."
          challenge={<p>To understand what prevents visitors from exploring beyond the centre and remove that friction at the right moment in their journey.</p>}
          outcome={<><p><strong>Changed behaviour:</strong> Visitors who received a prompt card changed their plans to visit locations they had not intended to explore.</p><p className="intro-outcome-detail"><strong>Validated the model:</strong> 50+ visitors across four nationalities confirmed the intervention worked without an app, pre-commitment, or prior knowledge.</p><p className="intro-outcome-detail"><strong>Generated investor interest:</strong> 5 investors expressed interest in taking the model forward at both city-wide and global scale.</p></>}
          meta={[
            { label: "Timeline", content: "Mar–Jun ‘26" },
            { label: "Role", content: "Research Lead, Strategy, Concept and Distribution Design" },
            { label: "Team", content: "Royal College of Art" },
          ]}
        />

        <section className="case-section tinted" aria-labelledby="tourism-clustering">
          <div className="case-section-inner">
            <div className="detour-context-grid">
              <figure><MediaFrame src="/assets/london-detour/visitor-spend.svg" alt="Map showing visitor spend concentrated in highlighted London boroughs" contain ratio="712 / 708" /><figcaption>Visitor Spend Concentrated in Highlighted Boroughs</figcaption></figure>
              <figure><MediaFrame src="/assets/london-detour/crowd-impact.svg" alt="The impact of tourist crowds on London city infrastructure" contain ratio="712 / 708" /><figcaption>The Impact of Crowds on the City&apos;s Infrastructure</figcaption></figure>
            </div>

            <div className="detour-challenge-grid">
              <div className="detour-challenge-left">
                <SplitHeading first="Tourism Clustering" second="The Challenge" id="tourism-clustering" />
                <p>London&apos;s top 10 attractions cluster inside Kensington &amp; Chelsea, Camden, and Westminster—three of thirty-three boroughs—accounting for 71% of visitor spend and creating an uneven distribution of tourism revenue.</p>
                <MediaFrame src="/assets/london-detour/tourism-clustering.png" alt="Tourism clustering research and visitor interview evidence" contain ratio="713 / 253" />
              </div>
              <div className="detour-challenge-copy">
                <p>Secondary research confirmed highest-volume inbound markets (US, Canada, Western Europe) skew 25–34, are mobile-first, and arrive with loosely structured plans. These are not visitors who resist exploration. They are visitors who default to the familiar because the alternative requires effort they didn&apos;t budget for.</p>
                <a className="detour-link" href="https://drive.google.com/file/d/1zrUrniHAoVXPDn0LVOnagmolgfXO9iJL/view?usp=drive_link" target="_blank" rel="noreferrer">Complete Research Proposal</a>
                <p>Interviews with visitors and industry experts—including TfL&apos;s Head of Information, Design &amp; Partnerships and the Hilton Trafalgar&apos;s concierge manager—revealed a clear pattern.</p>
                <p><strong>People wanted off-the-beaten-path experiences</strong> but defaulted to central London due to high uncertainty and distrust of generic lists.</p>
                <p>The intervention therefore had to be specific, physical, and feel like a local recommendation.</p>
              </div>
            </div>

            <div className="detour-quotes-grid"><QuoteColumn title="Visitors" quotes={visitorQuotes} /><QuoteColumn title="Experts" quotes={expertQuotes} /></div>
          </div>
        </section>

        <section className="case-section tinted detour-outcome-aim" aria-labelledby="detour-hypothesis">
          <div className="case-section-inner">
            <div className="detour-heading-row"><SplitHeading first="Desired Outcome" second="Aim and Hypothesis" id="detour-hypothesis" /><p>The pattern framed “decision making at specific moments in the journey” as a challenge and hence we came to three criteria that had to be true to be successful and what determined the final form of the intervention.</p></div>
            <div className="detour-criteria-grid">
              <article><h3>Disperse visitors</h3><p>The first step needed to feel low-stakes and encourage exploration by connecting visitors to lesser-known places beyond iconic attractions.</p></article>
              <article><h3>Encourage detours</h3><p>Generic “hidden gems” lists exist everywhere and are largely ignored. We had to be specific, curate and build trust.</p></article>
              <article><h3>Fit into the journey</h3><p>Visitors are already in motion, so anything requiring a download, sign-up, or advance planning adds friction. The intervention had to meet them where they were.</p></article>
            </div>
            <MediaFrame src="/assets/london-detour/desired-outcome.svg" alt="Tourist journey timeline highlighting three intervention points" contain ratio="1464 / 269" />
            <p className="detour-mindset-intro"><strong>We identified three points in the tourist journey where these conditions could be created. Two visitor mindsets shaped how we designed for each: the Planned visitor, who needs permission to deviate, and the Spontaneous visitor, who needs a trusted starting point.</strong></p>
            <div className="detour-mindset-grid">
              <figure><figcaption>The ‘Planned Visitor’ mindset</figcaption><MediaFrame src="/assets/london-detour/planned-visitor.svg" alt="The planned visitor mindset" contain ratio="712 / 397" /></figure>
              <figure><figcaption>The ‘Spontaneous Visitor’ mindset</figcaption><MediaFrame src="/assets/london-detour/spontaneous-visitor.svg" alt="The spontaneous visitor mindset" contain ratio="712 / 395" /></figure>
            </div>
          </div>
        </section>

        <section className="case-section detour-testing" aria-labelledby="detour-testing">
          <div className="case-section-inner">
            <div className="detour-heading-row"><SplitHeading first="Experimenting in the wild" second="Testing and Prototyping" id="detour-testing" /><p>Tangible objects are more intriguing and easy to attract attention, so we tested it out with simplified approaches.</p></div>
            <div className="detour-testing-grid">
              <div className="detour-testing-copy">
                <div className="detour-testing-primary">
                  <h3>Short-stay tourists are unlikely to download a new app.</h3><p>Rather than building a digital-first product that would face adoption friction before it delivered any value, we designed a physical-first system with a lightweight digital layer.</p>
                  <h3>Prompt cards as the main driver</h3><ul><li>A curated, pocket-sized guide to a specific off-centre neighbourhood, distributed at high-traffic tourist spots and placed at strategic low-traffic points across the city.</li><li>Cards were designed to be immediately useful without setup, scannable via QR code for those who wanted more depth and shareable—intended to be left behind or passed on.</li></ul>
                  <h3>Three distribution contexts were tested in parallel</h3><p>Hand-distribution at tourist hotspots, card racks at visitor information points and QR stickers placed at street-level locations allowed us to test engagement and reach.</p>
                </div>
                <div className="detour-testing-social"><h3>Launched social media first to build credibility.</h3><p>Visitors are more likely to act on a recommendation they can verify is real. Building an @LDNdetour presence first meant the QR code on every card led somewhere trustworthy.</p></div>
              </div>
              <div className="detour-testing-visuals"><div className="detour-experiment-one"><MediaFrame src="/assets/london-detour/experimenting-1.png" alt="London Detour prompt cards" contain ratio="712 / 368" /></div><div className="detour-experiment-two"><MediaFrame src="/assets/london-detour/experimenting-2.svg" alt="London Detour physical distribution contexts" contain ratio="713 / 374" /></div></div>
            </div>
            <MediaFrame src="/assets/london-detour/experimenting-3.png" alt="London Detour prototyping and testing across London" contain ratio="1829 / 574" />
          </div>
        </section>

        <section className="case-section detour-journey" aria-labelledby="detour-findings">
          <div className="case-section-inner">
            <div className="detour-heading-row"><SplitHeading first="User Journey" second="Findings and Insights" id="detour-findings" /><p>Feedback from experts and users validated the interventions as well as revealed risks which urged us to keep developing the methods to fill in the gaps.</p></div>
            <MediaFrame src="/assets/london-detour/user-journey.svg" alt="Service journey comparing planned and spontaneous visitors" contain ratio="1464 / 805" />
            <p className="detour-journey-summary"><strong>The same card worked differently depending on visitor mindset. Two patterns emerged clearly from testing.</strong></p>
            <div className="detour-pattern-grid">
              <article><h3>The Planner</h3><ul><li>Need permission to make room to discover something new.</li><li>An unexpected gap in the schedule becomes an opportunity for low-stakes exploration.</li><li>QR touchpoint encourages to take a detour without disrupting existing plans, turning spontaneity into a memorable part of the journey.</li><li>Return home and realise the best moments weren&apos;t always planned—get inspired to leave more intentional space for discovery on the next trip.</li></ul></article>
              <article><h3>The Spontaneous</h3><ul><li>Driven by discovery, not a fixed itinerary.</li><li>A recommendation card picked up at King&apos;s Cross becomes a gateway to authentic outer-borough experiences, that guides beyond the typical tourist path.</li><li>The experience sparks social sharing and further exploration, while the card itself becomes a shared artefact which is left for the next guest or passed to a friend.</li><li>A simple physical touchpoint can turn spontaneous discovery into shared inspiration, extending the journey beyond one visitor and shaping future trips.</li></ul></article>
            </div>
          </div>
        </section>

        <section className="case-section tinted detour-impact" aria-labelledby="detour-impact">
          <div className="case-section-inner">
            <div className="detour-heading-row"><SplitHeading first="Outcome and Impact" second="Success Metrics" id="detour-impact" /><p>Testing produced clear directional evidence. It validated the hypothesis that visitors would go if prompted.</p></div>
            <div className="detour-evidence-grid">
              <MediaFrame src="/assets/london-detour/test-notebook-original.png" alt="Notebook containing notes from London Detour field testing" ratio="709 / 630" />
              <div className="detour-evidence-copy"><h3>Visitors took the deroute</h3><blockquote><p>“I wouldn&apos;t have gone to this area without the prompt. I&apos;d planned on going to Big Ben on the way to Ruskin Park but skipped it and spent the day in Camberwell instead”</p><cite>~Yuki (from Japan)</cite></blockquote><blockquote><p>“I was initially a little nervous going to Brixton, but I was surprised how much fun I had and how cool the area was”</p><cite>~Juliette (Canada)</cite></blockquote><ul><li>Suggested the intervention worked without requiring any pre-commitment or app download.</li><li>These responses defined the key scale metrics: Replanning behaviour (did the visitor change a plan?), Pass-on rate (did the card reach a second visitor?) and Return intent (did the experience change how they&apos;d plan their next trip?).</li></ul></div>
            </div>
            <div className="detour-accessibility-grid">
              <div className="detour-evidence-copy"><h3>Accessibility concerns</h3><blockquote><p>“Walking was fine with me, but if I&apos;d been with my mother it would have been hard to complete the prompt”</p><cite>~Finlay (Denmark)</cite></blockquote><blockquote><p>“I really liked the card idea, I think a digital version or way of saving it to my phone would be good too”</p><cite>~Harrison (USA)</cite></blockquote><ul><li>Testing revealed mobility and navigation barriers, highlighting the need for clearer route information and a digital option to save detours. The intervention assumed a level of physical mobility and confidence that not all visitors have.</li><li>The next version would need to include nearest tube or bus stop, estimated walking time, and an option to save the detour digitally rather than rely on memory or paper.</li></ul></div>
              <div className="detour-accessibility-images"><div className="detour-accessibility-one"><MediaFrame src="/assets/london-detour/accessibility-1.svg" alt="Accessibility testing insight one" contain ratio="709 / 328" /></div><div className="detour-accessibility-two"><MediaFrame src="/assets/london-detour/accessibility-2.svg" alt="Accessibility testing insight two" contain ratio="709 / 328" /></div></div>
            </div>
          </div>
        </section>

        <section className="case-section detour-roadmap-section" aria-labelledby="detour-roadmap">
          <div className="case-section-inner detour-roadmap-grid">
            <div><SplitHeading first="Phased Distribution Plan" second="Strategy and Roadmap" id="detour-roadmap" /><div className="detour-roadmap-copy"><p>The physical pilot was scoped for five key TfL stations (King&apos;s Cross, Kensington &amp; Chelsea and Westminster) identified by visitor footfall data, giving enough geographic spread to test the intervention across both arrival contexts (Eurostar travellers, Heathrow transfers) and mid-trip moments.</p><p>Over the medium term we would keep reiterating the prompt locations by taking suggestions for new additions and also permanently integrate the QR codes into the Legible London street maps instead of stickers.</p><p>The long-term version is a data layer that uses time crowd signals to route visitors dynamically, taking pressure off saturated areas and distributing it to places that can absorb it.</p></div></div>
            <div className="detour-timeline"><article><h3>In 1 year</h3><ul><li>Trial across up to 5 key TfL stations, eg. King&apos;s Cross and Westminster.</li></ul></article><article><h3>In 3–5 years</h3><ul><li>Reiterate with new locations &amp; prompts.</li><li>Pre-arrival outreach—advertise on travel blogs, eg. Skyscanner.</li><li>QR code across Legible London maps.</li></ul></article><article><h3>In 10 years</h3><ul><li>Integrate with Google Maps crowd data to suggest areas which are less crowded via the digital platform.</li></ul></article></div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
