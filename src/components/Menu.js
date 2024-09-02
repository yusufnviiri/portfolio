import React from "react"
import { Link } from "react-router-dom";

 
function Menu(){
    return (
        <>  <div className="bg-red-800 text-white w-full absolute top-0 left-0" > 
        
        <Link to='/projects' className="m-10">Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/dsacco' className="m-10">Dsacco</Link>






      </div>
        </>
    )
}

export default Menu