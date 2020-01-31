import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: "",
      pass: "",
      flag: 0,
      c: 0
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
        var i = data[0].id;
        var j = data[0].c;
        this.setState({ flag: i, c: j });
        console.log("Response from db regarding login data:", this.state.flag);
        if (this.state.flag) {
          this.props.history.push({
            pathname: "/app1",
            state: { flag: this.state.flag, c: this.state.c }
          });
          console.log("yeesssssssssssssss");
        }
      })
      .catch(err => console.log(err));

    this.state = {
      usr: "",
      pass: ""
    };

    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };

  render() {
    // if (this.state.flag) {
    //   return <Redirect to="/app1" />;
    // }
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
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
