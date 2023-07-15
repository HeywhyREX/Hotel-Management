import React from 'react'
import root from '../data/root'
function Zavl() {
  return (
      <div className="work flex items-center ">
          {root.map((items) => {
            return (
          <div className="james relative pl-0 ml-0 text-xl">
             

                  <img src={items.image} alt={items.id} />
                      <div className='absolute overflow-hidden bottom-10 left-10'>
                      <div className="inset-0 "></div>
                      <div><img src={items.stars} /></div>
                      <h3 className="font-semibold text-white overflow-hidden text-sm">{items.name}</h3>
                      <h3 className="text-white text-sm">{items.price}</h3>
                  </div>

              </div>
          
          )
        })

            
        }
      
    </div>
  )
}

export default Zavl
