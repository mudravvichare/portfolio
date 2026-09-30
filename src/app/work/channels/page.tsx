import type { Metadata } from "next";
import {
  CaseHero,
  CaseStudyLayout,
  GalleryTile,
  MediaFrame,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Channels",
  description:
    "A place-based service giving boaters authorship over their narrative and reducing information gaps.",
};

export default function ChannelsPage() {
  return (
    <CaseStudyLayout>
      <CaseHero
        image="/assets/channels/hero-collage-original.png"
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
            <p style={{ marginTop: "1.4rem" }}>
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
                <a href="https://www.canaldream.org/" target="_blank" rel="noreferrer">Canal Dream CIC</a><br />
                <a href="https://www.thefloatingclassroom.co.uk/" target="_blank" rel="noreferrer">The Floating Classroom</a><br />
                <a href="https://www.globalgeneration.org.uk/our-gardens/floating-garden" target="_blank" rel="noreferrer">The Floating Garden</a>
              </>
            ),
          },
          { label: "Timeline", content: "3 months" },
          { label: "Role", content: <>Research,<br />Facilitation & Strategy</> },
          { label: "Team", content: "Royal College of Art" },
        ]}
      />

      <section className="case-section tinted" aria-labelledby="channels-findings">
        <div className="case-section-inner">
          <div className="two-col">
            <div>
              <h2 id="channels-findings" className="section-heading">Challenges uncovered</h2>
              <h3 className="section-subheading">Findings and Insights</h3>
              <p className="section-lead">
                Following initial desk research, we developed key hypotheses to
                test with canal communities.
              </p>
              <p className="section-lead">
                Conducted 5+ boater in-depth interviews and 20+ semi-structured
                interviews with towpath users, local businesses and the Canal River
                and Trust staff, across Coal Drops Yard and Paddington region, over
                a period of 8 weeks.
              </p>
              <p className="section-lead">
                Complemented this with ethnographic observation to understand how
                people move through and engage with canal spaces.
              </p>
            </div>
            <MediaFrame
              src="/assets/channels/research-matrix.png"
              alt="Research hypotheses comparing what was assumed and what research showed"
              contain
              ratio="358 / 183"
            />
          </div>

          <div className="research-grid" aria-label="Research activities">
            <GalleryTile src="/assets/channels/research-wall-original.png" alt="Participatory research wall covered with notes" />
            <GalleryTile src="/assets/channels/research-call-original.png" alt="Remote interview with a live-aboard boater" />
            <GalleryTile src="/assets/channels/poster-test.png" alt="Canal-side poster test used during research" />
            <GalleryTile src="/assets/channels/partner-workshop.png" alt="Research workshop with canal partners" />
            <GalleryTile src="/assets/channels/canal-interview-original.png" alt="A canal-side intercept interview" />
          </div>

          <div className="two-col" style={{ marginTop: "4rem" }}>
            <div>
              <h3 className="section-subheading">Focused Areas</h3>
              <p className="section-lead">
                Research revealed that while private canal developments receive
                greater attention, access and investment than the boating
                communities, boaters are still eager for meaningful public
                interaction, particularly through social, cultural and emotional
                connections that help build understanding.
              </p>
            </div>
            <ol className="numbered-list">
              <li><strong>01</strong><span>Public/towpath users have no accessible information channel about boater life, so they default to inference from appearance.</span></li>
              <li><strong>02</strong><span>Boaters carry the labor of correcting misconceptions individually, repeatedly, with no system absorbing that labor on their behalf.</span></li>
              <li><strong>03</strong><span>Institutions (Canal &amp; River Trust, local councils) design services and consultations without boater input, because there&apos;s no established channel feeding boater perspective upstream.</span></li>
              <li><strong>04</strong><span>Boater consultation and participation policy for London mooring decisions.</span></li>
            </ol>
          </div>

          <MediaFrame
            src="/assets/channels/systems-map-original.png"
            alt="A wall-sized systems map of canal stakeholders and relationships"
            contain
            ratio="1464 / 710"
          />

          <div className="assumptions" aria-label="Assumptions and research findings">
            <div className="assumption-row">
              <strong>Engagement would be hard to sustain</strong>
              <div>
                <p>Partner workshops and boater interviews revealed boaters wanted to talk but had no outlet.</p>
                <p style={{ marginTop: "1rem" }}>“My boat is my home. It&apos;s a place where I can invite friends. It&apos;s not a showpiece that I parade around, it&apos;s not! I feel as if my identity should not be attached to being a boater.” — Nicholas, live-aboard boater</p>
                <p style={{ marginTop: "1rem" }}>“We&apos;re not bloody travellers. We&apos;re not. We are people who choose to live on the water.” — Marisa, boater and retired mental health worker</p>
              </div>
            </div>
            <div className="assumption-row">
              <strong>This is a “nice to have” and not a core infrastructure</strong>
              <p>Boaters and business owners named culture/relationships as a sustainability mechanism, not decoration.</p>
            </div>
            <div className="assumption-row">
              <strong>Canal use is functional (transport/leisure)</strong>
              <p>Ethnography showed fragmentation even among users who share physical space daily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="channels-opportunity">
        <div className="case-section-inner two-col">
          <div>
            <h2 id="channels-opportunity" className="section-heading">Design Opportunity</h2>
            <h3 className="section-subheading">Hypothesis</h3>
            <p className="section-lead">
              How might we reshape the perception and engagement with canal
              communities to foster social inclusion through storytelling?
            </p>
            <h3 className="section-subheading" style={{ marginTop: "2.4rem" }}>Intervention needs to:</h3>
            <ul className="inline-list">
              <li>Build community connection</li>
              <li>Amplify authentic canal stories for visibility</li>
              <li>Enable trusted knowledge sharing &amp; access</li>
            </ul>
          </div>
          <MediaFrame
            src="/assets/channels/systemic-opportunity.png"
            alt="Design opportunity diagram mapping assumptions to evidence and needs"
            contain
            ratio="1088 / 768"
          />
        </div>
      </section>

      <section className="case-section tinted" aria-labelledby="channels-solutions">
        <div className="case-section-inner">
          <h2 id="channels-solutions" className="section-heading">Final Designs<br />and Solutions</h2>
          <p className="section-lead">
            Over 3 months, we developed a multimodal experience for boaters and
            towpath users. This project aims to make, living in the canals, more
            supported and friendly.
          </p>

          <div className="solution-row">
            <div className="image-pair">
              <MediaFrame src="/assets/channels/phone-scan.png" alt="Channels QR touchpoint being scanned on a phone" ratio="430 / 784" />
              <MediaFrame src="/assets/channels/friendship-post.png" alt="Channels water friendship episode artwork" ratio="440 / 783" />
            </div>
            <div>
              <h3>Capture and Distribution</h3>
              <p><strong>(Digital → Podcast + Website + Archive)</strong></p>
              <p style={{ marginTop: "1rem" }}>
                Channels is a storytelling platform that lets boaters share their
                own voices, embedding their stories directly into the canal
                environment where misconceptions form, through physical touch
                points with QR codes to build a growing archive overtime.
              </p>
              <ul className="inline-list">
                <li>Audio over text or video: lower production and complements people narrating their day.</li>
                <li>QR-to-web rather than app: removes commitment barriers, letting visitors move from curiosity to listening in two taps.</li>
              </ul>
            </div>
          </div>

          <div className="solution-row reverse">
            <div className="prototype-grid">
              <MediaFrame src="/assets/channels/canal-posters-original.png" alt="Channels canal-side participation posters" ratio="358 / 316" />
              <MediaFrame src="/assets/channels/canal-wall-test.png" alt="Channels posters installed beside the canal" ratio="308 / 211" />
              <MediaFrame src="/assets/channels/touchpoint-stand.jpg" alt="Channels public touchpoint stand" />
            </div>
            <div>
              <h3>Discovery and Prompt</h3>
              <p><strong>(Physical → Canal-side posters, QR codes, guerrilla placements)</strong></p>
              <p style={{ marginTop: "1rem" }}>
                Visitors encounter the podcast via towpath interventions, posters
                and markers in high-footfall canal locations featuring short
                prompts and QR codes linking directly to the themed episodes on
                the digital platform. Designed for quick, 5s engagement while
                passing by.
              </p>
            </div>
          </div>

          <div className="solution-row">
            <MediaFrame src="/assets/channels/service-mechanism.png" alt="Channels service mechanism connecting boaters, stories and visitors" contain ratio="358 / 197" />
            <div>
              <h3>Service Mechanism</h3>
              <p>
                The loop depends on three handoffs: a boater agreeing to be
                recorded; a visitor noticing and scanning the QR; and that visitor
                and boater either sharing or returning.
              </p>
              <p style={{ marginTop: "1rem" }}>
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
          <div className="two-col">
            <div>
              <h2 id="channels-outcome" className="section-heading">Outcome<br />Metrics</h2>
              <MediaFrame src="/assets/channels/partner-document.jpg" alt="Partnership proposal for The BoAt Pod" contain />
            </div>
            <div className="content-card">
              <h3>What we measured</h3>
              <p>Interactions, dwell time at the touchpoint, QR scan-to-listen conversion, short-form qualitative responses.</p>
              <h3 style={{ marginTop: "2rem" }}>What we&apos;d consider success at scale</h3>
              <p>Repeat listenership, boater-initiated submissions, a documented reduction in the consultation participation rate friction point by the CRT.</p>
              <h3 style={{ marginTop: "2rem" }}>What we don&apos;t know yet &amp; how we&apos;d find out</h3>
              <p>A 2-month pilot cannot prove attitude change. Pre/post survey with towpath users, tracked over a season or a future partnership with CRT&apos;s existing engagement data will.</p>
            </div>
          </div>

          <h2 className="section-heading" style={{ marginTop: "5rem" }}>Roadmap</h2>
          <div className="roadmap">
            <div><h3>Phase 1 · MVP Testing</h3><ul className="inline-list"><li>2-touchpoint pilot</li><li>Manual moderation</li><li>Single-site test</li></ul></div>
            <div><h3>Phase 2 · 1–2 years</h3><ul className="inline-list"><li>Partner formally with CRT for distribution + data-sharing</li><li>Expand to 2–3 more high-footfall sites</li><li>Build lightweight CMS so boaters can self-submit</li></ul></div>
            <div><h3>Phase 3 · 4–5 years</h3><p>Feed anonymized theme/sentiment data back to CRT and local councils as an input into consultation processes.</p></div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
