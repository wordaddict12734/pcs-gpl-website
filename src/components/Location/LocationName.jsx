import {
  MapPin,
  Phone,
  Map,
  ArrowRight,
} from "lucide-react";

import "./LocationName.css";

const LocationName = () => {

  /* =====================================================
     ACTIVE OFFICE LOCATIONS
  ===================================================== */

  const offices = [
    {
      city: "Bengaluru",
      badge: "HEADQUARTERS",

      address:
        "57/65, Chikkalakshmaiah Layout, Bengaluru, Karnataka 560029",

      landmark:
        "Opposite Beauty Trips or Beyond Health Medical Store",

      phone: "+91 8697741611",

      mapUrl:
        "https://www.google.com/maps/place/Beyond+health+clinic+and+medical+shop/@12.9357488,77.6084033,19.06z/data=!4m10!3m9!1s0x3bae15c40de411c3:0x250f8515b62e6f80!5m3!1s2023-10-10!4m1!1i2!8m2!3d12.9360824!4d77.6089132!16s%2Fg%2F11h909gqqd?entry=ttu",
    },

    {
      city: "Kolkata",
      badge: "SALT LAKE",

      address:
        "Suite 914, Merlin Infinite, DN-51, 9th Floor, Street Number 11, DN Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",

      landmark: null,

      phone: "+91 8697741611",

      mapUrl:
        "https://maps.app.goo.gl/ZiSFtB8QgjaR7Ba97",
    },

    {
      city: "Bhubaneswar",
      badge: "OFFICE",

      address:
        "Opposite Nalco Headquarters, Jayadev Vihar, Nandankanan Rd, Odisha, Nayapalli, Bhubaneswar 751013",

      landmark:
        "Nalco Bhavan, P/1, Nayapalli, Bhubaneswar",

      phone: "+91 8697741611",

      mapUrl:
        "https://www.google.com/maps/place/%E0%A4%A8%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%95%E0%A5%8B+%E0%A4%AD%E0%A4%B5%E0%A4%A8/@20.3040371,85.8212738,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909c76ef5d24d:0x26075c3af849ce46!8m2!3d20.3040371!4d85.8212738!16s%2Fg%2F1tdmhx71?entry=ttu",
    },

    {
      city: "Noida",
      badge: "SECTOR 63",

      address:
        "First Floor, A-83, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201301",

      landmark:
        "J9CH+7X Noida, Uttar Pradesh",

      phone: "+91 8697741611",

      mapUrl:
        "https://www.google.com/maps/place/Sharkspace+Coworking+%7C+Office+on+Rent/@28.6207146,77.3799469,17z/data=!3m1!4b1!4m6!3m5!1s0x390cefb95942fa95:0xeb0ad81d2e7debd8!8m2!3d28.6207146!4d77.3799469!16s%2Fg%2F11vy5f2vkm?entry=ttu",
    },
  ];


  /* =====================================================
     UPCOMING LOCATIONS
  ===================================================== */

  const upcomingLocations = [
    "Delhi",
    "Kochi",
    "Chennai",
    "Pune",
    "Goa",
    "Mumbai",
    "Indore",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Patna",
    "Jamshedpur",
    "Raipur",
    "Chandigarh",
    "Shimla",
    "Badhi, Himachal Pradesh",
    "Dehradun",
    "Guwahati",
    "Tripura, Agartala",
    "Gangtok",
    "Kathmandu, Nepal",
    "Port Blair",
  ];


  return (
    <section className="location-section">

      <div className="location-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="location-heading">

          <span className="location-heading-line"></span>

          <div>
            <span className="location-eyebrow">
              OUR PRESENCE
            </span>

            <h2>Our Offices</h2>

            <p className="location-heading-description">
              Connect with our teams across our growing network
              of offices in India.
            </p>
          </div>

        </div>


        {/* =================================================
            OFFICE GRID
        ================================================= */}

        <div className="location-grid">

          {offices.map((office) => (

            <article
              className="location-card"
              key={office.city}
            >

              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div className="location-card-header">

                <div className="location-icon">
                  <MapPin
                    size={21}
                    strokeWidth={2}
                  />
                </div>

                <div className="location-title">

                  <div className="location-title-row">

                    <h3>{office.city}</h3>

                    <span className="location-badge">
                      {office.badge}
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div className="location-address">

                <MapPin
                  size={17}
                  strokeWidth={1.8}
                />

                <div>

                  <p>
                    {office.address}
                  </p>

                  {office.landmark && (
                    <p className="location-landmark">
                      <strong>Landmark:</strong>{" "}
                      {office.landmark}
                    </p>
                  )}

                </div>

              </div>


              {/* =================================================
                  PHONE
              ================================================= */}

              <div className="location-contact">

                <div className="location-contact-item">

                  <Phone
                    size={17}
                    strokeWidth={1.9}
                  />

                  <div>

                    <span>PHONE</span>

                    <a href={`tel:${office.phone}`}>
                      {office.phone}
                    </a>

                  </div>

                </div>

              </div>


              {/* =================================================
                  MAP BUTTON
              ================================================= */}

              {office.mapUrl && (

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-map-button"
                >

                  <Map
                    size={16}
                    strokeWidth={1.9}
                  />

                  <span>
                    View on Map
                  </span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                  />

                </a>

              )}

            </article>

          ))}

        </div>


        {/* =====================================================
            UPCOMING LOCATIONS
        ===================================================== */}

        <div className="upcoming-section">

          <div className="upcoming-header">

            <div>

              <span className="upcoming-eyebrow">
                EXPANDING OUR REACH
              </span>

              <h3>
                Upcoming Locations
              </h3>

            </div>

            <p>
              Our network continues to grow.
            </p>

          </div>


          <div className="upcoming-grid">

            {upcomingLocations.map((location) => (

              <div
                className="upcoming-location"
                key={location}
              >

                <MapPin
                  size={15}
                  strokeWidth={1.8}
                />

                <span>
                  {location}
                </span>

                <span className="upcoming-badge">
                  Upcoming
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default LocationName;