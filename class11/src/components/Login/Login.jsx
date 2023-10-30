import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (e)=>{
        e.preventDefault()
        let email = emailRef.current.value
        let password = passwordRef.current.value
        if (!email || !password){
            alert("Required Fields are missing !")
            return
        }
        console.log("form submiteed ");
        // sending login status to local storage
        localStorage.setItem("isUserLogin",true)
        navigate("/home")
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-7 shadow-lg rounded-4">
                    <form className='p-2 pb-3' onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login