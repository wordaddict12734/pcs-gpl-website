import {
  FiArrowRight,
  FiCloud,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

import "./SalesforceHero.css";

const SalesforceHero = () => {
  return (
    <section className="salesforce-hero">
      {/* Background elements */}
      <div className="salesforce-hero-bg"></div>
      <div className="salesforce-hero-grid"></div>

      <div className="salesforce-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="salesforce-hero-content">

          <div className="salesforce-hero-label">
            <span></span>
            SALESFORCE COMPETENCY
          </div>

          <h1>
            Salesforce Solutions
            <br />
            <span>Built Around Your Business.</span>
          </h1>

          <p className="salesforce-hero-description">
            We help businesses unlock the full potential of Salesforce
            through tailored implementation, customization, integration,
            and ongoing support.
          </p>

          {/* Highlights */}
          <div className="salesforce-hero-highlights">

            <div className="salesforce-highlight">
              <div className="salesforce-highlight-icon">
                <FiUsers />
              </div>

              <div>
                <strong>Business-Focused</strong>
                <span>Solutions</span>
              </div>
            </div>

            <div className="salesforce-highlight">
              <div className="salesforce-highlight-icon">
                <FiCloud />
              </div>

              <div>
                <strong>Seamless</strong>
                <span>Implementation</span>
              </div>
            </div>

            <div className="salesforce-highlight">
              <div className="salesforce-highlight-icon">
                <FiSettings />
              </div>

              <div>
                <strong>Continuous</strong>
                <span>Support</span>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="salesforce-hero-actions">

            <a href="/#contact" className="salesforce-primary-btn">
              Talk to Our Team
              <FiArrowRight />
            </a>

            <a
              href="#salesforce-capabilities"
              className="salesforce-secondary-btn"
            >
              <span className="salesforce-play-icon">
                <FiArrowRight />
              </span>

              Explore Capabilities
            </a>

          </div>

        </div>

        {/* =========================
            RIGHT IMAGE
        ========================= */}
        <div className="salesforce-hero-visual">

            <div className="salesforce-hero-glow"></div>

            <img
                src="/images/salesforce/salesforce-hero.png"
                alt="Salesforce Solutions"
                className="salesforce-hero-image"
            />

        </div>

      </div>

      {/* Bottom angled shape */}
      <div className="salesforce-hero-angle"></div>
    </section>
  );
};

export default SalesforceHero;