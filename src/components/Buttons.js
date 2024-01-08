import React from 'react'

const Buttons = ({buttontext,reqtype,setreqtype}) => {
  return (
   <button
   className={(buttontext===reqtype)?'selected':null}
   onClick={()=>setreqtype(buttontext)}
   >{buttontext}</button>
  );
}

export default Buttons