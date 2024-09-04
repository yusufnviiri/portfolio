import React from "react"
import { Link } from "react-router-dom";

 
function Menu(){
    return (
        <>  <div className=" pl-5 font-poppins bg-emerald-950 text-yellow-300 w-full sticky top-0 left-0 py-2 text-[0.83em]" > 
                <Link to='/' className="p-2   font-bold ">HOME</Link>        
        <Link to='/projects' className="p-3   font-bold ">PROJECTS</Link>
        <Link to='/about ' className="p-3  font-bold">ABOUT</Link>
        <Link to='/contact' className="p-3     font-bold">CONTACT</Link>







      </div>
        </>
    )
}

export default Menu