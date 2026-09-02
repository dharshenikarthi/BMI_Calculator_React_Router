import { Link, useLocation } from "react-router-dom";

function Result() {

  const location = useLocation();

  const data = location.state;

  if (!data) {
    return (
      <div className="page">

        <main className="card result-card">

          <h1>
            No Data
          </h1>

          <p className="description">
            Please enter your height and weight first.
          </p>

          <Link
            to="/bmi"
            className="primary-link"
          >
            <button className="primary-button">
              Go to Calculator
            </button>
          </Link>

        </main>

      </div>
    );
  }

  const { height, weight } = data;

  const heightInMeters = height / 100;

  const bmi = (
    weight /
    (heightInMeters * heightInMeters)
  ).toFixed(1);

  let category = "";
  let message = "";

  if (bmi < 18.5) {

    category = "Underweight";
    message = "Consider maintaining a balanced and nutritious diet.";

  } else if (bmi < 25) {

    category = "Normal";
    message = "Your BMI is within the normal range.";

  } else if (bmi < 30) {

    category = "Overweight";
    message = "Consider maintaining an active and balanced lifestyle.";

  } else {

    category = "Obese";
    message = "Consider discussing your health goals with a professional.";

  }

  return (
    <div className="page">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <main className="card result-card">

        <div className="result-header">

          <div>
            <p className="eyebrow">
              ANALYSIS COMPLETE
            </p>

            <h1>
              Your <span>Result</span>
            </h1>
          </div>

          <div className="check">
            ✓
          </div>

        </div>

        <div className="bmi-display">

          <p>
            BODY MASS INDEX
          </p>

          <strong>
            {bmi}
          </strong>

          <span>
            kg/m²
          </span>

        </div>

        <div className="category-box">

          <p>
            HEALTH CATEGORY
          </p>

          <h2>
            {category}
          </h2>

        </div>

        <p className="result-message">
          {message}
        </p>

        <div className="measurements">

          <div>
            <small>HEIGHT</small>
            <strong>{height} cm</strong>
          </div>

          <div>
            <small>WEIGHT</small>
            <strong>{weight} kg</strong>
          </div>

        </div>

        <Link
          to="/bmi"
          className="primary-link"
        >
          <button className="primary-button full">
            Calculate Again
            <span>↻</span>
          </button>
        </Link>

        <p className="footer-text">
          BMI RANGE • 18.5 — 24.9 NORMAL
        </p>

      </main>

    </div>
  );
}

export default Result;