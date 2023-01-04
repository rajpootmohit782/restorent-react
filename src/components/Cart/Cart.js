import React from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model'
const Cart = (props) => {
  
    const cartItems = <ul className={classes['cart-items']}>{ [{id: 'c1', name:'sushi', amount: 2, price: 12.99 },
].map((item) => (<li>{item.name}</li>)) }</ul>

console.log(cartItems)
  return (
    <Model onClose={props.onClose}>
        {cartItems}
        <div>
         <span>Total Amount</span>
         <span>35.06</span>
        </div>
        <div className={classes.actions}> 
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
        <button className={classes.button}>Order</button>
        </div>

    </Model>
  )
}

export default Cart