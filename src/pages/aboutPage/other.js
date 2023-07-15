import React from 'react'

function Other() {
  return (
    <div>
          <div className='md:flex-row flex-col flex items-center justify-around mt-10'>
              <div className='flex items-center mt-5'>
                  <div><h1>Sorted by:</h1></div>
                  <div className='flex items-center ml-3 bg-red-100 p-2 rounded-full '>
                      <div className=' text-red-500'>Top Rated</div>
                      <div className=' ml-32 mr-3'><img src='./zeus.png' /></div>
                  </div>
              </div>
              <div className='flex items-center mt-5'>
                  <h1>Price:</h1>
                  <div className='ml-5'><img src='./shape.png' /></div>
                  <div><img src='./Ellipse 2.png' /></div>
                  <div><img src='./lin.png' /></div>
                  <div className='ml-3 font-semibold'><h1>250k</h1></div>
              </div>
              <div className='flex items-center mt-5 '>
                  <div><img src='./Search.png' /></div>
                  <div>
                      <input
                          className='bg-transparent p-3 flex-1'
                          value='Search'

                      />
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Other
