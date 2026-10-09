import type { Metadata } from "next";
import { CaseHero, CaseStudyLayout, MediaFrame } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Channels",
  description:
    "A place-based service giving boaters authorship over their narrative and reducing information gaps.",
};

export default function ChannelsPage() {
  return (
    <CaseStudyLayout>
      <div className="channels-page">
        <CaseHero
          image="/assets/channels/hero.svg"
          mobileImage="/assets/channels/hero-mobile.png"
          imageAlt="A collage of London canal communities, boaters, workshops, and canal-side spaces"
          title="Channels"
          deck="Place-based service giving boaters authorship over their narrative & reduce information gaps."
          challenge={
            <p>
              How might we use London&apos;s canal network to foster social inclusion
              through storytelling so as to decrease the existence of stereotypes
              within the canal community?
            </p>
          }
          outcome={
            <>
              <p>
                Recommended multi-touchpoint platforms enabling boaters to share
                stories and inform public understanding.
              </p>
              <p className="intro-outcome-detail">
                Early concept testing demonstrated strong engagement with 20+
                passersby interactions. Testing sessions also captured qualitative
                feedback and short-form participant responses.
              </p>
            </>
          }
          meta={[
            {
              label: "Client",
              content: (
                <>
                  <a href="https://www.canaldream.org/" target="_blank" rel="noreferrer">Canal Dreams CIC</a><br />
                  <a href="https://www.thefloatingclassroom.co.uk/" target="_blank" rel="noreferrer">The Floating Classroom</a><br />
                  <a href="https://www.globalgeneration.org.uk/our-gardens/floating-garden" target="_blank" rel="noreferrer">The Floating Garden</a>
                </>
              ),
            },
            { label: "Timeline", content: "3 months" },
            { label: "Role", content: <>Research,<br />Facilitation &amp; Strategy</> },
            { label: "Team", content: "Royal College of Art" },
          ]}
        />

        <section className="case-section tinted" aria-labelledby="channels-findings">
          <div className="case-section-inner">
            <div className="channels-findings-grid">
              <h2 id="channels-findings" className="channels-split-heading">
                <span>Challenges uncovered</span>
                <span>Findings and Insights</span>
              </h2>
              <div className="channels-findings-copy">
                <p className="section-lead">
                  Following initial desk research, we developed key hypotheses to
                  test with canal communities.
                </p>
                <p className="section-lead">
                  Conducted 5+ boater in-depth interviews and 20+ semi-structured
                  interviews with towpath users, local businesses and the Canal River
                  and Trust staff, across Coal Drops Yard and Paddington region, over
                  a period of 8 weeks.
                  <span className="paragraph-line">
                    Complemented this with ethnographic observation to understand how
                    people move through and engage with canal spaces.
                  </span>
                </p>
              </div>
              <MediaFrame
                src="/assets/channels/challenges-findings.svg"
                alt="Research hypotheses comparing what was assumed and what research showed"
                contain
                ratio="1088 / 556"
              />
            </div>

            <MediaFrame
              src="/assets/channels/focused-areas.svg"
              alt="Research activities with canal users, boaters, and project partners"
              contain
              ratio="1833 / 572"
            />

            <div className="focused-areas-grid">
              <h3 className="section-subheading">Focused Areas</h3>
              <p className="section-lead focused-areas-copy">
                Research revealed that while private canal developments receive
                greater attention, access and investment than the boating
                communities, boaters are still eager for meaningful public
                interaction, particularly through social, cultural and emotional
                connections that help build understanding.
              </p>
              <ol className="numbered-list">
                <li>
                  <span className="point-number">01</span>
                  <p><strong>Public/towpath users</strong> have no accessible information channel about boater life, so they default to inference from appearance.</p>
                </li>
                <li>
                  <span className="point-number">02</span>
                  <p><strong>Boaters</strong> carry the labor of correcting misconceptions individually, repeatedly, with no system absorbing that labor on their behalf.</p>
                </li>
                <li>
                  <span className="point-number">03</span>
                  <p><strong>Institutions (Canal &amp; River Trust, local councils)</strong> design services and consultations without boater input, because there&apos;s no established channel feeding boater perspective upstream.</p>
                </li>
                <li>
                  <span className="point-number">04</span>
                  <p><strong>Boater consultation and participation policy</strong> for London mooring decisions.</p>
                </li>
              </ol>
            </div>

            <MediaFrame
              src="/assets/channels/sticky-notes.png"
              alt="A wall of research notes about the lived experience of London canal communities"
              contain
              ratio="1464 / 710"
            />

            <div className="assumptions" aria-label="Assumptions and research findings">
              <div className="assumptions-header">
                <h3>Assumptions</h3>
                <h3>What research showed</h3>
              </div>
              <div className="assumption-row">
                <p>Engagement would be hard to sustain</p>
                <div>
                  <p>Partner workshops and boater interviews revealed boaters wanted to talk but had no outlet.</p>
                  <blockquote>
                    “My boat is my home. It&apos;s a place where I can invite friends. It&apos;s not a showpiece that I parade around, it&apos;s not! I feel as if my identity should not be attached to being a boater.”
                    <cite>Nicholas (Live-aboard boater)</cite>
                  </blockquote>
                  <blockquote>
                    “We&apos;re not bloody travellers. We&apos;re not. We are people who choose to live on the water.”
                    <cite>Marisa (Boater, retired mental health worker)</cite>
                  </blockquote>
                </div>
              </div>
              <div className="assumption-row">
                <p>This is a “nice to have” and not a core infrastructure</p>
                <p>Boaters and business owners named culture/relationships as a sustainability mechanism, not decoration.</p>
              </div>
              <div className="assumption-row">
                <p>Canal use is functional (transport/leisure)</p>
                <p>Ethnography showed fragmentation even among users who share physical space daily.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="channels-opportunity">
          <div className="case-section-inner channels-opportunity-grid">
            <h2 id="channels-opportunity" className="channels-split-heading">
              <span>Design Opportunity</span>
              <span>Hypothesis</span>
            </h2>
            <div className="channels-opportunity-copy">
              <p className="section-lead">
                How might we reshape the perception and engagement with canal
                communities to foster social inclusion through storytelling?
              </p>
              <h3 className="intervention-heading">Intervention needs to:</h3>
              <ul className="inline-list">
                <li>Build community connection</li>
                <li>Amplify authentic canal stories for visibility</li>
                <li>Enable trusted knowledge sharing &amp; access</li>
              </ul>
            </div>
            <MediaFrame
              src="/assets/channels/design-opportunity-hypothesis.svg"
              alt="Design opportunity diagram mapping assumptions to evidence and needs"
              contain
              ratio="1088 / 768"
            />
          </div>
        </section>

        <section className="case-section tinted" aria-labelledby="channels-solutions">
          <div className="case-section-inner">
            <div className="solutions-heading-row">
              <h2 id="channels-solutions" className="channels-split-heading">
                <span>Final Designs</span>
                <span>and Solutions</span>
              </h2>
              <p className="section-lead">
                Over 3 months, we developed a multimodal experience for boaters and
                towpath users. This project aims to make, living in the canals, more
                supported and friendly.
              </p>
            </div>

            <div className="solution-row capture-solution">
              <MediaFrame
                src="/assets/channels/capture-distribution.svg"
                alt="Channels phone scanning and podcast publishing touchpoints"
                contain
                ratio="937 / 784"
              />
              <div className="capture-content">
                <div className="solution-heading">
                  <h3>Capture and Distribution</h3>
                  <p><strong>(Digital → Podcast + Website + Archive)</strong></p>
                </div>
                <a
                  className="trailer-link"
                  href="https://www.instagram.com/reel/DSStmSyjQZc/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  View trailer
                </a>
                <div className="solution-body">
                  <p className="solution-description">
                    Channels is a storytelling platform that lets boaters share their
                    own voices, embedding their stories directly into the canal
                    environment where misconceptions form, through physical touch
                    points with QR codes to build a growing archive overtime.
                  </p>
                  <p className="decision-label">Key decision points</p>
                  <ul className="inline-list">
                    <li><strong>Audio over text or video:</strong> lower production and complements people narrating their day.</li>
                    <li><strong>QR-to-web rather than app:</strong> removes commitment barriers, letting visitors move from curiosity to listening in two taps.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="solution-row discovery-solution">
              <div className="solution-heading">
                <h3>Discovery and Prompt</h3>
                <p><strong>(Physical → Canal-side posters, QR codes, guerrilla placements)</strong></p>
              </div>
              <MediaFrame
                src="/assets/channels/discovery-prompt.svg"
                alt="Channels canal-side posters and QR touchpoints"
                contain
                ratio="1089 / 658"
              />
              <div className="solution-body">
                <p className="solution-description">
                  Visitors encounter the podcast via towpath interventions, posters
                  and markers in high-footfall canal locations featuring short
                  prompts and QR codes linking directly to the themed episodes on
                  the digital platform. Designed for quick, 5s engagement while
                  passing by.
                </p>
              </div>
            </div>

            <div className="solution-row service-solution">
              <div className="solution-heading">
                <h3>Service Mechanism</h3>
              </div>
              <MediaFrame
                src="/assets/channels/service-mechanisms.svg"
                alt="Channels service mechanism connecting boaters, stories and visitors"
                contain
                ratio="1024 / 563"
              />
              <div className="solution-body">
                <p>
                  The loop depends on three handoffs: a boater agreeing to be
                  recorded; a visitor noticing and scanning the QR; and that visitor
                  and boater either sharing or returning.
                </p>
                <p className="solution-description">
                  Of these, the touchpoint for awareness of the visitor carries the
                  most risk because it depends entirely on unprompted attention in a
                  public space. This is why the physical touchpoint placement and
                  messaging—not just the audio content—became a design problem, not
                  an afterthought.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="channels-outcome">
          <div className="case-section-inner">
            <h2 id="channels-outcome" className="channels-split-heading outcome-heading">
              <span>Outcome</span>
              <span>and Impact</span>
            </h2>
            <div className="outcome-grid">
              <MediaFrame
                src="/assets/channels/outcome-impact.svg"
                alt="Channels testing and partnership outcomes"
                contain
                ratio="828 / 549"
              />
              <div className="content-card">
                <h3>What we measured</h3>
                <p>Interactions, dwell time at the touchpoint, QR scan-to-listen conversion, short-form qualitative responses.</p>
                <h3>What we&apos;d consider success at scale</h3>
                <p>Repeat listenership, boater-initiated submissions, a documented reduction in the consultation participation rate friction point by the CRT.</p>
                <h3>What we don&apos;t know yet &amp; how we&apos;d find out</h3>
                <p>A 2-month pilot cannot prove attitude change. Pre/post survey with towpath users, tracked over a season or a future partnership with CRT&apos;s existing engagement data will.</p>
              </div>
            </div>

            <h2 className="section-heading roadmap-heading">Roadmap</h2>
            <div className="roadmap-scroll" tabIndex={0} aria-label="Scrollable three-phase roadmap">
              <MediaFrame
                src="/assets/channels/roadmap.svg"
                alt="Three-phase roadmap timeline"
                contain
                ratio="1464 / 70"
              />
              <div className="roadmap">
                <div>
                  <h3>MVP Testing</h3>
                  <ul className="inline-list"><li>2-touchpoint pilot</li><li>Manual moderation</li><li>Single-site test</li></ul>
                </div>
                <div>
                  <h3>1 - 2 years</h3>
                  <ul className="inline-list"><li>Partner formally with CRT for distribution + data-sharing</li><li>Expand to 2–3 more high-footfall sites</li><li>Build lightweight CMS so boaters can self-submit</li></ul>
                </div>
                <div>
                  <h3>4 - 5 years</h3>
                  <p>Feed anonymized theme/sentiment data back to CRT and local councils as an input into consultation processes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
}
