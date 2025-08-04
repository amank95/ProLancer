import React, { useState } from "react";
import Star from "../assets/star.png";
import { Slider } from "infinite-react-carousel";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const gig = () => {
  const [vote, setVote] = useState(null); // null, 'up', or 'down'

  const handleVote = (type) => {
    // Toggle if clicked again
    if (vote === type) {
      setVote(null);
    } else {
      setVote(type);
    }
  };
  return (
    // gig
    <div className="flex justify-center">
      {/* container */}
      <div className="flex w-[1400px] py-7 gap-12">
        {/* left */}
        <div className="flex-[2] flex flex-col gap-5">
          <span className="font-light text-xs text-gray-400">
            Fiver>Graphics&Design>
          </span>
          <h1>I will create ai generated art for</h1>
          {/* user */}
          <div className="flex items-center gap-2">
            {/* pp */}
            <img
              className="w-8 h-8 border rounded-full"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="font-medium text-sm">Anna Bell</span>
            {/* stars */}
            <div className="flex items-center gap-1">
              <img className="w-3 h-3" src={Star} alt="" />
              <img className="w-3 h-3" src={Star} alt="" />
              <img className="w-3 h-3" src={Star} alt="" />
              <img className="w-3 h-3" src={Star} alt="" />
              <img className="w-3 h-3" src={Star} alt="" />
              <span className="text-sm font-bold text-yellow-500">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="">
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </Slider>
          <h2 className="font-normal">About This Gig</h2>
          <p className="font-light text-gray-800 leading-6 ">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          {/* seller */}
          <div className="mt-12 flex flex-col gap-5">
            <h2 className="font-normal">About The Seller</h2>
            {/* user */}
            <div className="flex items-center gap-5">
              <img
                className="w-[100px] h-[100px] rounded-full object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              {/* info */}
              <div className="flex flex-col gap-2">
                <span className="font-medium text-sm">Anna Bell</span>
                {/* stars */}
                <div className="flex items-center gap-1">
                  <img className="w-3 h-3" src={Star} alt="" />
                  <img className="w-3 h-3" src={Star} alt="" />
                  <img className="w-3 h-3" src={Star} alt="" />
                  <img className="w-3 h-3" src={Star} alt="" />
                  <img className="w-3 h-3" src={Star} alt="" />
                  <span className="text-sm font-bold text-yellow-500">5</span>
                </div>
                <button className="bg-white border rounded-md border-gray-500 p-2 hover:text-blue-600">
                  Contact Me
                </button>
              </div>
            </div>
            {/* box */}
            <div className="border border-gray-300  rounded-md p-5 mt-5  ">
              {/* items */}
              <div className="flex flex-wrap justify-between">
                {/* item */}
                <div className="w-[300px] flex flex-col gap-2 mb-5">
                  {/* title */}
                  <span className="font-light ">From</span>
                  {/* desc */}
                  <span className="font-medium">USA</span>
                </div>
                {/* item */}
                <div className="w-[300px] flex flex-col gap-2 mb-5">
                  {/* title */}
                  <span className="">Member since</span>
                  {/* desc */}
                  <span className="font-medium">Aug 2022</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2 mb-5">
                  <span className="title">Avg. response time</span>
                  {/* desc */}
                  <span className="font-medium">4 hours</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2 mb-5">
                  <span className="title">Last delivery</span>
                  {/* desc */}
                  <span className="font-medium">1 day</span>
                </div>
                <div className="w-[300px] flex flex-col gap-2 mb-5">
                  <span className="title">Languages</span>

                  {/* desc */}
                  <span className="font-medium">English</span>
                </div>
              </div>
              <hr className="h-0 border border-gray-400 mb-5" />
              <p className="font-light text-gray-800 leading-6 ">
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          {/* reviews */}
          <div className="mt-12 ">
            <h2>Reviews</h2>
            {/* item */}
            <div className="flex flex-col gap-5 my-20 mx-0 ">
              {/* user */}
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover "
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                {/* info */}
                <div className="flex flex-col gap-1 p-2">
                  <span className="font-medium text-sm">Garner David</span>
                  {/* country */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <img
                      className="w-5"
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              {/* stars */}
              <div className="flex items-center gap-1">
                <img className="w-3 h-3" src={Star} alt="" />
                <img className="w-3 h-3" src={Star} alt="" />
                <img className="w-3 h-3" src={Star} alt="" />
                <img className="w-3 h-3" src={Star} alt="" />
                <img className="w-3 h-3" src={Star} alt="" />
                <span className="text-sm font-bold text-yellow-500">5</span>
              </div>
              <p className="font-light text-gray-900 leading-6">
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              {/* helpful */}
              <div className="flex items-center gap-2">
                <span>Helpful?</span>
                {/* <img src="/img/like.png" alt="" /> */}
                <span
                  onClick={() => handleVote("up")}
                  className="cursor-pointer flex items-center gap-1"
                >
                  {vote === "up" ? (
                    <ThumbUpAltIcon sx={{ color: "blue" }} />
                  ) : (
                    <ThumbUpOffAltIcon sx={{ color: "gray" }} />
                  )}
                  <span
                    className={vote === "up" ? "text-blue-600 font-medium" : ""}
                  >
                    Yes
                  </span>
                </span>

                {/* <img src="/img/dislike.png" alt="" /> */}
                <span
                  onClick={() => handleVote("down")}
                  className="cursor-pointer flex items-center gap-1"
                >
                  {vote === "down" ? (
                    <ThumbDownAltIcon sx={{ color: "blue" }} />
                  ) : (
                    <ThumbDownOffAltIcon sx={{ color: "gray" }} />
                  )}
                  <span
                    className={
                      vote === "down" ? "text-blue-600 font-medium" : ""
                    }
                  >
                    No
                  </span>
                </span>
              </div>
            </div>
            <hr className="h-0 border border-gray-400 my-12 mx-0" />
          </div>
        </div>

        {/* right */}
        <div className="flex-1 border-gray-400 border rounded-md flex flex-col gap-5 sticky top-36 max-h-[500px] p-5 h-max ">
          {/* price */}
          <div className=" flex items-center justify-between" >
            <h3 className="font-normal" >1 AI generated image</h3>
            <h2 className="font-medium">$ 59.99</h2>
          </div>
            <p className="text-gray-500 my-2 mx-0">
              I will create a unique high quality AI generated image based on a
            description that you give me
            </p>
            {/* details */}
         <div className="flex items-center justify-between text-sm">
          {/* item */}
            <div className=" flex items-center gap-2">
              {/* <img src="/img/clock.png" alt="" /> */}
              <AccessTimeIcon sx={{ color: 'blue' }} />
              <span>2 Days Delivery</span>
            </div>
            {/* item */}
            <div className=" flex items-center gap-2">
              {/* <img src="/img/recycle.png" alt="" /> */}
              <AutorenewIcon sx={{ color:'blue'}}/>
              <span>3 Revisions</span>
            </div>
          </div>
          {/* features */}
          <div className="flex flex-col gap-2">
            {/* item */}
            <div className="flex items-center gap-2 ">
              {/* <img src="/img/greencheck.png" alt="" /> */}
              <CheckCircleOutlineIcon sx={{color:'green'}}/>
              <span>Prompt writing</span>
            </div>
            {/* item */}
            <div className="flex items-center gap-2">
            <CheckCircleOutlineIcon sx={{color:'green'}}/>
              <span>Artwork delivery</span>
            </div>
            {/* item */}
            <div className="flex items-center gap-2">
             <CheckCircleOutlineIcon sx={{color:'green'}}/>
              <span>Image upscaling</span>
            </div>
            {/* item */}
            <div className="flex items-center gap-2">
               <CheckCircleOutlineIcon sx={{color:'green'}}/>
              <span>Additional design</span>
            </div>
          </div>
            <button className="bg-green-500 text-white p-2 font-medium cursor-pointer">Continue</button>
          
        </div>
      </div>
    </div>
  );
};

export default gig;
