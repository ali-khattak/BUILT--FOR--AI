import React from "react";
import leftImage from "/rh.svg";
import rightImage from "/lh.svg";

const Benefits = () => {
  return (
    <div className="relative flex flex-col items-center gap-5 p-10">
      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:left-0">
        <img src={leftImage} alt="Left decorative element" className="w-[310px] h-[400px]" />
      </div>
      <div className="hidden lg:block lg:absolute lg:top-[-2rem] lg:right-0">
        <img src={rightImage} alt="Right decorative element" />
      </div>

      <h1 className="font-medium text-[48px] text-center">
        Experience the Benefits<br /> of Our AI Chatbots Today!
      </h1>
      <p className="text-[#5F6365] text-center font-normal text-[18px]">
        Discover how our AI chatbots can streamline your operations, boost<br />
        customer engagement, and drive growth for your business effortlessly.
      </p>

      <div className="flex flex-col items-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Future content can go here */}
        </div>
      </div>

      <button className="bg-[#229B55] text-white py-2 px-4 rounded-full">
        Take Action Now
      </button>
    </div>
  );
};

export default Benefits;
