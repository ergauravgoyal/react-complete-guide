import React, { Component } from "react";
import Radium from "radium";
import myPersonClass from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div className={myPersonClass.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and {this.props.age} year Old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Radium(Person);
