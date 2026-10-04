import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-inner">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="contact-header">

          <div className="contact-label">
            LET'S CONNECT
            <span></span>
          </div>

          <h2>
            Let's Build Something
            <span>That Moves Business Forward.</span>
          </h2>

          <p>
            Whether you are looking for technology solutions, IT
            consulting or long-term digital support, PCS GPL is
            ready to help turn your business requirements into
            practical solutions.
          </p>

        </div>


        {/*CONTACT INFORMATION*/}

        <div className="contact-cards">

          {/* EMAIL */}

          <a
            href="mailto:contact@pcsgpl.com"
            className="contact-card"
          >

            <div className="contact-card-icon">
              <FiMail />
            </div>

            <div className="contact-card-content">
              <span>Email Us</span>
              <strong>contact@pcsgpl.com</strong>
            </div>

            <FiArrowRight className="contact-card-arrow" />

          </a>


          {/* PHONE */}

          <a
            href="tel:+918697741611"
            className="contact-card"
          >

            <div className="contact-card-icon">
              <FiPhone />
            </div>

            <div className="contact-card-content">
              <span>Call Us</span>
              <strong>+91 86977 41611</strong>
            </div>

            <FiArrowRight className="contact-card-arrow" />

          </a>


          {/* LOCATION */}

          <div className="contact-card contact-card-static">

            <div className="contact-card-icon">
              <FiMapPin />
            </div>

            <div className="contact-card-content">
              <span>Our Location</span>
              <strong>India</strong>
            </div>

          </div>

        </div>


        {/*CTA*/}

        <div className="contact-cta">

          <div className="contact-cta-content">

            <span>READY TO GET STARTED?</span>

            <h3>
              Have a project in mind?
            </h3>

          </div>

          <a
            href="mailto:contact@pcsgpl.com"
            className="contact-cta-button"
          >
            Talk to Our Team
            <FiArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;

