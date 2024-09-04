import React from 'react'
import astronount from "../../src/static/texture/astronount.jpg"
import { Link } from 'react-router-dom'

function Projects() {
  return (
<>
<h1 className='lg:text-[4em] text-[2em] pt-4 text-center lg:my-14 my-5'>PROJECTS</h1>
<div className="text-[1.2em]   lg:h-[75vh] flex flex-col lg:flex-row  sm:w-[90%] lg:w-[55em] xl:w-[65em] m-auto  gap-16 px-10  rounded-[1em] bg-white  text-stone-900 font-poppins lg:border-[2px] border-[15px] border-emerald-900">
  <div className='lg:w-1/2 lg:flex flex-col justify-around lg:pl-16'>
  <h1 className='font-bold text-left my-10  lg:text-[3em] text-[2em]'><span className='underline underline-offset-[0.5em]'>D-SAC</span>CO</h1>
  <img src={astronount}  alt='dsacco' className='m-auto w-[90%] lg:h-[60%] h-[30em]  rounded' />
  </div>

  <div className='lg:w-1/2 lg:flex flex-col  lg:pt-20 pb-34'>

    <p className='my-3'>Micro-finance co-operatives are a major building block to a country's economy. They serve to extend financial services to low income individuals.  
     <span className='block'>Such services include :- Loans, Savings, Profit Sharing, Financial literacy .....etc.</span></p>
    <p className='my-3'> D-sacco    is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p className='my-3'>D-sacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. <br/> Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    

    <div className='flex flex-row   my-10 lg:mt-16  '>
    <Link to="/dsacco" className='bg-blue-900 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>Details</Link>
    <Link to="/" className='bg-blue-900 mr-5 capitalize  rounded text-[0.9em] text-white font-bold px-3 py-2 text-center'> Code</Link> <Link to="/" className='bg-blue-900 capitalize  px-3 py-2 text-center rounded  text-[0.9em] mr-5 text-white font-bold'>Video</Link>
    <Link to="/" className='bg-blue-900  capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>Live Demo</Link>
    </div>
    <p  className='bg-green-950 p-3 mt-4 text-yellow-500  text-[0.7em] w-2/3 sm:w-full xl:w-2/3 text-center m-autotext-center'><span className='block uppercase font-bold text-yellow-300 text-[1.19em] '>languanges and frameworks </span> C#, MySQL and Entity Framework Core </p>
     </div>
  

  </div>



</>
  )
}

export default Projects