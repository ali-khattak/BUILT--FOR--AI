import React from "react";
import logoL from "/foot.svg";
import logoR from "/footb.svg";

function Footer() {
  return (
    <footer className="bg-[#229B55] text-white py-10 px-4">
      <div className="  grid grid-cols-1 text-center md:text-start  md:grid-cols-6 gap-4 p-5">
        <div className="mb-6 lg:mb-0 md:col-span-2 ">
          <div className=" flex gap-2 items-center justify-center md:justify-start">
            <img src={logoL} alt="logo" />
            <img src={logoR} alt="logo" />
          </div>
          <p className="font-semibold text-[16px]">Your Virtual Chat Partner</p>
          <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
            hello@botify.com
          </a>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <ul>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px] ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <ul>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Chatbot
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Integration
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Live Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Our Policies</h2>
          <ul>
            <li>
              <a href="#" className="text-[#F9FAFA]e font-normal text-[16px]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA]e font-normal text-[16px]">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Social Media</h2>
          <ul>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-[#F9FAFA] font-normal text-[16px]">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[#F9FAFA] mt-6">
        <p>&copy; Copyright Botify 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
