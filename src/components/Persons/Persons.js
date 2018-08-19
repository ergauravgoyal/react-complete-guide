import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[Update Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update Persons.js] Inside shouldComponentUpdate", nextProps);
    // return nextProps.persons !== this.props.persons;
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[Update Persons.js] Inside componentWillUpdate", nextProps);
  }
  componentDidUpdate() {
    console.log("[Update Persons.js] Inside componentDidUpdate");
  }
  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          position={index}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
