import React, { useEffect, useState, useContext } from "react";
import RenderPieMenu from "./RenderPieMenu";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";
import {CartContext} from './CartContext';



function PieMenu({items,handleUpdateItem,onDeleteItem}) {
 
    const [cart,setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc,curr) => acc + curr.price, 0)
  
  const pieItems = items.map(pie => <RenderPieMenu OnePie={pie}  key={pie.id} onDeleteItem={onDeleteItem} handleUpdateItem={handleUpdateItem} />)
  


 








  return (
    <>      
   
   <div>
    <header className="container">
    <br/>
      <h1 className="center" >Pie Menu</h1>
      <br/>
      <span className="count"> Items In Cart:{cart.length}</span>
      <br/>
      <span className="count"> Total Price:{totalPrice}</span>
  </header>


<div className="wrapper">
 {pieItems}
 </div>
 </div>


</>
  )
  }
   
    
 

export default PieMenu;