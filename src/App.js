import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact//Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/project"><Project /></Route>
        {/* <Route exact path="/resume"><Resume /></Route> */}
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
