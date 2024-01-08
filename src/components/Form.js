import React from 'react'
import Buttons from './Buttons'

const Form = ({reqtype,setreqtype}) => {
  return (
     <form onSubmit={(e)=>e.preventDefault()}>
       <Buttons 
       buttontext="users"
       reqtype={reqtype}
       setreqtype={setreqtype}
       />
       <Buttons 
       buttontext="posts"
       reqtype={reqtype}
       setreqtype={setreqtype}
       />
       <Buttons 
       buttontext="comments"
       reqtype={reqtype}
       setreqtype={setreqtype}
       />
     </form>
  )
}
export default Form