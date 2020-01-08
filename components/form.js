import React, { Component } from "react";
import "./formstyle.css";
//import { Link } from "react-router";
import { Link } from "react-router-dom";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: ""
    };
  }

  //   componentWillMount() {
  //     debugger;
  //   }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = event => {
    //event.preventDefault();
    this.state = {
      username: "",
      email: ""
    };
    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="c1">
              <label>Username</label>
            </div>
            <div className="c2">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="c1">
              <label>Password</label>
            </div>
            <div className="c2">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>

          <div className="row">
            <Link to="/form1">
              <button className="btn" type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
