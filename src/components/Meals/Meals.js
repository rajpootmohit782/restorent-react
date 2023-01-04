import React, { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {
  console.log(props.cartItem)
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals cartItem={props.cartItem}/>
    </Fragment>
  )
}

export default Meals