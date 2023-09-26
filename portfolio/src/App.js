import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import {Switch, Route} from "react-router-dom";
import Header from "./components/HomePage/Header";
import React from "react";



function App() {
     return (
    <>
    <Header/>
    <Switch>
      <Route path='/'><HomePage/></Route>
      <Route exact path="/about" ><AboutPage/></Route>
      <Route exact path="/contact" ><ContactPage/></Route>
      <Route exact path="/project" ><ProjectPage/></Route>
    </Switch>
  
    </>
  );
}

export default App;
