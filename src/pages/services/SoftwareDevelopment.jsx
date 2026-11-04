import {
  FiArrowRight,
} from "react-icons/fi";
import {
  Code2,
  Cloud,
  ShieldCheck,
  Settings,
  Headphones,
  MessageSquare,
  Edit3,
  Layers,
  Database,
  BrainCircuit,
  Award,
  Users,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { IoIosGitBranch } from "react-icons/io";
import "./SoftwareDevelopment.css"
function SoftwareDevelopment() {
  const features = [
    {
      icon: Code2,
      title: "Custom Solutions",
      description: "Built around your business goals and user needs.",
    },
    {
      icon: Cloud,
      title: "Scalable Architecture",
      description: "Solutions that grow with your business.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description: "Your data and users are always protected.",
    },
    {
      icon: Settings,
      title: "Expert Developers",
      description: "Skilled teams with deep technical expertise.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "We're with you, even after launch.",
    },
  ];
  const processSteps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery & Planning",
      description:
        "Understand your goals, requirements and create a roadmap.",
    },
    {
      number: "02",
      icon: Edit3,
      title: "Design & Prototyping",
      description:
        "Plan the architecture and design intuitive UI/UX experiences.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Development",
      description:
        "Build using modern technologies and best practices.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Testing & Deployment",
      description:
        "Ensure quality, performance and security.",
    },
    {
      number: "05",
      icon: Headphones,
      title: "Support & Maintenance",
      description:
        "Continuous support for long-term success.",
    },
  ];
  const technologyDomains = [
    {
      title: "Frontend",
      description:
        "Modern, responsive and interactive user interfaces using the latest frameworks.",
      icon: Code2,
    },
    {
      title: "Backend",
      description:
        "Strong, scalable and secure server-side solutions for high performance.",
      icon: Layers,
    },
    {
      title: "Database",
      description:
        "Reliable and efficient data management for your applications.",
      icon: Database,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Automated deployment, scalable infrastructure and high availability.",
      icon: Cloud,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions to analyze, predict and create value.",
      icon: BrainCircuit,
    },
    {
      title: "Testing & Quality",
      description:
        "Thorough testing and QA processes for bug-free delivery.",
      icon: ShieldCheck,
    },
    {
      title: "Version Control",
      description:
        "Efficient code management and collaboration with Git and GitHub.",
      icon: IoIosGitBranch,
    },
    {
      title: "Tools & Frameworks",
      description:
        "Leveraging the best tools and frameworks for faster development.",
      icon: Settings,
    },
  ];
  const stats = [
    {
      id: 1,
      number: "50+",
      label: "Projects Delivered",
      icon: Award,
    },
    {
      id: 2,
      number: "20+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      id: 3,
      number: "5+",
      label: "Industries Served",
      icon: Briefcase,
    },
    {
      id: 4,
      number: "99%",
      label: "Client Satisfaction",
      icon: ShieldCheck,
    },
  ];
  return (
    <main>
    {/*HERO*/}
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
      {/*FEATURES*/}
      <section className="software-features">
        <div className="software-features-container">
          <div className="software-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="software-feature-card"
                  key={feature.title}
                >
                  <div className="software-feature-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <div className="software-feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/*WHY US*/}
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
      {/*PROCESS*/}
      <section className="software-process">
        <div className="software-process-container">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}
          <div className="software-process-intro">

            <span className="software-process-tag">
              OUR PROCESS
            </span>

            <h2 className="software-process-title">
              Our{" "}
              <span>Development Process</span>
            </h2>

            <p className="software-process-description">
              We follow a streamlined and collaborative process to ensure
              on-time delivery and the best results.
            </p>

            <a href="#contact" className="software-process-button">
              Learn More
              <FiArrowRight size={18} />
            </a>

          </div>

          {/* =========================================
              RIGHT - PROCESS STEPS
          ========================================= */}
          <div className="software-process-steps">

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="software-process-step"
                  key={step.number}
                >
                  <div className="software-process-number">
                  <span>{step.number}</span>
                  </div>

                  <div className="software-process-icon">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <div className="software-process-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              );
            })}

          </div>

        </div>
      </section>
      {/*TECHNOLOGIES*/}
      <section className="software-technologies">

        {/* =====================================================
            SECTION CONTAINER
        ===================================================== */}

        <div className="software-technologies-container">

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div className="software-tech-intro">

            <div className="software-tech-label">
              <span>OUR DEVELOPMENT STACK</span>
              <span className="software-tech-label-line"></span>
            </div>

            <h2>
              Technologies We
              <span>Work With</span>
            </h2>

            <p>
              We use industry-leading tools and technologies to build
              robust, scalable and future-ready applications tailored
              to your business needs.
            </p>

          </div>


          {/* ===================================================
              RIGHT - TECHNOLOGY DOMAINS
          =================================================== */}

          <div className="software-tech-grid">

            {technologyDomains.map((technology) => {

              const Icon = technology.icon;

              return (
                <article
                  className="software-tech-card"
                  key={technology.title}
                >

                  {/* Icon */}

                  <div className="software-tech-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.9}
                    />
                  </div>


                  {/* Card Content */}

                  <div className="software-tech-card-content">

                    <h3>
                      {technology.title}
                    </h3>

                    <p>
                      {technology.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>
      {/*CONTACT*/}
      <section className="software-contact">

        {/* =====================================================
            REAL IMPACT
        ===================================================== */}

        <section className="software-impact">

          {/* Background decoration */}
          <div className="software-impact-glow"></div>

          <div className="software-impact-orb software-impact-orb-one"></div>
          <div className="software-impact-orb software-impact-orb-two"></div>


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="software-impact-content">

            <span className="software-impact-tag">
              REAL IMPACT
            </span>

            <h2 className="software-impact-title">
              Solutions That
              <br />
              Make a{" "}
              <span>Difference.</span>
            </h2>

            <p className="software-impact-description">
              From startups to enterprises, our software development
              solutions help businesses improve efficiency, enhance
              customer experience and achieve sustainable growth.
            </p>


            {/* =================================================
                STATS
            ================================================= */}

            <div className="software-impact-stats">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    className="software-impact-stat"
                    key={stat.id}
                  >

                    <div className="software-impact-stat-icon">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="software-impact-stat-info">
                      <strong>{stat.number}</strong>
                      <span>{stat.label}</span>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="software-impact-visual">

            <div className="software-impact-image-wrapper">

              <img
                src="/images/software-development/software-team.jpg"
                alt="Software development team collaborating"
              />

              <div className="software-impact-image-overlay"></div>

            </div>


            {/* Diagonal blue shape */}

            <div className="software-impact-diagonal"></div>


            {/* Floating badge */}

            <div className="software-impact-badge">

              <span className="software-impact-badge-dot"></span>

              <div>
                <strong>Building Digital</strong>
                <span>Solutions That Scale</span>
              </div>

            </div>


            {/* Background number */}

            <div className="software-impact-big-number">
              50+
            </div>

          </div>

        </section>


        {/* =====================================================
            CTA SECTION
        ===================================================== */}

        <section className="software-build">

          <div className="software-build-glow"></div>

          <div className="software-build-container">

            <div className="software-build-content">

              <span className="software-build-tag">
                LET'S BUILD TOGETHER
              </span>

              <h2 className="software-build-title">
                Have a Project
                <span> in Mind?</span>
              </h2>

              <p className="software-build-description">
                Let's discuss how our software development expertise
                can bring your ideas to life.
              </p>

            </div>


            <a
              href="/#contact"
              className="software-build-button"
            >
              <span>Contact Us</span>

              <span className="software-build-arrow">
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                />
              </span>
            </a>

          </div>

        </section>

      </section>
      </main>
  );
}

export default SoftwareDevelopment;