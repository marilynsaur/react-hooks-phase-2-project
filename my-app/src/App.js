import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PieMenu from "./PieMenu";
import Login from "./Login";
import NavBar from "./NavBar";
import OrderCart from "./OrderCart";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/pies")
      .then((r) => r.json())
      .then((items) => console.log(items));
  }, []);

  const pieItems = items.map(pie => <div allThePies={pie} key={pie.id}></div>)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/PieMenu">
          <PieMenu pieItems ={pieItems}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/OrderCart">
          <OrderCart pieItems ={pieItems}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;






