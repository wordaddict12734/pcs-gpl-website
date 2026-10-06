import {
  FiCode,
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import { FaSalesforce } from "react-icons/fa";

import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Software Development",
      description:
        "Custom software solutions designed to meet your business requirements and improve operational efficiency.",
    },
    {
      icon: <FaSalesforce />,
      title: "Salesforce",
      description:
        "Salesforce solutions that help businesses streamline customer management, automate processes, and drive growth.",
    },
    {
      icon: <FiUsers />,
      title: "IT Consulting",
      description:
        "Strategic technology guidance to help businesses make informed decisions and achieve sustainable digital growth.",
    },
    {
      icon: <FiUserCheck />,
      title: "Talent Outsourcing",
      description:
        "Skilled technology professionals to support your projects, teams, and evolving business requirements.",
    },
    {
      icon: <FiBookOpen />,
      title: "Corporate & University Training",
      description:
        "Industry-focused training programs designed to build practical technology skills for corporate teams and university students.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">

          <div className="services-heading">

            <div className="services-label">
              OUR SERVICES
              <span></span>
            </div>

            <h2>
              Comprehensive IT Solutions
              <span> for Your Business</span>
            </h2>

            <p>
              From custom software to cloud solutions, we offer end-to-end
              IT services designed to solve your unique business challenges.
            </p>

          </div>

        </div>


        {/* SERVICE CARDS */}
        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href="#contact"
                className="service-arrow"
                aria-label={`Learn more about ${service.title}`}
              >
                <FiArrowRight />
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;