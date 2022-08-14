import React, { useEffect, useState } from "react";


function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description:"",
    price:"",
    
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
      
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/pies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        id="description"
        value={formData.description}
        onChange={handleChange}
      />
       <input
        type="text"
        id="image"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        id="price"
        value={formData.price}
        onChange={handleChange}
      />
    </form>
  );
 
  }
export default CustomOrder;