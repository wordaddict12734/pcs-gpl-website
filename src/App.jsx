import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Salesforce from "./pages/services/Salesforce";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Itconsulting from "./pages/services/Itconsulting";
import Location from "./pages/location";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/consulting" element={<Itconsulting />} />
          <Route path="/Location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;