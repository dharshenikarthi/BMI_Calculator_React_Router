# Ex06 BMI Calculator
## Date: 02-09-2026
# NAME: DHARSHENI K
## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM

### App.js
```
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import BMI from "./BMI";
import Result from "./Result";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/bmi"
        element={<BMI />}
      />

      <Route
        path="/result"
        element={<Result />}
      />

    </Routes>
  );
}

export default App;
```

### App.css
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    "Segoe UI",
    Arial,
    sans-serif;

  background: #050816;
  color: white;
}

button,
input {
  font-family: inherit;
}

/* =========================
   PAGE
========================= */

.page {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px 20px;

  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 15% 15%,
      rgba(16, 185, 129, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 85%,
      rgba(59, 130, 246, 0.14),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #020617,
      #07111c,
      #0f172a
    );
}

/* =========================
   BACKGROUND
========================= */

.background-circle {
  position: absolute;

  width: 320px;
  height: 320px;

  border-radius: 50%;

  filter: blur(120px);

  opacity: 0.18;

  pointer-events: none;
}

.circle-one {
  top: -150px;
  left: -100px;

  background: #10b981;
}

.circle-two {
  bottom: -150px;
  right: -100px;

  background: #3b82f6;
}

/* =========================
   CARD
========================= */

.card {
  position: relative;

  z-index: 2;

  width: 500px;
  max-width: 100%;

  padding: 42px;

  border-radius: 30px;

  background:
    rgba(15, 23, 42, 0.75);

  border: 1px solid
    rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(25px);

  box-shadow:
    0 35px 90px
      rgba(0, 0, 0, 0.5),
    inset 0 1px
      rgba(255, 255, 255, 0.07);

  animation:
    cardAppear 0.6s ease;
}

@keyframes cardAppear {

  from {
    opacity: 0;
    transform:
      translateY(25px)
      scale(0.97);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }

}

/* =========================
   HOME
========================= */

.home-card {
  text-align: center;
}

.logo {
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;

  border-radius: 22px;

  background:
    linear-gradient(
      135deg,
      #10b981,
      #3b82f6
    );

  font-size: 20px;

  font-weight: 900;

  letter-spacing: 2px;

  box-shadow:
    0 15px 35px
      rgba(16, 185, 129, 0.25);
}

.badge {
  display: inline-block;

  margin-top: 25px;

  padding: 7px 13px;

  border-radius: 30px;

  color: #6ee7b7;

  background:
    rgba(16, 185, 129, 0.1);

  border: 1px solid
    rgba(16, 185, 129, 0.2);

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2px;
}

h1 {
  margin-top: 18px;

  font-size: 46px;

  line-height: 1.05;

  letter-spacing: -2px;
}

h1 span {
  color: #34d399;
}

.description {
  margin: 18px auto 0;

  max-width: 400px;

  color: #94a3b8;

  font-size: 14px;

  line-height: 1.7;
}

/* =========================
   FEATURES
========================= */

.feature-row {
  display: flex;

  justify-content: center;

  gap: 35px;

  margin: 35px 0;
}

.feature {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.feature strong {
  color: #34d399;

  font-size: 12px;
}

.feature span {
  color: #64748b;

  font-size: 10px;

  letter-spacing: 1px;
}

/* =========================
   BUTTON
========================= */

.primary-link {
  text-decoration: none;
}

.primary-button {
  width: 100%;

  min-height: 58px;

  border: none;

  border-radius: 17px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 30px;

  color: white;

  background:
    linear-gradient(
      135deg,
      #10b981,
      #059669
    );

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 15px 30px
      rgba(16, 185, 129, 0.2);

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.primary-button span {
  font-size: 20px;
}

.primary-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 20px 40px
      rgba(16, 185, 129, 0.3);
}

.primary-button:active {
  transform: scale(0.97);
}

.footer-text {
  margin-top: 25px;

  color: #475569;

  font-size: 9px;

  letter-spacing: 2px;
}

/* =========================
   TOP BAR
========================= */

.top-bar,
.result-header {
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
}

.eyebrow {
  color: #34d399;

  font-size: 9px;

  letter-spacing: 3px;

  font-weight: 700;
}

.step {
  color: #475569;

  font-size: 11px;

  letter-spacing: 1px;
}

/* =========================
   INPUTS
========================= */

.input-group {
  margin-top: 25px;
}

.input-group label {
  display: block;

  margin-bottom: 9px;

  color: #64748b;

  font-size: 10px;

  font-weight: 700;

  letter-spacing: 2px;
}

.input-box {
  display: flex;

  align-items: center;

  height: 60px;

  padding: 0 18px;

  border-radius: 15px;

  background:
    rgba(2, 6, 23, 0.55);

  border: 1px solid
    rgba(255, 255, 255, 0.08);

  transition:
    border 0.2s,
    box-shadow 0.2s;
}

.input-box:focus-within {
  border-color:
    rgba(52, 211, 153, 0.6);

  box-shadow:
    0 0 0 4px
      rgba(52, 211, 153, 0.08);
}

.input-box input {
  width: 100%;

  border: none;

  outline: none;

  background: transparent;

  color: white;

  font-size: 18px;

  font-weight: 600;
}

.input-box input::placeholder {
  color: #334155;
}

.input-box span {
  color: #34d399;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 1px;
}

.full {
  margin-top: 28px;
}

/* Remove number arrows */

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;

  margin: 0;
}

