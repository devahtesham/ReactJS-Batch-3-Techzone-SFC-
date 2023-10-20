import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  const {titleProp} =  props
  return (
    <>
    <h1>I AM COMP B FILE {titleProp}</h1>
    <CompC titleProp={titleProp} />
    
    </>
  )
}

export default CompB