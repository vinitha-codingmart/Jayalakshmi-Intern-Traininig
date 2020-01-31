import React from "react";
import "./todoItem.css";
import InputRange from "react-input-range";
import _ from "lodash";
import uuid from "uuid/v4";
import "react-input-range/lib/css/index.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
      array: [{ id: uuid(), keyTerm: "Buy an Online course", value: 0 }],
      value: 0
    };
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSlider = event => {
    this.setState({
      value: event,
      value0: event / 2
    });
  };
  handleSubmit = event => {
    const newKeyTerm = { id: uuid(), keyTerm: this.state.name, value: 0 };
    this.setState(prevState => ({
      ...prevState,
      name: "",
      array: [...prevState.array, newKeyTerm]
    }));

    // fetch("http://localhost:7000/addkeyterms", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     title: this.props.todo.text,
    //     subtopics: this.state.name
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       sample: data
    //     });
    //   });

    // this.setState({
    //   array: this.state.array,
    //   name: ""
    // });
  };

  handleKeyTermValueChange(e, id) {
    const newKeyTerms = this.state.array.slice();
    const index = _.findIndex(newKeyTerms, { id });
    newKeyTerms[index].value = e;
    this.setState({ array: newKeyTerms });
  }

  computeAverage() {
    const sum = _.sumBy(this.state.array, "value");
    const average = sum / this.state.array.length;
    this.setState({ value: average });
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <h2>
          {" "}
          {this.props.todo.text}{" "}
          <form className="form">
            <InputRange
              maxValue={100}
              minValue={0}
              value={this.state.value}
              onChange={() => null}
              // onChangeComplete={value0 => console.log(value0)}
            />
          </form>
        </h2>
        <div>
          {this.state.array.map(i => {
            return (
              <div key={i.id}>
                <li>
                  <h4>{i.keyTerm}</h4>
                </li>
                <form className="form">
                  <InputRange
                    maxValue={100}
                    minValue={0}
                    value={i.value}
                    onChange={e => this.handleKeyTermValueChange(e, i.id)}
                    onChangeComplete={this.computeAverage.bind(this)}
                  />
                </form>
              </div>
            );
          })}
        </div>

        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <button className="addKeyterms" onClick={this.handleSubmit}>
          Add Key Terms
        </button>
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
