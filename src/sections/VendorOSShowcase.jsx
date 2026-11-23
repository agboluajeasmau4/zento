
import { Link } from "react-router-dom";
import "./VendorOSShowcase.css";

const features = [
  {
    title: "Orders in one place",
    description:
      "Track orders from confirmation to delivery without searching through chats.",
  },
  {
    title: "Inventory and sales",
    description:
      "Keep product quantities and sales records organised as your business moves.",
  },
  {
    title: "Know your numbers",
    description:
      "Review revenue, expenses and product performance from your dashboard.",
  },
];

function VendorOSShowcase() {
  return (
    <section className="home-section vendor-showcase">
      <div className="home-container vendor-showcase-grid">
        <div className="vendor-showcase-content">
          <span className="section-eyebrow">
            Meet our flagship product
          </span>

          <h2>
            Meet <span>VendorOS.</span>
            <br />
            Your business, organised.
          </h2>

          <p>
            VendorOS brings your sales, orders, inventory,
            customers and business records together in one
            practical management system.
          </p>

          <div className="vendor-feature-list">
            {features.map((feature, index) => (
              <div className="vendor-feature" key={feature.title}>
                <span className="vendor-feature-check">✓</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="vendor-showcase-actions">
            <a
              href="https://zento-vendor-os.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="home-button"
            >
              Launch VendorOS <span>↗</span>
            </a>

            <Link
              to="/vendoros"
              className="home-button home-button-secondary"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="vendor-showcase-visual">
          <div className="vendor-preview-window">
            <div className="vendor-preview-top">
              <div className="vendor-preview-dots">
                <span />
                <span />
                <span />
              </div>
              <span>VendorOS Hub</span>
            </div>

            <div className="vendor-preview-body">
              <aside className="vendor-preview-sidebar">
                <div className="vendor-preview-mark">Z</div>
                <span className="preview-active">Overview</span>
                <span>Orders</span>
                <span>Products</span>
                <span>Customers</span>
                <span>Reports</span>
              </aside>

              <div className="vendor-preview-main">
                <span className="vendor-preview-caption">
                  BUSINESS OVERVIEW
                </span>
                <h3>Dashboard</h3>

                <div className="vendor-preview-metrics">
                  <div>
                    <small>Sales</small>
                    <strong>₦840,000</strong>
                  </div>
                  <div>
                    <small>Orders</small>
                    <strong>86</strong>
                  </div>
                </div>

                <div className="vendor-preview-chart">
                  <div className="preview-chart-heading">
                    <strong>Sales overview</strong>
                    <span>Weekly</span>
                  </div>

                  <div className="preview-chart-bars">
                    {[35, 58, 42, 76, 55, 90, 68].map(
                      (height, index) => (
                        <span
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="vendor-preview-bottom">
                  <span>Order management</span>
                  <span className="preview-order-status">
                    Organised
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="vendor-preview-note">
            <span>✓</span>
            <div>
              <strong>One clear view</strong>
              <small>Sales · Orders · Inventory</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VendorOSShowcase;
