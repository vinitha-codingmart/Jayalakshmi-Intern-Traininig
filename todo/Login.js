import React, { Component } from "react";
import "./index.component.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: "",
      pass: "",
      flag: 10
    };
  }

  handleUsernameChange = event => {
    this.setState({
      usr: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      pass: event.target.value
    });
  };

  handleLogin = event => {
    //event.preventDefault();
    fetch("http://localhost:7000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.usr,
        password: this.state.pass
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Response from database reagrding login ss", data[0].id1);
        this.setState({
          flag: data[0].id1
        });

        this.props.history.push({
          pathname: "/todo",
          state: { flag: this.state.flag }
        });
      })
      .catch(err => console.log(err));

    this.state = {
      usr: "",
      pass: ""
    };
  };

  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.usr}
            onChange={this.handleUsernameChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.pass}
            onChange={this.handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.handleLogin}
        >
          Sign in
        </button>
      </form>
    );
  }
}
