import React from 'react'


const ProductCard = (props) => {
    const {img,title,description,price,btnUrl} = props.car
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body mt-4">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className=''>Price: <span className='fw-bold'>RS {price}</span></p>
                    <a href={btnUrl} className="btn btn-primary">More Detail</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard

