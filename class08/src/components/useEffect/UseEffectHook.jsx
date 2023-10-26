import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    console.log("i am comp")
    const [toggle, setToggle] = useState(false)
    const [cartProducts, setCartProducts] = useState(false)
    // 1st case
    // useEffect(()=>{
    //   console.log("i am changing")
    // })

    const addToCartHandler = () => {
        setCartProducts(!cartProducts)
    }

    // 2st case
    useEffect(() => {

        console.log("All Product Listing API Hits")
    }, [])

    // case 3
    useEffect(() => {
        console.log("Add to Cart Product API HIts")
    }, [cartProducts])
    return (
        <>
            <h1>Learning useEffect Hook</h1>
            <button onClick={() => {
                setToggle(!toggle)
            }}>Click</button>
            <div>
                <h6>Product 1</h6>
                <button onClick={addToCartHandler}>
                    Add to Cart
                </button>

            </div>
            <div>
                <h6>Product 2</h6>
                <button onClick={addToCartHandler}>
                    Add to Cart
                </button>

            </div>
        </>
    )
}

export default UseEffectHook