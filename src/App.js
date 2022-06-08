import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebarmenu from "./components/nav/Sidebarmenu";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { GlobalStyle } from "./components/styles/LayoutStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Sidebarmenu />
        <Hero />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
