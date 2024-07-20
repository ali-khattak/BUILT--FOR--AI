import React from "react";
import content from "/Content.svg";

const Feature1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div className="flex justify-center items-start">
        <div className="relative">
          <img
            src={content}
            height={200}
            alt="Describe an Image"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 bg-white p-4 rounded-b-lg shadow-md">
            <p className="text-gray-700">
              The image shows a sleek, white sports car speeding...
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center  gap-5 ">
        <h2 className="font-medium text-[48px] text-center lg:text-start">
          Seamlessly Craft Custom Prompts with Ease Using Our AI Chatbot
          Platform
        </h2>
        <p className="font-normal text-[18px] text-[#5F6365] text-center lg:text-start">
          Transforming your interactions has never been simpler. Our
          cutting-edge AI chatbot platform empowers you to effortlessly design
          custom prompts, shaping dynamic conversations that resonate with your
          audience.
        </p>
        <a className="mt-5 " href="#">
          <p className="text-[#1E455A] font-bold text-[14px] text-center lg:text-start">
            Learn More
          </p>
        </a>
      </div>
    </div>
  );
};

export default Feature1;
