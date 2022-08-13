import React, { useEffect, useState } from "react";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function RenderPieMenu({OnePie}) {
const [cart, setCart]= useState([]);
const  [page, setPage] = useState(PAGE_PRODUCTS);

const [products, setProducts] = useState({
  name:"",
  image:"",
  description:"",
  price:"",
  id:"",

});

const addToCart = (products) => {
  setCart([...cart,{...products}]);
  setProducts(OnePie);
};

const removeFromCart = (productToRemove) => {
  setCart(
    cart.filter((product)=>product !== productToRemove)
  )
};

const navigateTo = (nextPage) => {
  setPage(nextPage);
};

const renderProducts = () => (
  <>
  <h1>PIES</h1>
  <h3>{OnePie.name}</h3>
  <h4>{OnePie.price}</h4>
  <img src={OnePie.image}/>
  <button onCLick ={() => addToCart(products)}>Add to cart</button>
  </>
);

const renderCart = () => (
  <>
  <h1>PIES</h1>
  <h3>{OnePie.name}</h3>
  <h4>{OnePie.price}</h4>
  <img src={OnePie.image}/>
  <button onCLick ={() => removeFromCart(products)}>Remove</button>
  </>
)


return (
  <div>
     
<header>
  <button onClick = {() => navigateTo(PAGE_CART)}>
    go to cart ({cart.length})
  </button>
</header>

<header>
  <button onClick = {() => navigateTo(PAGE_PRODUCTS)}>
   view Products
  </button>
</header>
{page === PAGE_PRODUCTS && renderProducts()}
{page === PAGE_CART && renderCart()}

<div className="card">
 <img src={OnePie.image} className="card__img"/>
 <div className="card__body">
 <div className="card__title">{OnePie.name}</div>
  <p className="card__description">{OnePie.description}</p>
  <h3 className="card__price">{OnePie.price}</h3>
<button className="card__btn">Add to Cart</button>
</div>
</div>
</div>


   

      
);
}


export default RenderPieMenu;

