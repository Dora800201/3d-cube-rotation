import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import CarportDesignerPage from "./components/CarportDesignerPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route
          path="/products/steel-carport-designer"
          Component={CarportDesignerPage}
        />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
