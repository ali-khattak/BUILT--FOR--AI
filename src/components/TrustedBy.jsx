import React from "react";
import logoa from "/Logo1.svg";
import logob from "/Logo2.svg";
import logoc from "/Logo3.svg";
import logod from "/Logo4.svg";
import logoe from "/Logo5.svg";

const TrustedBy = () => {
  const logos = [
    { src: logoa, name: "ExampleCorp" },
    { src: logob, name: "ExampleCorp" },
    { src: logoc, name: "ExampleCorp" },
    { src: logod, name: "ExampleCorp" },
    { src: logoe, name: "ExampleCorp" },
  ];

  return (
    <div className="bg-[#229B55] flex flex-col gap-8 justify-center items-center pt-10 pb-10">
      <h1 className="text-[#FFFFFF] font-semibold text-[16px]">Trusted by</h1>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {logos.map((logo, index) => (
          <img
            className="mt-4 lg:mt-0"
            width={150}
            src={logo.src}
            alt={logo.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
