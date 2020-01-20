import React, { useEffect, Component } from "react";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";
import request from "superagent";
//import { throttle, debounce } from "throttle-debounce";
//import InfiniteScroll from "react-infinite-scroller";
import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      flag: 1
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  //var flag=1;
  handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;


    const body = document.body;
    const html = document.documentElement;
    
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    //console.log("win", windowBottom);

    //console.log("doc", docHeight);

    if (windowBottom + 1 >= docHeight) {
      console.log("reached!!!!");
      this.setState({ flag: this.state.flag + 1 });
    } else {
      console.log("not yet!!!");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&limit=25`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  }
  render() {
    const child = [];
    for (var i = 0; i < this.state.flag; i += 1) {
      child.push(<GifList gifs={this.state.gifs} />);
    }
    return (
      <div id="main1">
        <div className="search">
          <h1>
            <img
              src="https://static.ezgif.com/images/format-demo/butterfly.png"
              alt=""
            />
            Gify Search
          </h1>
        </div>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />

        <div id="display">
          {/* <GifList gifs={this.state.gifs} /> */}
          {child}
        </div>
      </div>
    );
  }
}

export default App;
