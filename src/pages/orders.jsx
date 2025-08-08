import React from 'react'
import { Link } from 'react-router-dom'
import MessageIcon from '@mui/icons-material/Message';
import { useQuery } from "@tanstack/react-query";
import API from '../api/api';
import { useNavigate } from 'react-router-dom';



const orders = () => {
const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
        API.get(`/orders`)
        .then((res) => {
          return res.data;
        })
  })
  console.log( "Orders in data",data)

  const handleContact = async(order) => {
    const sellerId = order.sellerId;
    const buyerId = currentUser._id;
    const id = currentUser.isSeller
  ? currentUser._id + sellerId
  : sellerId + currentUser._id;

    try {
       const res = await API.get(`/conversations/single/${id}`);
      navigate(`/messages/${res.data._id}`);
      
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // If conversation not found, create a new one
        const res =await API.post(`/conversations`, {
          to: currentUser.seller ? buyerId : sellerId,
          isSeller: false,
        });
        navigate(`/messages/${res.data._id}`);
      }
      
    }
   

  }

  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-12 px-0'>
        {/* title */}
        <div className='flex justify-between items-center'>
        <h1>Orders</h1>
        {/* <Link to="/add">
              <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Add New Gig</button>
        </Link> */}
        </div>
        <table className='w-full'>
           <thead>
          <tr className=''>
            <th className='text-left'>Image</th>
            <th>Title</th>
            <th>Price</th>
            {/* <th>Buyer</th> */}
            <th>Contact</th>
          
          </tr>
            </thead> 
           <tbody>
          { isLoading ? (<tr>
                <td colSpan={4} className="p-4 text-center">Loading...</td>
              </tr>
            )  : error ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-black">Not have Order yet</td>
              </tr>
            ) :
            data.map(order =>(
            <tr key={order._id} >
            <td>
              <img
              // image
                className="w-[50px] h-6 object-cover"
                src={order.img}
                alt=""
              />
            </td>
            <td>{order.title}</td>
            <td>₹ {order.price}</td>
            {/* <td>13</td> */}
            <td>
              <MessageIcon sx={{color:'blue',cursor:'pointer'}}
              onClick={()=>handleContact(order)}
              />
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
     
      </div>
  )
}

export default orders