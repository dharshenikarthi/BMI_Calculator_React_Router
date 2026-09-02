import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <main className="card home-card">

        <div className="logo">
          BMI
        </div>

        <div className="badge">
          HEALTH ANALYZER
        </div>

        <h1>
          Know Your <span>Body</span>
        </h1>

        <p className="description">
          Calculate your Body Mass Index and
          understand your health category in seconds.
        </p>

        <div className="feature-row">

          <div className="feature">
            <strong>01</strong>
            <span>Height</span>
          </div>

          <div className="feature">
            <strong>02</strong>
            <span>Weight</span>
          </div>

          <div className="feature">
            <strong>03</strong>
            <span>BMI</span>
          </div>

        </div>

        <Link
          to="/bmi"
          className="primary-link"
        >
          <button className="primary-button">
            Calculate BMI
            <span>→</span>
          </button>
        </Link>

        <p className="footer-text">
          SIMPLE • FAST • RESPONSIVE
        </p>

      </main>

    </div>
  );
}

export default Home;