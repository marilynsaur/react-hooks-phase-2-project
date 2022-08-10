import React, { useEffect, useState } from "react";

function PieMenu({items}) {
  const pieItems = items.map(pie => <RenderPieMenu allThePies={pie} key={pie.id} />)
    
  return (
    <>
        
        
    {/* <div className="App"> */}


    <div  >    
{pieItems}

</div>


</>
  )
    }
   
    
 

export default PieMenu;