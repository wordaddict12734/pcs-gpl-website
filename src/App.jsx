import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Salesforce from "./pages/services/Salesforce";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;