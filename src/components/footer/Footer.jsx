import React from 'react'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    // footer
<div className="flex justify-center text-gray-800 my-14 bg-gray-50">
      {/* container */}
      <div className="w-[1400px]">
        {/* top */}
        <div className="flex justify-between">
          {/* item */}
          <div className=" flex flex-col gap-4">
            <h2 className='text-base font-semibold text-gray-950'>Categories</h2>
            <span className='font-light '>Graphics & Design</span>
            <span className='font-light '>Digital Marketing</span>
            <span className='font-light '>Writing & Translation</span>
            <span className='font-light '>Video & Animation</span>
            <span className='font-light '>Music & Audio</span>
            <span className='font-light '>Programming & Tech</span>
            <span className='font-light '>Data</span>
            <span className='font-light '>Business</span>
            <span className='font-light '>Lifestyle</span>
            <span className='font-light '>Photography</span>
            <span className='font-light '>Sitemap</span>
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className='text-base font-semibold text-gray-950'>About</h2>
            <span className='font-light '>Press & News</span>
            <span className='font-light '>Partnerships</span>
            <span className='font-light '>Privacy Policy</span>
            <span className='font-light '>Terms of Service</span>
            <span className='font-light '>Intellectual Property Claims</span>
            <span className='font-light '>Investor Relations</span>
            <span className='font-light '>Contact Sales</span>
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className='text-base font-semibold text-gray-950'>Support</h2>
            <span className='font-light '>Help & Support</span>
            <span className='font-light '>Trust & Safety</span>
            <span className='font-light '>Selling on Liverr</span>
            <span className='font-light '>Buying on Liverr</span>
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className='text-base font-semibold text-gray-950'>Community</h2>
            <span className='font-light '>Customer Success Stories</span>
            <span className='font-light '>Community hub</span>
            <span className='font-light '>Forum</span>
            <span className='font-light '>Events</span>
            <span className='font-light '>Blog</span>
            <span className='font-light '>Influencers</span>
            <span className='font-light '>Affiliates</span>
            <span className='font-light '>Podcast</span>
            <span className='font-light '>Invite a Friend</span>
            <span className='font-light '>Become a Seller</span>
            <span className='font-light '>Community Standards</span>
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className='text-base font-semibold text-gray-950'>More From Fiverr</h2>
            <span className='font-light '>Liverr Business</span>
            <span className='font-light '>Liverr Pro</span>
            <span className='font-light '>Liverr Logo Maker</span>
            <span className='font-light '>Liverr Guides</span>
            <span className='font-light '>Get Inspired</span>
            <span className='font-light '>Liverr Select</span>
            <span className='font-light '>ClearVoice</span>
            <span className='font-light '>Liverr Workspace</span>
            <span className='font-light '>Learn</span>
            <span className='font-light '>Working Not Working</span>
          </div>
        </div>
        <hr className='my-12 mx-0 h-0 border border-[rgb(237,235,235)]'/>
        <div className="flex items-center justify-between gap-5 ">
          <div className="left">
            <h2 className='text-base font-semibold text-gray-950'>ProLancer</h2>
            <span className='text-sm'>© ProLance International Ltd. 2023</span>
          </div>
          {/* right */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5">
              <XIcon sx={{ color:'blue' ,  cursor:'pointer' }}/>
              <FacebookIcon  sx={{color:'blue' ,  cursor:'pointer'}} />
              <InstagramIcon sx={{color:'blue' ,  cursor:'pointer'}}/>
              <LinkedInIcon sx={{color:'blue' ,  cursor:'pointer'}}/>
              <GitHubIcon sx={{color:'blue' ,  cursor:'pointer'}}/>
            </div>
            {/* <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer