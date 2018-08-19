import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import myPersonClass from "./Person.css";
import WithClass from "../../../hoc/WithClass";

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
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <WithClass classes={myPersonClass.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and {this.props.age} year Old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default Radium(Person);
