import React from 'react'
import { Data } from './DATA2/DataTwo'
import Section2one from './section2one'
function SectionTwo() {
  return (
    <div className=' mt-20'>
      <div><h1 className=' text-center text-2xl md:text-5xl font-bold'>A Home Away From Home</h1></div>
      <div className='flex justify-center mt-5 w-9/12 md:w-auto m-auto'><img src='./Line.png'/></div>
          {
            Data.map((e)=>{
            return(
              <Section2one
                title={e.title}
                body={e.body}
                image={e.image}
                change={e.change}
              />
            )
             
            })
        }
    </div>
  )
}

export default SectionTwo
