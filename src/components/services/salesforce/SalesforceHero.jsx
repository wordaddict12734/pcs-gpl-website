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
        <div className="salesforce-hero-content">

          {/* Section label */}
          <div className="salesforce-hero-label">
            <span></span>
            SALESFORCE COMPETENCY
          </div>

          {/* Main heading */}
          <h1>
            Salesforce Solutions
            <br />
            <span>Built Around Your Business.</span>
          </h1>

          {/* Description */}
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

          {/* Call-to-action buttons */}
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

          {/* Decorative bottom indicator */}
          <div className="salesforce-hero-footer">
            <span></span>
            TECHNOLOGY THAT MOVES BUSINESS FORWARD
          </div>

        </div>
      </div>

      <div className="salesforce-hero-angle"></div>
    </section>
  );
};

export default SalesforceHero;