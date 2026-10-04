import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="/images/logo/logo.png" alt="PCS" className="logo-icon" />

          <span className="logo-divider"></span>

          <div className="logo-text">
            <div className="logo-name">
              <span>PCS</span> <strong>GPL</strong>
            </div>

            <div className="logo-full-name">
              PERNATION COMPUTER SOLUTIONS GLOBAL PVT.LTD.
            </div>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <a href="/" className="nav-link active">
            Home
          </a>

          <a href="#about" className="nav-link">
            About Us
          </a>

          {/* Services */}
          <div className={`nav-dropdown ${servicesOpen ? "services-open" : ""}`}>

            <button
              className="nav-link dropdown-link mobile-services-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
              type="button"
            >
              Services
              <FiChevronDown />
            </button>

            <div className="dropdown-menu">

              <a href="/services/software-development">
                Software Development
              </a>

              <a href="/services/consulting">
                IT Consulting
              </a>

              <a href="/services/salesforce">
                Salesforce
              </a>

            </div>
          </div>

          <a href="#industries" className="nav-link">
            Industries
          </a>

          <a href="/Location" className="nav-link">
            Locations
          </a>

          {/* Mobile Quote Button */}
          <a href="#contact" className="mobile-quote-btn">
            Contact Us
            <FiArrowRight />
          </a>

        </nav>

        {/* Desktop Quote Button */}
        <a href="#contact" className="quote-btn">
          <span>Contact Us</span>
          <FiArrowRight />
        </a>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;