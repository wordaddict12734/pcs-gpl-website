import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div className="footer-main">
        <div className="footer-container">

          {/* COMPANY */}
          <div className="footer-company">

            
            <a href="/" className="footer-logo">

              <div className="footer-logo-mark">
                <span>PCS</span>
              </div>

              <div className="footer-logo-content">
                <span className="footer-logo-name">GPL</span>
                <span className="footer-logo-line"></span>
                <span className="footer-logo-tagline">
                  TECHNOLOGY & SOLUTIONS
                </span>
              </div>

            </a>



            <p>
              Delivering innovative technology solutions,
              professional services and skilled talent to help
              businesses grow in a digital world.
            </p>

            <a href="/about" className="footer-company-link">
              Know More About Us
              <FiArrowUpRight />
            </a>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#contact">Contact Us</a>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h3>Our Services</h3>

            <a href="/services/software-development">Software Development</a>
            <a href="/services/consulting">IT Consulting</a>
            <a href="/services/salesforce">Salesforce</a>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <FiMail />

              <div>
                <span>Email</span>
                <a href="mailto:contact@pcsgpl.com">
                  contact@pcsgpl.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <FiPhone />

              <div>
                <span>Phone</span>

                <a href="tel:03345179993">
                  033-45179993
                </a>

                <a href="tel:+918697741611">
                  +91 86977 41611
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <FiMapPin />

              <div>
                <span>Location</span>
                <strong>
                  India
                </strong>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* =====================================
          BOTTOM BAR
      ===================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} PCS GPL.
            All Rights Reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span></span>

            <a href="/terms">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;