
import {
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import "./SoftwaredevelopmentContact.css";

const SoftwaredevelopmentContact = () => {
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
  );
};

export default SoftwaredevelopmentContact;

