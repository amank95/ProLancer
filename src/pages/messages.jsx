import React from 'react'
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import API from '../api/api';
import moment from 'moment';
import { m } from 'framer-motion';
const messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      API.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });
       const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => API.put(`/conversations${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead =(id) => {
 mutation.mutate(id);
  }
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

          {isLoading ? ( "Loading..." ) : error ? ( "No conversation started yet" ) : (
            data.map((c) => (  
                      <tr className={
              (currentUser.isSeller && !c.readBySeller ) || 
              ( !currentUser.isSeller && !c.readBySeller) && " h-24 active:bg-[#1dbf730f]" }
                       key={c.id}>
            <td className='font-medium'>
             {currentUser.isSeller ? c.buyerId : c.sellerId}
            </td>
            <td><Link to={`/message/${c.id}`}>{c?.lastMessage?.substring(0,100)}...</Link></td>
            <td>{moment(c.updatedAt).fromNow()}</td>
   
            <td>{
              (currentUser.isSeller && !c.readBySeller ) || 
              ( !currentUser.isSeller && !c.readBySeller) && 
          ( <button 
            className='bg-green-500 text-white font-medium p-2 cursor-pointer' 
            onClick={()=>handleRead(c.id)}
            >Mark as Read</button>)
           }
              
            </td>
          </tr>  
           )))}



        </table>
      </div>
      </div>
  )
}

export default messages