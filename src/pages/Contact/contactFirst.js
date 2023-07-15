import React from 'react'

function ContactFirst() {
  return (
    <div className='block md:grid grid-cols-2 mt-20'>
      <div className='w-10/12 m-auto relative'>
              <img src='./map.png' width='100%' className=''/>
              <div className='absolute top-10 left-32 sm:left-80'>
          <img src='./picureTag.png'/>
              </div>
      </div>
      <div>
        <div className='text-2xl font-semibold m-auto md:m-0 w-11/12 text-center mt-10 md:w-fit'>
                  <h1>Do you want more information or need to</h1>
                    <h1>make a booking, please fill the form below.</h1>
        </div>
              <div className='block md:grid grid-cols-2 grid-row-2 mt-10 w-9/12 md:w-11/12  '>
                 <div className='ml-10 md:ml-0'>
                    <h1>Full Name</h1>
                      <input className='text-xl font-semibold mt-3 pb-5  bg-transparent border-b-2 border-slate-400'  value='Your Name'/>
                 </div>
          <div className='md:mt-0 mt-10 ml-10 md:ml-0'>
                      <h1>Email</h1>
                      <input className='text-xl font-semibold mt-3 pb-5   bg-transparent border-b-2 border-slate-400' value='Your Email' />
                  </div>
          <div className='mt-10 ml-10 md:ml-0'>
                    <h1>Service</h1>
                      <select className='mt-3 text-xl p-3 w-4/5 rounded-xl pr-5 font-semibold'>
                          <option className='p-5'>Event Placement</option>
                         </select>
                  </div>
          <div className='mt-10 ml-10 md:ml-0'>
                      <h1>Phone Number</h1>
                      <input className='text-xl font-semibold mt-3 pb-5  bg-transparent border-b-2 border-slate-400' value='Your Phone Number' />
                  </div>
                 

        </div>
        <div className='mt-10 ml-10 md:ml-0'>
                  <h1>Message</h1>
                  <input value='Your Phone Message' className='text-xl w-5/6 pb-5 font-semibold mt-3 bg-transparent border-b-2 border-slate-400' />
              </div>
              <div className='w-5/6 bg-orange-500 p-5 rounded-lg m-auto md:ml-0  text-center mt-20  '>
                  <h1>Send Message</h1>
        </div>
      </div>
    </div>
  )
}

export default ContactFirst
