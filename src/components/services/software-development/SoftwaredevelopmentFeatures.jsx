import {
  Code2,
  Cloud,
  ShieldCheck,
  Settings,
  Headphones,
} from "lucide-react";

import "./SoftwaredevelopmentFeatures.css";

const SoftwaredevelopmentFeatures = () => {
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

  return (
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
  );
};

export default SoftwaredevelopmentFeatures;

