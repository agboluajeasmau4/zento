
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
              src="/images/zento-logo.png"
              alt="Zento — Automate. Convert. Grow."
            />
          </Link>

          <p>
            We build business automation systems and
            digital solutions that help businesses
            operate smarter, convert more customers,
            and grow.
          </p>

          <span className="footer-tagline">
            AUTOMATE. CONVERT. GROW.
          </span>
        </div>

        {/* Quick links */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/services">Our Services</Link>
          <Link to="/vendoros">Zento VendorOS</Link>
          <Link to="/about">About Zento</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Get in touch</h3>

          <Link to="/contact">Contact Us</Link>

          <p>
            Have a business challenge?
            <br />
            Let's build a better system.
          </p>

          <Link
            to="/contact"
            className="footer-contact-link"
          >
            Start a conversation →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zento.
          All rights reserved.
        </p>

        <p className="footer-bottom-tagline">
          Built for better business.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
