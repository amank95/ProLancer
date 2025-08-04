import React from 'react'
import ManImg from '../../assets/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Featured = () => {
  return (
    //featured
    <div className='h-[600] pl-6 flex items-center justify-between bg-[#F8FAFC] gap-10'>
        {/* container */}
        <div className='flex w-[1400px] items-center'>
            {/* Left */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-5xl font-serif'>Connect with expert <span className='text-blue-700'>freelancers</span> to grow your business faster.</h1>
                {/* search */}
                <div className='flex items-center justify-between gap-4 border border-blue-500 bg-white p-3 rounded-lg shadow-md'>
                  {/* searchInput */}
                  <div className='flex items-center gap-2 border border-gray-300 p-1 rounded-lg w-full'> 
                    {/* <img src='' alt=''/> */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#74C0FC" }} />
                    <input className='border-none outline-none w-full' type='text' placeholder='Try "building mobile app"'/>

                  </div>
                  <button className='w-[80px] font-serif font-semibold hover:text-blue-500'>Search</button>   
                </div>
                {/* popular */}
                <div className='flex items-center gap-3 text-gray-600 font-serif'>
                  <span className='text-black'>Popular:</span>
                  <button className='border border-blue-500 p-2 rounded-lg hover:text-black'>Web Design</button>
                  <button className='border border-blue-500 p-2 rounded-lg hover:text-black'>Wordpress</button>
                  <button className='border border-blue-500 p-2 rounded-lg hover:text-black'>Logo Design</button>
                  <button className='border border-blue-500 p-2 rounded-lg hover:text-black'>AI Services</button>
                </div>
            </div>
            {/* Right */}
            <div className=' flex items-center justify-center'>
              <img className='w-full h-full object-cover block' src={ManImg} alt='' />
            </div>
            
        </div>
    </div>
  )
}

export default Featured