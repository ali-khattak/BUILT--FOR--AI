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
    <div className="relative flex flex-col justify-between h-auto rounded-lg p-5">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-[300px] md:h-[550px] object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5 rounded-lg">
        <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
          {blog.title}
        </h1>
        <p className="font-normal text-[14px] md:text-[16px] text-gray-200">
          {blog.desc}
        </p>
        <div className="flex items-center gap-2 md:gap-5 mt-2">
          <p className="font-medium text-[12px] md:text-[14px] text-gray-200">
            {blog.date}
          </p>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <p className="font-medium text-[12px] md:text-[14px] text-gray-200">
            {blog.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
