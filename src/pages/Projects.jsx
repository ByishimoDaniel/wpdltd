import { useState } from "react";

import {
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  BedDouble,
  Building2,
  Maximize2,
} from "lucide-react";

// PROJECT PHOTOS
import photo1 from "../assets/images/projects/mbugangari/photo1.png";
import photo2 from "../assets/images/projects/mbugangari/photo2.png";
import photo3 from "../assets/images/projects/mbugangari/photo3.png";
import photo4 from "../assets/images/projects/mbugangari/photo4.png";
import photo6 from "../assets/images/projects/mbugangari/photo6.jpeg";
import photo5 from "../assets/images/projects/mbugangari/photo5.jpeg";
import photo8 from "../assets/images/projects/mbugangari/photo8.jpeg";
import photo7 from "../assets/images/projects/mbugangari/photo7.jpeg";
import photo9 from "../assets/images/projects/mbugangari/photo9.jpeg";
import photo10 from "../assets/images/projects/mbugangari/photo10.jpeg";
function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const projectPhotos = [
    {
      image: photo1,
      title: "Front View",
    },
    {
      image: photo2,
      title: "Residential Units",
    },
    {
      image: photo3,
      title: "Building Progress",
    },
    {
      image: photo4,
      title: "Architectural Detail",
    },
       {
      image: photo6,
      title: "G+2 apartment in kigali city",
    },
       {
      image: photo5,
      title: "Modern construction of G+2 in kabeza",
    },
       {
      image: photo7,
      title: "",
    },
       {
      image: photo8,
      title: "Front View",
    },
       {
      image: photo9,
      title: "Building Progress located in kabeza",
    },
       {
      image: photo10,
      title: "New apartment in kigali city - kabeza",
    },
  ];

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar projects-navbar">

        <a href="/" className="logo" onClick={closeMenu}>
          <img
            src="/wpd-logo.png"
            alt="WPD - Western Properties Developers"
          />
        </a>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/services" onClick={closeMenu}>
            Services
          </a>

          <a href="/projects" className="active" onClick={closeMenu}>
            Projects
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>

        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="projects-page-hero">

        <div className="projects-page-overlay"></div>

        <div className="projects-page-content">

          <p className="eyebrow">
            WPD · PROPERTY DEVELOPMENT
          </p>

          <h1>
            Our
            <br />
            <em>projects.</em>
          </h1>

          <p className="projects-intro">
            Discover spaces we've designed, developed and built
            across Rwanda and East Africa.
          </p>

        </div>

      </section>


      {/* ================= PROJECT INTRO ================= */}

      <section className="projects-list-section">

        <div className="projects-list-heading">

          <div>

            <p className="eyebrow dark">
              FEATURED PROJECT
            </p>

            <h2>
              Built with
              <br />
              <em>purpose.</em>
            </h2>

          </div>

          <p>
            Every WPD project is created with a focus on quality,
            functionality, modern design and long-term value.
          </p>

        </div>


        {/* ================= PROJECT CARD ================= */}

        <article className="featured-project">

          {/* PROJECT HEADER */}

          <div className="featured-project-header">

            <div>

              <span className="project-number">
                01 · RESIDENTIAL DEVELOPMENT
              </span>

              <h3>
                Four-Family Residential Apartment
              </h3>

              <div className="project-location">

                <MapPin size={18} />

                <span>
                  Mbugangari Cell, Gisenyi, Rubavu District, Rwanda
                </span>

              </div>

            </div>

            <Building2
              size={45}
              strokeWidth={1.3}
            />

          </div>


          {/* ================= PHOTO GRID ================= */}

          <div className="project-photo-grid">

            {projectPhotos.map((photo, index) => (

              <div
                className="project-photo-card"
                key={index}
                onClick={() => setSelectedImage(photo.image)}
              >

                <img
                  src={photo.image}
                  alt={`Mbugangari Residential Apartment ${index + 1}`}
                />

                <div className="project-photo-overlay">

                  <span>
                    {photo.title}
                  </span>

                  <div className="photo-expand">
                    <Maximize2 size={18} />
                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ================= PROJECT DESCRIPTION ================= */}

          <div className="project-description">

            <div className="project-description-main">

              <p className="eyebrow dark">
                PROJECT OVERVIEW
              </p>

              <h4>
                Modern residential living
                <br />
                in the heart of Gisenyi.
              </h4>

              <p>
                A modern four-family residential apartment located
                in Mbugangari Cell, Gisenyi, Rubavu District, Rwanda.
                The development consists of four independent
                residential units, designed to provide comfortable
                and modern living spaces for families.
              </p>

            </div>


            {/* PROJECT FEATURES */}

            <div className="project-features">

              <div className="project-feature">

                <BedDouble size={25} />

                <div>
                  <strong>2 Units</strong>
                  <span>3-bedroom apartments</span>
                </div>

              </div>


              <div className="project-feature">

                <BedDouble size={25} />

                <div>
                  <strong>2 Units</strong>
                  <span>2-bedroom apartments</span>
                </div>

              </div>


              <div className="project-feature">

                <Building2 size={25} />

                <div>
                  <strong>Modern Design</strong>
                  <span>Spacious living areas</span>
                </div>

              </div>

            </div>

          </div>


          {/* ================= PROJECT BENEFITS ================= */}

          <div className="project-benefits">

            <div>
              <span>01</span>
              <p>
                Modern architectural design with spacious
                living areas.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Private and comfortable residential spaces.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Suitable for family living and rental investment.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Located in the growing and attractive area
                of Gisenyi.
              </p>
            </div>

          </div>

        </article>

      </section>


      {/* ================= CTA ================= */}

      <section className="projects-page-cta">

        <p className="eyebrow">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's create
          <br />
          <em>something great.</em>
        </h2>

        <a href="/contact" className="cta-button">
          Start a Project
          <ArrowUpRight size={20} />
        </a>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          WPD<span>.</span>
        </div>

        <div className="footer-links">

          <a href="/">Home</a>

          <a href="/about">About</a>

          <a href="/services">Services</a>

          <a href="/projects">Projects</a>

          <a href="/contact">Contact</a>

        </div>

        <p>
          © 2026 WPDltd. All rights reserved.
        </p>

      </footer>


      {/* ================= IMAGE LIGHTBOX ================= */}

      {selectedImage && (

        <div
          className="image-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="WPD project enlarged"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </div>
  );
}

export default Projects;