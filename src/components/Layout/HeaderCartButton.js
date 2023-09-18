import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';
import cartContext from '../store/cart-context';
const HeaderCartButton = (props) => {

  const ctx=useContext(cartContext);

  const numberOfCartItems=ctx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount;
  },0)


  return (
<React.Fragment>
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
</React.Fragment>  )
}

export default HeaderCartButton