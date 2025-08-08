import React, { useState } from 'react'
import Featured from '../components/featured/Featured'
import Slide from '../components/slide/Slide'

import {projects} from '../data'
import CatCard from '../components/catCard/catCard'
import ProjectCard from '../components/projectCard/projectCard'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import videoImg from "../assets/video/Banner.mp4"
import { motion } from "framer-motion";
import API from '../api/api';
import { useQuery } from '@tanstack/react-query'
const home = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // assuming you store user info here


const { isLoading, error, data } = useQuery({
  queryKey: ['gigs', currentUser?._id],  // Add dependency if user changes
  queryFn: () =>
        API.get(`/gigs`).then((res) => {
          return res.data;
        }),
});
  

  return (
    <div>
      <Featured/>
 {/* Slide for categories */}
      {isLoading ? (
        <div className="text-center py-6 text-lg">Loading categories...</div>
      ) : error ? (
        <div className="text-center py-6 text-red-500">Failed to load categories.</div>
      ) : (
        <Slide slidesToShow={5} arrowsScroll={3}>
          {data?.map(card => (
            <CatCard key={card._id} item={card} />
          ))}
        </Slide>
      )}
      {/* features */}
      <div className="bg-[#D86D8B] flex justify-center py-[60px] px-0 text-white">
        {/* container */}
        <div className="flex w-[1000px] items-center gap-20">
          {/* item */}
          <div className="flex-[3] flex flex-col gap-4">
            <h1 className='font-medium text-4xl mb-3 text-white-800'>A whole of freelance talent at your fingertips</h1>
              {/* title */}
              <div className='flex items-center gap-2 font-medium text-lg text-slate-100'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                The best for every budget
                
              </div>
              <p className='text-lg font-light leading-7 tracking-widest text-slate-100'>
                Find high-quality services at every price point. No hourly rates, just project-based pricing.

              </p>
               <div className='flex items-center gap-2 font-medium text-lg text-slate-100'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                The best for every budget
                
              </div>
              <p className='text-lg font-light leading-7 tracking-widest text-slate-100'>
                Find high-quality services at every price point. No hourly rates, just project-based pricing.

              </p>
               <div className='flex items-center gap-2 font-medium text-lg text-slate-100'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                The best for every budget
                
              </div>
              <p className='text-lg font-light leading-7 tracking-widest text-slate-100'>
                Find high-quality services at every price point. No hourly rates, just project-based pricing.

              </p>
          </div>
          {/* item */}
          <div className="flex-[3] rounded-lg">
            {/* create video tag and replace img tag */}
            <video className="rounded-lg" src={videoImg} autoPlay loop muted></video>
          </div>
        </div>
      </div>

      <div className="bg-blue-300 flex justify-center py-[60px] px-0 text-white">
        {/* container */}
        <div className="flex w-[1000px] items-center gap-20">
          {/* item */}
          <div className="flex-[3] flex flex-col gap-4">
            <h1 className='font-medium text-4xl mb-3 text-gray-800'> ProLancer <i>for Business</i></h1>
              <p className='text-lg font-light leading-7 tracking-widest text-gray-800'>
              Unlock a smarter way to work — tailored tools and talent built for growing teams and businesses.

              </p>
              {/* title */}
              <div className='flex items-center gap-2 font-medium text-lg text-gray-900'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                      Access hand-picked freelancers with verified business expertise  
              </div>

               <div className='flex items-center gap-2 font-medium text-lg text-gray-900'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                Personalized talent matching powered by your dedicated success advisor
   
              </div>
               <div className='flex items-center gap-2 font-medium text-lg text-gray-900'>
                <CheckBoxOutlinedIcon className='text-blue-800'/>
                Streamline collaboration with powerful team and project management tools
              </div>
          </div >
          {/* item */}
          <motion.div  className="flex-[4] gap-2"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}>
            {/* create video tag and replace img tag */}
            <img className="max-w-full"src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"/>
          </motion.div>
        </div>
      </div>
       <Slide slidesToShow={4} arrowsScroll={3} >
        {projects.map(project=>(
            <ProjectCard key={project.id} item={project} />
          ))}
      </Slide>
    </div>
  )
}

export default home