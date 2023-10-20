import React,{useState} from "react";

const Form = () => {
    let [title,setTitle] = useState("Hello World");
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    // console.log(state)
    // let title = "Hello World"
    
    const showAlertHandler = ()=>{

        // console.log("i am calling")
        // title = "Hello React"
        // console.log(title)
        // alert(message)

        setTitle("Hello React")


    }

    // form submit function
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("form is submitted !")
        console.log(name)
        setName("")

    }

    return (
        <>
            <button onClick={showAlertHandler}>Click me !!</button>
            <h1>{title}</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="text">Enter Your Name:- </label>
                    <input value={name} type="text" placeholder="Enter Your Name" onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:- </label>
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div>
                    <label htmlFor="password">Password:- </label>
                    <input type="password" placeholder="Enter Your Password" />
                </div>
                <button>Submit</button>
            </form>
        </>

    )
}

export default Form