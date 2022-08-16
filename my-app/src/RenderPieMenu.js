import React, { useEffect, useState, useContext  } from "react";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";
import {CartContext} from './CartContext';



function RenderPieMenu({OnePie,onDeleteItem}) {
  const [isInCart, setIsInCart] = useState(false);
  const [cart,setCart] = useContext(CartContext);
   
  function handleClick() {
    
  setIsInCart((isInCart) => !isInCart);
  const addPie = {name:OnePie.name, price:OnePie.price,image:OnePie.image,description:OnePie.description};
   console.log('i was clicked')
   setCart(curr =>[...curr,addPie]);
  }

  function handleDeleteClick(onDeleteItem) {
    console.log(onDeleteItem);
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/pies/${OnePie.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(OnePie));
  }

return (
  
  
<div className="card">
  
  <div>
<button className="card__btn" onClick={handleDeleteClick}>X</button>
</div>

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

