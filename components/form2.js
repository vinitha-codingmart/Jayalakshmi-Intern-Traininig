import React, { Component } from "react";
import "./formstyle.css";
//import { Link } from "react-router-dom";
class Form2 extends Component {
  componentWillMount() {
    console.log("hello");
  }
  render() {
    return (
      <div>
        <h1>
          Hello{"\u00A0"}
          {this.props.location.state.name}
          <img src={this.props.location.state.file} alt="" />
          <button>Post</button>
        </h1>
      </div>
    );
  }
}
export default Form2;
