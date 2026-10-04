import "./Hero.css";

const Hero = () => {
  return (
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
              src="/images/hero.jpeg"
              alt="Technology solutions"
              className="hero-image"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;