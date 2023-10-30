import React from 'react'
import Img from "../assets/img/img1.jpg"
import { useParams } from 'react-router-dom'
import { CAR_INFO } from '../data';

const CarWash = () => {

    let {id} = useParams();
    let filteredCarObj = CAR_INFO.filter((car,index)=>{
        return car.title === id
    })
    let [car] = filteredCarObj
    
    
  return (
    <>
        <div className="container mt-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-7 shadow-lg">
                    <img src={car.img} alt="" className='w-100' />
                </div>
                <div className="col-4">
                    <h1>{car.title}</h1>
                    <p className='m-0'>{car.description}</p>
                    <div>
                    <span className='fw-bolder'>Price: RS {car.price}</span>
                    </div>
                    <button className='btn btn-warning mt-3'>More Detail</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CarWash