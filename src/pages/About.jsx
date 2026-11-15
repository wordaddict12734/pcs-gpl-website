
import {
  FiTarget,
  FiEye,
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const values = [
    {
      icon: <FiShield />,
      title: "Integrity",
      description:
        "We believe in transparency, honesty and building relationships based on trust.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Innovation",
      description:
        "We embrace new technologies and ideas to create meaningful business solutions.",
    },
    {
      icon: <FiUsers />,
      title: "Collaboration",
      description:
        "We work closely with clients and teams to understand challenges and achieve shared goals.",
    },
    {
      icon: <FiAward />,
      title: "Excellence",
      description:
        "We focus on quality, continuous improvement and delivering dependable results.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by understanding your business, requirements and challenges.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "We identify the right technology and plan a practical approach.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "We develop and implement solutions with a focus on quality and reliability.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "We support continuous improvement as your business evolves.",
    },
  ];

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-page-hero">
        <div className="about-page-hero-shape"></div>

        <div className="about-page-container about-page-hero-inner">
          <div className="about-page-hero-content">

            <div className="about-page-eyebrow">
              <span></span>
              GET TO KNOW US
            </div>

            <h1>
              Technology with
              <span> Purpose. People with</span>
              <span> Possibilities.</span>
            </h1>

            <p>
              At PCS GPL, we bring together technology, expertise
              and people to help businesses navigate their digital
              journey and move towards a smarter future.
            </p>

            <div className="about-page-hero-actions">
              <Link to="/#contact" className="about-page-primary-btn">
                Let's Connect
                <FiArrowRight />
              </Link>

              <a href="#who-we-are" className="about-page-text-link">
                Discover Our Story
              </a>
            </div>

          </div>

          <div className="about-page-hero-visual">
            <div className="about-page-hero-image">
              <img
                src="/images/about-pcs.png"
                alt="PCS GPL business and technology environment"
              />
            </div>

            <div className="about-page-hero-caption">
              <span className="about-page-caption-icon">
                <FiCode />
              </span>
              <div>
                <strong>Technology & Talent</strong>
                <small>Building possibilities together</small>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="about-page-who" id="who-we-are">
        <div className="about-page-container about-page-who-grid">

          <div className="about-page-who-image">
            <img
              src="/images/about-pcs.png"
              alt="Technology solutions at PCS GPL"
              loading="lazy"
            />

            <div className="about-page-image-tag">
              <span>PCS GPL</span>
              <small>Technology. People. Progress.</small>
            </div>
          </div>

          <div className="about-page-who-content">

            <div className="about-page-label">
              WHO WE ARE
              <span></span>
            </div>

            <h2>
              Building meaningful
              <span> digital experiences.</span>
            </h2>

            <p>
              Pernation Computer Solutions Global Pvt. Ltd. (PCS GPL)
              is focused on delivering technology-driven solutions
              that address evolving business needs.
            </p>

            <p>
              We bring together software development, Salesforce
              solutions, IT consulting and talent services to help
              organizations improve processes, embrace innovation
              and achieve their business objectives.
            </p>

            <p>
              Our approach is built around understanding people,
              solving practical problems and creating solutions
              that deliver lasting value.
            </p>

            <div className="about-page-highlights">
              <div>
                <FiCheckCircle />
                <span>Business-focused solutions</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Technology-driven approach</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>People-first collaboration</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="about-page-purpose">
        <div className="about-page-container">

          <div className="about-page-section-heading">
            <div className="about-page-label">
              OUR PURPOSE
              <span></span>
            </div>

            <h2>
              What drives
              <span> everything we do.</span>
            </h2>

            <p>
              Our purpose is to make technology more meaningful,
              accessible and valuable for the businesses we serve.
            </p>
          </div>

          <div className="about-page-purpose-grid">

            <article className="about-page-purpose-card">
              <div className="about-page-purpose-icon">
                <FiTarget />
              </div>

              <span className="about-page-card-label">OUR MISSION</span>

              <h3>Creating value through technology.</h3>

              <p>
                To deliver practical, reliable and innovative
                technology solutions while empowering people
                and businesses to achieve their full potential.
              </p>
            </article>

            <article className="about-page-purpose-card about-page-vision-card">
              <div className="about-page-purpose-icon">
                <FiEye />
              </div>

              <span className="about-page-card-label">OUR VISION</span>

              <h3>A smarter and more connected future.</h3>

              <p>
                To build lasting partnerships and contribute
                to a future where technology and human
                potential work together to create progress.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* CORE VALUES */}
      <section className="about-page-values">
        <div className="about-page-container">

          <div className="about-page-values-heading">
            <div>
              <div className="about-page-label">
                WHAT WE BELIEVE
                <span></span>
              </div>

              <h2>
                Our values.
                <span> Our foundation.</span>
              </h2>
            </div>

            <p>
              The principles that guide our decisions,
              relationships and the way we work.
            </p>
          </div>

          <div className="about-page-values-grid">
            {values.map((value, index) => (
              <article className="about-page-value-card" key={value.title}>
                <span className="about-page-value-number">
                  0{index + 1}
                </span>

                <div className="about-page-value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* OUR APPROACH */}
      <section className="about-page-approach">
        <div className="about-page-container">

          <div className="about-page-section-heading">
            <div className="about-page-label">
              HOW WE WORK
              <span></span>
            </div>

            <h2>
              From understanding
              <span> to delivering.</span>
            </h2>

            <p>
              A thoughtful and collaborative approach to
              turning business requirements into solutions.
            </p>
          </div>

          <div className="about-page-approach-grid">
            {approach.map((step) => (
              <article className="about-page-approach-card" key={step.number}>
                <span className="about-page-step-number">
                  {step.number}
                </span>

                <div className="about-page-step-line"></div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-page-cta">
        <div className="about-page-container about-page-cta-inner">

          <div className="about-page-cta-content">
            <span>LET'S BUILD THE FUTURE TOGETHER</span>

            <h2>
              Have a vision?
              <span> Let's make it happen.</span>
            </h2>

            <p>
              Let's discuss how PCS GPL can support your
              business with the right technology and expertise.
            </p>
          </div>

          <Link to="/#contact" className="about-page-cta-btn">
            Get in Touch
            <FiArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;
