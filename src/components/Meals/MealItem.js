import React,{useContext} from "react";
import classes from "../Meals/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";

const MealItem = (props) => {
const cartCtx= useContext(CartContext);

  const { mealName, mealPrice, mealDescription,id } = props;
  const price = `$${mealPrice.toFixed(2)}`;


  const addToCartHandler=(amount)=>
  {
cartCtx.addItem({
  id:id,
  name:mealName,
  amount:amount,
  price:mealPrice
})
  }

  return (
    <li className={classes.meal}>
        <div>
      <h3>{mealName}</h3>
      <div className={classes.description}>{mealDescription}</div>
      <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={id} onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
