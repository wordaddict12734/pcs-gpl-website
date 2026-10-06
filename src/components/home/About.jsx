import {
  FiCheckCircle,
  FiUsers,
  FiGlobe,
  FiArrowRight,
} from "react-icons/fi";

import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img
            src="/images/about-pcs1.jpeg"
            alt="PCS Global business environment"
          />

          <div className="about-image-overlay"></div>

          <div className="about-image-badge">
            <span>PCS Global</span>
            <small>Technology & Talent</small>
          </div>

          <div className="about-image-corner"></div>
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <div className="about-label">
            ABOUT PCS Global
            <span></span>
          </div>

          <h2>
            Innovative Technology.
            <span>Trusted Partnership.</span>
          </h2>

          <p className="about-description">
            PCS Global is a leading IT solutions and consulting company
            delivering innovative, scalable and cost-effective technology
            solutions for businesses.
          </p>

          <p className="about-description">
            We combine technology expertise, skilled talent and a
            customer-first approach to help organizations digitize,
            innovate and achieve sustainable growth.
          </p>

          {/* STATS */}
          <div className="about-stats">

            <div className="about-stat">
              <div className="stat-icon">
                <FiCheckCircle />
              </div>

              <div>
                <strong>15+ Years</strong>
                <span>Industry Experience</span>
              </div>
            </div>

            <div className="about-stat">
              <div className="stat-icon">
                <FiUsers />
              </div>

              <div>
                <strong>1500+</strong>
                <span>Satisfied Clients</span>
              </div>
            </div>

            <div className="about-stat">
              <div className="stat-icon">
                <FiGlobe />
              </div>

              <div>
                <strong>Pan India </strong>
                <span>Serving Clients</span>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <a href="/about" className="about-button">
            Know More About Us
            <FiArrowRight />
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;