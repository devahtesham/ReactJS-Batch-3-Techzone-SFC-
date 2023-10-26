import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import "./Header.css"
const Header = () => {
  return (
    <>
        <div className="container-fluid bg-dark text-white py-2">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-3">
                        <h1 className='m-0'>LOGO</h1>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled d-flex align-items-center gap-5 m-0'>
                            <li>Home</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <div className='shopping-cart'>
                            <FaShoppingCart size={30} />
                            <span>10</span> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Header