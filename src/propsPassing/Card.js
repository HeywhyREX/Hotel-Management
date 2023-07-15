import React from 'react'
import { DataPassed } from '../data/SectionOnedata'
import FinalCard from '../MainPassed/FinalCard'

function Card() {
    return(
        <div className='flex'>
        {
                DataPassed.map((e) => {
                    return(
                        <FinalCard
                            title={e.title}
                            image={e.images}/>
                    )
                  })
        }
        </div> )
}
export default Card
