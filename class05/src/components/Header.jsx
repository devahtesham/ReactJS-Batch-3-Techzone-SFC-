import React from "react"
import Banner from "./Banner"

const Header = () => {
    return (
        <>
            <div className="heading">I AM HEADER COMP</div>
            <h1 style={{
                color:"red",
                backgroundColor:'black',
                padding:10
            }}>HEADER HEADING</h1>
            <Banner />
        </>
    )
}

// export {Header}

export default Header

/*
    export:-
    1- normal/object form export
    2- default export 
*/