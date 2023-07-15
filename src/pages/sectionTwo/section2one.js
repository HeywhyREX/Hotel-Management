import React from 'react'

function Section2one({title,image,body,change}) {
  const xex =change?'':'flex-row-reverse'
  return (
    <div className={`block md:flex w-10/12 m-auto justify-between ${xex} mt-20`}>
      <div>
        <img className='w-10/12 m-auto' src={image}/></div>
      <div className=' md:w-5/12 m-auto mt-10'>
        <div className=' text-4xl font-bold'>{title}</div>
              <div className='mt-10 text-xl'>{body}</div>
      </div>
    </div>
  )
}

export default Section2one
