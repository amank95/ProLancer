import React, { useState } from "react";
import Star from "../assets/star.png";
import { Slider } from "infinite-react-carousel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import API from "../api/api";
import { Reviews } from "../components/reviews/Reviews";
const gig = () => {
  
   const [showPhone, setShowPhone] = useState(false);
  const { id } = useParams(); // Assuming you're using react-router to get the gig ID
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      API.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

const userId = data?.userId; // Assuming the gig data contains a userId field

  const { isLoading: isLoadingUser, error:errorUser, data: dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      API.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
      enabled: !!userId, // Only run this query if userId is available
  });

  const handleClick = () => {
    navigator.clipboard.writeText(phone) // Copies the phone number
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2s
      })
      .catch(err => console.error("Failed to copy:", err));
  };
  console.log(data);
  


  // console.log(
  //   !isLoading && Array(Math.round(data.totalStars / data.starNumber)).fill()
  // );
  return (
    // gig
    <div className="flex justify-center">
      {/* container */}

      {isLoading ? (
        " Loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="flex w-[1400px] py-7 gap-12">
          {/* left */}
          <div className="flex-[2] flex flex-col gap-5">
            <span className="font-light text-xs text-gray-400">
              Fiver{">"}gigs{">"}{data.cat}{">"}{data.shortTitle}
            </span>
            <h1>{data.title}</h1>
            {/* user */}
            {isLoadingUser ? ("Loading..") 
            : errorUser ? ("something went wrong!")
            : (
            <div className="flex items-center gap-2">
              {/* pp */}
              <img
                className="w-8 h-8 border rounded-full"
                src={dataUser.img || null}
                alt=""
              />
              <span className="font-medium text-sm">{dataUser.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
                // stars
                <div className="flex items-center gap-1">
                  {Array(Math.round(data.totalStars / data.starNumber))
                    .fill()
                    .map((item, i) => (
                      <img className="w-3 h-3" src={Star} alt="" key={i} />
                    ))}
                  <span className="text-sm font-bold text-yellow-500">
                    {Math.round(data.totalStars / data.starNumber)}
                  </span>
                </div>
              )}
            </div>)}
            <Slider slidesToShow={1} arrowsScroll={1} className="">
              {data.images.map((img) => (
                <img
                  key={img}
                  className="max-h-[500px] object-contain"
                  src={img}
                  alt=""
                />
              ))}
            </Slider>
            <h2 className="font-normal">About This Gig</h2>
            <p className="font-light text-gray-800 leading-6 ">{data.desc}</p>
            {/* seller */}
            {isLoadingUser ? ("Loading..") 
            : errorUser ? ("something went wrong!")
            : (<div className="mt-12 flex flex-col gap-5">
              <h2 className="font-normal">About The Seller</h2>
              {/* user */}
              <div className="flex items-center gap-5">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={dataUser.img || null}
                  alt=""
                />
                {/* info */}
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm">{dataUser.username}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    // stars
                    <div className="flex items-center gap-1">
                      {Array(Math.round(data.totalStars / data.starNumber))
                        .fill()
                        .map((item, i) => (
                          <img className="w-3 h-3" src={Star} alt="" key={i} />
                        ))}
                      <span className="text-sm font-bold text-yellow-500">
                        {Math.round(data.totalStars / data.starNumber)}
                      </span>
                    </div>
                  )}
 <button
      onClick={() => setShowPhone(!showPhone)}
      className="bg-white border rounded-md border-gray-500 p-2 hover:text-blue-600"
    >
      {showPhone ? ` ${dataUser.phone}` : "Contact Me"}
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
                    <span className="font-medium">{dataUser.country}</span>
                  </div>
                  {/* item */}
                  <div className="w-[300px] flex flex-col gap-2 mb-5">
                    {/* title */}
                    <span className="">Member since</span>
                    {/* desc */}
                    <span className="font-medium">
                      {new Date(dataUser.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
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
                  {dataUser.desc}
                </p>
              </div>
            </div>
          )}
<Reviews gigId={id}/>
          </div>

          {/* right */}
          <div className="flex-1 border-gray-400 border rounded-md flex flex-col gap-5 sticky top-36 max-h-[500px] p-5 h-max ">
            {/* price */}
            <div className=" flex items-center justify-between">
              <h3 className="font-normal">{data.shortTitle}</h3>
              <h2 className="font-medium">$ {data.price}</h2>
            </div>
            <p className="text-gray-500 my-2 mx-0">{data.shortDesc}</p>
            {/* details */}
            <div className="flex items-center justify-between text-sm">
              {/* item */}
              <div className=" flex items-center gap-2">
                {/* <img src="/img/clock.png" alt="" /> */}
                <AccessTimeIcon sx={{ color: "blue" }} />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              {/* item */}
              <div className=" flex items-center gap-2">
                {/* <img src="/img/recycle.png" alt="" /> */}
                <AutorenewIcon sx={{ color: "blue" }} />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            {/* features */}
            <div className="flex flex-col gap-2">
              {data.features.map((feature) => (
                // item
                <div className="flex items-center gap-2 " key={feature}>
                  {/* <img src="/img/greencheck.png" alt="" /> */}
                  <CheckCircleOutlineIcon sx={{ color: "green" }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="bg-green-500 text-white p-2 font-medium cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default gig;
