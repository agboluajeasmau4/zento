
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      "Zento Business Automation (“Zento”, “we”, “us” or “our”) provides business automation and digital solutions, including websites, business systems and digital products.",
      "For questions about this Privacy Policy or how your personal information is handled, contact us using the details provided below.",
    ],
  },
  {
    title: "2. Information we may collect",
    paragraphs: [
      "We may collect personal information that you choose to provide when you contact us, enquire about a project, request information or communicate with our team.",
    ],
    bullets: [
      "Your name and email address.",
      "Your business or organisation name, if provided.",
      "Information about your project, enquiry or feedback.",
      "Information you include in messages sent to us.",
    ],
  },
  {
    title: "3. How we use information",
    paragraphs: [
      "We use information you provide for purposes related to your enquiry or interaction with Zento, including:",
    ],
    bullets: [
      "Responding to questions and project enquiries.",
      "Understanding your business needs and discussing suitable solutions.",
      "Providing requested information about our services and products.",
      "Maintaining business communication and records.",
      "Protecting the website and managing technical issues.",
    ],
  },
  {
    title: "4. Contact form",
    paragraphs: [
      "The project enquiry form on this website prepares a message and opens your device’s email application. The form does not directly submit your information to a Zento website database.",
      "If you choose to send the prepared email, the information in it will be processed through your email service and received by Zento. Your email provider’s own privacy terms also apply.",
    ],
  },
  {
    title: "5. Cookies and technical information",
    paragraphs: [
      "Our website may receive basic technical information required to deliver and protect the website, such as browser or device information and server logs, depending on the hosting configuration.",
      "If we introduce analytics, advertising cookies or other optional tracking technologies, we will update this policy and provide any notices or choices required by applicable law.",
    ],
  },
  {
    title: "6. Sharing information",
    paragraphs: [
      "We do not sell your personal information.",
      "We may use service providers that help us host, maintain, secure or operate our website and communication systems. Such providers may process information only as needed to provide their services, subject to applicable requirements.",
      "We may also disclose information where required by law or where necessary to protect our rights, users or the security of our services.",
    ],
  },
  {
    title: "7. Data retention",
    paragraphs: [
      "We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, maintaining appropriate business records and meeting legal obligations.",
      "The retention period may vary depending on the type of information and the reason it was collected.",
    ],
  },
  {
    title: "8. Your privacy rights",
    paragraphs: [
      "Subject to applicable law, you may have the right to request access to your personal information, ask us to correct inaccurate information, request deletion or restriction of processing, object to certain processing, or withdraw consent where processing is based on consent.",
      "You may also have the right to request a copy of information you provided and to lodge a complaint with the Nigeria Data Protection Commission.",
    ],
  },
  {
    title: "9. Information security",
    paragraphs: [
      "We take reasonable technical and organisational measures intended to protect personal information against unauthorised access, loss, misuse or disclosure. No method of transmitting or storing information can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "10. Third-party websites",
    paragraphs: [
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. Please review their privacy policies before providing personal information.",
    ],
  },
  {
    title: "11. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy when our website, services or data practices change. The revised version will be published on this page with an updated date.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <main className="legal-page privacy-page">
      <section className="legal-hero">
        <div className="home-container">
          <span className="section-eyebrow">
            Legal information
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            How Zento handles information when you
            visit our website or contact us.
          </p>

          <span className="legal-updated">
            Last updated: 22 November 2026
          </span>
        </div>
      </section>

      <section className="home-section legal-content-section">
        <div className="home-container legal-layout">
          <aside className="legal-sidebar">
            <span>ON THIS PAGE</span>

            <nav>
              {sections.map((section, index) => (
                <a
                  href={`#privacy-section-${index + 1}`}
                  key={section.title}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="legal-content">
            <p className="legal-intro">
              Your privacy matters to us. This policy
              explains what information we may collect,
              why we use it and the choices available
              to you when interacting with Zento.
            </p>

            {sections.map((section, index) => (
              <section
                className="legal-section"
                id={`privacy-section-${index + 1}`}
                key={section.title}
              >
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="legal-section">
              <h2>12. Contact us</h2>

              <p>
                If you have a privacy question or wish
                to make a request about your personal
                information, contact Zento:
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:YOUR_BUSINESS_EMAIL">
                  YOUR_BUSINESS_EMAIL
                </a>
              </p>

              <p>
                You may also use our{" "}
                <Link to="/contact">Contact page</Link>.
              </p>

              <p>
                If you are not satisfied with our
                response, you may contact the{" "}
                <a
                  href="https://ndpc.gov.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nigeria Data Protection Commission
                </a>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
