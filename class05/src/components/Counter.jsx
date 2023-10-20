import React,{useState} from "react";
import "./Counter.css";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import {BiReset} from "react-icons/bi"

const Counter = ()=>{
    let [counter,setCounter] = useState(0);

    // increment
    const incrementHandler = ()=>{
        setCounter(counter++)
    }
    // decrement
    const decrementHandler = ()=>{
        setCounter(counter-1)
    }

    // reset
    const resetHandler = ()=>{
        setCounter(5)
    }


    return <>
        <div className="container counter-sec">
            <div>
                <div className="screen">
                    <span>{counter}</span>
                </div>
                <div className="counter-btns">
                    <button onClick={incrementHandler}>
                        <AiOutlinePlus />
                    </button>
                    <button onClick={decrementHandler}>
                        <AiOutlineMinus  />
                    </button>

                    <button onClick={resetHandler}>
                        <BiReset />
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Counter