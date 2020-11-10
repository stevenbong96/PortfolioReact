import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Homework from "./pages/Homework/Homework";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectData from "./project.json";
import HomeworkData from "./homework.json";
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/homework">
          <Grid container direction="row" justify="space-around" alignItems="center">
            {HomeworkData.map(homew => {
              return <Homework name={homew.name} image={homew.image} github={homew.github} deploy={homew.deployed}/>
            })}
          </Grid>
        </Route>
        <Route exact path="/project">
          <Grid container direction="row" justify="space-around" alignItems="center">
            {ProjectData.map(project => {
              return <Project name={project.name} image={project.image} github={project.github} deploy={project.deployed} />
            })}
          </Grid>
        </Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
