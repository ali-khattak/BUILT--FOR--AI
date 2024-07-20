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

export default Blog1;
