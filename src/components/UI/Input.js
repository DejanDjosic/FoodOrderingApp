import React from "react";
import classes from "../UI/Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}  />
      {/* The spread operator in this context passes all input object's key pairs */}
    </div>
  );
};

export default Input;
