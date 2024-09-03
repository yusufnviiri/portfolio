import React from 'react'
import astronount from "../../src/static/texture/astronount.jpg"
import { Link } from 'react-router-dom'

function Projects() {
  return (
<>
<h1 className='lg:text-[4em] text-[2em] pt-4 text-center lg:my-14 my-5'>PROJECTS</h1>
<div className="text-[1.2em]   lg:h-[80vh] flex flex-col-reverse lg:flex-row  sm:w-[90%] lg:w-[55em] xl:w-[65em] m-auto  gap-16 px-10 lg:rounded-[4em] rounded-[1em] bg-white  text-stone-900 font-poppins lg:border-[30px] border-[15px] border-emerald-900">
  <img src={astronount}  alt='dsacco' className='w-full h-[39em] lg:w-1/2 lg:h-[37em]   lg:m-auto mb-4 rounded' />
  <div className='lg:w-1/2 '>
    <h1 className='font-bold text-center mt-10 mb-3 text-[2em]'>D-SACCO</h1>

    <p className='my-3'>Micro-finance co-operatives are a major building block to a country's economy. They serve to extend financial services to low income individuals.  
     <span className='block'>Such services include :- Loans, Savings, Profit Sharing, Financial literacy .....etc.</span></p>
    <p className='my-3'> D-SCACCO   is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p className='my-3'>D-sacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. <br/> Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    

    <div className='flex flex-row  lg:my-5  my-10 '>
    <Link to="/" className='bg-blue-900 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>Live Demo</Link>
    <Link to="/" className='bg-blue-900 mr-5 capitalize  rounded text-[0.9em] text-white font-bold px-3 py-2 text-center'>Source Code</Link> <Link to="/" className='bg-blue-900 capitalize  px-3 py-2 text-center rounded  text-[0.9em] text-white font-bold'>Video</Link>
    </div>
    <p  className='bg-green-950 p-3 text-yellow-500  text-[0.7em] text-center'><span className='block uppercase font-bold text-yellow-300 text-[1.19em] '>languanges and frameworks </span> C#, MySQL database and Entity Framework Core </p>
     </div>
  

  </div>



</>
  )
}

export default Projects