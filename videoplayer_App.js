import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";
//import App1 from "./App1.js";
import File11 from "./File11.js";
import "./index.component.css";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Router>
            <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>
                    <b>StalWart</b>
                  </Link>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                  </Switch>
                </div>
              </div>
            </div>
            <div className="mainpage">
              <Route path="/app1" component={File11} />
            </div>
          </Router>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
