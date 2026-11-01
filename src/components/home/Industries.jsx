
import "./Industries.css";

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

const Industries = () => {
  return (
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
  );
};

export default Industries;
