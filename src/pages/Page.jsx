import React from "react";
import Header from "../components/Header";
import Chatpatner from "../components/Chatpatner";
import TrustedBy from "../components/TrustedBy";
import OurFeatures from "../components/OurFeatures";
import Feature2 from "../components/Feature2";
import Feature1 from "../components/Feature1";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Benefits from "../components/Benefits";

const Page = () => {
  return (
    <div>
      <Header />
      <Chatpatner />
      <TrustedBy />
      <OurFeatures />
      <Feature2 />
      <Feature1 />
      <Testimonials />
      <Blogs />
      
      <Benefits />
      <Footer />
    </div>
  );
};

export default Page;