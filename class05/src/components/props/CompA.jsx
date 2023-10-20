import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
  // let myNewTitle = props.titleProp
  const {titleProp} =  props

  return (
    <>
      <h1>I AM COMP A FILE {titleProp}</h1>
      <CompB titleProp={titleProp} />
    
    </>
  )
}

export default CompA