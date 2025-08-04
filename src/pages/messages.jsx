import React from 'react'
import { Link } from 'react-router-dom';

const messages = () => {
      const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const message ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, adipisci labore qui sequi distinctio reprehenderit omnis ratione asperiores repellendus pariatur, dolores recusandae tempora assumenda eligendi sint ad illo exercitationem! Reprehenderit?'
  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-12 px-0'>
        {/* title */}
        <div className='flex justify-between items-center'>
        <h1>Messages</h1>
        {/* <Link to="/add">
              <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Add New Gig</button>
        </Link> */}
        </div>
        <table className='w-full'>
          <tr className='h-24'>
            <th className='text-left'>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='h-24'>
            <td className='font-medium'>
              John Doe
            </td>
            <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
   
            <td>
           <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-24'>
            <td className='font-medium'>
              John Doe
            </td>
            <td><Link to='/message/123'>{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
   
            {/* <td>
           <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Mark as Read</button>
            </td> */}
          </tr>

        </table>
      </div>
      </div>
  )
}

export default messages