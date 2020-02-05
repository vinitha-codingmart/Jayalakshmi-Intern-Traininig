import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.component.css";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [{}],
      flag: this.props.location.state.flag,
      del: 0
    };
  }

  componentDidMount() {
    console.log("this is the flag", this.state.flag);
    this.setState({ del: 0 });
    fetch("http://localhost:7000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.flag
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(
          "Hey this is component didmount and tis is the response",
          data
        );
        this.setState({
          sample: data
        });
      })
      .catch(err => console.log(err));
  }
  handleTopic = event => {
    this.setState({ del: 0 });
    fetch("http://localhost:7000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.flag
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(
          "Hey this is component didmount and tis is the response",
          data
        );
        this.setState({
          sample: data
        });
      })
      .catch(err => console.log(err));
  };
  handleProfile = event => {
    console.log("this is the flag of the profilellllllll", this.state.flag);
    this.setState({
      del: 1
    });
    fetch("http://localhost:7000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.flag
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Profile data:", data);
        this.setState({
          sample: data
        });
      })
      .catch(err => console.log(err));
  };
  handleDelete = i => {
    console.log("this is jaya admin", i);
    fetch("http://localhost:7000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.flag,
        delid: i
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Profile data updated:", data);
        this.setState({
          sample: data
        });
      })
      .catch(err => console.log(err));
  };
  handleDellist = event => {
    console.log("this is the deleted list");
    this.setState({
      del: 0
    });
    fetch("http://localhost:7000/dellist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.flag
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Deleted data:", data);
        this.setState({
          sample: data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const child1 = [];
    if (this.state.del == 1) {
      for (let i = 0; i < this.state.sample.length; i++) {
        child1.push(
          <div className="vdisplay">
            {/* this is the id of the task:{this.state.sample[i].id1}
            <br />
            this is the id of the user:
            {this.state.sample[i].uid}
            <br />
            this is the task */}
            <h4>
              {this.state.sample[i].task}

              {/* {console.log("delete id ", this.state.sample[i])} */}
              <img
                src="https://i.ya-webdesign.com/images/delete-icon-png-1.png"
                onClick={() => this.handleDelete(this.state.sample[i].id1)}
              />
            </h4>
            {/* <button onClick={() => this.handleDelete(this.state.sample[i].id1)}>
              Delete
            </button> */}
          </div>
        );
      }
    } else {
      for (let i = 0; i < this.state.sample.length; i++) {
        child1.push(
          <div className="vdisplay">
            {/* this is the id of the task:{this.state.sample[i].id1}
            <br />
            this is the id of the user:
            {this.state.sample[i].uid}
            <br />
            this is the task */}
            <h4>{this.state.sample[i].task}</h4>
          </div>
        );
      }
    }
    return (
      <div className="main">
        <div className="task-list" onClick={this.handleTopic}>
          Tasks
        </div>

        <Link
          to={{
            pathname: "/upload",
            state: { flag: this.state.flag }
          }}
        >
          <img
            className="upload"
            src="https://img.icons8.com/cotton/2x/upload.png"
          />
          {/* <button className="btnn">Upload</button> */}
        </Link>
        <img
          className="profile"
          onClick={this.handleProfile}
          src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png"
        />
        <img
          className="delete"
          onClick={this.handleDellist}
          src="https://toolbox.iskysoft.com/images/2019/force-empty-trash-mac-7.png"
        />
        {child1}
        {/* <button className="btnn" onClick={this.handleDellist}>
          Deleted Items
        </button> */}
      </div>
    );
  }
}

export default Main;
