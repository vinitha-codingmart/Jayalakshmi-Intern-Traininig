import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./filestyle.css";
export class File1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      msg: "", //name of the video to get stored in db
      name: [], //video title array
      filei1: [], //video url array
      image: "" //video fake path to get stored in db
    };
  }

  handlenameChange = event => {
    this.setState({
      msg: event.target.value
    });
    console.log("name changed!!!");
  };

  handleImageChange = event => {
    var file = event.target.files[0];
    // console.log("heyyyyyyyy:", file.filetoupload.path);
    //console.log(file, "video");
    var reader = new FileReader();
    reader.onload = () => {
      var sample = this.state.filei1.concat(reader.result);
      //console.log("heyyyyyyyyyyyyyy this is base64:", reader.result);
      this.setState({
        filei1: sample
      });
    };
    reader.readAsDataURL(file);
    this.setState({
      image: event.target.value
    });
  };

  async handleClose() {
    var text = this.state.name.concat(this.state.msg);
    await this.setState({ show: false, name: text });
    this.props.displayData(this.state.name);
    this.props.displayUrl(this.state.filei1);
    this.props.displayUrl1(this.state.image); //video url
    this.props.displayName(this.state.msg); //video name
    // console.log("video title:", this.state.name);
    // console.log("video urls:", this.state.filei);
    // //console.log("image:", this.state.image);
    //console.log(this.state.msg);
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
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

        {/* <div className="searchbar">
          <input
            type="text"
            size="50"
            maxLength="40"
            placeholder="Search for any videos"
          />
        </div> */}
        <div className="modal1">
          Want to upload videos?
          <br />
          <Button variant="primary" onClick={this.handleShow}>
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
              <Button variant="primary" onClick={this.handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div> Hello der!</div>
      </div>
    );
  }
}

export default File1;
