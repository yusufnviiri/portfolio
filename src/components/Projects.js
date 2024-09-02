import React from 'react'
import astronount from "../../src/static/texture/astronount.jpg"
import { Link } from 'react-router-dom'

function Projects() {
  return (
<>
<div className="flex w-2/3 m-auto flex-row gap-5 bg-white text-stone-900 font-poppins">
  <img src={astronount}  alt='dsacco' className='w-1/2 rounded' />
  <div className='w-1/2'>
    <h1 className='font-bold text-center mt-10 mb-3'>DSACCO</h1>
    <p> D-SCACCO   is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p>Dsacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    
    <p></p>
    <div className='flex flex-row '><Link>View Code</Link>     <Link className='bg-blue-900 capitalize  rounded px-1 font-[0.7em]'>View Code</Link>
    <Link>View Code</Link>
    <Link>View Code</Link></div>

     </div>
  

  </div>



</>
  )
}

export default Projects