import React from 'react'
import  { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

const myGigs = () => {
  return (
    // myGigs
    <div className='flex justify-center'>
      <div className='w-[1400px] py-12 px-0'>
        {/* title */}
        <div className='flex justify-between items-center'>
        <h1>Gigs</h1>
        <Link to="/add">
              <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Add New Gig</button>
        </Link>
        </div>
        <table className='w-full'>
          <tr className=''>
            <th className='text-left'>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
              // image
                className="w-[50px] h-6 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td> Stunning concept art</td>
            <td>₹ 5999</td>
            <td>13</td>
            <td>
              <DeleteIcon sx={{color:'red',cursor:'pointer'}}/>
                          </td>
          </tr>
          {/* <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr> */}
        </table>
      </div>
      </div>
  )
}

export default myGigs