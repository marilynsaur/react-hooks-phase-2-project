import React, { useEffect, useState } from "react";



function RenderPieMenu({OnePie}) {

const pieStyle = {
        
height: "300px",
width: "500px",
              
};


const menu = {
        display: "grid",
        position: "absolute",
        flexDirection: "column",
        backgroundColor: "var(--color-bg-secondary)",
        borderRadius: "10px",
        boxShadow: "0 10px 20px rgba(64, 64, 64, 0.15)",
        top: "10",
        left: "10",
        width: "600px",
        height: "400px",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "100px",
      
};


const title = {
        fontFamily:  "sans-serif",
        fontSize: "30px",
}

console.log('individual pie', OnePie)

return (
<div >

<div >
<div  >
 <h1 >{OnePie.name}</h1>
 <img src={OnePie.image} style={pieStyle}/>
  <p></p>
  <p></p>
<button className="button-17" role="button">Button </button>
</div>
</div>
</div> 


   

      
);
}


export default RenderPieMenu;

