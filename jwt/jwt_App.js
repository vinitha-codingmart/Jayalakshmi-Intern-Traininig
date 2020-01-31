import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
//import User from "./components/User";
//import Logout from "./components/Logout";
import App1 from "./App1";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/user" component={App1} />
              {/* <Route path="/logout" component={Logout} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
