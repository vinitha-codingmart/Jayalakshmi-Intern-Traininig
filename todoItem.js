import React from "react";
import "./todoItem.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      array: []
    };
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    this.state.array.push(this.state.name);
    this.setState({
      array: this.state.array,
      name: ""
    });
  };

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <h1> {this.props.todo.text}</h1>

        <br />
        <br />
        <div>
          {this.state.array.map(i => {
            return (
              <div>
                <li>{i}</li>
              </div>
            );
          })}
        </div>
        <br />
        <br />
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
