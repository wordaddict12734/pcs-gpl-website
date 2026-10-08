import { FiArrowRight } from "react-icons/fi";

import "./SoftwaredevelopmentWhyUs.css";

const SoftwaredevelopmentWhyUs = () => {
  return (
    <section className="software-why-us">
      <div className="software-why-us-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="software-why-content">

          <span className="software-why-tag">
            WHY CHOOSE US
          </span>

          <h2 className="software-why-title">
            Why Choose PCS Global for{" "}
            <span>Software Development</span>
          </h2>

          <p className="software-why-description">
            We combine modern technologies with industry best practices
            to deliver innovative, high-quality and cost-effective
            software solutions. Our focus is on performance, scalability
            and long-term success.
          </p>

          <a href="/#contact" className="software-why-button">
            Talk to Our Experts
            <FiArrowRight size={18} />
          </a>

        </div>


        {/* =========================================
            RIGHT IMAGE AREA
        ========================================= */}

        <div className="software-why-visual">

          {/* Angular decorative background */}

          <div className="software-why-shape software-why-shape-one"></div>
          

          {/* Image */}

          <div className="software-why-image-wrapper">
            <img
              src="/images/software-development/software-Why.jpg"
              alt="Software developer working on a laptop"
              className="software-why-image"
            />
          </div>

          {/* Floating message */}

          <div className="software-why-card">
            <span>Your Vision</span>
            <strong>Our Code</strong>
            <span>Real Results.</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SoftwaredevelopmentWhyUs;

