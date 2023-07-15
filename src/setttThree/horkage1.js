import React from 'react'
import Boxes from './Boxes'

function HorkageOne(props) {
  return (
    <div id='taliban' className='text-gray-600 font-mono'>
      <div className='bg-blue-500 w-6 h-8'></div>
      <div className='wrapNav '>
        <div>
          <h2 className='p-5' border>FOOD NINJA</h2>
        </div>
        <div>
          <nav>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </nav>
        </div>
       
      </div>
      <div className='py-16  px-5 border border-gray-700 flex justify-between'>
        <div className='topNav'>
          <div><h3>Log in</h3></div>
          <div><h3>Sign up</h3></div>
        </div>
        <div>
          <h2 className='text-gray-900 text-6xl font-semibold'>RECIPES</h2>
          <h3>For Ninjas</h3>
          <h4 className='font-bold'>Latest Recipes</h4>
        </div>
        <div className='images'></div>
</div>
<div></div>

    </div>
  )
}

export default HorkageOne
