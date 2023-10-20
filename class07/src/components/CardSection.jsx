import React from 'react'
import ProductCard from '../bootstrap/ProductCard'
import { CAR_INFO } from '../data'

const CardSection = () => {
  return (
    <>
        <div className="container">
            <div className="row mt-5">
                {
                    CAR_INFO.map((car,index)=>(
                        <div className="col-3" key={index}>
                            <ProductCard car={car} />
                        </div>

                    ))
                }
            </div>
        </div>
    </>
  )
}

export default CardSection