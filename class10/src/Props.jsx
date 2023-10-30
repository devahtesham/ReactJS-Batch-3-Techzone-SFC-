import React, { useState } from 'react'
import CompA from './components/props/CompA'

const Props = () => {
    let [title,setTitle] = useState("Learning Props");
    // console.log(title)
  return (
    <>
        <h1>I AM PROPS FILE {title}</h1>
        <CompA titleProp={title} />
    </>
  )
}

export default Props