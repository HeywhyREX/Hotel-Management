import React from 'react'


function FinalCard({title,image}) {
  return (
    <div className=''>
      
          <div className="text-xl flex items-center justify-center mt-7 w-3/4 m-auto ">

              <div className="jut flex flex-col h-40 justify-around rounded-t-full w-28 text-center rounded-b-full  ">
                  <div className="flex justify-center "><img src={image}/></div>
                  <div><h3>{title}</h3></div>
              </div>
          </div>
    </div>
  )
}

export default FinalCard
