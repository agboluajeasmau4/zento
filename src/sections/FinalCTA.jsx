
import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="home-section final-cta-section">
      <div className="home-container">
        <div className="final-cta-card">
          <div className="final-cta-glow" />

          <div className="final-cta-content">
            <span className="section-eyebrow">
              Ready to move forward?
            </span>

            <h2>
              Your business has
              <br />
              <span>more room to grow.</span>
            </h2>

            <p>
              Let's identify what's slowing your business
              down and build a system that helps you
              operate better, serve customers faster
              and grow with confidence.
            </p>

            <div className="final-cta-actions">
              <Link to="/contact" className="home-button">
                Book a Systems Audit <span>→</span>
              </Link>

              <a
                href="https://zento-vendor-os.lovable.app"
                target="_blank"
                rel="noreferrer"
                className="home-button home-button-secondary"
              >
                Explore VendorOS <span>↗</span>
              </a>
            </div>

            <div className="final-cta-tagline">
              AUTOMATE. CONVERT. GROW.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
