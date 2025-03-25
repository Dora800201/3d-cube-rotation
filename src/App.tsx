import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CabinetDesignerPage from "./components/CabinetDesignerPage";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route
          path="/products/3d-cabinet-designer"
          Component={CabinetDesignerPage}
        />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
