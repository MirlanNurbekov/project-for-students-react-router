import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonsPage() {

  let navigate = useNavigate();

  return (
    <div className="page-content">
      <h1>This is button page</h1>
       <button onClick={()=> 
      {
        navigate("/about");
      }}>
      GO TO ABOUT
    </button>
    <button onClick={()=> 
      {
        navigate("/about");
      }}>
      GO TO ABOUT
    </button>
    <button onClick={()=> 
      {
        navigate("/users");
      }}>
      GO SEE USERS LIST
    </button>
    </div>

   
  )
}

export default ButtonsPage