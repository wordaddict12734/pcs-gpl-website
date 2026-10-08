import {
  Code2,
  Layers,
  Database,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { IoIosGitBranch } from "react-icons/io";
import "./SoftwaredevelopmentTechnologies.css";

const SoftwaredevelopmentTechnologies = () => {
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

  return (
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
  );
};

export default SoftwaredevelopmentTechnologies;