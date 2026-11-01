
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  //FiYoutube,
} from "react-icons/fi";

import "./Footer.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://www.instagram.com/pcsglobalpvtltd/",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/company/perennation-computer-solutions/",
  },
  /*{
    name: "YouTube",
    icon: FiYoutube,
    url: "https://www.youtube.com/@YOUR_CHANNEL",
  },*/
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">

          {/* COMPANY */}
          <div className="footer-company">
            <a href="/" className="footer-logo">
              <img
                src="/images/logo/logo.png"
                alt="PCS GPL logo"
                className="footer-logo-image"
                loading="lazy"
              />

              <span className="footer-logo-divider" />

              <div className="footer-logo-content">
                <div className="footer-logo-name">
                  <span>PCS</span>
                  <strong>GPL</strong>
                </div>

                <div className="footer-logo-full-name">
                  PERNATION COMPUTER SOLUTIONS GLOBAL PVT. LTD.
                </div>
              </div>
            </a>

            <h2 className="footer-company-heading">
              Technology that moves
              <span> business forward.</span>
            </h2>

            <p className="footer-description">
              Building reliable digital solutions that help
              businesses grow, adapt, and move forward.
            </p>

            <a href="/about" className="footer-company-link">
              Discover PCS GPL
              <FiArrowUpRight aria-hidden="true" />
            </a>

            {/* SOCIAL LINKS */}
            <div className="footer-social-section">
              <span className="footer-social-label">
                CONNECT WITH US
              </span>

              <div className="footer-socials">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    className="footer-social-link"
                    aria-label={`PCS GPL on ${name}`}
                    title={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <nav className="footer-column" aria-label="Quick links">
            <h3>Explore</h3>

            <a href="/">Home</a>
            <a href="/#about">About Us</a>
            <a href="/#services">Our Services</a>
            <a href="/#industries">Industries</a>
            <a href="/#why-us">Why Choose Us</a>
            <a href="/#contact">Contact Us</a>
          </nav>

          {/* SERVICES */}
          <nav className="footer-column" aria-label="Our services">
            <h3>What We Do</h3>

            <a href="/services/software-development">
              Software Development
            </a>

            <a href="/services/consulting">
              IT Consulting
            </a>

            <a href="/services/salesforce">
              Salesforce Solutions
            </a>
          </nav>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FiMail aria-hidden="true" />
              </span>

              <div>
                <span className="footer-contact-label">Email Us</span>
                <a href="mailto:contact@pcsgpl.com">
                  contact@pcsgpl.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FiPhone aria-hidden="true" />
              </span>

              <div>
                <span className="footer-contact-label">Call Us</span>
                <a href="tel:03345179993">033-45179993</a>
                <a href="tel:+918697741611">+91 86977 41611</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FiMapPin aria-hidden="true" />
              </span>

              <div>
                <span className="footer-contact-label">Location</span>
                <span className="footer-location">India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} PCS GPL. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-legal-divider" />
            <a href="/terms">Terms &amp; Conditions</a>
          </div>

          <a href="#top" className="footer-back-top">
            Back to top
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
