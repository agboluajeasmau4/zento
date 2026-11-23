
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "VendorOS", path: "/vendoros" },
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Official Zento logo */}
        {/* <NavLink
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Zento homepage"
        >
          <img
            src="/images/zento-logo.png"
            alt="Zento — Automate. Convert. Grow."
          />
        </NavLink> */}

        <NavLink to="/" className="navbar-brand">
  <img
    src="/images/zento-logo.png"
    alt="Zento — Automate. Convert. Grow."
  />
</NavLink>

        {/* Desktop navigation */}
        <nav
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            title={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <NavLink
            to="/contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Let's Talk
          </NavLink>

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
