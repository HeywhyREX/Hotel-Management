import React from 'react'
import { Loop } from './HeroTwo'
function Extract(props) {
  return (
   
    <div>
      <div>
              <img src={props.image} className=' md:w-auto w-72'/>
      </div>
      <div>
        <div>
            <h1>{props.Title}</h1>
                  <h1>{props.Price}</h1>
        </div>
              <div>
                  <img src={props.Rating} />
              </div>
      </div>
    </div>
  )
}

export default Extract
