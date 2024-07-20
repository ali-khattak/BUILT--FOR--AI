import React from "react";
import imgA from "/P1.svg";
import imgB from "/P2.svg";
import imgC from "/P3.svg";
import imgD from "/P4.svg";
import imgE from "/P5.svg";
import imgF from "/P6.svg";

const UserReviews = () => {
  const reviews = [
    {
      picture: imgA,
      feedback: "As a small business owner, integrating Botify into our website was a game-changer.",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
    {
      picture: imgB,
      feedback: "The chatbot seamlessly integrates with our website, providing instant assistance!",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
    {
      picture: imgC,
      feedback: "As a small business owner, integrating Botify into our website was a game-changer.",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
    {
      picture: imgD,
      feedback: "As a small business owner, integrating Botify into our website was a game-changer.",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
    {
      picture: imgE,
      feedback: "As a small business owner, integrating Botify into our website was a game-changer.",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
    {
      picture: imgF,
      feedback: "As a small business owner, integrating Botify into our website was a game-changer.",
      reviewer: "Michael Darsono",
      position: "Business Owner",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <h1 className="font-medium text-[48px] text-center">
      Discover What Users <br />Love About Our Platform
      </h1>
      <p className="text-[#5F6365] text-center font-normal text-[18px]">
      Uncover authentic experiences and insights straight from our users
      </p>

      <div className="flex flex-col items-center justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:flex-row md:items-start p-5 gap-4 shadow-lg border-2 border-[#9194953D] rounded-xl outline-2 outline-[#9194953D]"
            >
              <div>
                <img width={100} src={item.picture} alt="review" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#101619] text-[18px] font-normal text-center md:text-start">
                  {item.feedback}
                </p>
                <h3 className="text-center md:text-start font-semibold text-[14px] mt-5">
                  {item.reviewer}
                </h3>
                <p className="text-center md:text-start text-[#5F6365] font-normal text-[12px]">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="font-semibold text-[14px] text-center mt-8 border-2 border-[#91949526] rounded-lg">
        See All Reviews
      </button>
    </div>
  );
};

export default UserReviews;
