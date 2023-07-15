import React from 'react'
import { Loop } from './HeroTwo'
import Extract from './RoomRollExact'
function RoomRoll() {

  return (
    <div className='   lg:grid block grid-cols-12  mt-16 m-auto '>
      <div className=' md:grid col-span-7 w-10/12 m-auto'  >

         
          <div className='flex justify-between w-11/12 m-auto  items-center'>
            <div className=' font-semibold text-2xl'><h1>Featured Rooms</h1></div>
            <div className='flex items-center justify-between p-3'>
              <div><h1>See all</h1></div>
              <div className='ml-5'> <img src='./zeus.png' /></div>
            
             
            </div>
          </div>
                 


        <div className='w-11/12 md:w-full m-auto md:flex sm:justify-evenly justify-between items-center '>

          <div className='mt-10 justify-center'>
            <div className='relative '>
              <div className=''>
                <img src='./loneImage.png' />
              </div>
              
              <div className='absolute top-5 ml-48 text-white font-bold'>
                <h1 className='rounded-full'>5%</h1>
                <h2>Discount</h2>
              </div>
            </div>

            <div className=''>
              <div>
                <h1>Presidential Suite</h1>
                <h1>76,000 / Night</h1>
              </div>
              <div><img src='./star.png' /></div>
            </div>
                 </div>
          <div className='mt-10 '>
            {Loop.filter((item) => {
              return (item.id === '1')
            }).map((e) => {
              return (
                <div className={`mt-10 ${e.idTwo ? 'mt-5' : 'mt-auto'} `}>
              <Extract
                image={e.image}
                Title={e.title}
                Rating={e.rating}
                Price={e.price}
              /></div>)
            })
            }
          </div>
        </div>

      </div>
      <div className='col-span-5'>
        <div className='flex justify-between items-center col-span-2 w-9/12 m-auto'>
          <h1 className=' font-semibold text-2xl'>
            Top picks
          </h1>
          <div className='flex items-center justify-between'>
            <div><h1>See all</h1></div>
            <div className='p-3'> <img src='./zeus.png' /></div>
            
           
          </div>
        </div>
        <div className={`md:grid flex-col m-auto mt-10 grid-cols-2 w-10/12 `}>
          {Loop.filter((item) => {
            return (item.id === '2')
          }).map((e) => {
            return (
              <div className={` ${e.idTwo ? 'mt-5' : ''}   flex justify-center `}>
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

    </div>
  )
}

export default RoomRoll
