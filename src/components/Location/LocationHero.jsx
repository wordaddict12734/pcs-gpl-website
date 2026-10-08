import "./LocationHero.css";

const LocationHero = () => {
  return (
    <section className="location-hero">
      {/* Background image */}
      <div className="location-hero-image">
        <img
          src="/images/location/location-hero.png"
          alt="Modern corporate buildings"
        />
      </div>

      {/* Image fade */}
      <div className="location-hero-fade"></div>

      {/* Decorative diagonal lines */}
      <div className="location-hero-line location-hero-line-one"></div>
      <div className="location-hero-line location-hero-line-two"></div>

      {/* Bold blue slash */}
      <div className="location-hero-slash"></div>

      {/* Content */}
      <div className="location-hero-container">
        <div className="location-hero-content">

          <div className="location-hero-tag">
            <span>OUR LOCATIONS</span>
            <i></i>
          </div>

          <h1 className="location-hero-title">
            Where Ideas Meet
            <span>Expertise</span>
          </h1>

          <p className="location-hero-description">
            Connect with our PCS Global teams across India. We're always
            close, ready to collaborate and help you build a smarter,
            stronger tomorrow.
          </p>

        </div>
      </div>
    </section>
  );
};

export default LocationHero;