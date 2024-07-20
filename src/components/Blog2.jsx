import React from "react";
import img2 from "/Blog2.svg"; // Adjust the path if necessary

const Blog2 = () => {
  const blog = {
    title: "AI Chatbots and the Future of Work: Trends and Predictions",
    desc: "Discover the latest trends and predictions that are reshaping industries and redefining the nature of jobs as we know them.",
    date: "11 May 2024",
    time: "5 minutes read",
    flag: false,
    img: img2,
  };

  return (
    <div className="flex flex-col justify-between md:h-[580px] rounded-lg p-5">
      <div className="flex flex-col gap-5">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[550px] object-cover rounded-lg"
        />
        <h1 className="text-white font-semibold text-[24px]">
          {blog.title}
        </h1>
        <p className="font-normal text-[16px] text-[#F9FAFA]">
          {blog.desc}
        </p>
        <div className="flex items-center gap-5">
          <p className="font-medium text-[14px] text-[#F9FAFA]">
            {blog.date}
          </p>
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <p className="font-medium text-[14px] text-[#F9FAFA]">
            {blog.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
