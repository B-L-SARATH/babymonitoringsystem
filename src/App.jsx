import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/public";
import Home from "./screens/home";
import Dashboard from "./screens/dashboard";
import Diseaseinfo from "./screens/diseaseinfo";
import Smartcraddle from "./screens/smartcraddle";
import Vaccinationremainder from "./screens/vaccinationremainder";
import Disease from "./screens/disease";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diseaseinfo" element={<Diseaseinfo />} />
          <Route path="/smartcraddle" element={<Smartcraddle />} />
          <Route
            path="/vaccinationremainder"
            element={<Vaccinationremainder />}
          />
          <Route path="/diseaseinfo/:name" element={<Disease />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
