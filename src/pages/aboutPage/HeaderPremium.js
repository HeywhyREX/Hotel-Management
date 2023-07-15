import React from 'react'
import RoomOne from './roomOne'
import { Hero } from './Hero'
function HeaderPremium() {
  return (
    <div>
          <RoomOne
              Name={Hero[0].name}
              Parag={Hero[0].paragOne}
              ParagTwo={Hero[0].paragTwo}
              images={Hero[0].image}
          />  
    </div>
  )
}

export default HeaderPremium
