import {
  FiUsers,
  FiZap,
  FiShield,
  FiLayers,
} from "react-icons/fi";

import "./WhyChoose.css";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <FiUsers />,
      title: "Experienced Team",
      description:
        "Skilled professionals with strong domain expertise.",
    },
    {
      icon: <FiZap />,
      title: "Agile Delivery",
      description:
        "On-time, flexible and transparent project delivery.",
    },
    {
      icon: <FiShield />,
      title: "Quality Assurance",
      description:
        "High standards, reliable technology and lasting results.",
    },
    {
      icon: <FiLayers />,
      title: "Long-Term Partnership",
      description:
        "Your growth is our goal.",
    },
  ];

  return (
    <section className="why-choose" id="why-us">
      <div className="why-choose-container">

        {/* LEFT CONTENT */}
        <div className="why-choose-content">

          <div className="why-choose-label">
            WHY CHOOSE PCS GPL
            <span></span>
          </div>

          <h2>
            Your Success.
            <span>Our Priority.</span>
          </h2>

          <p>
            We combine technical expertise, industry knowledge and
            a customer-centric approach to deliver solutions that
            create real business value.
          </p>

          <a href="/about" className="why-choose-button">
            Learn More
            <span>→</span>
          </a>

        </div>

        {/* RIGHT CARDS */}
        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-card-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;