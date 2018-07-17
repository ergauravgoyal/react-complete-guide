import React, { Component } from "react";
import Radium from "radium";
import myPersonClass from "./Person.css";

class Person extends Component {
  render() {
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
