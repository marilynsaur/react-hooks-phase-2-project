import React, { useEffect, useState } from "react";

function OrderCart({OnePie}) {
    const [isInCart, setIsInCart] = useState(false);
   
    function handleClick() {
     setIsInCart((isInCart) => !isInCart);
    }
  
    // const dogItems = items.map(dog => <RenderDogBar allTheDogs={dog} key={dog.id} handleClick={handleClick} />)

  return (
    <li className={isInCart ? "in-cart" : " "}>
      <span>{OnePie.name}</span>
      <span className="image">{OnePie.image}</span>
     <button onClick={handleClick} className="add">{isInCart ? "in-cart" : "Add to Cart"}</button> 
      <li >
      </li> 
    </li>
  );
}

export default OrderCart;

