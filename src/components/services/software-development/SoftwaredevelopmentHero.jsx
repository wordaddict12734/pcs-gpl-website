import {
  FiArrowRight,
} from "react-icons/fi";

import "./SoftwaredevelopmentHero.css";

const SoftwaredevelopmentHero = () => {

  return (
    <section className="software-hero">

      <div className="software-content">

        <div className="software-breadcrumb">
          <span>SERVICES</span>
          <b>/</b>
          <span>SOFTWARE DEVELOPMENT</span>
        </div>

        <h1>
          Custom Software
          <br />
          Development for a
          <br />
          <span>Smarter Tomorrow</span>
        </h1>

        <p className="software-description">
          We build scalable, secure and high-performance software
          solutions tailored to your business needs. From web and mobile
          applications to enterprise systems, PCS Global helps you turn
          your ideas into powerful digital products.
        </p>

        <div className="software-buttons">

          <a href="/#contact" className="software-btn primary-btn">
            Get Started
            <FiArrowRight />
          </a>

          <a href="/#services" className="software-btn secondary-btn">
            Our Services
          </a>

        </div>

      </div>


      <div className="software-visual">

        <div className="software-image-wrapper">

          <img
            src="/images/software-development/software-hero.jpg"
            alt="Software development"
            className="software-image"
          />

        </div>

      </div>

    </section>
  );
};

export default SoftwaredevelopmentHero;