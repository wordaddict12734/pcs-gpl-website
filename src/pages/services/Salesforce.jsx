import {
  FiArrowRight,
  FiCloud,
  FiSettings,
  FiUsers,
  FiTarget,
  FiBarChart2,
  FiZap,
  FiArrowUpRight,
  FiCode,
  FiLink,
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";
import "./Salesforce.css"
function Salesforce() {
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
  return (
    <main>
      {/*SALESFORCE HERO*/}
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
      {/*SALESFORCE CAPABILITIES*/}
      <section className="salesforce-capabilities" id="salesforce-capabilities">
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
      {/*SALESFORCE SERVICES*/}
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
      {/*SALESFORCE WHY US*/}
      <section className="salesforce-why-us">

        <div className="salesforce-why-us-container">

          {/* =====================================
              LEFT - IMAGE
          ===================================== */}

          <div className="salesforce-why-us-visual">

            <div className="salesforce-why-us-image-wrap">

              <div className="salesforce-why-us-accent"></div>

              <img
                src="/images/salesforce/salesforce-team.jpg"
                alt="PCS Global Salesforce team collaboration"
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
              WHY PCS GLOBAL
            </div>

            <h2>
              Why Choose PCS Global
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

      {/*SALESFORCE CTA*/}
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
    </main>
  );
}

export default Salesforce;