import {
  Lightbulb,
  Settings,
  TrendingUp,
  ArrowRight,
  Search,
  Compass,
  Layers3,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import "./Itconsulting.css"
function Itconsulting() {
  const consultingFeatures = [
  {
    icon: Lightbulb,
    title: "Strategic Guidance",
    description: "Align technology with your business goals.",
  },
  {
    icon: Settings,
    title: "Technology Modernization",
    description: "Build smarter, more efficient systems.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Turn technology investments into value.",
  },
];
const approachSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Understand",
    description:
      "We begin by understanding your business objectives, existing systems, challenges, and opportunities for improvement.",
    tag: "BUSINESS ANALYSIS",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize & Plan",
    description:
      "We develop a clear technology roadmap that aligns your business priorities with the right solutions and resources.",
    tag: "STRATEGIC PLANNING",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Design & Implement",
    description:
      "We help turn strategy into action through practical technology recommendations, integration, and implementation.",
    tag: "SOLUTION DELIVERY",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Optimize & Evolve",
    description:
      "We evaluate performance, identify opportunities, and help your technology adapt as your business grows.",
    tag: "CONTINUOUS IMPROVEMENT",
  },
];
  return (
    <main>
      {/*ITCONSUULTING HERO*/}
      <section className="consulting-hero">
        <div className="consulting-hero-container">
          {/* CENTRED HERO CONTENT */}
          <div className="consulting-hero-content">
            <div className="consulting-eyebrow">
              <span className="consulting-eyebrow-dot" />
              IT CONSULTING & STRATEGY
              <span className="consulting-eyebrow-dot" />
            </div>

            <h1 className="consulting-hero-title">
              Technology that moves
              <br />
              <span>business forward.</span>
            </h1>

            <p className="consulting-hero-description">
              We help businesses make confident technology decisions,
              modernize their systems, and build practical strategies
              that support long-term growth.
            </p>

            {/* CALL TO ACTIONS */}
            <div className="consulting-hero-actions">
              <a
                href="/#contact"
                className="consulting-primary-button"
              >
                Let's Talk
                <ArrowRight size={18} />
              </a>

              <a
                href="#consulting-approach"
                className="consulting-secondary-link"
              >
                Explore Our Approach
                <span>↓</span>
              </a>
            </div>

            {/* FEATURE HIGHLIGHTS */}
            <div className="consulting-hero-features">
              {consultingFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    className="consulting-feature"
                    key={feature.title}
                  >
                    <div className="consulting-feature-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="consulting-feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM BRAND STATEMENT */}
            <div className="consulting-hero-bottom">
              <span className="consulting-bottom-line" />
              <span>SMARTER STRATEGIES. STRONGER FUTURES.</span>
              <span className="consulting-bottom-line" />
            </div>
          </div>
        </div>
      </section>

      {/*APPROACH*/}
      <section className="consulting-approach" id="consulting-approach">
        <div className="consulting-approach-container">

          {/* SECTION HEADER */}
          <div className="approach-header">
            <div className="approach-heading-content">
              <div className="approach-eyebrow">
                <span className="approach-eyebrow-dot" />
                OUR METHODOLOGY
              </div>

              <h2 className="approach-title">
                Our consulting
                <br />
                approach, <span>step by step.</span>
              </h2>

              <p className="approach-description">
                Every business has different challenges. Our structured
                approach helps turn complex technology decisions into
                clear, practical steps toward meaningful business outcomes.
              </p>
            </div>

            <div className="approach-side-note">
              <span className="approach-side-number">04</span>
              <span className="approach-side-label">
                STEPS TO
                <br />
                MOVE FORWARD
              </span>
              <span className="approach-side-line" />
            </div>
          </div>

          {/* APPROACH CARDS */}
          <div className="approach-cards">
            {approachSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="approach-card"
                  key={step.number}
                >
                  <div className="approach-card-top">
                    <span className="approach-card-number">
                      {step.number}
                    </span>

                    <div className="approach-card-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="approach-card-body">
                    <span className="approach-card-tag">
                      {step.tag}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  <div className="approach-card-footer">
                    <span className="approach-card-footer-line" />
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className="approach-card-accent"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="approach-bottom">
            <div className="approach-bottom-indicator">
              <span />
              A CLEARER PATH FORWARD
            </div>

            <p>
              The right strategy today.
              <strong> Better possibilities tomorrow.</strong>
            </p>

            <a href="/#contact" className="approach-contact-link">
              Start a Conversation
              <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Itconsulting;