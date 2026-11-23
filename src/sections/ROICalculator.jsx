
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ROICalculator.css";

function ROICalculator() {
  const [dailyOrders, setDailyOrders] = useState(30);
  const [averageOrderValue, setAverageOrderValue] =
    useState(15000);

  const monthlyOrders = dailyOrders * 30;
  const monthlySales = monthlyOrders * averageOrderValue;

  // Illustrative assumptions:
  // 5 minutes of manual admin per order
  // 2% of sales value potentially affected by missed follow-up
  const monthlyHours = Math.round(
    (monthlyOrders * 5) / 60
  );

  const potentialRevenueAtRisk = Math.round(
    monthlySales * 0.02
  );

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="home-section roi-section">
      <div className="home-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Systems audit
          </span>

          <h2>
            How much is manual work
            <br />
            <span>costing your business?</span>
          </h2>

          <p>
            Adjust the numbers to estimate how much time
            your team spends on order administration and
            the sales value that may be affected by missed
            follow-ups.
          </p>
        </div>

        <div className="roi-calculator">
          <div className="roi-controls">
            <div className="roi-control">
              <div className="roi-control-heading">
                <label htmlFor="daily-orders">
                  Daily orders
                </label>
                <strong>{dailyOrders}</strong>
              </div>

              <input
                id="daily-orders"
                type="range"
                min="1"
                max="500"
                step="1"
                value={dailyOrders}
                onChange={(event) =>
                  setDailyOrders(Number(event.target.value))
                }
              />

              <div className="roi-range-labels">
                <span>1 order</span>
                <span>500 orders</span>
              </div>
            </div>

            <div className="roi-control">
              <div className="roi-control-heading">
                <label htmlFor="average-order">
                  Average order value
                </label>
                <strong>
                  {formatCurrency(averageOrderValue)}
                </strong>
              </div>

              <input
                id="average-order"
                type="range"
                min="1000"
                max="500000"
                step="1000"
                value={averageOrderValue}
                onChange={(event) =>
                  setAverageOrderValue(Number(event.target.value))
                }
              />

              <div className="roi-range-labels">
                <span>₦1,000</span>
                <span>₦500,000</span>
              </div>
            </div>

            <div className="roi-monthly-summary">
              <span>Estimated monthly sales volume</span>
              <strong>{formatCurrency(monthlySales)}</strong>
            </div>
          </div>

          <div className="roi-results">
            <span className="roi-results-label">
              YOUR ESTIMATED MONTHLY IMPACT
            </span>

            <div className="roi-result">
              <span>Time spent on manual order admin</span>
              <strong>{monthlyHours} hours</strong>
              <small>
                Based on 5 minutes of administration per order.
              </small>
            </div>

            <div className="roi-result">
              <span>Sales value potentially affected</span>
              <strong>
                {formatCurrency(potentialRevenueAtRisk)}
              </strong>
              <small>
                Illustrative 2% of monthly sales value.
                Not a guaranteed loss or recovery.
              </small>
            </div>

            <Link
              to="/contact"
              className="home-button roi-cta"
            >
              Discuss your business workflow <span>→</span>
            </Link>
          </div>
        </div>

        <p className="roi-disclaimer">
          This is an illustrative estimate, not a financial
          forecast. Actual time and sales impact depend on
          your processes, order complexity and customer
          behaviour.
        </p>
      </div>
    </section>
  );
}

export default ROICalculator;

