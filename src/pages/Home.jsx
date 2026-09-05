import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVBAR */}
{/* NAVBAR */}
<header className="navbar">

  <a href="#home" className="logo" onClick={closeMenu}>
    <img
      src="/wpd-logo.png"
      alt="WPD - Western Properties Developers"
    />
  </a>

  <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

    <a href="#home" onClick={closeMenu}>
      Home
    </a>

    <a href="about" onClick={closeMenu}>
      About
    </a>

    <a href="services" onClick={closeMenu}>
      Services
    </a>

    <a href="projects" onClick={closeMenu}>
      Projects
    </a>

    <a href="contact" onClick={closeMenu}>
      Contact
    </a>

    <a
      href="#contact"
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
      <main id="home">
        <section className="hero">

          <div className="hero-image"></div>
          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-top">
              <p>PROPERTY DEVELOPMENT</p>
              <p>RWANDA · EAST AFRICA</p>
            </div>

            <div className="hero-center">

              <p className="eyebrow">
                BUILDING THE FUTURE
              </p>

              <h1>
                Spaces
                <br />
                <em>that move</em>
                <br />
                people.
              </h1>

              <div className="hero-bottom">
                <p className="hero-description">
                  WPD creates contemporary spaces through
                  architecture, construction and property
                  development.
                </p>

                <a href="#projects" className="circle-button">
                  <ArrowDownRight size={25} />
                </a>
              </div>

            </div>
          </div>

          <div className="hero-scroll">
            <span></span>
            SCROLL TO EXPLORE
          </div>

        </section>


        {/* INTRO */}
        <section className="intro section" id="about">
          <div className="section-number">01</div>

          <div className="intro-content">
            <p className="eyebrow dark">WHO WE ARE</p>

            <h2>
              We don't just build
              <br />
              <span>structures.</span>
              <br />
              We build <strong>possibilities.</strong>
            </h2>

            <div className="intro-bottom">
              <p>
                WPD is a modern construction and property
                development company focused on creating
                exceptional spaces for living, working and
                investing.
              </p>

              <a href="#services" className="text-link">
                Discover WPD
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>


        {/* STATS */}
        <section className="stats">
          <div>
            <strong>10<span>+</span></strong>
            <p>Projects</p>
          </div>

          <div>
            <strong>5<span>+</span></strong>
            <p>Years Experience</p>
          </div>

          <div>
            <strong>100<span>%</span></strong>
            <p>Commitment</p>
          </div>

          <div>
            <strong>01</strong>
            <p>Vision</p>
          </div>
        </section>


        {/* SERVICES */}
        <section className="services section" id="services">

          <div className="section-heading">
            <div>
              <p className="eyebrow dark">WHAT WE DO</p>
              <h2>Built around<br /><em>your vision.</em></h2>
            </div>

            <p>
              From the first idea to the final detail,
              we bring together design, construction and
              development expertise.
            </p>
          </div>

          <div className="service-list">

            <article>
              <span>01</span>
              <h3>Construction</h3>
              <p>
                High-quality construction delivered with
                precision, safety and attention to detail.
              </p>
              <ArrowUpRight />
            </article>

            <article>
              <span>02</span>
              <h3>Property Development</h3>
              <p>
                Modern developments designed to create
                long-term value and exceptional experiences.
              </p>
              <ArrowUpRight />
            </article>

            <article>
              <span>03</span>
              <h3>Real Estate</h3>
              <p>
                Strategic property solutions for individuals,
                businesses and investors.
              </p>
              <ArrowUpRight />
            </article>

          </div>
        </section>


        {/* PROJECTS */}
        <section className="projects section" id="projects">

          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow dark">SELECTED WORK</p>
              <h2>Our latest<br /><em>projects.</em></h2>
            </div>

            <a href="#contact" className="text-link">
              View all projects
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="project-grid">

            <article className="project project-large">
              <div className="project-image project-one"></div>

              <div className="project-info">
                <div>
                  <p>RESIDENTIAL · KIGALI</p>
                  <h3>Modern Living</h3>
                </div>

                <span>01</span>
              </div>
            </article>

            <article className="project">
              <div className="project-image project-two"></div>

              <div className="project-info">
                <div>
                  <p>COMMERCIAL · RWANDA</p>
                  <h3>Urban Space</h3>
                </div>

                <span>02</span>
              </div>
            </article>

            <article className="project">
              <div className="project-image project-three"></div>

              <div className="project-info">
                <div>
                  <p>DEVELOPMENT · EAST AFRICA</p>
                  <h3>Future Heights</h3>
                </div>

                <span>03</span>
              </div>
            </article>

          </div>
        </section>


        {/* CTA */}
        <section className="cta" id="contact">

          <div className="cta-image"></div>
          <div className="cta-overlay"></div>

          <div className="cta-content">
            <p className="eyebrow">LET'S BUILD TOGETHER</p>

            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>

            <a href="contact" className="cta-button">
              Talk to WPD
              <ArrowUpRight size={20} />
            </a>
          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>
        <div className="footer-logo">WPD<span>.</span></div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="about">About</a>
          <a href="services">Services</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
        </div>

        <p>© 2026 WPDltd. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;