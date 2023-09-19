import React from "react";
import classes from "../UI/Input.module.css";

const Input =React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}  />
      {/* The spread operator in this context passes all input object's key pairs */}
    </div>
  );
});

export default Input;
