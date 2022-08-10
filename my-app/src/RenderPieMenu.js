import React, { useEffect, useState } from "react";



function RenderPieMenu({pieItems}) {

console.log(pieItems)

return (
<div >
         <div>
             <h1>DOGGO:</h1>
             <img src={pieItems.image} alt={pieItems.name} />
             <h2>{pieItems.name}</h2>
             <button>Good Dog!</button> 
             </div> 
      </div>
);
}

export default RenderPieMenu;