import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Gaurav", age: 25 },
      { name: "Tejas", age: 6 },
      { name: "Ikshit", age: 1 }
    ]
  };
  switchNameHandler = newName => {
    //console.log("button clicked");
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: "Tejas", age: 6 },
        { name: "Prashant", age: 1 }
      ]
    });
  };
  nameChangedhandler = event => {
    this.setState({
      person: [
        { name: "Gaurav", age: 28 },
        { name: event.target.value, age: 6 },
        { name: "Prashant", age: 1 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      borderRadius: "10px 10px",
      cursor: "pointers"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Gaurav Goyal")}
        >
          Switch Name
        </button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>
          My Hobbies:Finance
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Gaurav Goyal !!")}
          changed={this.nameChangedhandler}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;

// We can also use    <button onClick={this.switchNameHandler.bind(this,"Gaurav Goyal")}>
