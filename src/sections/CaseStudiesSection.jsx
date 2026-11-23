
import { Link } from "react-router-dom";
import "./CaseStudiesSection.css";

const caseStudies = [
  {
    category: "Fashion & Retail",
    name: "Glitz & Grace Fashion",
    challenge:
      "Managing 40+ daily orders through WhatsApp, with frequent fulfilment errors.",
    solution:
      "VendorOS order management and automated order confirmation.",
    result: "85%",
    resultLabel: "fewer fulfilment errors",
    detail: "3.5 hours saved daily",
  },
  {
    category: "Beauty & Cosmetics",
    name: "Urban Luxe Cosmetics",
    challenge:
      "Stockouts across multiple locations caused customer frustration and refunds.",
    solution:
      "Inventory synchronisation across retail and online channels.",
    result: "32%",
    resultLabel: "growth in repeat purchases",
    detail: "Fewer stock-related refunds",
  },
  {
    category: "Logistics & Wholesale",
    name: "Apex Logistics",
    challenge:
      "Manual invoicing and payment checks delayed dispatch.",
    solution:
      "Payment verification automation and a rider dispatch dashboard.",
    result: "3 min",
    resultLabel: "dispatch cycle",
    detail: "Previously 45 minutes",
  },
];

function CaseStudiesSection() {
  return (
    <section className="home-section case-studies-section">
      <div className="home-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Results that matter
          </span>

          <h2>
            Better systems.
            <br />
            <span>Better business outcomes.</span>
          </h2>

          <p>
            See how thoughtful automation can help
            businesses reduce operational friction,
            improve visibility and serve customers better.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article
              className="home-card case-study-card"
              key={study.name}
            >
              <span className="case-study-category">
                {study.category}
              </span>

              <h3>{study.name}</h3>

              <div className="case-study-block">
                <span>THE CHALLENGE</span>
                <p>{study.challenge}</p>
              </div>

              <div className="case-study-block">
                <span>THE SOLUTION</span>
                <p>{study.solution}</p>
              </div>

              <div className="case-study-result">
                <strong>{study.result}</strong>
                <span>{study.resultLabel}</span>
                <small>{study.detail}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="case-studies-action">
          <Link
            to="/case-studies"
            className="home-button home-button-secondary"
          >
            View all case studies <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
