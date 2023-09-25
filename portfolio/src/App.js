import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/HomePage/Header";
import { Component } from "react";


class App extends Component() {
  render() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/contact" component={ContactPage}/>
      <Route exact path="project" component={ProjectPage}/>
    </Switch>
    </BrowserRouter>
  
    </>
  );
  }
}

export default App;