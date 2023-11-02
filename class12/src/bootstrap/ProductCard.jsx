import React, { useState } from 'react'


const ProductCard = (props) => {
    const {category,description,price,image} = props.product;

    
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top w-100" alt="..." style={{height:'270px',padding:10}} />
                <div className="card-body mt-4">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text">{description}</p>
                    <p className=''>Price: <span className='fw-bold'>RS {price}</span></p>
                    <button className="btn btn-primary" onClick={props.onBtnClick}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard

