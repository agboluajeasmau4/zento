
import { Link } from "react-router-dom";
import "./VendorOS.css";

const vendorFeatures = [
  {
    number: "01",
    title: "Sales & POS management",
    description:
      "Record sales, manage transactions and keep daily business activity organised.",
    icon: "▦",
  },
  {
    number: "02",
    title: "Inventory tracking",
    description:
      "Manage product quantities, monitor stock movement and keep product records up to date.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Order management",
    description:
      "Track orders from new and confirmed through preparation, delivery and completion.",
    icon: "⇄",
  },
  {
    number: "04",
    title: "Expenses & profit visibility",
    description:
      "Record business expenses and review product costs and performance.",
    icon: "↗",
  },
  {
    number: "05",
    title: "Customer records",
    description:
      "Keep customer details and purchase history organised for better service.",
    icon: "◎",
  },
  {
    number: "06",
    title: "Reports & business insights",
    description:
      "Review sales activity and export business records for analysis.",
    icon: "▥",
  },
  {
    number: "07",
    title: "Barcode scanning",
    description:
      "Scan product barcodes to make product lookup and sales workflows more convenient.",
    icon: "▥",
  },
  {
    number: "08",
    title: "Receipt generation",
    description:
      "Generate receipts for recorded transactions and provide customers with clear purchase records.",
    icon: "▧",
  },
];

const workflow = [
  {
    number: "01",
    title: "Set up your business",
    description:
      "Add your business details, products and opening inventory.",
  },
  {
    number: "02",
    title: "Record your sales",
    description:
      "Create orders, record payments and update product quantities.",
  },
  {
    number: "03",
    title: "Manage daily operations",
    description:
      "Track order progress, expenses and customer information.",
  },
  {
    number: "04",
    title: "Review your performance",
    description:
      "Use your dashboard and reports to understand business activity.",
  },
];

