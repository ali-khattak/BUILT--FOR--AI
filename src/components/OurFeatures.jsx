import React from "react";
import img1 from "/icon1.svg";
import img2 from "/icon2.svg";
import img3 from "/icon3.svg";
import img4 from "/icon4.svg";
import arrow from "/rightArrow.svg";

const Features = () => {
  const features = [
    {
      icon: img1,
      title: "Enhanced Experiences",
      description: "Tailor interactions to your specific needs with customizable options.",
      linkText: "Discover more",
    },
    {
      icon: img2,
      title: "Round-the-Clock Support",
      description: "Operate 24/7, providing instant support and making your business always accessible.",
      linkText: "Discover more",
    },
    {
      icon: img3,
      title: "Budget-Friendly",
      description: "Cost-effective alternative to traditional support channels, delivering substantial ROI.",
      linkText: "Discover more",
    },
    {
      icon: img4,
      title: "Easy Integration",
      description: "Seamlessly integrate our AI chatbot with your existing systems, websites, and apps.",
      linkText: "Discover more",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <h1 className="font-medium text-[48px] text-center">
        Harness the Power <br /> of Smart Conversations
      </h1>
      <p className="text-[#5F6365] text-center font-normal text-[18px]">
        Discover how our AI chatbot's advanced features adapt to user queries
      </p>

      <div className="flex flex-col items-center justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 flex flex-col items-center lg:items-start gap-3 border-2 border-[#9194953D] shadow-lg"
            >
              <img src={feature.icon} alt={feature.title} width={70} />
              <h3 className="font-semibold text-[20px]">{feature.title}</h3>
              <p className="text-[#5A5D5C] text-center lg:text-start font-normal text-[14px]">
                {feature.description}
              </p>
              <a className="flex items-center gap-2" href="#">
                <p className="text-[#1E455A] font-semibold text-[14px]">
                  {feature.linkText}
                </p>
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
