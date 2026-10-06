import "./Industries.css";

const Industries = () => {
  const industries = [
    {
      image: "/images/banking.jpg",
      title: "Banking & Financial Services",
    },
    {
      image: "/images/healthcare.jpg",
      title: "Healthcare & Life Sciences",
    },
    {
      image: "/images/manufacturing.jpg",
      title: "Manufacturing & Engineering",
    },
    {
      image: "/images/education.jpeg",
      title: "Education & EdTech",
    },
    {
      image: "/images/retail.jpeg",
      title: "Retail & E-commerce",
    },
    {
      image: "/images/government.jpg",
      title: "Government & Public Sector",
    },
  ];

  return (
    <section className="industries" id="industries">

      <div className="industries-container">

        {/* LEFT CONTENT */}
        <div className="industries-content">

          <div className="industries-label">
            INDUSTRIES WE SERVE
          </div>

          <h2>
            Industry-Focused
            <span>Technology Solutions</span>
          </h2>

          <p>
            We understand that every industry is unique. Our solutions are
            built to meet the specific needs of your business, helping you
            stay ahead in a competitive world.
          </p>

        </div>


        {/* IMAGE ACCORDION */}
        <div className="industries-gallery">

          {industries.map((industry, index) => (

            <div
              className="industry-card"
              key={index}
            >

              <img
                src={industry.image}
                alt={industry.title}
              />

              <div className="industry-overlay"></div>

              <div className="industry-title">
                {industry.title}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;