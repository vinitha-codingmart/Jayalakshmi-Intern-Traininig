import React, { Component } from "react";
import File1 from "./components/File1";
import "./components/filestyle.css";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["aa", "bb"],
      url: [
        "https://www.youtube.com/watch?v=uilkmUoXoLU",
        "https://www.youtube.com/watch?v=uilkmUoXoLU"
      ],
      url1: "",
      url2: "",
      filtered: ["learn here", "uploading tutorial"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  displayData = data => {
    this.setState({
      name: data
    });
    console.log("video title:", this.state.name);
  };

  displayUrl = data => {
    this.setState({
      url: data
    });
    console.log("videos:", this.state.url);
  };

  displayUrl1 = data => {
    this.setState({
      url1: data
    });
  };

  displayName = data => {
    this.setState({
      url2: data
    });
  };

  componentDidUpdate() {
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: this.state.url1, url1: this.state.url2 })
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];
    console.log(e.target.value);
    // If the search bar isn't empty
    if (e.target.value !== "") {
      currentList = this.state.name;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.name;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    const child = [];
    console.log(this.state.url.length);
    for (var i = 0; i < this.state.url.length; i++) {
      //console.log("innnnnnnnnnnnnnnnnnnnnnn");
      child.push(
        <div className="vdisplay">
          <p>{this.state.name[i]}</p>
          <video width="320" height="240" controls>
            <source src={this.state.url[i]} type="video/mp4" />
          </video>
        </div>
      );
    }
    const child1 = [];
    for (var i = 0; i < this.state.filtered.length; i++) {
      child1.push(
        <div className="vdisplay">
          <p>{this.state.filtered[i]}</p>
          <video width="320" height="240" controls>
            <source
              src={
                this.state.url[this.state.name.indexOf(this.state.filtered[i])]
              }
              type="video/mp4"
            />
          </video>
        </div>
      );
    }

    //let l  = fil.findIndex(is=>)
    return (
      <div>
        <File1
          displayData={this.displayData}
          displayUrl={this.displayUrl}
          displayUrl1={this.displayUrl1}
          displayName={this.displayName}
        />
        <div className="searchbar">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>
        <div className="display">{child1}</div>
        {/* <ul>
          {this.state.filtered.map(item => (
            <li key={item}>{item} &nbsp; </li>
          ))}
        </ul> */}

        {/* <div className="display">{child}</div> */}
      </div>
    );
  }
}

export default App;
