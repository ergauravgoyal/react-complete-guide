import React from "react";
import Radium from "radium";
import myPersonClass from "./Person.css";
const person = props => {
  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "450px"
  //   }
  // };
  return (
    <div className={myPersonClass.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and {props.age} year Old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
