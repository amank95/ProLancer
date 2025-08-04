
import React from "react";
import Star from "../../assets/star.png"
import Heart from "../../assets/heart.png"
import { Link } from "react-router-dom";


const GigCard = ({ item }) => {
  return (
    // gigCard
    <Link to="/gig/123">
      <div className=" w-[324px] h-[440px] mb-6 border border-gray-300">
        <img className="w-full h-[50%] object-cover" src={item.img} />
        {/* info */}
        <div className="py-2 px-5 flex flex-col gap-4">
          {/* user */}
          <div className="flex items-center gap-2">
            <img className="w-7 h-7 border rounded-full" src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className="text-black">{item.desc}</p>
          {/* star */}
          <div className=" flex items-center gap-1">
            <img className="w-3 h-3" src={Star}/>
            <span className="text-sm font-bold text-yellow-600" >{item.star}</span>
          </div>
        </div>
    <hr className="border border-gray-300"/>
        {/* details */}
        <div className="py-2 px-5 flex items-center justify-between">
            <img className="w-4 h-4 cursor-pointer" src={Heart}/>
           <div className="">
            <span className="text-gray-500 text-xs">STARTING AT</span>
            <h2 className="text-black text-lg font-normal">${item.price}</h2>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
