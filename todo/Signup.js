import React, { Component } from "react";
import "./index.component.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: ""
    };
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      pass: event.target.value
    });
  };

  handleSignup = event => {
    //event.preventDefault();
    console.log("This is signup form!!!", this.state.name);

    fetch("http://localhost:7000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        pass: this.state.pass
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("response from db regarding registration:", data);
        this.props.history.push({
          pathname: "/sign-in"
        });
      })
      .catch(err => console.log(err));

    this.state = {
      name: "",
      email: "",
      pass: ""
    };
    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };
  render() {
    return (
      <form>
        <h3>Sign Up </h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
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

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.handleSignup}
        >
          Register for free
        </button>
      </form>
    );
  }
}
