import React from "react";
import pic from "../assets/front.jpg";

const Home = () => {
  return (
    <div
      id="aboutUs"
      className="flex flex-col 
	gap-6 bg-white ml-[55px] 
	mr-[50px] rounded-lg p-8"
    >
      <div
        className="mt-[45px] text-3xl 
	font-semibold text-green-800"
      >
        Welcome to SEDI-DEVHUB Empowering Youth Through Innovation in Software
        Development
      </div>
      <div className="text-xl text-green-500s">Transforming Youth into Tech Innovators</div>
      <div className="flex gap-28">
        <div className="text-[18px]">
          Welcome to{" "}
          <a href="#header">
            <span
              className="text-cyan-800 
			text-[20px] cursor-pointer
			font-bold"
            >
              SEDI-DEVHUB
            </span>
          </a>
          , we believe in the power of youth to drive innovation and shape the
          future through technology. Our mission is to empower young minds with
          the skills and knowledge needed to excel in software development, so
          that we can be part of the everyday evolving $th Industrial
          Revolution. Join us on this journey of learning, growth, and
          innovation!"
        </div>
        <img
          src={pic}
          className="w-[380px] h-[252px] 
		mr-[80px] rounded-md mt-[-75px] "
        />
      </div>
     
    </div>
  );
};

export default Home;
