import React, { useEffect, useState } from "react";
import OrderCartTwo from "./OrderCartTwo.css";



function OrderCart() {
    const [isInCart, setIsInCart] = useState(false);
   
    function handleClick() {
     setIsInCart((isInCart) => !isInCart);
    }
  
    // const dogItems = items.map(dog => <RenderDogBar allTheDogs={dog} key={dog.id} handleClick={handleClick} />)

  return (
    <div>
    <header className="container">
      <br/>
      <h1>Shopping Cart</h1>
      <span className="count"> Items In Cart:0</span>
      <br/>
      <span className="count"> Total Price:0</span>
    </header>
    <div className="App">
    <li className={isInCart ? "in-cart" : " "}>
      <span></span>
      <span className="image"></span>
     <button onClick={handleClick} className="card__btn">{isInCart ? "in-cart" : "Add to Cart"}</button> 
     <div className="checkout">
         <button type="button">Check Out</button>
       </div>
     
    </li>
    </div>
    </div>



  );
}

export default OrderCart;






