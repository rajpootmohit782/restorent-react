import React,{Fragment,useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHndler =() =>{
      setCartIsShown(true)
    }

    const hideCardHandler = () =>{
      setCartIsShown(false)
    }
  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart = {showCartHndler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
