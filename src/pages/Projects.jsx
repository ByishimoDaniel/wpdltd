import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Building2,
  Hammer,
  Home,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="projects-page">

      {/* =========================
          NAVBAR
      ========================= */}
      <header className="projects-navbar">

        <div className="projects-logo">
          <a href="/" onClick={closeMenu}>
            <img
              src="/wpd-logo.png"
              alt="Western Properties Developers"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`projects-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a
            href="/projects"
            className="active"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a href="/services" onClick={closeMenu}>
            Services
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="projects-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </header>


      {/* =========================
          HERO
      ========================= */}
      <section className="projects-hero">

        <div className="projects-hero-overlay"></div>

        <div className="projects-hero-content">

          <p className="projects-intro-label">
            WESTERN PROPERTIES DEVELOPERS
          </p>

          <h1>
            Our <span>Projects</span>
          </h1>

          <p className="hero-description">
            Explore our completed developments, ongoing construction
            projects, and properties available for sale across Rwanda.
          </p>

          <a href="#project-categories" className="ongoing-cta-button">
            Explore Projects
            <ArrowUpRight size={20} />
          </a>

        </div>
      </section>


      {/* =========================
          INTRO
      ========================= */}
      <section className="projects-intro">

        <div className="projects-intro-label">
          <span>01</span>
          <p>WHAT WE BUILD</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              Building spaces that
              <span> matter.</span>
            </h2>
          </div>

          <div>
            <p>
              At Western Properties Developers, we focus on creating
              quality residential and commercial developments that
              combine modern design, functionality, and lasting value.
            </p>

            <p>
              From the first architectural concept to construction and
              completion, our team works to deliver reliable solutions
              for individuals, families, and investors.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          PROJECT CATEGORIES
      ========================= */}
      <section
        className="project-categories"
        id="project-categories"
      >

        <div className="categories-heading">

          <div>
            <p className="ongoing-small-title">
              EXPLORE OUR WORK
            </p>

            <h2>
              Projects & Properties
            </h2>
          </div>

          <p>
            Discover what WPD has completed, what we are currently
            building, and properties available for investment.
          </p>

        </div>


        <div className="categories-grid">

          {/* =========================
              FINISHED PROJECTS
          ========================= */}
          <a
            href="/finished-projects"
            className="project-category-card"
          >

            <div className="category-number">
              01
            </div>

            <div className="category-icon">
              <Building2 size={38} strokeWidth={1.5} />
            </div>

            <div className="category-card-content">

              <p>COMPLETED DEVELOPMENTS</p>

              <h3>
                Finished Projects
              </h3>

              <span>
                Explore completed projects
                <ArrowRight size={18} />
              </span>

            </div>

          </a>


          {/* =========================
              ONGOING PROJECTS
          ========================= */}
          <a
            href="/ongoing-projects"
            className="project-category-card"
          >

            <div className="category-number">
              02
            </div>

            <div className="category-icon">
              <Hammer size={38} strokeWidth={1.5} />
            </div>

            <div className="category-card-content">

              <p>CURRENT DEVELOPMENTS</p>

              <h3>
                Ongoing Projects
              </h3>

              <span>
                See projects under construction
                <ArrowRight size={18} />
              </span>

            </div>

          </a>


          {/* =========================
              PROJECTS ON SALE
          ========================= */}
          <a
            href="/projects-on-sale"
            className="project-category-card"
          >

            <div className="category-number">
              03
            </div>

            <div className="category-icon">
              <Home size={38} strokeWidth={1.5} />
            </div>

            <div className="category-card-content">

              <p>AVAILABLE PROPERTIES</p>

              <h3>
                Projects on Sale
              </h3>

              <span>
                View available properties
                <ArrowRight size={18} />
              </span>

            </div>

          </a>

        </div>

      </section>


      {/* =========================
          LOCATION / INFO
      ========================= */}
      <section className="projects-intro">

        <div className="projects-intro-label">
          <span>02</span>
          <p>OUR LOCATION</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              Developing across
              <span> Rwanda.</span>
            </h2>
          </div>

          <div>

            <p>
              Our projects are developed with a strong understanding
              of Rwanda's growing cities and communities.
            </p>

            <div className="ongoing-location">
              <MapPin size={18} />
              <span>
                Gisenyi, Rubavu District, Western Province, Rwanda
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="projects-cta">

        <div className="ongoing-cta-content">

          <p className="ongoing-cta-label">
            START YOUR PROJECT
          </p>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Whether you are planning a new building, looking for
            professional construction services, or searching for
            an investment property, our team is ready to help.
          </p>

          <a
            href="/contact"
            className="ongoing-cta-button"
          >
            Contact WPD
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="projects-footer">

        <div className="footer-content">

          {/* Brand */}
          <div className="ongoing-footer-main">

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




            {/* Projects */}
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


            {/* Contact */}
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


          {/* Bottom */}
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

export default Projects;