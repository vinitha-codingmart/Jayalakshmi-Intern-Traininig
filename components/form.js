import React, { Component } from "react";
import "./formstyle.css";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      job: "hardware"
    };
  }

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

  handleJobChange = event => {
    this.setState({
      job: event.target.value
    });
  };

  handleSubmit = event => {
    //event.preventDefault();
    this.state = {
      username: "",
      email: "",
      job: "hardware"
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
              <label>email</label>
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
            <div className="c1">
              <label>Job</label>
            </div>
            <div className="c2">
              <select value={this.state.job} onChange={this.handleJobChange}>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
