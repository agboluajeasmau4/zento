
import { Link } from "react-router-dom";
import "./PricingSection.css";

const plans = [
  {
    name: "Starter Vendor",
    description:
      "For solo merchants who need better control of daily sales.",
    features: [
      "Product and inventory management",
      "Order tracking",
      "WhatsApp invoicing",
      "Business sales records",
    ],
    featured: false,
  },
  {
    name: "Pro Growth",
    description:
      "For growing businesses managing more orders and staff.",
    features: [
      "Everything in Starter",
      "Multi-staff workflows",
      "Advanced sales analytics",
      "Profit and loss visibility",
    ],
    featured: true,
  },
  {
    name: "Multi-Location Scale",
    description:
      "For businesses with multiple locations and advanced needs.",
    features: [
      "Multi-location operations",
      "Team permissions",
      "Custom domain options",
      "Priority support",
    ],
    featured: false,
  },
];

function PricingSection() {
  return (
    <section className="home-section pricing-section">
      <div className="home-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Ways to work with Zento
          </span>

          <h2>
            The right system
            <br />
            <span>for your stage of growth.</span>
          </h2>

          <p>
            Start with VendorOS for business management,
            or work with Zento to build a custom system
            around your operations.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`home-card pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing-popular">
                  For growing businesses
                </span>
              )}

              <h3>{plan.name}</h3>
              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-divider" />

              <span className="pricing-includes">
                Designed for your business
              </span>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/vendoros"
                className={`home-button ${
                  plan.featured
                    ? ""
                    : "home-button-secondary"
                } pricing-button`}
              >
                Explore VendorOS <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="custom-project-card">
          <div>
            <span className="section-eyebrow">
              Custom systems projects
            </span>

            <h3>Have a workflow that needs something different?</h3>

            <p>
              We scope custom automation, CRM systems,
              internal portals and integrations around
              your business requirements.
            </p>
          </div>

          <Link to="/contact" className="home-button">
            Discuss a custom project <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
