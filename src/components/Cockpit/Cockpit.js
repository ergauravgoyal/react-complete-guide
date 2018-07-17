import React from "react";
import myClasses from "./Cockpit.css";

const cockpit = props => {
  let classes = [];
  let btnClass = "";
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
    btnClass = myClasses.Red;
  }
  if (props.persons.length <= 2) {
    classes.push(myClasses.red);
  }
  //debugger;
  if (props.persons.length <= 1) {
    classes.push(myClasses.bold);
  }
  return (
    <div className={myClasses.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