function VendorOS() {
  return (
    <div className="vendoros-page">
      {/* Hero */}

      <section className="vendoros-hero">
        <div className="home-container vendoros-hero-grid">
          <div className="vendoros-hero-content">
            <span className="section-eyebrow">
              Zento's flagship business platform
            </span>

            <h1>
              Run your business
              <br />
              <span>with more clarity.</span>
            </h1>

            <p>
              VendorOS brings your sales, orders, inventory,
              expenses and customer records together in one
              practical business management system.
            </p>

            <div className="vendoros-hero-actions">
              <a
                href="https://zento-vendor-os.lovable.app"
                target="_blank"
                rel="noreferrer"
                className="home-button"
              >
                Get started with VendorOS <span>↗</span>
              </a>

              <a
                href="#vendoros-features"
                className="home-button home-button-secondary"
              >
                Explore features <span>↓</span>
              </a>
            </div>

            <div className="vendoros-hero-benefits">
              <span>Sales management</span>
              <span>Inventory control</span>
              <span>Business insights</span>
            </div>
          </div>

          {/* Dashboard preview */}

          <div className="vendoros-hero-visual">
            <div className="vendoros-dashboard">
              <div className="vendoros-dashboard-header">
                <div className="vendoros-dashboard-brand">
                  <span className="vendoros-dashboard-mark">V</span>
                  <strong>VendorOS</strong>
                </div>

                <span className="vendoros-dashboard-status">
                  Business overview
                </span>
              </div>

              <div className="vendoros-dashboard-content">
                <div className="vendoros-dashboard-welcome">
                  <div>
                    <small>YOUR BUSINESS</small>
                    <h3>Dashboard</h3>
                  </div>

                  <span className="vendoros-dashboard-period">
                    Overview
                  </span>
                </div>

                <div className="vendoros-dashboard-stats">
                  <div className="vendoros-stat-card">
                    <span>Sales</span>
                    <strong>₦840,000</strong>
                    <small>Recorded sales</small>
                  </div>

                  <div className="vendoros-stat-card">
                    <span>Orders</span>
                    <strong>86</strong>
                    <small>Orders recorded</small>
                  </div>

                  <div className="vendoros-stat-card">
                    <span>Inventory</span>
                    <strong>124</strong>
                    <small>Products tracked</small>
                  </div>
                </div>

                <div className="vendoros-dashboard-chart">
                  <div className="vendoros-chart-heading">
                    <strong>Sales activity</strong>
                    <span>Illustrative data</span>
                  </div>

                  <div className="vendoros-chart-bars">
                    {[32, 54, 43, 76, 58, 90, 67].map(
                      (height, index) => (
                        <span
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>

                  <div className="vendoros-chart-days">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="vendoros-dashboard-order">
                  <div>
                    <span className="vendoros-order-dot" />
                    <span>Order management</span>
                  </div>

                  <strong>Organised</strong>
                </div>
              </div>
            </div>

            <div className="vendoros-floating-card">
              <span>✓</span>
              <div>
                <strong>Business records</strong>
                <small>Sales · Orders · Expenses</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}

      <section className="home-section vendoros-problem">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              Built for everyday business operations
            </span>

            <h2>
              Less time searching.
              <br />
              <span>More control over your business.</span>
            </h2>

            <p>
              When sales, inventory and expenses are scattered
              across notebooks, spreadsheets and chats, it
              becomes harder to understand what is happening
              in your business.
            </p>
          </div>

          <div className="vendoros-problem-grid">
            <article className="vendoros-problem-card">
              <span>01</span>
              <h3>Scattered sales records</h3>
              <p>
                Keep transactions organised instead of
                relying on multiple notebooks and chats.
              </p>
            </article>

            <article className="vendoros-problem-card">
              <span>02</span>
              <h3>Unclear stock levels</h3>
              <p>
                Maintain product records and track inventory
                as you record sales.
              </p>
            </article>

            <article className="vendoros-problem-card">
              <span>03</span>
              <h3>Untracked expenses</h3>
              <p>
                Record business costs alongside sales to
                get a clearer picture of performance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}

      <section
        className="home-section vendoros-features"
        id="vendoros-features"
      >
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              Everything in one place
            </span>

            <h2>
              The tools your
              <br />
              <span>daily operations need.</span>
            </h2>

            <p>
              VendorOS helps you manage essential business
              activities from one organised workspace.
            </p>
          </div>

          <div className="vendoros-features-grid">
            {vendorFeatures.map((feature) => (
              <article
                className="home-card vendoros-feature-card"
                key={feature.number}
              >
                <div className="vendoros-feature-top">
                  <span className="vendoros-feature-icon">
                    {feature.icon}
                  </span>

                  <span className="vendoros-feature-number">
                    {feature.number}
                  </span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}

      <section className="home-section vendoros-workflow">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              How it works
            </span>

            <h2>
              A clearer way to
              <br />
              <span>manage your business.</span>
            </h2>

            <p>
              Get your business records organised and build
              a more consistent daily workflow.
            </p>
          </div>

          <div className="vendoros-workflow-grid">
            {workflow.map((step) => (
              <article
                className="vendoros-workflow-card"
                key={step.number}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}

      <section className="home-section vendoros-audience">
        <div className="home-container vendoros-audience-grid">
          <div>
            <span className="section-eyebrow">
              Who VendorOS is for
            </span>

            <h2>
              Made for businesses
              <br />
              <span>that are ready to organise.</span>
            </h2>

            <p>
              VendorOS is designed for merchants and
              growing businesses that want better visibility
              over their daily sales and operations.
            </p>
          </div>

          <div className="vendoros-audience-list">
            <div>
              <span>01</span>
              <p>Retail shops and boutiques</p>
            </div>

            <div>
              <span>02</span>
              <p>Online vendors and ecommerce sellers</p>
            </div>

            <div>
              <span>03</span>
              <p>Beauty, fashion and product businesses</p>
            </div>

            <div>
              <span>04</span>
              <p>Small and growing trading businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="home-section vendoros-page-cta">
        <div className="home-container">
          <div className="vendoros-page-cta-card">
            <span className="section-eyebrow">
              Take control of your operations
            </span>

            <h2>
              Your business records
              <br />
              <span>should work for you.</span>
            </h2>

            <p>
              Start organising your sales, inventory,
              orders and business activity with VendorOS.
            </p>

            <div className="vendoros-page-cta-actions">
              <a
                href="https://zento-vendor-os.lovable.app"
                target="_blank"
                rel="noreferrer"
                className="home-button"
              >
                Open VendorOS <span>↗</span>
              </a>

              <Link
                to="/contact"
                className="home-button home-button-secondary"
              >
                Contact Zento
              </Link>
            </div>

            <div className="vendoros-page-tagline">
              AUTOMATE. CONVERT. GROW.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VendorOS;
