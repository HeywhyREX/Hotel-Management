import React from 'react'
import { Hero } from '../aboutPage/Hero'
import RoomOne from '../aboutPage/roomOne'
import ContactFirst from './contactFirst'
function ContactMain() {
  return (
    <div>
      <RoomOne
        Name={Hero[1].name}
        Parag={Hero[1].paragOne}
        ParagTwo={Hero[1].paragTwo}
        images={Hero[1].image}
      /> 
<ContactFirst />
    </div>
  )
}

export default ContactMain
