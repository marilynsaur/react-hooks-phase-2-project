import React, { useEffect, useState } from "react";


function RenderPieMenu({OnePie}) {

console.log('individual pie', OnePie)

return (
<div className="card">
        <h2 className="title">{OnePie.name}</h2>
        <img src={OnePie.image} className="photo" />

         </div>
        
      
);
}


export default RenderPieMenu;

