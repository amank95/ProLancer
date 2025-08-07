import React from 'react'
import {Link} from 'react-router-dom'


const catCard = ({item}) => {
  return (
    
    <Link to= {`/gigs?cat=${item.cat}`}>
      {/* catCard */}
    <div className='w-[252px] h-[344px] text-white border rounded-tl-md cursor-pointer relative'>
      {/* container */}
      <img className='w-[100%] h-[100%] object-cover ' src={item.coverImg} alt='' />
      {/* desc */}
      <span className='font-light absolute top-[15px] left-[15px]'>{item.shortDesc}</span>
      {/* title */}
      <span className='font-medium text-2xl absolute left-[15px] top-[48px]'>{item.title}</span>
    </div>
    </Link>
  )
}

export default catCard