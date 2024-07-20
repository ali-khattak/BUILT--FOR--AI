import React from "react";
import Feature2 from "/Feature2.svg";

const Feature1 = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 p-8">
      <div className="flex flex-col items-start  justify-center">
        <h2 className="font-medium text-[48px] text-center lg:text-start">
          Explore Our Trending Prompts and Easily Elevate Your Conversations
        </h2>
        <p className="text-[#5F6365] font-normal text-[18px] mt-2 mb-4 text-center lg:text-start">
          Whether you’re a seasoned conversational designer or just starting
          out, our platform empowers you to craft compelling dialogues that
          captivate your audience. Explore the realm of trending prompts!
        </p>
        <a className="mt-5 m-auto lg:m-0 " href="#">
          <p className="text-[#1E455A] font-bold text-[14px] text-center lg:text-start">
            Learn More
          </p>
        </a>
      </div>
      <div className="flex justify-center items-start">
        <div className="relative">
          <img
            src={Feature2}
            alt="Trending Prompts"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature1;
