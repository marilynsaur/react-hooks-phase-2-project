import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PieMenu from "./PieMenu";
import Login from "./Login";
import NavBar from "./NavBar";
import OrderCart from "./OrderCart";
import CustomOrder from "./CustomOrder";
import { CartProvider } from "./CartContext";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);


  
  useEffect(() => {
    fetch("http://localhost:3000/pies")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);
   


   function handleFormSubmit(newItems){
    setItems([...items,newItems])
   }
 console.log(items)
  return (
    <div>
      <CartProvider>
      <NavBar />
      <Switch>
        <Route exact path="/PieMenu">
          <PieMenu items ={items} />
        </Route>
        <Route exact path="/CustomOrder">
          <CustomOrder items ={items} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/OrderCart">
          <OrderCart items ={items} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </CartProvider>
    </div>
  );
}

export default App;






