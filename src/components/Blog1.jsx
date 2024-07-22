import React from "react";
import img1 from "/Blog1.svg"; // Adjust the path if necessary

const Blog1 = () => {
  const blog = {
    title: "AI Chatbots in Education Revolutionizing Learning Experiences",
    desc: "Step into the future of education as AI chatbots revolutionize learning experiences. Explore how cutting-edge technology is reshaping the way we teach and learn.",
    date: "12 May 2024",
    time: "7 minutes read",
    flag: true,
    img: img1,
  };

  return (
    <div className="relative flex flex-col justify-between h-auto rounded-lg p-5">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-[300px] md:h-[550px] object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5 rounded-lg">
        <h1 className="text-white font-semibold text-[18px] md:text-[24px] p-5">
          {blog.title}
        </h1>
        <p className="font-normal text-[14px] md:text-[16px] text-gray-200 p-5">
          {blog.desc}
        </p>
        <div className="flex items-center gap-2 md:gap-5 mt-2 p-5">
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

export default Blog1;
