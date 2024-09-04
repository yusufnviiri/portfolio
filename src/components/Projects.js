import React from 'react'
import astronount from "../../src/static/texture/astronount.jpg"
import { Link } from 'react-router-dom'

function Projects() {
  return (
<>
<h1 className='lg:text-[4em] text-[2em] pt-4 text-center lg:my-14 my-5'>PROJECTS</h1>
<div className="2xl:text-[1.2em]  text-[0.89em] lg:mb-24 mb-10    flex flex-col lg:flex-row  sm:w-[90%] lg:w-[55em] 2xl:w-[65em] m-auto  gap-16 px-10  rounded-[1em] bg-white  text-stone-900 font-poppins lg:border-[2px] border-[15px] border-emerald-900">
  <div className='lg:w-1/2 lg:flex flex-col justify-around lg:pl-16'>
  <h1 className='font-bold text-left my-10  lg:text-[3em] text-[2em]'><span className='underline underline-offset-[0.5em]'>D-SAC</span>CO</h1>
  <img src={astronount}  alt='dsacco' className='m-auto w-[90%] lg:h-[60%] h-[30em]  rounded' />
  </div>

  <div className='lg:w-1/2 lg:flex flex-col  lg:pt-20 pb-34'>

    <p className='my-3'>Micro-finance co-operatives are a major building block to a country's economy. They serve to extend financial services to low income individuals.  
     <span className='block'>Such services include :- Loans, Savings, Profit Sharing, Financial literacy .....etc.</span></p>
    <p className='my-3'> D-sacco    is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p className='my-3'>D-sacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. <br/> Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    

    <div className='flex flex-row justify-between 2xl:w-[60%] w-[70%] lg:w-full    my-5 lg:text-[0.7em] 2xl:text-[0.98em]   '>
    <Link to="/dsacco" className='bg-blue-900  capitalize  rounded px-3 py-2 text-center  text-white font-bold'>Details</Link>
    <Link to="https://github.com/yusufnviiri/DsaccoAPP.git" className='bg-blue-900  capitalize  rounded  text-white font-bold px-3 py-2 text-center'> Code Back-End</Link> <Link to="https://www.loom.com/share/6aeb704e275a4ba38f6db027fc048a54?sid=99bd13f7-99ef-4806-9197-97735ba412fc" className='bg-blue-900 capitalize  px-3 py-2 text-center rounded    text-white font-bold'>Video</Link>
    <Link to="https://github.com/yusufnviiri/dsaccofront.git" className='bg-blue-900  capitalize  rounded px-3 py-2 text-center w-fit text-white font-bold'>Code Front-End</Link>
    </div>
    <p  className='bg-green-950 p-3 mt-4 text-yellow-500  text-[0.7em] w-2/3 sm:w-full xl:w-2/3  m-auto text-center'><span className='block uppercase font-bold text-yellow-300 text-[1.19em] '>Languanges and Frameworks </span> C#, MySQL and Entity Framework Core and React </p>
     </div>
  

  </div>

  <div className="2xl:text-[1.2em] text-[0.89em] lg:mb-24 mb-10    flex flex-col lg:flex-row  sm:w-[90%] lg:w-[55em] 2xl:w-[65em] m-auto  gap-16 px-10  rounded-[1em] bg-white  text-stone-900 font-poppins lg:border-[2px] border-[15px] border-emerald-900">
  <div className='lg:w-1/2 lg:flex flex-col justify-around lg:pl-16'>
  <h1 className='font-bold text-left my-10  lg:text-[3em] text-[2em]'><span className='underline underline-offset-[0.5em]'>D-SCHO</span>OL</h1>
  <img src={astronount}  alt='dsacco' className='m-auto w-[90%] lg:h-[60%] h-[30em]  rounded' />
  </div>

  <div className='lg:w-1/2 lg:flex flex-col  lg:pt-20 pb-34'>

    <p className='my-3'>Micro-finance co-operatives are a major building block to a country's economy. They serve to extend financial services to low income individuals.  
     <span className='block'>Such services include :- Loans, Savings, Profit Sharing, Financial literacy .....etc.</span></p>
    <p className='my-3'> D-sacco    is an API solution for Micro-finance and saving co-operatives. The solution offers intuitive functionalities suited for a modern credit and savings association </p> 
    <p className='my-3'>D-sacco is cleverly tailored to solve all challenges encountered in Micro-Finance institutions. <br/> Designed with well tested functionalities like <span className='font-bold'>Accounts module, </span>  <span className='font-bold'>Saving module, </span><span className='font-bold'>Shares module </span><span className='font-bold'>Withdraw module  </span> and <span className='font-bold'>Deposits module  </span>    </p>
    

    <div className='flex flex-row    my-5 lg:text-[0.7em] 2xl:text-[0.98em]   '>    <Link to="/dsacco" className='bg-blue-900 mr-5 capitalize  rounded px-3 py-2 text-center  text-white font-bold'>Details</Link>
    <Link to="https://github.com/yusufnviiri/dschool.git" className='bg-blue-900 mr-5 capitalize  rounded  text-white font-bold px-3 py-2 text-center'> Code</Link>
     <Link to="https://www.loom.com/share/6aeb704e275a4ba38f6db027fc048a54?sid=99bd13f7-99ef-4806-9197-97735ba412fc" className='bg-blue-900 capitalize  px-3 py-2 text-center rounded  mr-5 text-white font-bold'>Video</Link>
    
    </div>
    <p  className='bg-green-950 p-3 mt-4 text-yellow-500  text-[0.7em] w-2/3 sm:w-full xl:w-2/3  m-auto text-center'><span className='block uppercase font-bold text-yellow-300 text-[1.19em] '>Languanges and Frameworks </span> C#, MySQL and Entity Framework Core and React </p>
     </div>
  

  </div>

</>
  )
}

export default Projects