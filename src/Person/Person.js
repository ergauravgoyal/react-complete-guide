import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>
        Hi ! {props.name} is {props.age} years old
      </h1>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
