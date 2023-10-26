import React, { useEffect, useState } from 'react'
import ProductCard from '../bootstrap/ProductCard'
import { CAR_INFO } from '../data'
import axios from 'axios'

const CardSection = () => {
    const [products,setProducts] = useState([]);
    console.log('products:- ',products)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProducts([...data])
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {
                        products.map((product, index) => (
                            <div className="col-3" key={index}>
                                <ProductCard product={product} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardSection