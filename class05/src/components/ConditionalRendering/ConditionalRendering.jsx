import React, { useState } from 'react'

const ConditionalRendering = () => {
  const [isUserOnline,setIsUserOnline] = useState(false)
  return (
    <>
      <button onClick={()=>{
        setIsUserOnline(!isUserOnline)
      }}>Click to {isUserOnline ? "Offline" : "Online"}</button>
      {
        !isUserOnline ? <h1>User is Offline</h1> : <h1>User is Online</h1>
      }

      {
        isUserOnline && <h1>Online</h1>
      }
      
      
    </>
  )
}

export default ConditionalRendering