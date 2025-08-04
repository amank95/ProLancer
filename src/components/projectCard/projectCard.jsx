import React from 'react'
import {Link} from 'react-router-dom'


const projectCard = ({item}) => {
  return (
    
    <Link to='/'>
      {/* projectCard */}
    <div className='w-[300px] h-[300px] border rounded-xl cursor-pointer hover:shadow-blue-500 hover:shadow-lg overflow-hidden'>
      {/*   */}
      <img className='w-[100%] h-[70%] object-cover ' src={item.img} alt='' />
      {/* info */}
      <div className='flex items-center gap-5 p-4'>
        <img className='w-10 h-10 border rounded-full object-cover 'src={item.pp} alt="" />
        {/* tests */}
        <div className='' >
          <h2 className='text-sm font-medium'>{item.cat}</h2>
          <span className='text-sm'>{item.username}</span>
        </div>
      </div>
     </div>
    </Link>
  )
}

export default projectCard;