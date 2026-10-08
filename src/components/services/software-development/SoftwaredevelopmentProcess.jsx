import {
  MessageSquare,
  Edit3,
  Code2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import { FiArrowRight } from "react-icons/fi";

import "./SoftwaredevelopmentProcess.css";

import "./SoftwaredevelopmentProcess.css";

const SoftwaredevelopmentProcess = () => {
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

  return (
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
  );
};

export default SoftwaredevelopmentProcess;