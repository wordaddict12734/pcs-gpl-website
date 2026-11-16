import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Salesforce from "./pages/services/Salesforce";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Itconsulting from "./pages/services/Itconsulting";
import Location from "./pages/Location";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/salesforce" element={<Salesforce />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/consulting" element={<Itconsulting />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
