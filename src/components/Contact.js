import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    <h1 className='lg:text-[4em] text-[2em] pt-4 text-center lg:my-14 my-5'>CONTACT ME</h1>

    <div className="text-[1.2em] py-11    flex-col  sm:w-[90%] lg:w-[55em]  m-auto  gap-16 px-10 rounded-[1em] bg-white  text-stone-900 font-poppins  ">
    <p className='my-3'> Hello!!! I am eagerly waiting to hear from you. Whether you have a question, a project proposal, or just want to say hi, feel free to reach out. Am always ready.
        </p>


        <div className='flex flex-row  lg:my-5  my-10  '>
    <Link to="/" className='bg-green-900 hover:bg-yellow-300 hover:text-slate-800 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>LinkedIn</Link>
    <Link to="/" className='bg-green-900 hover:bg-yellow-300 hover:text-slate-800 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>GitHub</Link>
    <Link to="/" className='bg-green-900 hover:bg-yellow-300 hover:text-slate-800 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>Email</Link>
    <Link to="/" className='bg-green-900 hover:bg-yellow-300 hover:text-slate-800 mr-5 capitalize  rounded px-3 py-2 text-center text-[0.9em] text-white font-bold'>WhatsApp</Link>
    </div>
        </div>
        </>
  )
}

export default Contact