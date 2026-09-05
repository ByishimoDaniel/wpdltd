import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  Eye,
  Users,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar about-navbar">

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
          aria-label="Open menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <p className="eyebrow">
            ABOUT WPD · RUBAVU · RWANDA
          </p>

          <h1>
            Building
            <br />
            <em>with purpose.</em>
          </h1>

          <p>
            WPD is a modern construction and property
            development company creating quality spaces
            for Rwanda's future.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="about-intro">

        <div className="section-number">
          01
        </div>

        <div className="about-intro-content">

          <p className="eyebrow dark">
            WHO WE ARE
          </p>

          <h2>
            We build
            <br />
            <em>more than</em>
            <br />
            buildings.
          </h2>

          <div className="about-intro-bottom">

            <p>
              WPD LTD is a Rwandan construction and
              property development company based in
              Rubavu. We focus on creating modern,
              practical and valuable spaces for people,
              businesses and communities.
            </p>

            <p>
              From the first idea to the final structure,
              our goal is simple: deliver work that
              combines quality, functionality and
              long-term value.
            </p>

          </div>

        </div>

      </section>

      {/* IMAGE */}
      <section className="about-image-section">

        <div className="about-rwanda-image"></div>

        <div className="about-image-caption">
          <span>WPD LTD</span>
          <span>RUBAVU · RWANDA</span>
        </div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div className="about-values-heading">

          <p className="eyebrow dark">
            WHAT DRIVES US
          </p>

          <h2>
            One vision.
            <br />
            <em>Real impact.</em>
          </h2>

        </div>

        <div className="about-values-grid">

          <article className="about-value">

            <div className="about-value-icon">
              <Target size={28} />
            </div>

            <span>01 · MISSION</span>

            <h3>
              Building quality
              <br />
              for everyday life.
            </h3>

            <p>
              Our mission is to deliver reliable
              construction and property solutions
              that improve the way people live,
              work and invest.
            </p>

          </article>

          <article className="about-value">

            <div className="about-value-icon">
              <Eye size={28} />
            </div>

            <span>02 · VISION</span>

            <h3>
              Shaping Rwanda's
              <br />
              built environment.
            </h3>

            <p>
              We envision a Rwanda where thoughtful
              design, quality construction and
              responsible development create better
              communities.
            </p>

          </article>

          <article className="about-value">

            <div className="about-value-icon">
              <Users size={28} />
            </div>

            <span>03 · PEOPLE</span>

            <h3>
              People at the
              <br />
              center.
            </h3>

            <p>
              We believe successful projects start
              with understanding the people who will
              use and experience them.
            </p>

          </article>

        </div>

      </section>

      {/* WHY WPD */}
      <section className="about-why">

        <div className="about-why-image"></div>

        <div className="about-why-content">

          <p className="eyebrow">
            WHY WPD
          </p>

          <h2>
            Local knowledge.
            <br />
            <em>Modern thinking.</em>
          </h2>

          <p>
            Being based in Rubavu gives us a strong
            understanding of the local environment,
            communities and opportunities within
            Rwanda's growing property and construction
            market.
          </p>

          <div className="about-checks">

            <div>
              <CheckCircle2 size={20} />
              <span>Quality-focused construction</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Modern and practical design</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Professional project delivery</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Long-term property value</span>
            </div>

          </div>

          <a href="/contact" className="cta-button">
            Work with WPD
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>

      {/* NUMBERS */}
      <section className="about-numbers">

        <div>
          <strong>
            10<span>+</span>
          </strong>
          <p>Projects</p>
        </div>

        <div>
          <strong>
            5<span>+</span>
          </strong>
          <p>Years Experience</p>
        </div>

        <div>
          <strong>01</strong>
          <p>Strong Vision</p>
        </div>

        <div>
          <strong>
            100<span>%</span>
          </strong>
          <p>Commitment</p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="about-cta-overlay"></div>

        <div className="about-cta-content">

          <p className="eyebrow">
            LET'S BUILD RWANDA
          </p>

          <h2>
            Have a vision?
            <br />
            <em>Let's build it.</em>
          </h2>

          <a href="/contact" className="cta-button">
            Start a Project
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>

      {/* FOOTER */}
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

    </div>
  );
}

export default About;