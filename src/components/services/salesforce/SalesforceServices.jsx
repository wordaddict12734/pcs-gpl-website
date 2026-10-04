import {
  FiArrowUpRight,
  FiCode,
  FiCloud,
  FiLink,
  FiSettings,
} from "react-icons/fi";

import "./SalesforceServices.css";

const services = [
  {
    number: "01",
    icon: <FiCloud />,
    title: "Salesforce Implementation",
    description:
      "Plan and implement Salesforce solutions aligned with your business processes, teams and operational goals.",
  },
  {
    number: "02",
    icon: <FiCode />,
    title: "Custom Development",
    description:
      "Build custom Salesforce functionality and solutions designed around your specific business requirements.",
  },
  {
    number: "03",
    icon: <FiLink />,
    title: "Integration & Automation",
    description:
      "Connect Salesforce with your existing systems and automate repetitive processes for greater efficiency.",
  },
  {
    number: "04",
    icon: <FiSettings />,
    title: "Support & Optimization",
    description:
      "Continuously improve, maintain and optimize your Salesforce environment as your business evolves.",
  },
];

const SalesforceServices = () => {
  return (
    <section className="salesforce-services" id="salesforce-services">

      <div className="salesforce-services-container">

        {/* LEFT SIDE */}
        <div className="salesforce-services-intro">

          <div className="salesforce-services-label">
            <span></span>
            WHAT WE DELIVER
          </div>

          <h2>
            Salesforce Solutions
            <br />
            <span>That Work for You.</span>
          </h2>

          <p>
            We combine Salesforce capabilities with a clear understanding
            of your business to deliver solutions that simplify operations,
            improve customer experiences and support long-term growth.
          </p>

          <div className="salesforce-services-note">
            <div className="salesforce-services-note-line"></div>

            <span>
              From implementation to ongoing optimization,
              we support your Salesforce journey at every stage.
            </span>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="salesforce-services-list">

          {services.map((service) => (
            <div
              className="salesforce-service-row"
              key={service.number}
            >

              <div className="salesforce-service-number">
                {service.number}
              </div>

              <div className="salesforce-service-icon">
                {service.icon}
              </div>

              <div className="salesforce-service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

              <div className="salesforce-service-arrow">
                <FiArrowUpRight />
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SalesforceServices;