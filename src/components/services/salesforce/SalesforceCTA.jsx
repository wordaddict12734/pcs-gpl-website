import {
  FiArrowRight,
  FiMessageSquare,
} from "react-icons/fi";

import "./SalesforceCTA.css";

const SalesforceCTA = () => {
  return (
    <section className="salesforce-cta">

      <div className="salesforce-cta-bg"></div>

      <div className="salesforce-cta-container">

        {/* LEFT */}
        <div className="salesforce-cta-content">

          <div className="salesforce-cta-label">
            <span></span>
            READY TO GET STARTED?
          </div>

          <h2>
            Let's Build Your
            <br />
            <span>Salesforce Journey Together.</span>
          </h2>

          <p>
            Talk to our team about your Salesforce requirements and
            discover how PCS Global can help turn your business needs
            into practical technology solutions.
          </p>

        </div>


        {/* RIGHT */}
        <div className="salesforce-cta-action">

          <div className="salesforce-cta-icon">
            <FiMessageSquare />
          </div>

          <div className="salesforce-cta-action-content">
            <span>Have a project in mind?</span>

            <a href="/#contact">
              Talk to Our Team
              <FiArrowRight />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SalesforceCTA;