import React from 'react'
import { Link } from "react-router-dom";
const message = () => {
  return (
 <div className=" flex justify-center">
      <div className="w-[1200px] m-12">
        <span className="font-light text-xs text-gray-600">
          <Link to="/messages">Messages</Link> > John Doe >
        </span>
        <div className="my-7 mx-0 p-12 flex flex-col gap-5 h-[500px] overflow-y-scroll">
          <div className="flex gap-5 max-w-[600px] text-lg">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-gray-300 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[0px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* item owner */}
          <div className="flex gap-5 max-w-[600px] text-lg flex-row-reverse self-end">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-blue-300 text-white rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
                    <div className="flex gap-5 max-w-[600px] text-lg">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-gray-300 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[0px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* item owner */}
          <div className="flex gap-5 max-w-[600px] text-lg flex-row-reverse self-end">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-blue-300 text-white rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
                    <div className="flex gap-5 max-w-[600px] text-lg">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-gray-300 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[0px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* item owner */}
          <div className="flex gap-5 max-w-[600px] text-lg flex-row-reverse self-end">
            <img className='w-10 h-10 rounded-full object-cover'
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className='p-5 bg-blue-300 text-white rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div> 
        <hr />
        {/* write */}
        <div className="flex items-center justify-center">
          <textarea className="w-[80%] h-24 p-2 " type="text" placeholder="write a message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default message