import React, { useState } from "react";
import Star from "../../assets/star.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../../api/api";
import Review from "../review/Review";

export const Reviews = ({ gigId }) => {

  const [selectedStar, setSelectedStar] = useState(0);
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => API.get(`/reviews/${gigId}`).then((res) => res.data),
  
  });

  const mutation = useMutation({
    mutationFn: (review) => API.post("/reviews", review),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", gigId] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;

    if (selectedStar === 0) {
      alert("Please select a star rating.");
      return;
    }

    mutation.mutate({  gigId, desc, star: selectedStar });
    e.target.reset();
    setSelectedStar(0);
  };



  return (
    <div className="mt-12">
      <h2>Reviews</h2>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        data.map((review) => (
          console.log("Checking review: ",review),
<Review key={review._id} review={review}/>
        ))
      )}

      <hr className="h-0 border border-gray-400 my-12 mx-0" />

      {/* Add Review Form */}
      <div className="flex flex-col gap-5">
        <h2 className="font-normal">Add a Review</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <textarea
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Write your review here..."
            rows="4"
          ></textarea>
          <div className="flex items-center gap-2">
            <span className="font-medium">Rate:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                className={`w-6 h-6 cursor-pointer ${
                  selectedStar >= star ? "opacity-100" : "opacity-40"
                }`}
                src={Star}
                alt={`Star ${star}`}
                onClick={() => setSelectedStar(star)}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              {selectedStar > 0 && `(${selectedStar})`}
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
