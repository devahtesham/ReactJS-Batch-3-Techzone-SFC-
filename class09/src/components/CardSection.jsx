import React, { useEffect, useState } from 'react'
import ProductCard from '../bootstrap/ProductCard'
import { CAR_INFO } from '../data'
import axios from 'axios'
import Loader from '../Loader/Loader'

const CardSection = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    console.log('products:- ', products)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = response.data;
            setIsLoading(false);
            setProducts([...data])
            
        } catch (error) {
            setIsLoading(false);
        }
    }
    return (
        <>
            {
                isLoading ? <Loader /> : (
                    <div className="container">
                        <div className="row mt-5">
                            {
                                products.map((product, index) => (
                                    <div className="col-3 mb-5" key={index}>
                                        <ProductCard product={product} />
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default CardSection