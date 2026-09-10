import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  HardHat,
  Building2,
} from "lucide-react";

import photo5 from "../assets/images/projects/mbugangari/photo5.jpeg";
import photo6 from "../assets/images/projects/mbugangari/photo6.jpeg";
import photo7 from "../assets/images/projects/mbugangari/photo7.jpeg";
import photo8 from "../assets/images/projects/mbugangari/photo8.jpeg";
import photo9 from "../assets/images/projects/mbugangari/photo9.jpeg";
import photo10 from "../assets/images/projects/mbugangari/photo10.jpeg";

const OngoingProjects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const projects = [
    {
      id: "01",
      title: "Modern G+2 Construction",
      category: "Residential Development",
      location: "Kabeza, Kigali, Rwanda",
      image: photo5,
      description:
        "A modern multi-storey residential development designed with contemporary architecture, practical spaces, and quality construction.",
    },
    {
      id: "02",
      title: "G+2 Apartment Development",
      category: "Apartment Development",
      location: "Kigali City, Rwanda",
      image: photo6,
      description:
        "A growing apartment development focused on comfortable living spaces, modern design, and long-term investment value.",
    },
    {
      id: "03",
      title: "Residential Development",
      category: "Residential Construction",
      location: "Kigali, Rwanda",
      image: photo7,
      description:
        "A residential construction project combining functional planning, modern finishes, and efficient use of space.",
    },
    {
      id: "04",
      title: "Residential Building",
      category: "Building Construction",
      location: "Kigali, Rwanda",
      image: photo8,
      description:
        "A carefully planned residential building currently progressing through construction toward completion.",
    },
    {
      id: "05",
      title: "Building Development",
      category: "Property Development",
      location: "Kabeza, Kigali, Rwanda",
      image: photo9,
      description:
        "A property development project designed to deliver quality spaces while responding to the needs of a growing urban community.",
    },
    {
      id: "06",
      title: "New Apartment Development",
      category: "Apartment Development",
      location: "Kabeza, Kigali, Rwanda",
      image: photo10,
      description:
        "A new apartment project combining modern architecture, comfortable accommodation, and investment potential.",
    },
  ];

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

        <nav className={`projects-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a
            href="/projects"
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

        <button
          className="projects-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
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
            Ongoing <span>Projects</span>
          </h1>

          <p className="hero-description">
            Discover the developments currently being built by
            Western Properties Developers as we continue creating
            quality spaces across Rwanda.
          </p>

          <a
            href="#ongoing-projects"
            className="ongoing-cta-button"
          >
            View Projects
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
          <p>UNDER CONSTRUCTION</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              Building the
              <span> future.</span>
            </h2>
          </div>

          <div>

            <p>
              Our ongoing projects represent our commitment to
              quality construction, modern design, and responsible
              property development.
            </p>

            <p>
              Follow our construction progress as we transform
              plans and architectural concepts into real spaces
              for families, businesses, and investors.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}
      <section
        className="ongoing-projects-section"
        id="ongoing-projects"
      >

        <div className="ongoing-section-heading">

          <div>
            <p className="ongoing-small-title">
              CURRENT DEVELOPMENTS
            </p>

            <h2>
              Projects in Progress
            </h2>
          </div>

          <div className="ongoing-project-count">
            <span>06</span>
            <p>ACTIVE PROJECTS</p>
          </div>

        </div>


        <div className="ongoing-projects-grid">

          {projects.map((project) => (

            <article
              className="ongoing-project-card"
              key={project.id}
            >

              {/* Image */}
              <div className="ongoing-project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="ongoing-image-overlay">

                  <div className="ongoing-view-icon">
                    <ArrowUpRight size={22} />
                  </div>

                </div>

                <div className="ongoing-status">
                  <span></span>
                  Ongoing
                </div>

              </div>


              {/* Content */}
              <div className="ongoing-project-content">

                <div className="ongoing-project-number">
                  {project.id}
                </div>

                <p className="ongoing-project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="ongoing-description">
                  {project.description}
                </p>

                <div className="ongoing-location">
                  <MapPin size={17} />
                  <span>{project.location}</span>
                </div>


                <div className="ongoing-project-bottom">

                  <span>
                    Construction in progress
                  </span>

                  <HardHat size={20} />

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          DEVELOPMENT MESSAGE
      ========================= */}
      <section className="projects-intro">

        <div className="projects-intro-label">
          <span>02</span>
          <p>OUR APPROACH</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              From plans to
              <span> reality.</span>
            </h2>
          </div>

          <div>

            <p>
              Every project is carefully managed from planning
              through construction. Our goal is to deliver buildings
              that are practical, durable, and visually distinctive.
            </p>

            <div className="ongoing-location">
              <Building2 size={19} />
              <span>
                Quality construction • Modern design • Reliable delivery
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="ongoing-cta">

        <div className="ongoing-cta-content">

          <p className="ongoing-cta-label">
            WORK WITH WPD
          </p>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <p>
            Have a construction or property development project
            in mind? Talk to our team and let's discuss your vision.
          </p>

          <a
            href="/contact"
            className="ongoing-cta-button"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="ongoing-footer projects-footer">

        <div className="footer-content">

          <div className="ongoing-footer-main">

            {/* Brand */}
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


            {/* Quick Links */}
            <div className="ongoing-footer-column">

              <h4>QUICK LINKS</h4>

              <a href="/">Home</a>

              <a href="/about">About</a>

              <a href="/projects">Projects</a>

              <a href="/services">Services</a>

              <a href="/contact">Contact</a>

            </div>


            {/* Projects */}
            <div className="ongoing-footer-column">

              <h4>PROJECTS</h4>

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

              <h4>CONTACT</h4>

              <p>Gisenyi, Rubavu</p>

              <p>Western Province, Rwanda</p>

              <a href="/contact">
                Get in touch →
              </a>

            </div>

          </div>


          {/* Footer Bottom */}
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

export default OngoingProjects;