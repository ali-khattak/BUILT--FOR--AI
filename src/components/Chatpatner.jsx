import React from "react";
import AIImage from "/Hero.svg";
import face from "/robo.svg";
import ava1 from "/Avatar.svg";
import ava2 from "/Avatar (1).svg";
import ava3 from "/Avatar (2).svg";
import add from "/Plus.svg";

const Chatpatner = () => {
  return (
    <main className="flex flex-col items-center text-center mt-16 px-8 md:flex-row md:justify-center md:items-start md:text-left md:px-16">
      <div className="md:w-1/2">
        <h1 className="flex items-center w-max mx-auto md:mx-0 gap-2 px-4 py-2 rounded-full bg-[#E9ECEF]">
          <img src={face} alt="face" />
          Your Virtual Chat Partner
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          Transform Every Interaction with Our Smart AI Chatbot
        </h1>
        <p className="mt-4 text-gray-600">
          Our AI chatbot provides personalized interactions, automates routine
          tasks, and ensures seamless communication around the clock. Elevate
          your user experience with cutting-edge technology today.
        </p>
        <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full">
            Try for Free
          </button>
          <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded">
            Learn More
          </button>
        </div>
        <div className="mt-8 flex flex-col text-start lg:flex-row lg:items-center lg:gap-10 xl:gap-2">
          <div className="flex -space-x-2">
            <img
              src={ava1}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
            <img
              src={ava2}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
            <img
              src={ava3}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
            <img
              src={add}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-gray-600 w-[100%] ml-6">
            And 100+ people have tried Built for AI
          </p>
        </div>
      </div>
      <div className="md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={AIImage}
          alt="AI Chatbot"
          className="mt-4 md:mt-[-3rem] w-full max-w-md"
        />
      </div>
    </main>
  );
};

export default Chatpatner;
