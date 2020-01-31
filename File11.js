import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/filestyle.css";
import "./App.css";
export class File11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [
        "https://www.youtube.com/watch?v=uilkmUoXoLU",
        "https://www.youtube.com/watch?v=uilkmUoXoLU"
      ],
      name: ["aa", "bb"],
      filtered: ["learn here", "Uploading tutorial"],
      msg: "",
      fileu: "",
      show: false,
      flags: this.props.location.state.flag,
      c: this.props.location.state.c,
      sample: []
    };

    //  this.handleShow = this.handleShow.bind(this);
    //this.handleClose = this.handleClose.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("this is componentdidmount:", this.state.c);
    fetch("http://localhost:7000/loader", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id1: this.state.flags,
        c: this.state.c
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          sample: data
        });
      });
  }

  handleClose = () => {
    this.setState({ show: false }); //here set the response from the database
  };

  handleShow = () => {
    //let { show } = this.state;
    console.log("show ", this.state.show);
    this.setState({ show: true });
  };

  handlenameChange = event => {
    this.setState({
      msg: event.target.value
    });
    console.log("name changed!!!");
  };

  handleImageChange = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    console.log("here is the base64:", reader.result);
    reader.onload = () => {
      this.setState({
        fileu: reader.result
      });
    };

    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      // var sample = this.state.filei1.concat(reader.result);
      console.log("heyyyyyyyyyyyyyy this is base64:", reader.result);
      this.setState({
        fileu: reader.result
      });
    };
    reader.readAsDataURL(file);

    console.log("this one toooo:", this.state.fileu);
  };
  // handleShow = async event => {
  //   try {
  //     await this.setState({
  //       show: true
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  handleSave = async event => {
    //event.preventDefault();
    this.setState({ show: false });
    try {
      const d = await fetch("http://localhost:7000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.msg,
          url: this.state.fileu,
          id: this.state.flags
        })
      });
      const data = await d.json();
      this.setState({
        sample: data
      });
    } catch (e) {
      console.error(e);
    }
    // .then(response => response.json())
    // .then(data => {
    //   console.log("here is the response:", data);
    //   v.setState({
    //     sample: data
    //   });
    // });
    // .catch(err => console.log(err));
    console.log("this is sample array!", this.state.sample);
    const name1 = [];
    const video1 = [];
    console.log("hey you!", this.state.sample[0].name);
    for (var i = 0; i < this.state.sample.length; i++) {
      console.log("List of names!");
      console.log(this.state.sample[i].name);

      name1.push(this.state.sample[i].name);
      video1.push(this.state.sample[i].url);

      // this.setState({ name: name1 });
    }

    this.setState = {
      name: name1,
      video: video1,
      show: false
    };
    //console.log("name array content:", this.state.name);
    //alert(`${this.state.username} ${this.state.email} ${this.state.job}`);
  };

  // handleChange(e) {
  //   let currentList = [];
  //   let newList = [];
  //   console.log(e.target.value);
  //   if (e.target.value !== "") {
  //     currentList = this.state.name;
  //     newList = currentList.filter(item => {
  //       const lc = item.toLowerCase();
  //       const filter = e.target.value.toLowerCase();
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     newList = this.state.name;
  //   }
  //   this.setState({
  //     filtered: newList
  //   });
  // }

  render() {
    // console.log("this is name array:", this.state.name);
    const child1 = [];
    for (var i = 0; i < this.state.sample.length; i++) {
      child1.push(
        <div className="vdisplay">
          <p>{this.state.sample[i].name}</p>
          <video width="320" height="240" controls>
            <source src={this.state.sample[i].url} type="video/mp4" />
          </video>
        </div>
      );
    }

    return (
      <div>
        <div className="main1">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b59a4831889089.56659d6d9da80.jpg"
            alt=""
          />
          <h1>Welcome to our Website</h1>
          <br />
          <i>
            <marquee behavior="scroll" direction="left" width="40%">
              Here you can add your favourite videos and can whenever you
              want..Have fun!
            </marquee>{" "}
          </i>
          <div className="modal1">
            Want to upload videos?
            <br />
            <Button variant="primary" onClick={() => this.handleShow()}>
              Upload
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Upload your video</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  Name:{" "}
                  <input
                    type="text"
                    value={this.state.msg}
                    onChange={this.handlenameChange}
                  ></input>
                </div>
                <br />
                <div>
                  <input type="file" onChange={this.handleImageChange}></input>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.handleSave}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="searchbar">
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              placeholder="Search..."
            />
          </div>
          {/* <p>Hey!!!!{this.state.flags}</p> */}
          <div className="display">{child1}</div>
        </div>
      </div>
    );
  }
}

export default File11;
