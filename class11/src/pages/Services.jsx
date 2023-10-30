import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <h1>Our Services</h1>
      <ul>
        {/* for nested routing */}
        <li className='bg-dark p-3'>
          <Link to={"/services/car-wash"}>Car Wash</Link>
        </li>
        <li className='bg-dark p-3'>
          <Link to={"/services/car-repair"}>Car Repair</Link>
        </li>
        {/* for dynamic routing*/}
      </ul>
    </>
  )
}

export default Services