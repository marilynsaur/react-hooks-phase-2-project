import React, { useEffect, useState } from "react";

function PieMenu(allThePies) {
    
  return (
    <div >
             <div>
                 <h1>DOGGO:</h1>
                 <img src={allThePies.image} alt={allThePies.name} />
                 <h2>{allThePies.name}</h2>
                 <button>Good Dog!</button> 
                 </div> 
          </div>
    );
    }
   
    
 

export default PieMenu;