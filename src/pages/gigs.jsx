import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {gigs} from "../data/"
import GigCard from "../components/gigCard/GigCard"
const Gigs = () => {
  const[sort,setSort] = useState("Sales");
  const [Open, setOpen] = useState(false);

  const reSort=(type)=>{
    setSort(type)
    setOpen(false)

  }
  return (
    // gigs
    <div className="flex justify-center">
      {/* container */}
      <div className="w-[1400px] py-7 px-0 flex flex-col gap-4">
        {/* breadcrumbs */}
        <span className="font-light text-xs text-gray-600">
          Liverr  Graphics & Design 
        </span>
        <h1>AI Artists</h1>
        <p className="text-gray-600 font-light">
          I will create ai generated art for you
        </p>
        {/* menu */}
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-2 text-gray-900 font-light">
            <span className="text-gray-800">Budged</span>
            <input
              className="p-1 border border-gray-400 rounded-md outline-none placeholder-gray-600"
              type="text"
              placeholder="min"
            />
            <input
              className="p-1 border border-gray-400 rounded-md outline-none placeholder-gray-600"
              type="text"
              placeholder="max"
            />
            <button className="bg-blue-400 border border-blue-800 px-2 py-1 text-white font-bold rounded-md">
              Apply
            </button>
          </div>
          {/* right */}
          <div className="flex gap-5 items-center relative">
            {/*sortby  */}
            <span className="text-gray-800 font-light">SortBy</span>
            {/* sortType */}
            <span className="font-medium">{sort==="sales" ? "Best Selling":"Newest"}</span>
            {/* <img src=""/> */}
            <span onClick={() => setOpen(!Open)} className="cursor-pointer">
              {Open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </span>
            {/* rightMenu */}
            {Open && (
              <div className=" p-5 gap-5 flex bg-white border border-gray-400 rounded-md absolute top-8 right-0 flex-col text-gray-600 ">
                {sort==="sales" ? <span className="hover:text-gray-900 cursor-pointer" onClick={()=> reSort("createdAt")}>
                  Newest
                </span>:
                <span className="hover:text-gray-900 cursor-pointer" onClick={()=> reSort("sales")}>
                  Best Selling
                </span>}
              </div>
            )}
          </div>
        </div>
        {/* card */}
        <div className=" flex flex-wrap justify-between">
          { gigs.map(gig =>(
          <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
        {/* <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            </div> */}
      </div>
    </div>
  );
};

export default Gigs;
