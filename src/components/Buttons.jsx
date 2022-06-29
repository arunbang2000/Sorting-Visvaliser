import React from 'react'
function Buttons(props){ 
 const nav={
     display:"inline-block"
 }
 var style={
      backgroundColor:props.color
 }

function check(){
      if(props.value===1)
      {
          props.changeit(1);
      }
      else if(props.value===2)
      {
          props.changeit(2);
      }
      else if(props.value===3)
      {
          props.changeit(3);
      }
      else{
          props.changeit(4);
      }
}

    return (
        <div style={nav} >
           <button onClick={check} style={style} className="algo-button" >{props.name}</button> 
        </div>
    )
}
export default Buttons;