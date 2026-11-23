
import { Link } from "react-router-dom";
import "./About.css";

const principles = [
  {
    number: "01",
    title: "Technology should solve real problems",
    description:
      "We focus on the challenges businesses face every day and build solutions around what actually needs to improve.",
  },
  {
    number: "02",
    title: "Systems should make work simpler",
    description:
      "Good automation reduces unnecessary repetition, improves organisation and gives people more control over their work.",
  },
  {
    number: "03",
    title: "Growth needs more than visibility",
    description:
      "A digital presence matters, but businesses also need practical systems that support sales, service and operations.",
  },
  {
    number: "04",
    title: "Every business deserves better tools",
    description:
      "We believe growing businesses should have access to useful digital solutions that help them operate more professionally.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Digital experiences",
    description:
      "Websites and online storefronts that give businesses a professional digital presence and a clearer customer journey.",
  },
  {
    number: "02",
    title: "Business automation",
    description:
      "Connected workflows that reduce manual tasks and help businesses manage enquiries, orders and daily operations.",
  },
  {
    number: "03",
    title: "Business management systems",
    description:
      "Practical software for organising sales, inventory, customers, records and business activity.",
  },
];

function About() {
  return (
    <div className="about-page">
      {/* About hero */}

      <section className="about-hero">
        <div className="home-container">
          <div className="about-hero-content">
            <span className="section-eyebrow">
              About Zento
            </span>

            <h1>
              We build systems
              <br />
              <span>that move business forward.</span>
            </h1>

            <p>
              Zento is a business automation and digital
              solutions company helping businesses work
              smarter, serve customers better and build
              stronger foundations for growth.
            </p>

            <div className="about-hero-actions">
              <Link to="/services" className="home-button">
                Explore our services <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="home-button home-button-secondary"
              >
                Work with Zento
              </Link>
            </div>

            <div className="about-hero-signature">
              <span className="about-signature-line" />
              <span>Automate. Convert. Grow.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company purpose */}

      <section className="home-section about-purpose">
        <div className="home-container about-purpose-grid">
          <div className="about-purpose-heading">
            <span className="section-eyebrow">
              Why we exist
            </span>

            <h2>
              Businesses deserve
              <br />
              <span>systems that work.</span>
            </h2>
          </div>

          <div className="about-purpose-copy">
            <p>
              Many businesses grow while still relying on
              manual processes, scattered records and
              disconnected tools. As operations become more
              demanding, these methods can make it harder
              to stay organised and deliver a consistent
              customer experience.
            </p>

            <p>
              Zento exists to help businesses move beyond
              that complexity. We combine digital
              experiences, automation and business software
              to create practical systems that support the
              way businesses operate and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}

      <section className="home-section about-mission">
        <div className="home-container">
          <div className="about-mission-grid">
            <article className="about-mission-card">
              <span className="about-card-label">
                OUR MISSION
              </span>

              <div className="about-mission-symbol">
                <span>↗</span>
              </div>

              <h2>
                Make business
                <br />
                <span>operations smarter.</span>
              </h2>

              <p>
                To create practical digital solutions that
                help businesses automate repetitive work,
                improve customer experiences and manage
                their operations with greater clarity.
              </p>
            </article>

            <article className="about-mission-card about-vision-card">
              <span className="about-card-label">
                OUR VISION
              </span>

              <div className="about-mission-symbol">
                <span>◎</span>
              </div>

              <h2>
                A future where
                <br />
                <span>businesses grow better.</span>
              </h2>

              <p>
                To become a trusted technology company
                creating useful business systems and
                digital solutions that help businesses
                operate, adapt and scale.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Principles */}

      <section className="home-section about-principles">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              What guides us
            </span>

            <h2>
              Our work starts
              <br />
              <span>with the right principles.</span>
            </h2>

            <p>
              We believe good technology should be useful,
              understandable and built around the people
              who use it.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => (
              <article
                className="home-card about-principle-card"
                key={principle.number}
              >
                <span className="about-principle-number">
                  {principle.number}
                </span>

                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}

      <section className="home-section about-capabilities">
        <div className="home-container">
          <div className="about-capabilities-heading">
            <div>
              <span className="section-eyebrow">
                What we do
              </span>

              <h2>
                From digital presence
                <br />
                <span>to business systems.</span>
              </h2>
            </div>

            <p>
              We bring together the tools and systems
              businesses need to create better experiences
              and manage their work more effectively.
            </p>
          </div>

          <div className="about-capabilities-list">
            {capabilities.map((capability) => (
              <article
                className="about-capability-item"
                key={capability.number}
              >
                <span className="about-capability-number">
                  {capability.number}
                </span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>

                <span className="about-capability-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="about-vendoros-note">
            <div className="about-vendoros-mark">
              V
            </div>

            <div>
              <span className="about-card-label">
                OUR PRODUCT
              </span>

              <h3>Zento VendorOS</h3>

              <p>
                Our business management platform brings
                sales, inventory, orders, expenses and
                customer records into one workspace.
              </p>

              <Link to="/vendoros">
                Discover VendorOS <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}

      <section className="home-section about-cta">
        <div className="home-container">
          <div className="about-cta-card">
            <span className="section-eyebrow">
              Your vision. Our technology.
            </span>

            <h2>
              Let's build a
              <br />
              <span>better way to work.</span>
            </h2>

            <p>
              Whether you need a digital presence,
              business automation or a custom system,
              let's discuss what your business needs next.
            </p>

            <div className="about-cta-actions">
              <Link to="/contact" className="home-button">
                Start a conversation <span>→</span>
              </Link>

              <Link
                to="/case-studies"
                className="home-button home-button-secondary"
              >
                Explore our work
              </Link>
            </div>

            <div className="about-cta-tagline">
              AUTOMATE. CONVERT. GROW.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