/* =========================
   INFO
========================= */

.info-box {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 20px;

  padding: 15px;

  border-radius: 14px;

  background:
    rgba(255, 255, 255, 0.03);
}

.info-box span {
  color: #34d399;
}

.info-box p {
  color: #64748b;

  font-size: 11px;
}

/* =========================
   ERROR
========================= */

.error {
  margin-top: 18px;

  padding: 12px 15px;

  border-radius: 12px;

  color: #fda4af;

  background:
    rgba(244, 63, 94, 0.1);

  border: 1px solid
    rgba(244, 63, 94, 0.2);

  font-size: 11px;
}

/* =========================
   RESULT
========================= */

.check {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #34d399;

  background:
    rgba(16, 185, 129, 0.12);

  border: 1px solid
    rgba(16, 185, 129, 0.2);

  font-size: 18px;
}

.bmi-display {
  text-align: center;

  margin: 30px 0;

  padding: 30px;

  border-radius: 22px;

  background:
    radial-gradient(
      circle at center,
      rgba(16, 185, 129, 0.12),
      transparent 70%
    );

  border: 1px solid
    rgba(255, 255, 255, 0.07);
}

.bmi-display p {
  color: #64748b;

  font-size: 9px;

  letter-spacing: 3px;
}

.bmi-display strong {
  display: block;

  margin-top: 8px;

  color: #34d399;

  font-size: 72px;

  line-height: 1;

  letter-spacing: -4px;
}

.bmi-display span {
  color: #64748b;

  font-size: 11px;
}

/* =========================
   CATEGORY
========================= */

.category-box {
  text-align: center;

  padding: 20px;

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.035);
}

.category-box p {
  color: #64748b;

  font-size: 9px;

  letter-spacing: 2px;
}

.category-box h2 {
  margin-top: 8px;

  color: white;

  font-size: 25px;
}

/* =========================
   RESULT MESSAGE
========================= */

.result-message {
  margin: 20px 0;

  text-align: center;

  color: #94a3b8;

  font-size: 12px;

  line-height: 1.6;
}

/* =========================
   MEASUREMENTS
========================= */

.measurements {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 12px;
}

.measurements div {
  padding: 16px;

  border-radius: 14px;

  background:
    rgba(255, 255, 255, 0.03);

  border: 1px solid
    rgba(255, 255, 255, 0.06);
}

.measurements small {
  display: block;

  color: #475569;

  font-size: 9px;

  letter-spacing: 2px;
}

.measurements strong {
  display: block;

  margin-top: 6px;

  color: #cbd5e1;

  font-size: 14px;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 550px) {

  .page {
    padding: 20px 14px;
  }

  .card {
    padding: 28px 22px;

    border-radius: 24px;
  }

  h1 {
    font-size: 37px;
  }

  .feature-row {
    gap: 22px;
  }

  .bmi-display strong {
    font-size: 60px;
  }

}
```

### bmi.js:
```
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
```

### Home.js:
```
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
```


## OUTPUT
<img width="1916" height="1077" alt="image" src="https://github.com/user-attachments/assets/7e8826a8-507b-4756-89f8-41cebf3ad18f" />

<img width="1917" height="1077" alt="image" src="https://github.com/user-attachments/assets/2540eaff-f91a-4d2b-90b7-654875c268bd" />

<img width="1917" height="1080" alt="image" src="https://github.com/user-attachments/assets/cda62c26-8149-4d29-941f-2cde5187aa05" />


## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
