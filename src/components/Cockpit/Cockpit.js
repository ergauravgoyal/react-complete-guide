import React from "react";
import myClasses from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  let classes = [];
  let btnClass = myClasses.Button;
  /* const style = {
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
  };*/
  if (props.showPersons) {
    btnClass = [myClasses.Red, myClasses.Button].join(" ");
  } else {
    btnClass = [myClasses.Green, myClasses.Button].join(" ");
  }
  if (props.persons.length <= 2) {
    classes.push(myClasses.red);
  }
  //debugger;
  if (props.persons.length <= 1) {
    classes.push(myClasses.bold);
  }
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default cockpit;
