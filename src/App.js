import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "rtwetw", name: "Gaurav", age: 25 },
      { id: "reyewrq", name: "Tejas", age: 6 },
      { id: "qrwqqwr", name: "Ikshit", age: 1 }
    ],
    showPersons: false
  };
  nameChangedhandler = (event, id) => {
    debugger;
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    /*const person = {
      ...this.state.persons[personIndex]
    };*/

    const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  };
  deletePersonhandler = personIndex => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };
  togglePersonHandler = () => {
    //const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      borderRadius: "10px 10px",
      cursor: "pointers",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonhandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedhandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes}>This is really working</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// We can also use    <button onClick={this.switchNameHandler.bind(this,"Gaurav Goyal")}>
