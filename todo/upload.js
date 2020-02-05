import React, { Component } from "react";
import { withRouter } from "react-router";
import "./index.component.css";
export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      flag: this.props.location.state.flag
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAdd = event => {
    console.log("This is the task entered!", this.state.value);
    fetch("http://localhost:7000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task: this.state.value,
        uid: this.state.flag
      })
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
      });

    this.setState({
      value: ""
    });
    this.props.history.push({
      pathname: "/todo",
      state: { flag: this.state.flag }
    });
  };
  componentDidMount() {
    console.log("This is the flag in upload", this.state.flag);
  }
  render() {
    return (
      <div>
        <h3 className="add">ADD</h3>
        <input
          className="uploader"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <img
          className="uploader1"
          onClick={this.handleAdd}
          src="https://img.icons8.com/cotton/2x/upload.png"
        />
      </div>
    );
  }
}

export default withRouter(Upload);
