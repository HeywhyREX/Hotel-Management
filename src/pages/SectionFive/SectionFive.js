import React from 'react'

function SectionFive() {
  return (
    <div className=' mt-28 bg-slate-900 h-full text-white text-center md:text-justify'>
          <div className='block md:flex justify-evenly pt-12 md:pt-16 w-10/12   md:w-full m-auto'>
              <div><h1 className='text-xl  w-fit m-auto border-white p-10 rounded-full border-8 text-center'>HM</h1></div>
              <div>
                  <h1 className='text-xl mt-5 md:mt-auto'>Address</h1>
                  <p> 321, Grove Palm Road, by Castle Royale
                      Estate Abu Dhabi, Dubai</p>
                  <h1 className='text-xl mt-5'>
                      Tel
                  </h1>
                  <p>
                      +01 736 3482, +01 232 8263
                  </p>
                  <h1 className='text-xl mt-5'>Email</h1>
                  <p>reservations@hotelmadison.com</p>
                  <div className='flex justify-between w-32 mt-10 pb-10 md:pb-20 m-auto md:ml-0'>
                      <img src='./045-facebook.png' />
                      <img src='./034-instagram.png' />
                      <img src='./013-twitter-1.png' />
                  </div>
              </div>
              <div className='pb-10 md:pb-0'>
                  <h1 className='text-xl'>Subscribe to our newsletter</h1>
                  <div className=' bg-gray-700 rounded-md'>
                      <div className='flex items-center mt-5  md:w-96'>
                          <input className='bg-transparent p-3 flex-1'
                              value='your email'
                          />
                          <img src='./arrowOne.png' className='m-3' />
                      </div>

                  </div>
        </div>
         


          </div>
      </div>
  )
}

export default SectionFive
