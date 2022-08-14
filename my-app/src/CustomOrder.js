import React, { useEffect, useState } from "react";
import aboutheader from './aboutheader.png';


function CustomOrder({onAddItem}) {
  const [isInCart, setIsInCart] = useState(false);

  console.log(onAddItem)
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description:"",
    price:"",
    id:0,
    
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
     
    });
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const itemData = {
    "name":formData.name,
    "image":formData.image,
    "description":formData.description,
    "price":formData.price,
    };

    fetch("http://localhost:3000/pies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
    .then((r) => r.json())
    .then((newNewItem) => onAddItem(newNewItem));
  }


  function handleClick() {
    setIsInCart((isInCart) => !isInCart);
   
     console.log('yay')
   
    }

  return (

    <div>
 <header><img src={aboutheader} alt="aboutheader" /></header>
    <form  onSubmit={handleSubmit}>
    <label>
      name
      <input
       
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
       </label>
      
       <label>
       description
      <input
        type="text"
        id="description"
        value={formData.description}
        onChange={handleChange}
      />
      </label>
     
      <label>
      image
       <input
        type="text"
        id="image"
        value={formData.image}
        onChange={handleChange}
      />
       </label>
     
       <label>
        price
      <input
        type="text"
        id="price"
        value={formData.price}
        onChange={handleChange}
      />
       </label>
       <br/>
       <br/>
       <button type="submit">Add A Custom Pie!</button>
    </form>
    
   
    <div className="wrapper">
    <div className="card">
 <img src={formData.image} className="card__img"/>
 <div className="card__body">
 <div className="card__title">{formData.name}</div>
  <p className="card__description">{formData.description}</p>
  <h3 className="card__price">{formData.price}</h3>

<button onClick={handleClick} className="card__btn">{isInCart ? "in-cart" : "Add to Cart"}</button> 
</div>
</div>
</div>
</div>
 
 
  )}
export default CustomOrder;