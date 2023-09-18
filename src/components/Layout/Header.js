import React from 'react';
import classes from '../Layout/Header.module.css';
import MealsImage from '../../assets/meals.jpg';
import Button from '../Layout/HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <Button onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}><img src={MealsImage} alt="A table full of delicious food"/></div>
    </React.Fragment>
  )
}

export default Header