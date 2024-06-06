import { BrowserRouter, Route, Routes } from "react-router-dom";
import PricingPlans from "./Pricing";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PricingPlans/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
