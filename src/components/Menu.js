import React from "react"
import { Link } from "react-router-dom";

 
function Menu(){
    return (
        <>  <div className="bg-red-800 text-white w-full sticky top-0 left-0 py-2" > 
                <Link to='/' className="p-5 text-xl font-sans font-bold ">HOME</Link>

        
        <Link to='/projects' className="p-5 text-xl font-sans font-bold ">PROJECTS</Link>
        <Link to='/about ' className="p-5 text-xl font-sans font-bold">ABOUT</Link>
        <Link to='/contact' className="p-5 text-xl font-sans font-bold">CONTACT</Link>







      </div>
        </>
    )
}

export default Menu