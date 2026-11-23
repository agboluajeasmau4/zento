
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const services = [
  {
    number: "01",
    title: "WhatsApp Commerce & Chatbots",
    description:
      "Automate product enquiries, catalog browsing, order routing and customer replies.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Custom CRM & Operations Portals",
    description:
      "Bring customer records, staff workflows and business operations into one system.",
    icon: "▦",
  },
  {
    number: "03",
    title: "Payment & Logistics Automation",
    description:
      "Connect payment verification, notifications and delivery workflows.",
    icon: "⇄",
  },
  {
    number: "04",
    title: "Conversion & Digital Storefronts",
    description:
      "Create streamlined websites and sales journeys designed to turn visitors into customers.",
    icon: "⌁",
  },
];

function ServicesSection() {
  return (
    <section className="home-section services-section">
      <div className="home-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            What we build
          </span>

          <h2>
            Digital solutions that
            <br />
            <span>move business forward.</span>
          </h2>

          <p>
            From ready-to-use business software to custom
            systems built around your workflow, we help
            reduce manual work and create better ways
            to operate.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="home-card service-card"
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  {service.icon}
                </span>
                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link to="/services" className="service-link">
                Explore service <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <p>
            Have a workflow that needs a custom solution?
          </p>

          <Link to="/contact" className="home-button">
            Discuss your project <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
