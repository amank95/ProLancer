import React from 'react'
import  { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import API from '../api/api';
const myGigs = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const queryClient = useQueryClient();
      const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      API.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

    const mutation = useMutation({
    mutationFn: (id) => {
      return API.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const  handleDelete = (id) => {
    mutation.mutate(id);  
  }

  return (
    // myGigs
    <div className='flex justify-center'>
      <div className='w-[1400px] py-12 px-0'>
        {/* title */}
        <div className='flex justify-between items-center'>
        <h1>Gigs</h1>
        {currentUser.isSeller &&(
          <Link to="/add">
              <button className='bg-green-500 text-white font-medium p-2 cursor-pointer'>Add New Gig</button>
        </Link>
        )}
        </div>
        <table className='w-full'>
            <thead>
          <tr className=''>
          
            <th className='text-left'>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          { isLoading ? "Loading..." : error ? "Something went wrong" : data.map((gig) => (
            <tr key={gig._id}>
            <td>
              <img
              // image
                className="w-[50px] h-6 object-cover"
                src={gig.coverImg}
                alt=""
              />
            </td>
            <td>{gig.title}</td>
            <td>₹ {gig.price}</td>
            <td>{gig.sales}</td>
            <td>
              <DeleteIcon sx={{color:'red',cursor:'pointer'}} onClick={()=>handleDelete(gig._id)}/>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default myGigs