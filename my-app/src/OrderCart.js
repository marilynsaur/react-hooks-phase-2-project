import React, { useEffect, useState } from "react";

function OrderCart({items}) {
    const [isInCart, setIsInCart] = useState(false);
   
    function handleClick() {
     setIsInCart((isInCart) => !isInCart);
    }
  
    // const dogItems = items.map(dog => <RenderDogBar allTheDogs={dog} key={dog.id} handleClick={handleClick} />)

  return <h1>order here</h1>;
}

export default OrderCart;

// (
//     <li className={isInCart ? "in-cart" : " "}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//      <button onClick={handleClick} className="add">{isInCart ? "in-cart" : "Add to Cart"}</button> 
//       <li >
//       </li> 
//     </li>
//   );