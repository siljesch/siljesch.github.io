import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebarmenu from "./components/nav/Sidebarmenu";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebarmenu />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
