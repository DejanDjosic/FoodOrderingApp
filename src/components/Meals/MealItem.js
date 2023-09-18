import React from "react";
import classes from "../Meals/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { mealName, mealPrice, mealDescription,id } = props;
  const price = `$${mealPrice.toFixed(2)}`;

  return (
    <li className={classes.meal}>
        <div>
      <h3>{mealName}</h3>
      <div className={classes.description}>{mealDescription}</div>
      <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={id}/>
    </li>
  );
};

export default MealItem;