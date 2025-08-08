import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../api/api";
const message = () => {
  const { id } = useParams();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      API.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => API.post(`/messages`, message),
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className=" flex justify-center">
      <div className="w-[1200px] m-12">
        <span className="font-light text-xs text-gray-600">
          <Link to="/messages">Messages</Link> {">"} John Doe {">"} 
        </span>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "No messages yet"
        ) : (
          <div className="my-7 mx-0 p-12 flex flex-col gap-5 h-[500px] overflow-y-scroll">
            {data.map((m) =>
              m.userId === currentUser._id ? (
                // Message from current user
                <div
                  className="flex gap-5 max-w-[600px] text-lg flex-row-reverse self-end"
                  key={m._id}
                >
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <p className="p-5 bg-blue-500 text-white rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[20px]">
                    {m.desc}
                  </p>
                </div>
              ) : (
                // Message from other user
                <div className="flex gap-5 max-w-[600px] text-lg" key={m._id}>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <p className="p-5 bg-gray-300 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[0px]">
                    {m.desc}
                  </p>
                </div>
              )
            )}
          </div>
        )}
        <hr className="h-0 border-gray-300 mb-5 " />
        {/* write */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-5"
        >
          <textarea
            className="w-[80%] h-20 p-2 border border-black rounded-lg  outline-none"
            type="text"
            placeholder="write a message"
          />
          <button type="submit">
            <SendIcon
              sx={{
                color: "blue",
                border: "2px solid black",
                borderRadius: "20%",
                display: "inline-block",
                fontSize: 40,
                backgroundColor: "lightblue",
                cursor: "pointer",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default message;
