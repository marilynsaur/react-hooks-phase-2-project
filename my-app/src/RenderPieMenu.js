import React, { useEffect, useState, useContext  } from "react";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";
import {CartContext} from './CartContext';



function RenderPieMenu({OnePie}) {
  const [isInCart, setIsInCart] = useState(false);
  const [cart,setCart] = useContext(CartContext);
   
  function handleClick() {
  setIsInCart((isInCart) => !isInCart);
  const addPie = {name:OnePie.name, price:OnePie.price,image:OnePie.image,description:OnePie.description};
   console.log('i was clicked')
   setCart(curr =>[...curr,addPie]);
  }

return (
  
  
<div className="card">
 <img src={OnePie.image} className="card__img"/>
 <div className="card__body">
 <div className="card__title">{OnePie.name}</div>
  <p className="card__description">{OnePie.description}</p>
  <h3 className="card__price">{OnePie.price}</h3>

<button onClick={handleClick} className="card__btn">{isInCart ? "in-cart" : "Add to Cart"}</button> 
</div>
</div>




   

      
);
}


export default RenderPieMenu;

