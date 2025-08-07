import React, { useState } from "react";
import Star from "../../assets/star.png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useQuery } from "@tanstack/react-query";
import API from "../../api/api";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Review = ({review}) => {
      const [vote, setVote] = useState(null);

    const handleVote = (type) => {
    setVote(vote === type ? null : type);
  };

    const { isLoading, error, data } = useQuery({
      queryKey: [review.userId],
      queryFn: () => API.get(`/users/${review.userId}`).then((res) => res.data),
    //   enabled: !!gigId,
    });

  return (
            <div className="flex flex-col gap-5 my-20 mx-0">
            {isLoading ? (
              "Loading..."
            ) : error ? (
              "Something went wrong"    
            ) : (
                
                <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={
                  data.img ||
                  <AccountCircleIcon sx={{ fontSize: 48, color: "blue" }} />
                }
                alt={data.username || "User"}
              />
              <div className="flex flex-col gap-1 p-2">
                <span className="font-medium text-sm">
                  {data.username || "Anonymous"}
                </span>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>{data.country || "Unknown"}</span>
                </div>
              </div>
            </div>
            )}

            <div className="flex items-center gap-1">
              {Array(review.star)
                .fill()
                .map((item, i) => (
                  <img key={i} className="w-3 h-3" src={Star} alt="star" />
                ))}
              <span className="text-sm font-bold text-yellow-500">
                {review.star}
              </span>
            </div>

            <p className="font-light text-gray-900 leading-6">
              {review.desc || "No description provided."}
            </p>

            <div className="flex items-center gap-2">
              <span>Helpful?</span>
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
  )
}

export default Review