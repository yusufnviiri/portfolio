import React from 'react'

function Projects() {
  return (
<>
<section className='w-full m-auto px-11 text-[1.2em]'>
  <h1 className=' font-poppins font-extrabold text-black text-center text-[2em] '>D-SCHOOL</h1>
  <p><span className='font-bold '> D-school </span> is a web-based school management system designed to replace manual labour-intensive activities perfomed in a school </p>
  <h2 className='w-full  pt-4 font-bold '>Why you  need D-SCHOOL</h2>
  <ul className='ml-16 list-disc'>
    <li className=''>Improved Employee/Staff performance since activities are automated</li>
    <li>Uninterupted flows of information across  thanks to the Notice Board on D-SCHOOL </li>
    <li>Unprejudiced student grading system maintaining a fair academic competition among students</li>
    <li>Seamless  Expenditure control mechanism due to the Pay Tracker module which ships with D-SCHOOL </li>
    <li>A safe data storage mechanism  </li>
    <li>Provides upto-date financial health of the organisation.</li>   

  </ul>
        
<h3 className='ml-8 mt-2 underline text-stone-800 font-semibold'>Module Shipped with D-SCHOOL</h3>
<p className='font-bold mt-4'>1. STUDENTS MODULE</p>
<ul className='ml-16 list-disc'>
<li className='list-none'>This Module has the following sub-modules</li>
<li>Student Registration</li>
<li>School Fees payment and reciept issuing</li>
<li>Record for special payments by students like Medical Fees, School Requirements</li>
<li>Automatic academic grading  for students </li>
<li>Semester report generation for students</li>
<li>Captures all Student data like  information about Guardian</li>
</ul>
<p className='font-bold mt-4'>2. STAFF MODULE</p>
<ul className='ml-16 list-disc'>

<li>The staff module incoperates the following</li>
<li>Staff Registration and Onboarding  </li>
<li>Payroll and arrears calculation</li>
</ul>
<p className='font-bold mt-4'>3. LIBRARY MODULE</p>
<ul className='ml-16 list-disc'>
<li>Digital Library where books are stored and can be accessed</li>
<li>Tracker for Library assets usage </li>
<li>Captures all details about a library asset</li>
</ul>
<p className='font-bold mt-4'>4. ASSETS MODULE</p>
<ul className='ml-16 list-disc'>
<li>Asset Registration</li>
<li>Asset tracker including :- borrowing, depreciation, value appreciation and  information about supplier</li> 
</ul>
<p className='font-bold mt-4 uppercase'>5. Income and Expenditure Tracker</p>
    </section></>
  )
}

export default Projects