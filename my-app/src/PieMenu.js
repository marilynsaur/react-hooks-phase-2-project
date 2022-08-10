import React, { useEffect, useState } from "react";
import RenderPieMenu from "./RenderPieMenu";

function PieMenu({items}) {
  const pieItems = items.map(pie => <RenderPieMenu OnePie={pie}  key={pie.id} />)
    
  return (
    <>      
       
{pieItems}



</>
  )
    }
   
    
 

export default PieMenu;