import React from 'react'
import Extract from './RoomRollExact'
import { Loop } from './HeroTwo'
function Spin() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-10'>
              <h1 className=' font-bold text-2xl mb-3'>Available Rooms</h1>
              <img src='./lineup.png'/>
        </div>
          <div className='xl:grid flex flex-wrap items-center justify-evenly xl:grid-cols-3 w-full xl:w-11/12 m-auto mt-10'>
              {
                  Loop.filter((item) => {
                      return (item.id === '3')
                  }).map((e) => {
                      return (
                          <div className={`${e.idTwo?'md:mt-10':''} flex justify-center `}>
                              <Extract
                                  image={e.image}
                                  Title={e.title}
                                  Rating={e.rating}
                                  Price={e.price}
                              />
                          </div>
                      )
                  })
              }

        </div>
       
    </div>
  )
}

export default Spin
