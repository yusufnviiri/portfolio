import React from 'react'
import astronount from "../../src/static/texture/astronount.jpg"
import { Link } from 'react-router-dom'

function Projects() {
  return (
<>
<h1 className='text-[4em] text-center my-14'>PROJECTS</h1>
<div className="flex w-2/3 m-auto flex-row gap-5 rounded bg-white text-stone-900 font-poppins border-[40px] border-lime-900">
  <img src={astronount}  alt='dsacco' className='w-1/2 rounded' />
  <div className='w-1/2 mx-7'>
    <h1 className='font-bold text-center mt-10 mb-3 text-[2em]'>DSACCO</h1>
    <p className='my-3'> D-SCACCO   is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p className='my-3'>Dsacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    

    <div className='flex flex-row justify-between w-[90%] my-5 '>
    <Link to="/" className='bg-blue-900 capitalize  rounded px-1 text-[0.9em] text-white font-bold'>Live Demo</Link>
    <Link to="/" className='bg-blue-900 capitalize  rounded px-1 text-[0.9em] text-white font-bold'>Source Code</Link> <Link to="/" className='bg-blue-900 capitalize  rounded px-1 text-[0.9em] text-white font-bold'>Video</Link>
    </div>
    <p>Written in <span>C#, MySQL database and Entity Framework Core as ORM</span></p>
     </div>
  

  </div>



</>
  )
}

export default Projects