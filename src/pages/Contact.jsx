import { useState } from "react";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

     <header className="navbar contact-navbar">

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
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>
            Let's build
            <br />
            <em>together.</em>
          </h1>

          <p>
            Have an idea, a property project or a construction
            opportunity? Tell us about it.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">

        <div className="contact-heading">
          <p className="eyebrow dark">CONTACT WPD</p>

          <h2>
            Start a
            <br />
            <em>conversation.</em>
          </h2>
        </div>

        <div className="contact-grid">

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <span>PHONE</span>
                <a href="tel:+250786200854">
                  +250 786200854
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:wpdltd2026@gmail.com">
                  wpdltd2026@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>LOCATION</span>
                <p>Rubavu-Kigali, Rwanda</p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Names</label>
                <input
                  type="text"
                  placeholder="Maniraguha etien"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="wpdltd2026.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+250 ..."
              />
            </div>

            <div className="form-group">
              <label>Tell us about your project</label>
              <textarea
                rows="6"
                placeholder="I would like to discuss..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <ArrowUpRight size={20} />
            </button>

          </form>

        </div>
      </section>

      {/* CTA */}
      <section className="contact-bottom">
        <p className="eyebrow">WPD LTD · RWANDA</p>

        <h2>
          Your vision.
          <br />
          <em>Our expertise.</em>
        </h2>

        <a href="mailto:wpdltd2026@gmail.com" className="cta-button">
          Email WPD
          <ArrowUpRight size={20} />
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          WPD<span>.</span>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <p>© 2026 WPDltd. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Contact;