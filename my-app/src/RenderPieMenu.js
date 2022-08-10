import React, { useEffect, useState } from "react";


function RenderPieMenu(OnePie) {

console.log(OnePie)

return (
<div >
    
         <div>
             <h1>Pie:</h1>
             <h2>{OnePie.name}</h2>
             <img src={OnePie.image} alt={OnePie.name}/>
             <button>Good Pie!</button> 
             </div> 
            
      </div>
      
);
}


export default RenderPieMenu;