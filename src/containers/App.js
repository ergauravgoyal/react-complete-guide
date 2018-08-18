import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import myClasses from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "rtwetw", name: "Gaurav", age: 25 },
      { id: "reyewrq", name: "Tejas", age: 6 },
      { id: "qrwqqwr", name: "Ikshit", age: 1 }
    ],
    showPersons: false
  };
  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update App.js] Inside shouldComponentUpdate", nextProps);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("[Update App.js] Inside componentWillUpdate", nextProps);
  }
  componentDidUpdate() {
    console.log("[Update App.js] Inside componentDidUpdate");
  }
  nameChangedhandler = (event, id) => {
    //debugger;
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
    console.log("[App.js] Inside render()");
    let persons = null;
    //let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedhandler}
        />
      );
      // btnClass = myClasses.red;
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    return (
      <StyleRoot>
        <div className={myClasses.App}>
          <button
            onClick={() => {
              this.setState({
                showPersons: true
              });
            }}
          />
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// We can also use    <button onClick={this.switchNameHandler.bind(this,"Gaurav Goyal")}>
