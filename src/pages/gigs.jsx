import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import {gigs} from "../data/"
import GigCard from "../components/gigCard/GigCard"
import { useQuery } from "@tanstack/react-query";
import API from "../api/api";
import { useLocation } from "react-router-dom";
const Gigs = () => {
  const[sort,setSort] = useState("Sales");
  const [Open, setOpen] = useState(false);
  const minRef = useRef()
  const maxRef = useRef()

  const {search} = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
        API.get(`/gigs${search}&min=${minRef.current.value || 0}&max=${maxRef.current.value || 999999}&sort=${sort}`
        // API.get(`/gigs?min=${minRef.current.value || 0}&max=${maxRef.current.value || 999999}&sort=${sort}`)
        ).then((res) => {
          return res.data;
        })
  })
  console.log("Gigs in data",data)

  const reSort=(type)=>{
    setSort(type)
    setOpen(false)

  }

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply =()=>{
    // console.log(minRef.current.value)
    // console.log(maxRef.current.value)
    refetch();
    // Here you can implement the logic to filter gigs based on min and max price
    // For example, you can make an API call to fetch filtered gigs
  }
  return (
    // gigs
    <div className="flex justify-center">
      {/* container */}
      <div className="w-[1400px] py-7 px-0 flex flex-col gap-4">
        {/* breadcrumbs */}
        {!isLoading && data.length > 0 && (
          <div>
          <span className="font-light text-xs text-gray-600">
          Liverr  {">"}Gigs{">"}{data[0].cat}
        </span>
        <h1>{data[0].shortTitle }</h1>
        <p className="text-gray-600 font-light">
          {data[0].shortDesc}
        </p>
        </div>
        )}
        {/* menu */}
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-2 text-gray-900 font-light">
            <span className="text-gray-800">Budged</span>
            <input
              className="p-1 border border-gray-400 rounded-md outline-none placeholder-gray-600"
              ref={minRef}
              type="number"
              placeholder="min"
            />
            <input
              className="p-1 border border-gray-400 rounded-md outline-none placeholder-gray-600"
              ref={maxRef}
              type="number"
              placeholder="max"
            />
            <button  onClick={apply} className="bg-blue-400 border border-blue-800 px-2 py-1 text-white font-bold rounded-md">
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
                {sort==="sales" ?
                 <span className="hover:text-gray-900 cursor-pointer" onClick={()=> reSort("createdAt")}>
                  Newest
                </span>
                :
                <span className="hover:text-gray-900 cursor-pointer" onClick={()=> reSort("sales")}>
                  Best Selling
                </span>}
              </div>
            )}
          </div>
        </div>
        {/* card */}
        <div className=" flex flex-wrap justify-between">
          { isLoading 
          ? "Loading" 
          : error 
          ? "Something went wrong!"
          : data.map(gig =>(
          <GigCard key={gig._id} item={gig}/>
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
