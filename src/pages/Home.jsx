import {
  FiCode,
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiZap,
  FiShield,
  FiLayers,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaSalesforce } from "react-icons/fa";
import "./Home.css"
function Home() {
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
  const industries = [
  {
    image: "/images/banking.jpg",
    number: "01",
    title: "Banking & Financial Services",
    description: "Secure, scalable technology for modern financial services.",
  },
  {
    image: "/images/healthcare.jpg",
    number: "02",
    title: "Healthcare & Life Sciences",
    description: "Digital solutions that support better healthcare delivery.",
  },
  {
    image: "/images/manufacturing.jpg",
    number: "03",
    title: "Manufacturing & Engineering",
    description: "Smarter systems for connected industrial operations.",
  },
  {
    image: "/images/education.jpeg",
    number: "04",
    title: "Education & EdTech",
    description: "Technology that makes learning more accessible.",
  },
  {
    image: "/images/retail.jpeg",
    number: "05",
    title: "Retail & E-commerce",
    description: "Connected digital experiences for modern commerce.",
  },
  {
    image: "/images/government.jpg",
    number: "06",
    title: "Government & Public Sector",
    description: "Reliable solutions for efficient public services.",
  },
];
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
    <main>
      <section className="hero">
      {/* Decorative background shapes */}
        <div className="hero-bg-shape hero-bg-shape-1"></div>
        <div className="hero-bg-shape hero-bg-shape-2"></div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              <span>INNOVATION</span>
              <i></i>
              <span>SKILLS</span>
              <i></i>
              <span>CAREERS</span>
            </div>

            <h1>
              Technology that
              <span>moves buisness forward.</span>
            </h1>

            <p>
              We build intelligent software, deliver strategic consulting, 
              provide secure cloud solutions and develop talent for a 
              smarter, stronger tomorrow.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="hero-btn hero-btn-primary">
                Explore Our Services
                <span>→</span>
              </a>

              <a href="#about" className="hero-btn hero-btn-secondary">
                About Us
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-visual">

            <div className="hero-image-wrapper">
              <img
                src="/images/hero.jpg"
                alt="Technology solutions"
                className="hero-image"
              />
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
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
      {/*INDUSTRIES*/}
      <section className="industries" id="industries">
        <div className="industries-container">
          <div className="industries-heading">
            <div className="industries-label">
              <span className="industries-label-line" />
              INDUSTRIES WE SERVE
            </div>

            <div className="industries-intro">
              <h2>
                Technology built
                <br />
                for <span>every industry.</span>
              </h2>

              <p>
                Every industry has its own challenges. We bring the right
                technology, expertise, and digital solutions to help
                businesses move forward with confidence.
              </p>
            </div>
          </div>

          <div className="industries-gallery">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.number}>
                <img
                  className="industry-image"
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="industry-overlay" />

                <div className="industry-number">
                  {industry.number}
                </div>

                <div className="industry-card-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <span className="industry-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/*ABOUT*/}
      <section className="about" id="about">
        <div className="about-container">

          {/* IMAGE */}
          <div className="about-image">
            <img
              src="/images/about-pcs.png"
              alt="PCS Global business environment"
            />

            <div className="about-image-overlay"></div>

            <div className="about-image-badge">
              <span>PCS Global</span>
              <small>Technology & Talent</small>
              <small><CiLocationOn /> Kolkata</small>
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
      {/*WHY CHOOSE US*/}
      <section className="why-choose" id="why-us">
        <div className="why-choose-container">

          {/* LEFT CONTENT */}
          <div className="why-choose-content">

            <div className="why-choose-label">
              WHY CHOOSE PCS Global
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
      
      {/*CONTACT*/}
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
              consulting or long-term digital support, PCS Global is
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
      
    </main>
  );
}

export default Home;