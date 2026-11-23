
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "WhatsApp Commerce & Chatbot Engines",
    description:
      "Turn WhatsApp into a more organised sales channel with automated customer interactions and order workflows.",
    capabilities: [
      "Automated product catalog browsing",
      "Customer enquiry auto-responders",
      "Order routing and notifications",
      "WhatsApp checkout workflows",
    ],
    outcome:
      "Respond faster, reduce repetitive conversations and make it easier for customers to place orders.",
  },
  {
    number: "02",
    title: "Custom CRM & Operations Portals",
    description:
      "Replace scattered spreadsheets and disconnected processes with a central system designed around your business.",
    capabilities: [
      "Customer relationship management",
      "Staff and task management",
      "Internal business dashboards",
      "Custom workflow automation",
    ],
    outcome:
      "Give your team a clearer view of customers, operations and business activity.",
  },
  {
    number: "03",
    title: "Payment & Logistics Automations",
    description:
      "Connect payment events, order updates and delivery workflows to reduce manual coordination.",
    capabilities: [
      "Payment verification integrations",
      "Automated transaction notifications",
      "Order and dispatch workflows",
      "Courier and logistics integrations",
    ],
    outcome:
      "Reduce repetitive payment checks and improve coordination between sales and fulfilment.",
  },
  {
    number: "04",
    title: "Conversion Funnel Design & Optimization",
    description:
      "Build digital storefronts and customer journeys that make it easier for visitors to understand, trust and buy from your business.",
    capabilities: [
      "Business and ecommerce websites",
      "High-converting landing pages",
      "Mobile-first storefronts",
      "Checkout and enquiry flow improvements",
    ],
    outcome:
      "Create a smoother path from discovery to enquiry, order and conversion.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn how your business operates, where work gets stuck and what needs to improve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map the workflow and define the right system, features and implementation scope.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop and test the solution around your requirements and business processes.",
  },
  {
    number: "04",
    title: "Deploy & improve",
    description:
      "We help you launch, understand the system and identify opportunities for improvement.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="home-container">
          <div className="services-hero-content">
            <span className="section-eyebrow">
              Custom digital systems
            </span>

            <h1>
              We turn complex
              <br />
              <span>workflows into systems.</span>
            </h1>

            <p>
              Zento builds practical digital solutions that
              help businesses automate operations, improve
              customer experiences and create better ways
              to grow.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="home-button">
                Discuss your project <span>→</span>
              </Link>

              <Link
                to="/vendoros"
                className="home-button home-button-secondary"
              >
                Explore VendorOS
              </Link>
            </div>

            <div className="services-hero-note">
              Custom automation agency
              <span />
              Digital systems studio
              <span />
              Software solutions
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-detail-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              What we do
            </span>

            <h2>
              Systems built around
              <br />
              <span>how your business works.</span>
            </h2>

            <p>
              Every business has different processes.
              We combine technology and workflow design
              to build solutions that address your
              operational needs.
            </p>
          </div>

          <div className="services-detail-grid">
            {services.map((service) => (
              <article
                className="home-card services-detail-card"
                key={service.number}
              >
                <div className="services-detail-top">
                  <span className="services-detail-number">
                    {service.number}
                  </span>

                  <span className="services-detail-arrow">
                    ↗
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="services-detail-description">
                  {service.description}
                </p>

                <div className="services-capabilities">
                  <span>WHAT WE CAN BUILD</span>

                  <ul>
                    {service.capabilities.map((capability) => (
                      <li key={capability}>
                        <span>✓</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-detail-outcome">
                  <strong>Business outcome</strong>
                  <p>{service.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section services-process-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              Our approach
            </span>

            <h2>
              From business challenge
              <br />
              <span>to working system.</span>
            </h2>

            <p>
              A clear process helps us build the right
              solution without adding unnecessary
              complexity.
            </p>
          </div>

          <div className="services-process-grid">
            {process.map((step) => (
              <article
                className="services-process-card"
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

      <section className="home-section services-project-section">
        <div className="home-container">
          <div className="services-project-card">
            <div>
              <span className="section-eyebrow">
                Custom systems projects
              </span>

              <h2>
                Your workflow.
                <br />
                <span>Your system.</span>
              </h2>

              <p>
                For businesses with requirements beyond
                ready-made software, Zento offers scoped
                custom projects with defined deliverables
                and milestone-based execution.
              </p>
            </div>

            <div className="services-project-side">
              <div className="services-project-point">
                <span>01</span>
                <p>Custom bots and CRM systems</p>
              </div>

              <div className="services-project-point">
                <span>02</span>
                <p>Business portals and dashboards</p>
              </div>

              <div className="services-project-point">
                <span>03</span>
                <p>Workflow and API integrations</p>
              </div>

              <Link to="/contact" className="home-button">
                Request a project discussion <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-page-cta">
        <div className="home-container">
          <div className="services-page-cta-inner">
            <span className="section-eyebrow">
              Let's build better systems
            </span>

            <h2>
              What's slowing
              <br />
              <span>your business down?</span>
            </h2>

            <p>
              Tell us about your business, your current
              workflow and the problem you want to solve.
              We'll help you identify a practical next step.
            </p>

            <Link to="/contact" className="home-button">
              Start a conversation <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
