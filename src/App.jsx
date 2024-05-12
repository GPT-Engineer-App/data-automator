import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation";
import OdooAutomation from "./pages/OdooAutomation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/odoo-automation" element={<OdooAutomation />} />
      </Routes>
    </Router>
  );
}

export default App;
