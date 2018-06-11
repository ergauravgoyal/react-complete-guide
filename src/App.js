import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Gaurav", age: 25 },
      { name: "Tejas", age: 6 },
      { name: "Ishu", age: 1 }
    ]
  };
  switchNameHandler = newName => {
    console.log("Button Clicked");
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Tejas", age: 6 },
        { name: "Ikshit", age: 1 }
      ]
    });
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Gaurav Goyal", age: 25 },
        { name: "Tejas", age: 6 },
        { name: event.target.value, age: 1 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "#eee",
      fontSize: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi ! I am a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Gaurav Goyal")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Gaurav G")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
