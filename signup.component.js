import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: "",
      pass: "",
      role: ""
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

  handleRoleChange = event => {
    this.setState({
      role: event.target.value
    });
  };

  handleSignup = event => {
    //event.preventDefault();
    fetch("http://localhost:7000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.usr,
        password: this.state.pass,
        role: this.state.role
      })
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log("response from db regarding registration:", data);
      })
      .catch(err => console.log(err));

    this.state = {
      usr: "",
      pass: ""
    };
    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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
          <label>Role</label>
          <select
            className="form-control"
            defaultValue={this.state.role}
            onChange={this.handleRoleChange}
          >
            <option value="developer">Developer</option>
            <option value="Bussiness Analyst">Business Analyst</option>
            <option value="Tester">Tester</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.handleSignup}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
