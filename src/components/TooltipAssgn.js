import React from 'react';


//assign props to tooltip value . This is a custom text tooltip.

const TooltipMe = ({props}) => {return (<div>    
  {(props === 'top' &&
      <div id="tooltiptop"> {props} ToolTip Successfully Selected..</div>   
  )}

  {(props === 'right' &&
     <div id="tooltipdown"> {props} ToolTip Successfully Selected..</div>      
  )}

{(props === 'bottom' &&
     <div id="tooltipdown"> {props} ToolTip Successfully Selected..</div>      
)}

{(props === 'left' &&
     <div id="tooltipdown"> {props} ToolTip Successfully Selected..</div>      
)}

   </div>
);}


export default TooltipMe;