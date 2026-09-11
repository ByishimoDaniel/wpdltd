import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Home,
  BedDouble,
  Building2,
} from "lucide-react";

const OnSaleProjects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // =========================================
  // PROPERTIES FOR SALE
  // Add images later when properties are available
  // =========================================

  const properties = [
    {
      id: "01",
      title: "Modern Residential Apartment",
      category: "Apartment",
      location: "Gisenyi, Rubavu District, Rwanda",
      bedrooms: "3 Bedrooms",
      status: "Available",
      description:
        "A modern residential apartment offering comfortable spaces, contemporary design, and excellent potential for family living or rental investment.",
      image: null,
    },

    {
      id: "02",
      title: "Family Residential House",
      category: "Residential House",
      location: "Gisenyi, Rubavu District, Rwanda",
      bedrooms: "4 Bedrooms",
      status: "Available",
      description:
        "A spacious family home located in a growing residential area, suitable for comfortable family living.",
      image: null,
    },

    {
      id: "03",
      title: "Development Property",
      category: "Development Property",
      location: "Rubavu District, Rwanda",
      bedrooms: "Investment Opportunity",
      status: "Available",
      description:
        "A development opportunity suitable for investors looking to establish a valuable residential or commercial project.",
      image: null,
    },

    {
      id: "04",
      title: "Premium Apartment",
      category: "Apartment",
      location: "Rubavu, Western Province, Rwanda",
      bedrooms: "2 Bedrooms",
      status: "Coming Soon",
      description:
        "A modern apartment opportunity designed for comfortable living and long-term investment in Rubavu.",
      image: null,
    },
  ];

  return (
    <div className="projects-page">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="projects-navbar">

        {/* WPD LOGO */}
        <div className="projects-logo">
          <a href="/" onClick={closeMenu}>
            <img
              src="/wpd-logo.png"
              alt="Western Properties Developers"
            />
          </a>
        </div>

        {/* NAVIGATION */}
        <nav
          className={`projects-nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="/services" onClick={closeMenu}>
            Services
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="projects-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </header>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="projects-hero">

        <div className="projects-hero-overlay"></div>

        <div className="projects-hero-content">

          <p className="projects-intro-label">
            WESTERN PROPERTIES DEVELOPERS
          </p>

          <h1>
            Properties <span>on Sale</span>
          </h1>

          <p className="hero-description">
            Discover properties available for purchase and
            investment through Western Properties Developers.
          </p>

          <a
            href="#sale-properties"
            className="ongoing-cta-button"
          >
            View Properties
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="projects-intro">

        <div className="projects-intro-label">

          <span>01</span>

          <p>
            AVAILABLE PROPERTIES
          </p>

        </div>

        <div className="projects-intro-content">

          <div>

            <h2>
              Find your next
              <span> opportunity.</span>
            </h2>

          </div>

          <div>

            <p>
              Explore selected residential and development
              properties available in Rubavu and surrounding
              areas.
            </p>

            <p>
              Whether you are looking for a home, rental
              property, or development opportunity, WPD can
              help you identify the right property for your
              goals.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          PROPERTIES FOR SALE
      ========================================= */}

      <section
        className="sale-properties-section"
        id="sale-properties"
      >

        {/* SECTION HEADING */}

        <div className="ongoing-section-heading">

          <div>

            <p className="ongoing-small-title">
              CURRENTLY AVAILABLE
            </p>

            <h2>
              Properties for Sale
            </h2>

          </div>

          <div className="ongoing-project-count">

            <span>
              04
            </span>

            <p>
              PROPERTIES
            </p>

          </div>

        </div>


        {/* PROPERTY GRID */}

        <div className="sale-properties-grid">

          {properties.map((property) => (

            <article
              className="sale-property-card"
              key={property.id}
            >

              {/* PROPERTY IMAGE */}

              <div className="sale-property-image-placeholder">

                {property.image ? (

                  <img
                    src={property.image}
                    alt={property.title}
                  />

                ) : (

                  <div className="sale-placeholder-content">

                    <Building2 size={42} />

                    <span>
                      PROPERTY IMAGE
                    </span>

                    <small>
                      Coming soon
                    </small>

                  </div>

                )}

              </div>


              {/* CARD TOP */}

              <div className="sale-property-top">

                <div className="sale-property-number">
                  {property.id}
                </div>

                <div className="sale-property-icon">

                  {property.category === "Apartment" ? (
                    <Home size={30} />
                  ) : (
                    <Building2 size={30} />
                  )}

                </div>

                <div
                  className={`sale-property-status ${
                    property.status === "Coming Soon"
                      ? "coming-soon"
                      : ""
                  }`}
                >
                  {property.status}
                </div>

              </div>


              {/* CARD CONTENT */}

              <div className="sale-property-content">

                <p className="ongoing-project-category">
                  {property.category}
                </p>

                <h3>
                  {property.title}
                </h3>


                {/* LOCATION */}

                <div className="sale-property-location">

                  <MapPin size={17} />

                  <span>
                    {property.location}
                  </span>

                </div>


                {/* DESCRIPTION */}

                <p className="sale-property-description">
                  {property.description}
                </p>


                {/* FEATURES */}

                <div className="sale-property-features">

                  <div>

                    <BedDouble size={18} />

                    <span>
                      {property.bedrooms}
                    </span>

                  </div>

                  <div>

                    <Home size={18} />

                    <span>
                      {property.category}
                    </span>

                  </div>

                </div>


                {/* ENQUIRE BUTTON */}

                <a
                  href="/contact"
                  className="sale-property-button"
                  onClick={closeMenu}
                >
                  Enquire Now

                  <ArrowRight size={18} />

                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================
          INVESTMENT SECTION
      ========================================= */}

      <section className="projects-intro">

        <div className="projects-intro-label">

          <span>
            02
          </span>

          <p>
            PROPERTY INVESTMENT
          </p>

        </div>


        <div className="projects-intro-content">

          <div>

            <h2>
              Invest in
              <span> possibilities.</span>
            </h2>

          </div>


          <div>

            <p>
              Rwanda continues to experience urban growth,
              creating opportunities for residential and
              property development.
            </p>

            <p>
              Talk to WPD about available properties and
              development opportunities in Rubavu.
            </p>


            <div className="ongoing-location">

              <MapPin size={18} />

              <span>
                Rubavu District, Western Province, Rwanda
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="ongoing-cta">

        <div className="ongoing-cta-content">

          <p className="ongoing-cta-label">
            INTERESTED IN A PROPERTY?
          </p>

          <h2>
            Let's find the
            <br />
            <span>
              right opportunity.
            </span>
          </h2>

          <p>
            Contact our team for property information,
            availability, pricing, and viewing arrangements.
          </p>


          <a
            href="/contact"
            className="ongoing-cta-button"
          >
            Contact WPD

            <ArrowRight size={20} />

          </a>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="projects-footer">

        <div className="footer-content">

          <div className="ongoing-footer-main">

            {/* FOOTER LOGO */}

            <div className="ongoing-footer-brand">

              <a href="/">

                <img
                  className="ongoing-footer-logo"
                  src="/wpd-logo.png"
                  alt="Western Properties Developers"
                />

              </a>

              <p>
                Developing today,
                <br />
                shaping tomorrow.
              </p>

            </div>


            {/* QUICK LINKS */}

            <div className="ongoing-footer-column">

              <h4>
                QUICK LINKS
              </h4>

              <a href="/">
                Home
              </a>

              <a href="/about">
                About
              </a>

              <a href="/projects">
                Projects
              </a>

              <a href="/services">
                Services
              </a>

              <a href="/contact">
                Contact
              </a>

            </div>


            {/* PROJECTS */}

            <div className="ongoing-footer-column">

              <h4>
                PROJECTS
              </h4>

              <a href="/finished-projects">
                Finished Projects
              </a>

              <a href="/ongoing-projects">
                Ongoing Projects
              </a>

              <a href="/projects-on-sale">
                Projects on Sale
              </a>

            </div>


            {/* CONTACT */}

            <div className="ongoing-footer-column">

              <h4>
                CONTACT
              </h4>

              <p>
                Gisenyi, Rubavu
              </p>

              <p>
                Western Province, Rwanda
              </p>

              <a href="/contact">
                Get in touch →
              </a>

            </div>

          </div>


          {/* FOOTER BOTTOM */}

          <div className="footer-bottom ongoing-footer-bottom">

            <p>
              © {new Date().getFullYear()} Western Properties
              Developers. All rights reserved.
            </p>

            <p>
              Developing today, shaping tomorrow.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default OnSaleProjects;