
import "./ProblemSection.css";

const problems = [
  {
    number: "01",
    title: "Orders buried in DMs",
    problem:
      "Customer details, sizes and delivery addresses get lost in long WhatsApp conversations.",
    solution:
      "Keep customer profiles, order details and purchase history organised in one place.",
    label: "Customer management",
  },
  {
    number: "02",
    title: "Selling what is out of stock",
    problem:
      "You receive payment for an item only to discover it has already been sold elsewhere.",
    solution:
      "Track stock and sales more clearly so your team knows what is available.",
    label: "Inventory control",
  },
  {
    number: "03",
    title: "Revenue without clear profit",
    problem:
      "Sales may look good, but untracked expenses and costs make it difficult to know what you actually keep.",
    solution:
      "Record sales, expenses and product costs to understand your business performance.",
    label: "Profit visibility",
  },
];

function ProblemSection() {
  return (
    <section className="home-section problem-section">
      <div className="home-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            The cost of manual operations
          </span>

          <h2>
            Your business deserves better
            than <span>manual chaos.</span>
          </h2>

          <p>
            When everything depends on memory, chats and
            spreadsheets, small mistakes become expensive.
            Zento helps you replace scattered processes
            with organised systems.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((item) => (
            <article className="home-card problem-card" key={item.number}>
              <div className="problem-card-top">
                <span className="problem-number">{item.number}</span>
                <span className="problem-label">{item.label}</span>
              </div>

              <h3>{item.title}</h3>

              <p className="problem-copy">{item.problem}</p>

              <div className="problem-solution">
                <span>THE ZENTO APPROACH</span>
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
