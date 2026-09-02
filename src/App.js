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