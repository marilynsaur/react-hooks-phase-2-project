import React, { useEffect, useState } from "react";
import RenderPieMenu from "./RenderPieMenu";


function PieMenu({items,handleClick}) {
  const pieItems = items.map(pie => <RenderPieMenu OnePie={pie}  key={pie.id} handleClick={handleClick} />)
    
  const menu = {
    display: "grid",
    position: "absolute",
    flexDirection: "column",
    backgroundColor: "var(--color-bg-secondary)",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(64, 64, 64, 0.15)",
    top: "40",
    left: "40",
    width: "600px",
    height: "400px",
   // gridTemplateColumns: "repeat(6, 1fr)",
    //gridTemplateRows: "100px",
  
};




  return (
    <>      
       <div>
       <div > 
{pieItems}
</div>
</div>


</>
  )
    }
   
    
 

export default PieMenu;