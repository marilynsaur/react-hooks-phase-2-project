import React, { useEffect, useState } from "react";
import RenderPieMenu from "./RenderPieMenu";
import RenderPieMenutwo from "./RenderPieMenutwo.scss";


function PieMenu({items,handleClick}) {
  const pieItems = items.map(pie => <RenderPieMenu OnePie={pie}  key={pie.id} handleClick={handleClick} />)
    
 

  return (
    <>      
      
       <div className="wrapper"> 
 {pieItems}
</div>



</>
  )
    }
   
    
 

export default PieMenu;