import React from 'react';
//import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import classes from './MealItem.module.css'

const MealItemForm = (props) => {
  console.log(props.id)
 // const addClickHandler = () ={
   // props.
 // }

 const onClickHandlel=()=>{
  props.cartItems(props.id)
 }
  return (
    <form className={classes.form}>
       <Input label="Amount" input={{
        id:'amount',
        type: 'number',
        min: '1',
        max:'5',
        step: '1',
        defaultValue: '1'

       }}/>
       <button onClick={()=> onClickHandlel}>+ Add</button> 
    </form>
  )
}

export default MealItemForm