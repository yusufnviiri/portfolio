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
    <li>Unprejudiced student grading system leading to fair academic competition among students</li>
    <li>Seamless  Expenditure control mechanism due to the Pay Tracker module which ships with D-SCHOOL </li>
    <li>A safe data storage mechanism  </li>
    <li>Provides upto-date financial health of the organisation.</li>   

  </ul>
        
<h3>Module Shipped with D-SCHOOL</h3>
<p>STUDENTS MODULE</p>
<ul>
<li>This Module has the following sub-modules</li>
<li>Student Registration</li>
<li>School Fees payment and reciept issuing</li>
<li>Record for special payments by students like Medical Fees, School Requirements</li>
<li>Automatic academic grading  for students </li>
<li>Semester report generation for students</li>
<li>Captures all Student data like  information about Guardian</li>
</ul>
<p>Staff Module</p>
<ul>
<li>The staff module incoperates the following</li>
<li>Staff Registration and Onboarding  </li>
<li>Payroll and arrears calculation</li>
</ul>
<p>Library MODULE</p>
<ul>
<li>Digital Library where books are stored and can be accessed</li>
<li>Tracker for Library assets usage </li>
<li>Captures all details about a library asset</li>
</ul>
<p>ASSETS MODULE</p>
<ul>
<li>Asset Registration</li>
<li>Asset tracker including :- borrowing, depreciation, value appreciation and  information about supplier</li>
 
</ul>
<p>Income and Expenditure Tracker</p>


    </section></>
  )
}

export default Projects