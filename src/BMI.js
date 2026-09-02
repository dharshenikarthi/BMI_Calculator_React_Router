import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMI() {

  const navigate = useNavigate();

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = (e) => {

    e.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Please enter valid height and weight.");
      return;
    }

    if (h < 50 || h > 250) {
      setError("Height should be between 50 and 250 cm.");
      return;
    }

    if (w < 10 || w > 300) {
      setError("Weight should be between 10 and 300 kg.");
      return;
    }

    setError("");

    navigate("/result", {
      state: {
        height: h,
        weight: w
      }
    });
  };

  return (
    <div className="page">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <main className="card calculator-card">

        <div className="top-bar">

          <div>
            <p className="eyebrow">
              BMI ANALYZER
            </p>

            <h1>
              Your <span>Measurements</span>
            </h1>
          </div>

          <div className="step">
            01 / 02
          </div>

        </div>

        <p className="description">
          Enter your current height and weight
          to calculate your BMI.
        </p>

        <form onSubmit={calculateBMI}>

          <div className="input-group">

            <label>
              HEIGHT
            </label>

            <div className="input-box">

              <input
                type="number"
                placeholder="170"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
              />

              <span>CM</span>

            </div>

          </div>

          <div className="input-group">

            <label>
              WEIGHT
            </label>

            <div className="input-box">

              <input
                type="number"
                placeholder="65"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
              />

              <span>KG</span>

            </div>

          </div>

          {error && (
            <div className="error">
              ⚠ {error}
            </div>
          )}

          <button
            type="submit"
            className="primary-button full"
          >
            Calculate BMI
            <span>→</span>
          </button>

        </form>

        <div className="info-box">
          <span>ⓘ</span>
          <p>
            BMI is calculated using your height
            and weight.
          </p>
        </div>

      </main>

    </div>
  );
}

export default BMI;