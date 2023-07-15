import React from 'react'

function SectionFour() {
  return (
    <div className='mt-10'>
      <div>
              <h1 className='text-3xl md:text-4xl font-bold text-center'>We Are Featured On</h1>
              <div className='flex justify-center mt-3'><img src='./lineup.png'/></div>
              <div className='mt-12 w-11/12 m-auto flex-col md:flex-row flex md:justify-evenly items-center'>
                  <div><img src='./lastLogo.png'/></div>
                  <div className='mt-5'><img src='./Forbes.png' /></div>
          <div className='mt-10'><img src='./Huffpost.png' /></div>
          <div className='mt-10'><img src='./Insider.png' /></div>
                </div>
      </div>
    </div>
  )
}

export default SectionFour
