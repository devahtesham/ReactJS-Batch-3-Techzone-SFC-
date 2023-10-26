import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const headingRef = useRef();
    useEffect(()=>{
        console.log(headingRef.current.innerText)
    },[])
  return (
    <>
        <h1 ref={headingRef}>I AM USE REF HOOK HEADING</h1>
        <p>hello</p>
    </>
  )
}

export default UseRefHook