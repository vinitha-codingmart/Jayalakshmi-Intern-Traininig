import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Login from "./Login.js";
import SignUp from "./Signup.js";
import Main from "./main.js";
import Upload from "./upload.js";
import "./components/todo/index.component.css";
//import Upload from "./components/todo/upload";
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
                    <b>Todo</b>
                  </Link>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            {/* <div className="auth-wrapper">
                <div className="auth-inner"> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
            {/* </div>
              </div> */}

            <Route path="/todo" component={Main} />
            <Route path="/upload" component={Upload} />
          </Router>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
