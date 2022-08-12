import React, { useEffect, useState } from "react";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";


function RenderPieMenu({OnePie}) {



return (


<div className="card">

 <img src={OnePie.image} className="card__img"/>
 <div className="card__body">
 <div className="card__title">{OnePie.name}</div>
  <p className="card__description">{OnePie.description}</p>
  <h3 className="card__price">{OnePie.price}</h3>
<button className="card__btn">Add to Cart</button>
</div>
</div>



   

      
);
}


export default RenderPieMenu;

