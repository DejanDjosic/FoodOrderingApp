import React from 'react'
import MealsSummary from '../Meals/MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <React.Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </React.Fragment>
  )
}

export default Meals