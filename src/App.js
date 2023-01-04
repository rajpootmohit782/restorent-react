import React,{useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const cartState = [];
  console.log(cartState)

  const updateCartItems = (value) =>{
     console.log(value)
  }

  const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHndler =() =>{
      setCartIsShown(true)
    }

    const hideCardHandler = () =>{
      setCartIsShown(false)
    }
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart = {showCartHndler}/>
      <main>
        <Meals cartItem={updateCartItems}/>
      </main>
    </CartProvider>
  );
}

export default App;
