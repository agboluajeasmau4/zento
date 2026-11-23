
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="home-section hero-section">
      <div className="home-container hero-container">
        <div className="hero-content">
          <div className="section-eyebrow hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Digital Systems Studio & Creator of VendorOS
          </div>

          <h1>
            Stop Losing Profit to{" "}
            <span>Manual Chaos.</span>
            <br />
            We Build the Systems That{" "}
            <span>Scale Your Sales.</span>
          </h1>

          <p className="hero-description">
            Custom digital automation and business systems
            for companies ready to grow. From smarter
            operations to sales tools that help you convert
            more customers.
          </p>

          <div className="hero-actions">
            <a
              href="https://zento-vendor-os.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="home-button"
            >
              Explore VendorOS Hub
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              to="/contact"
              className="home-button home-button-secondary"
            >
              Book a Strategy Call
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <span className="hero-trust-mark">✓</span>
              Business-focused systems
            </div>

            <div>
              <span className="hero-trust-mark">✓</span>
              Built around your workflow
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="hero-dashboard">
            <div className="hero-dashboard-top">
              <div className="hero-dashboard-brand">
                <span className="hero-dashboard-symbol">Z</span>
                <span>VendorOS</span>
              </div>

              <span className="hero-dashboard-status">
                <span />
                Dashboard preview
              </span>
            </div>

            <div className="hero-dashboard-welcome">
              <div>
                <span>BUSINESS OVERVIEW</span>
                <h3>Your business, in view.</h3>
              </div>
              <div className="hero-dashboard-date">Today</div>
            </div>

            <div className="hero-dashboard-stats">
              <div className="hero-stat-card">
                <span>Total sales</span>
                <strong>₦1,240,000</strong>
                <small>Sales overview</small>
              </div>

              <div className="hero-stat-card">
                <span>Orders</span>
                <strong>128</strong>
                <small>Order tracking</small>
              </div>
            </div>

            <div className="hero-dashboard-orders">
              <div className="hero-orders-heading">
                <strong>Recent orders</strong>
                <span>Order management</span>
              </div>

              <div className="hero-order-row">
                <span className="hero-order-icon">01</span>
                <div>
                  <strong>Order #1024</strong>
                  <small>Customer order</small>
                </div>
                <span className="hero-order-pill">Confirmed</span>
              </div>

              <div className="hero-order-row">
                <span className="hero-order-icon">02</span>
                <div>
                  <strong>Order #1025</strong>
                  <small>Customer order</small>
                </div>
                <span className="hero-order-pill">Preparing</span>
              </div>

              <div className="hero-order-row">
                <span className="hero-order-icon">03</span>
                <div>
                  <strong>Order #1026</strong>
                  <small>Customer order</small>
                </div>
                <span className="hero-order-pill">Delivered</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="hero-floating-icon">↗</span>
            <div>
              <strong>More clarity.</strong>
              <small>Less manual work.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
