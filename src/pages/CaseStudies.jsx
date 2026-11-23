
import { Link } from "react-router-dom";
import "./CaseStudies.css";

const projects = [
  {
    number: "01",
    name: "Zento VendorOS",
    category: "Business management platform",
    description:
      "A business management system designed to help vendors organise sales, inventory, orders, expenses and customer records in one workspace.",
    challenge:
      "Business owners often manage sales and stock across notebooks, spreadsheets and messaging apps, making daily operations harder to track.",
    solution:
      "VendorOS brings essential business records and workflows into a central dashboard, helping vendors manage transactions and review business activity.",
    features: [
      "Sales and POS management",
      "Inventory and product tracking",
      "Order and payment management",
      "Expenses and business reports",
    ],
    tags: ["Retail", "Commerce", "Business software"],
    link: "/vendoros",
    linkLabel: "Explore VendorOS",
    external: false,
  },

  {
    number: "02",
    name: "Zento SchoolOS",
    category: "School administration platform",
    status: "IN DEVELOPMENT",
    description:
      "A school management platform currently in development, designed to help schools organise academic administration and everyday school records.",
    challenge:
      "Managing student information, academic records, staff activities and school communication across separate processes can create unnecessary administrative work.",
    solution:
      "We are developing SchoolOS to bring key school administration activities into a more organised digital workspace.",
    features: [
      "Student registration",
      "Classes and subject management",
      "Staff attendance records",
      "Results and PDF exports",
      "School newsletters",
    ],
    tags: ["Education", "School management", "In development"],
    link: null,
    linkLabel: "Coming Soon",
    external: false,
    inDevelopment: true,
  },

];

function CaseStudies() {
  return (
    <div className="case-studies-page">
      {/* Hero */}

      <section className="case-studies-hero">
        <div className="home-container">
          <div className="case-studies-hero-content">
            <span className="section-eyebrow">
              Zento projects & solutions
            </span>

            <h1>
              Practical systems.
              <br />
              <span>Built for real business needs.</span>
            </h1>

            <p>
              Explore the digital products and business
              systems Zento is creating to help organisations
              manage their work more effectively.
            </p>

            <div className="case-studies-hero-actions">
              <Link to="/contact" className="home-button">
                Discuss a project <span>→</span>
              </Link>

              <Link
                to="/services"
                className="home-button home-button-secondary"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project introduction */}

      <section className="home-section case-studies-intro">
        <div className="home-container case-studies-intro-grid">
          <div>
            <span className="section-eyebrow">
              Our work
            </span>

            <h2>
              Technology shaped
              <br />
              <span>around the way people work.</span>
            </h2>
          </div>

          <p>
            We create digital solutions for different
            business environments—from commerce and
            retail operations to school administration.
            Each project starts with understanding the
            problem and designing a practical system
            around it.
          </p>
        </div>
      </section>

      {/* Projects */}

      <section className="home-section case-studies-projects">
        <div className="home-container">
          <div className="case-studies-projects-heading">
            <span className="section-eyebrow">
              Featured projects
            </span>

            <h2>
              Solutions from
              <br />
              <span>the Zento product studio.</span>
            </h2>
          </div>

          <div className="case-studies-project-list">
            {projects.map((project) => (
              <article
                className="case-study-project-card"
                key={project.number}
              >
                <div className="case-study-project-visual">
                  <div className="case-study-visual-top">
                    <span className="case-study-project-index">
                      PROJECT {project.number}
                    </span>

                    {/* <span className="case-study-visual-status">
                      ZENTO PRODUCT
                    </span> */}


                    <span
                    className={`case-study-visual-status ${
                      project.inDevelopment
                        ? "case-study-status-development"
                        : ""
                    }`}
                    >
                    {project.status || "ZENTO PRODUCT"}
                    </span>

                  </div>

                  <div className="case-study-visual-center">
                    <div className="case-study-project-symbol">
                      {project.number === "01" ? "V" : "S"}
                    </div>

                    <span className="case-study-visual-brand">
                      ZENTO
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.category}</p>
                  </div>

                  <div className="case-study-visual-bottom">
                    <span>Automate. Convert. Grow.</span>
                    <span>↗</span>
                  </div>
                </div>

                <div className="case-study-project-content">
                  <div className="case-study-project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <h3>{project.name}</h3>

                  <p className="case-study-project-description">
                    {project.description}
                  </p>

                  <div className="case-study-project-details">
                    <div>
                      <span className="case-study-detail-label">
                        THE CHALLENGE
                      </span>

                      <p>{project.challenge}</p>
                    </div>

                    <div>
                      <span className="case-study-detail-label">
                        THE SOLUTION
                      </span>

                      <p>{project.solution}</p>
                    </div>
                  </div>

                  <div className="case-study-project-features">
                    <span className="case-study-detail-label">
                      KEY CAPABILITIES
                    </span>

                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <span>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="home-button"
                    >
                      {project.linkLabel} <span>↗</span>
                    </a>
                  ) : (
                    <Link
                      to={project.link}
                      className="home-button"
                    >
                      {project.linkLabel} <span>→</span>
                    </Link>
                  )} */}



                  {project.inDevelopment ? (
                    <span className="home-button case-study-coming-soon">
                      Coming Soon
                    </span>
                  ) : project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="home-button"
                    >
                      {project.linkLabel} <span>↗</span>
                    </a>
                  ) : (
                    <Link to={project.link} className="home-button">
                      {project.linkLabel} <span>→</span>
                    </Link>
                  )}

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}

      <section className="home-section case-studies-approach">
        <div className="home-container">
          <div className="section-heading">
            <span className="section-eyebrow">
              How we approach projects
            </span>

            <h2>
              Understand the problem.
              <br />
              <span>Build the right solution.</span>
            </h2>

            <p>
              Every business has its own processes.
              Our approach focuses on understanding
              those processes before choosing the
              technology.
            </p>
          </div>

          <div className="case-studies-approach-grid">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Identify the business challenge,
                users and current workflow.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Design</h3>
              <p>
                Plan a clear solution with the
                right features and structure.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop and test the system
                around the agreed requirements.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Improve</h3>
              <p>
                Review the system and identify
                opportunities for improvement.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="home-section case-studies-cta">
        <div className="home-container">
          <div className="case-studies-cta-card">
            <span className="section-eyebrow">
              Have a project in mind?
            </span>

            <h2>
              Let's create a system
              <br />
              <span>that works for your business.</span>
            </h2>

            <p>
              Tell us what your business needs to
              improve. We'll help you explore a
              practical digital solution.
            </p>

            <div className="case-studies-cta-actions">
              <Link to="/contact" className="home-button">
                Discuss your project <span>→</span>
              </Link>

              <Link
                to="/services"
                className="home-button home-button-secondary"
              >
                View our services
              </Link>
            </div>

            <div className="case-studies-cta-tagline">
              AUTOMATE. CONVERT. GROW.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
