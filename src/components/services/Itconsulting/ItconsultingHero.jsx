import {
  Lightbulb,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import "./ItconsultingHero.css";

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

const ItconsultingHero = () => {
  return (
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
  );
};

export default ItconsultingHero;
