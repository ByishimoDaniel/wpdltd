import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import photo1 from "../assets/images/projects/mbugangari/photo1.png";
import photo2 from "../assets/images/projects/mbugangari/photo2.png";
import photo3 from "../assets/images/projects/mbugangari/photo3.png";
import photo4 from "../assets/images/projects/mbugangari/photo4.png";

const FinishedProjects = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const projects = [
    {
      id: "01",
      title: "Four-Family Residential Apartment",
      category: "Residential Development",
      location: "Mbugangari Cell, Gisenyi, Rubavu District, Rwanda",
      image: photo1,
      description:
        "A modern four-family residential apartment designed to provide comfortable living spaces, privacy, and long-term value.",
      details:
        "The development consists of four independent residential units: two 3-bedroom apartments and two 2-bedroom apartments.",
    },
    {
      id: "02",
      title: "Modern Residential Development",
      category: "Residential Construction",
      location: "Rubavu, Rwanda",
      image: photo2,
      description:
        "A completed residential development combining practical layouts, modern architecture, and quality construction.",
      details:
        "The project was developed with a focus on comfortable family living and efficient use of space.",
    },
    {
      id: "03",
      title: "Contemporary Housing Project",
      category: "Housing Development",
      location: "Gisenyi, Rwanda",
      image: photo3,
      description:
        "A completed housing project delivering functional and attractive spaces for modern residents.",
      details:
        "The project demonstrates WPD's commitment to reliable construction and thoughtful architectural planning.",
    },
    {
      id: "04",
      title: "Completed Building Development",
      category: "Building Construction",
      location: "Rubavu District, Rwanda",
      image: photo4,
      description:
        "A completed development built with attention to structural quality, functionality, and modern appearance.",
      details:
        "The completed building reflects our approach to creating durable and practical property solutions.",
    },
  ];

  return (
    <div className="projects-page">

      {/* NAVBAR */}
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
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/projects" onClick={closeMenu}>Projects</a>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="projects-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </header>


      {/* HERO */}
      <section className="projects-hero">

        <div className="projects-hero-overlay"></div>

        <div className="projects-hero-content">

          <p className="projects-intro-label">
            WESTERN PROPERTIES DEVELOPERS
          </p>

          <h1>
            Finished <span>Projects</span>
          </h1>

          <p className="hero-description">
            Explore developments successfully completed by
            Western Properties Developers.
          </p>

          <a
            href="#finished-projects"
            className="ongoing-cta-button"
          >
            Explore Completed Work
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>


      {/* INTRO */}
      <section className="projects-intro">

        <div className="projects-intro-label">
          <span>01</span>
          <p>OUR COMPLETED WORK</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              Built with
              <span> purpose.</span>
            </h2>
          </div>

          <div>
            <p>
              Every completed project represents our commitment
              to quality, functionality, and modern construction.
            </p>

            <p>
              We work closely with clients and partners to transform
              architectural concepts into reliable and lasting spaces.
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section
        className="ongoing-projects-section"
        id="finished-projects"
      >

        <div className="ongoing-section-heading">

          <div>
            <p className="ongoing-small-title">
              COMPLETED DEVELOPMENTS
            </p>

            <h2>
              Our Finished Projects
            </h2>
          </div>

          <div className="ongoing-project-count">
            <span>04</span>
            <p>COMPLETED PROJECTS</p>
          </div>

        </div>


        <div className="ongoing-projects-grid">

          {projects.map((project) => (

            <article
              className="ongoing-project-card"
              key={project.id}
            >

              <div
                className="ongoing-project-image"
                onClick={() => setSelectedImage(project.image)}
                style={{ cursor: "pointer" }}
              >

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
                  <CheckCircle2 size={15} />
                  Completed
                </div>

              </div>


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
                    Project completed
                  </span>

                  <ArrowRight size={19} />

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* FEATURED PROJECT */}
      <section className="projects-intro">

        <div className="projects-intro-label">
          <span>02</span>
          <p>FEATURED DEVELOPMENT</p>
        </div>

        <div className="projects-intro-content">

          <div>
            <h2>
              Four-Family
              <span> Residential Apartment.</span>
            </h2>
          </div>

          <div>

            <p>
              Located in Mbugangari Cell, Gisenyi, this development
              consists of four independent residential units.
            </p>

            <p>
              The project includes two 3-bedroom units and two
              2-bedroom units, making it suitable for family living
              or rental investment.
            </p>

            <div className="ongoing-location">
              <MapPin size={18} />
              <span>
                Mbugangari Cell, Gisenyi, Rubavu District, Rwanda
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="ongoing-cta">

        <div className="ongoing-cta-content">

          <p className="ongoing-cta-label">
            START YOUR PROJECT
          </p>

          <h2>
            Ready to build
            <br />
            <span>with WPD?</span>
          </h2>

          <p>
            Let's turn your idea into a professionally designed
            and carefully constructed property.
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


      {/* FOOTER */}
      <footer className="projects-footer">

        <div className="footer-content">

          <div className="ongoing-footer-main">

            <div className="ongoing-footer-brand">

            </div>

           
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

            <div className="ongoing-footer-column">
              <h4>CONTACT</h4>
              <p>Gisenyi, Rubavu</p>
              <p>Western Province, Rwanda</p>
              <a href="/contact">
                Get in touch →
              </a>
            </div>

          </div>

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


      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="ongoing-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="ongoing-lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Project preview"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </div>
  );
};

export default FinishedProjects;