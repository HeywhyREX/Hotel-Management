import React from 'react'

function RoomOne(props) {
  return (
    <div>
      <div style={{ backgroundImage: `${props.images}` }} className='RoomBg text-white h-72'>
        <div className='ml-10 md:ml-20 '>
          <div className='pt-10 text-xl font-bold '><h1>{props.Name}</h1></div>
          <div className=' pt-24 '>
            <h1 className='text-4xl font-bold flex flex-wrap'>{props.Parag}</h1>
            <p className='pt-3 font-semibold'>{props.ParagTwo}</p>
          </div>
        </div>
 </div>
      
    </div>
 

  )
}

export default RoomOne
