import {
  ArrowUpRight,
  Building2,
  HardHat,
  Map,
  PencilRuler,
  FileCheck2,
  ClipboardCheck,
  Ruler,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useState } from "react";

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="services-page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

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

          <a
            href="/services"
            className="active"
            onClick={closeMenu}
          >
            Services
          </a>

          <a href="/projects" onClick={closeMenu}>
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
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      {/* ================= HERO ================= */}
      <section className="services-hero">

        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">

          <p className="eyebrow">
            WPD · GISENYI · RUBAVU · RWANDA
          </p>

          <h1>
            Building ideas
            <br />
            into <em>reality.</em>
          </h1>

          <p>
            From land advice and architectural drawings to
            construction, supervision and technical services,
            WPD supports your project from the first idea
            to the finished building.
          </p>

          <a href="/contact" className="hero-button">
            Discuss Your Project
            <ArrowUpRight size={20} />
          </a>

        </div>

        <div className="hero-location">
          <MapPin size={16} />
          Gisenyi Town, Rubavu
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="services-intro">

        <div className="section-number">
          01
        </div>

        <div className="intro-content">

          <p className="eyebrow dark">
            OUR EXPERTISE
          </p>

          <h2>
            From the first
            <br />
            <em>idea</em> to the
            <br />
            finished building.
          </h2>

          <p className="intro-text">
            WPD provides professional construction and property
            solutions for homeowners, businesses, developers and
            investors in Rubavu and across Rwanda.
          </p>

        </div>

      </section>


      {/* ================= PROJECT JOURNEY ================= */}
      <section className="project-journey">

        <div className="journey-heading">

          <div>

            <p className="eyebrow dark">
              THE WPD PROJECT JOURNEY
            </p>

            <h2>
              Every project
              <br />
              has a <em>beginning.</em>
            </h2>

          </div>

          <p>
            Whether you have a plot, are preparing to build,
            have construction underway or are completing your
            property, WPD can support you at every stage.
          </p>

        </div>


        <div className="journey-grid">

          {/* 01 LAND */}
          <article className="journey-card">

            <div className="journey-image">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
                alt="Land and property"
              />
            </div>

            <div className="journey-number">
              01
            </div>

            <div className="journey-content">

              <span>
                LAND · PLANNING
              </span>

              <h3>
                Start with
                <br />
                the right <em>plot.</em>
              </h3>

              <p>
                Get practical advice about your land and
                understand the possibilities before you begin
                developing your property.
              </p>

              <a href="/contact">
                Land Advice
                <ArrowUpRight size={18} />
              </a>

            </div>

          </article>


          {/* 02 STARTING */}
          <article className="journey-card">

            <div className="journey-image">
              <img
                src="https://images.pexels.com/photos/30934425/pexels-photo-30934425.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Construction beginning in Rwanda"
              />
            </div>

            <div className="journey-number">
              02
            </div>

            <div className="journey-content">

              <span>
                DESIGN · PERMITS
              </span>

              <h3>
                Prepare
                <br />
                to <em>build.</em>
              </h3>

              <p>
                We help prepare your project through
                architectural drawings, construction permits,
                quantities and technical specifications.
              </p>

              <a href="/contact">
                Start Your Project
                <ArrowUpRight size={18} />
              </a>

            </div>

          </article>


          {/* 03 ONGOING */}
          <article className="journey-card">

            <div className="journey-image">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
                alt="Construction work in progress"
              />
            </div>

            <div className="journey-number">
              03
            </div>

            <div className="journey-content">

              <span>
                CONSTRUCTION · SUPERVISION
              </span>

              <h3>
                Build with
                <br />
                <em>confidence.</em>
              </h3>

              <p>
                Our construction and supervision services help
                keep your project properly managed and moving
                toward completion.
              </p>

              <a href="/contact">
                Supervise My Project
                <ArrowUpRight size={18} />
              </a>

            </div>

          </article>


          {/* 04 FINISHED */}
          <article className="journey-card">

            <div className="journey-image">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
                alt="Finished modern building"
              />
            </div>

            <div className="journey-number">
              04
            </div>

            <div className="journey-content">

              <span>
                COMPLETION · PROPERTY
              </span>

              <h3>
                See your
                <br />
                vision <em>finished.</em>
              </h3>

              <p>
                Turn your land, investment and ideas into a
                finished property designed around your needs
                and long-term goals.
              </p>

              <a href="/contact">
                Complete My Project
                <ArrowUpRight size={18} />
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="services-list">

        <div className="services-list-header">

          <div>

            <p className="eyebrow dark">
              WHAT WE OFFER
            </p>

            <h2>
              Our
              <br />
              <em>services.</em>
            </h2>

          </div>

          <p>
            Professional construction, architectural,
            environmental and property services for projects
            in Rubavu and across Rwanda.
          </p>

        </div>


        <div className="service-list-grid">

          {/* 01 */}
          <article className="professional-service">

            <div className="service-icon">
              <FileCheck2 size={27} />
            </div>

            <span>01</span>

            <h3>
              Construction
              <br />
              Permit Application
            </h3>

            <p>
              Assistance with construction permit applications
              and project preparation.
            </p>

          </article>


          {/* 02 */}
          <article className="professional-service">

            <div className="service-icon">
              <HardHat size={27} />
            </div>

            <span>02</span>

            <h3>
              Construction
              <br />
              Works
            </h3>

            <p>
              Execution of construction works for residential
              and other building projects.
            </p>

          </article>


          {/* 03 */}
          <article className="professional-service">

            <div className="service-icon">
              <ClipboardCheck size={27} />
            </div>

            <span>03</span>

            <h3>
              Construction
              <br />
              Supervision
            </h3>

            <p>
              Professional supervision and monitoring of
              construction activities.
            </p>

          </article>


          {/* 04 */}
          <article className="professional-service">

            <div className="service-icon">
              <PencilRuler size={27} />
            </div>

            <span>04</span>

            <h3>
              Architectural
              <br />
              Drawings
            </h3>

            <p>
              Architectural drawings and practical design
              solutions for your building project.
            </p>

          </article>


          {/* 05 */}
          <article className="professional-service">

            <div className="service-icon">
              <Map size={27} />
            </div>

            <span>05</span>

            <h3>
              Advice
              <br />
              on Land
            </h3>

            <p>
              Professional advice to help you understand your
              land and plan its development.
            </p>

          </article>


          {/* 06 */}
          <article className="professional-service">

            <div className="service-icon">
              <Building2 size={27} />
            </div>

            <span>06</span>

            <h3>
              Environmental
              <br />
              Impact Assessment
            </h3>

            <p>
              Environmental assessment support for projects
              requiring environmental consideration.
            </p>

          </article>


          {/* 07 */}
          <article className="professional-service">

            <div className="service-icon">
              <Ruler size={27} />
            </div>

            <span>07</span>

            <h3>
              Material Quantities &
              <br />
              Technical Specifications
            </h3>

            <p>
              Material quantity calculations and technical
              specifications for better project planning.
            </p>

          </article>

        </div>

      </section>


      {/* ================= RUBAVU ================= */}
      <section className="rubavu-section">

        <div className="rubavu-image">

          <img
            src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=85"
            alt="Construction development in Rwanda"
          />

        </div>

        <div className="rubavu-content">

          <p className="eyebrow">
            PROUDLY BASED IN GISENYI · RUBAVU
          </p>

          <h2>
            Building
            <br />
            <em>Rubavu.</em>
          </h2>

          <p>
            WPD operates in Gisenyi Town, Rubavu District,
            Western Province, Rwanda. We provide practical
            construction and property services for clients
            who want to turn land and ideas into real projects.
          </p>

          <div className="rubavu-location">
            <MapPin size={18} />
            Gisenyi Town, Rubavu, Rwanda
          </div>

          <a
            href="/contact"
            className="rubavu-button"
          >
            Work With WPD
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="services-contact">

        <div className="contact-title">

          <p className="eyebrow dark">
            READY TO BUILD?
          </p>

          <h2>
            Let's discuss
            <br />
            your <em>project.</em>
          </h2>

        </div>


        <div className="contact-details">

          <a href="tel:0786200854">
            <Phone size={18} />
            0786 200 854
          </a>

          <a href="tel:0722520335">
            <Phone size={18} />
            0722 520 335
          </a>

          <a href="mailto:maniraguhaetienne05@gmail.com">
            <Mail size={18} />
            maniraguhaetienne05@gmail.com
          </a>

          <a href="mailto:wpdltd2026@gmail.com">
            <Mail size={18} />
            wpdltd2026@gmail.com
          </a>

        </div>


        <a
          href="/contact"
          className="contact-main-button"
        >
          Contact WPD
          <ArrowUpRight size={20} />
        </a>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="services-footer">

        <div className="footer-brand">

          <div className="footer-logo">
            WPD<span>.</span>
          </div>

          <p>
            Western Properties Developers
          </p>

          <small>
            Gisenyi Town · Rubavu · Rwanda
          </small>

        </div>


        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>

        </div>


        <div className="footer-contact">

          <a href="tel:0786200854">
            <Phone size={15} />
            0786 200 854
          </a>

          <a href="mailto:wpdltd2026@gmail.com">
            <Mail size={15} />
            wpdltd2026@gmail.com
          </a>

        </div>


        <p className="copyright">
          © 2026 WPDltd. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Services;