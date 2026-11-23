
import { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "agboluajeasmau4@gmail.com";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const business = formData.get("business");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = `Project enquiry from ${name}`;

    const body = `
Hello Zento,

I would like to discuss a project.

Name: ${name}
Email: ${email}
Business: ${business || "Not specified"}
Service: ${service}

Project details:
${message}
    `;

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      {/* Hero */}

      <section className="contact-hero">
        <div className="home-container">
          <div className="contact-hero-content">
            <span className="section-eyebrow">
              Let's work together
            </span>

            <h1>
              Have a business
              <br />
              <span>challenge to solve?</span>
            </h1>

            <p>
              Tell us what your business needs.
              Whether you're looking to automate a
              process, build a digital product or
              improve how your business operates,
              we'd like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form */}

      <section className="home-section contact-main">
        <div className="home-container contact-main-grid">
          <div className="contact-info">
            <span className="section-eyebrow">
              Start a conversation
            </span>

            <h2>
              Let's understand
              <br />
              <span>what you need.</span>
            </h2>

            <p>
              Share a little about your project
              and we'll use the information to
              understand your goals and the
              solution you're looking for.
            </p>

            <div className="contact-info-card">
              <div className="contact-info-icon">✦</div>

              <div>
                <h3>Business automation</h3>
                <p>
                  Simplify repetitive tasks and
                  organise your business processes.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">↗</div>

              <div>
                <h3>Digital solutions</h3>
                <p>
                  Explore websites, business systems
                  and digital products built around
                  your needs.
                </p>
              </div>
            </div>

            <div className="contact-info-note">
              <span>OUR APPROACH</span>
              <p>
                Understand the problem first.
                Then explore the right solution.
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="section-eyebrow">
                Project enquiry
              </span>

              <h2>Tell us about your project</h2>

              <p>
                Fill in the details below to
                start a conversation with Zento.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-name">
                    Full name *
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-email">
                    Email address *
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-business">
                  Business or organisation
                </label>

                <input
                  type="text"
                  id="contact-business"
                  name="business"
                  placeholder="Your business name"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-service">
                  What do you need help with? *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Business automation">
                    Business automation
                  </option>

                  <option value="Website development">
                    Website development
                  </option>

                  <option value="Business management system">
                    Business management system
                  </option>

                  <option value="School management system">
                    School management system
                  </option>

                  <option value="Custom digital solution">
                    Custom digital solution
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">
                  Tell us about your project *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="What are you trying to improve or build?"
                  required
                />
              </div>

              <button
                type="submit"
                className="home-button contact-submit"
              >
                Send project enquiry <span>→</span>
              </button>

              {submitted && (
                <p className="contact-form-feedback">
                  Your email application should open
                  with your enquiry. Please send the
                  prepared message to complete it.
                </p>
              )}

              <p className="contact-form-disclaimer">
                This form opens your email application.
                It does not send your enquiry directly
                from this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}

      <section className="home-section contact-cta">
        <div className="home-container">
          <div className="contact-cta-card">
            <span className="section-eyebrow">
              Zento digital solutions
            </span>

            <h2>
              Better systems.
              <br />
              <span>More room to grow.</span>
            </h2>

            <p>
              Let's explore how the right digital
              solution can support your business.
            </p>

            <div className="contact-cta-tagline">
              AUTOMATE. CONVERT. GROW.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
