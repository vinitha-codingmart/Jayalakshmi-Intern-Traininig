import React, { Component } from "react";
import "./formstyle.css";
import { Link } from "react-router-dom";
// import Form2 from "./form2";
//import { Redirect } from "react-router-dom";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      textarea: "",
      city: "",
      mobile: "",
      image: "",
      filei: ""
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

  handleTextareaChange = event => {
    this.setState({
      textarea: event.target.value
    });
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleMobileChange = event => {
    this.setState({
      mobile: event.target.value
    });
  };

  handleImageChange = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      this.setState({
        filei: reader.result
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      image: event.target.value
    });
  };

  handleSubmit = event => {
    //event.preventDefault();
    console.log(this.state.name, this.state.image);

    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };

  //   componentDidMount() {}

  //   componentWillUpdate(nextProps, nextState) {
  //     localStorage.setItem("user", JSON.stringify(nextState));
  //   }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="c1">
              <label>Name</label>
            </div>
            <div className="c2">
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
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
              <label>Address</label>
            </div>
            <div className="c2">
              <textarea
                value={this.state.textarea}
                onChange={this.handleTextareaChange}
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="c1">
              <label>City</label>
            </div>
            <div className="c2">
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="c1">
              <label>Mobile</label>
            </div>
            <div className="c2">
              <input
                pattern="[0-9]"
                type="text"
                value={this.state.mobile}
                onChange={this.handleMobileChange}
              />
            </div>
          </div>

          <div className="upload-btn-wrapper">
            <button className="btn1">Upload an image</button>
            <input
              type="file"
              name="myfile"
              value={this.state.image}
              onChange={this.handleImageChange}
            />
          </div>

          <div className="row">
            <Link
              to={{
                pathname: "/form2",
                state: {
                  name: this.state.name,
                  file:this.state.filei
                }
              }}
            >
              <button className="btn" onClick={this.handleSubmit} type="submit">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Form1;
