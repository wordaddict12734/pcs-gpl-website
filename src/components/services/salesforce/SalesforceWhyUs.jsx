import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";

import "./SalesforceWhyUs.css";

const reasons = [
  {
    icon: <FiCompass />,
    title: "Business-Focused Approach",
    description:
      "We start with your business requirements and shape Salesforce solutions around the way your organization operates.",
  },
  {
    icon: <FiLayers />,
    title: "Scalable Solutions",
    description:
      "Our approach is designed to support your current requirements while giving your Salesforce environment room to grow.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Collaborative Partnership",
    description:
      "We work closely with your teams to understand challenges, communicate clearly and deliver practical solutions.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Continuous Improvement",
    description:
      "We help you optimize your Salesforce environment as your processes, customers and business priorities evolve.",
  },
];

const SalesforceWhyUs = () => {
  return (
    <section className="salesforce-why-us">

      <div className="salesforce-why-us-container">

        {/* =====================================
            LEFT - IMAGE
        ===================================== */}

        <div className="salesforce-why-us-visual">

          <div className="salesforce-why-us-image-wrap">

            <div className="salesforce-why-us-accent"></div>

            <img
              src="/images/salesforce/salesforce-team.jpeg"
              alt="PCS GPL Salesforce team collaboration"
              className="salesforce-why-us-image"
            />

            <div className="salesforce-why-us-badge">

              <div className="salesforce-why-us-badge-icon">
                <FiCheckCircle />
              </div>

              <div>
                <strong>Salesforce</strong>
                <span>Business Solutions</span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            RIGHT - CONTENT
        ===================================== */}

        <div className="salesforce-why-us-content">

          <div className="salesforce-why-us-label">
            <span></span>
            WHY PCS GPL
          </div>

          <h2>
            Why Choose PCS GPL
            <br />
            <span>for Salesforce?</span>
          </h2>

          <p className="salesforce-why-us-intro">
            We combine technology expertise with a practical,
            customer-focused approach to help businesses make
            Salesforce work better for them.
          </p>


          <div className="salesforce-reasons">

            {reasons.map((reason, index) => (
              <div
                className="salesforce-reason"
                key={index}
              >

                <div className="salesforce-reason-icon">
                  {reason.icon}
                </div>

                <div className="salesforce-reason-content">

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                </div>

              </div>
            ))}

          </div>


          <a
            href="/#contact"
            className="salesforce-why-us-btn"
          >
            Talk to Our Team
            <FiArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
};

export default SalesforceWhyUs;