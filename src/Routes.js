import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Quiz from "./Pages/Quiz/Quiz";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/Navbar" component={Navbar} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
