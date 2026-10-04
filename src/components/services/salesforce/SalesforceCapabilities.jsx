import {
  FiCloud,
  FiUsers,
  FiTarget,
  FiBarChart2,
  FiSettings,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

import "./SalesforceCapabilities.css";

const capabilities = [
  {
    icon: <FiCloud />,
    title: "Sales Cloud",
    description:
      "Drive more sales, build stronger customer relationships and close deals faster.",
  },
  {
    icon: <FiUsers />,
    title: "Service Cloud",
    description:
      "Deliver exceptional support and create seamless customer experiences.",
  },
  {
    icon: <FiTarget />,
    title: "Marketing Cloud",
    description:
      "Personalize engagement and turn customers into loyal advocates.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Experience Cloud",
    description:
      "Build branded digital experiences for your customers, partners and employees.",
  },
  {
    icon: <FiZap />,
    title: "Salesforce Integration",
    description:
      "Connect Salesforce with your existing systems for a unified view of your business.",
  },
  {
    icon: <FiSettings />,
    title: "Customization & Development",
    description:
      "Tailored solutions to match your unique business requirements.",
  },
];

const SalesforceCapabilities = () => {
  return (
    <section
      className="salesforce-capabilities"
      id="salesforce-capabilities"
    >
      <div className="salesforce-capabilities-container">

        {/* LEFT CONTENT */}
        <div className="salesforce-capabilities-content">

          <div className="salesforce-section-label">
            <span></span>
            OUR SALESFORCE CAPABILITIES
          </div>

          <h2>
            End-to-End Salesforce
            <br />
            <span>Expertise</span>
          </h2>

          <p>
            From strategy to support, we help you get the most out
            of Salesforce with solutions that are scalable, secure
            and built for long-term success.
          </p>

          <a
            href="#salesforce-services"
            className="salesforce-capabilities-btn"
          >
            Explore Our Services
            <FiArrowRight />
          </a>

        </div>

        {/* RIGHT CAPABILITY GRID */}
        <div className="salesforce-capabilities-grid">

          {capabilities.map((capability, index) => (
            <div
              className="salesforce-capability-card"
              key={index}
            >
              <div className="salesforce-capability-icon">
                {capability.icon}
              </div>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SalesforceCapabilities;