import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.scss";
import Home from "./components/Home.jsx";

const RouteComponent = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

ReactDOM.render(<RouteComponent />, document.querySelector("#root"));
