import React from 'react';


//assign props to tooltip value . This is a custom text tooltip.

const TooltipMe = ({props}) => {return (<div>    
  {(props === 'top' &&
      <div style={{"margin" : "0"}}> {props} ToolTip Successfully Selected..</div>   
  )}

  {(props === 'right' &&
     <div style={{"paddingLeft":"5rem"  }}> {props} ToolTip Successfully Selected..</div>      
  )}

{(props === 'bottom' &&
     <div style={{"paddingTop":"2rem"}}> {props} ToolTip Successfully Selected..</div>      
)}

{(props === 'left' &&
     <div style={{"margin":"0 0 0 -2rem"}}> {props} ToolTip Successfully Selected..</div>      
)}

   </div>
);}


export default TooltipMe;