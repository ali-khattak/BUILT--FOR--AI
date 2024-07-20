import React from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <h1 className="font-medium text-[48px] text-center leading-tight">
        Everything You Need<br />
        to Know to Get Started
      </h1>
      <p className="text-[#5F6365] text-center font-normal text-[18px] mb-5">
        Discover the essential knowledge and practical insights necessary
      </p>
      
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Blog1 />
          <Blog2 />
        </div>
      </div>
      <button className="font-semibold text-[14px] text-center mt-8 border-2 border-[#91949526] rounded-lg">
        Read More Blogs
      </button>
    </div>
  );
};

export default Blogs;
