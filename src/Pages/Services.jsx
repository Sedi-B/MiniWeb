import React from "react";
import snap from "../assets/front en.jpg";


const Services = () => {
  return (
    <div id="services" className="bg-white ml-[55px] mr-[55px] rounded-lg ">
      <div className="flex mt-[80px] items-center gap-20">
        <img
          src={snap}
          className="rounded-full w-[380px] 
		h-[252px] ml-[80px]"
        />
        <div className="ml-[-55px]">
          <div
            className="text-3xl 
		text-green-500 drop-shadow mt-6"
          >
           Things we will cater for you @ SEDI-DEVHUB
          </div>

          <div>
            <ul className="mt-8 text-[18px] mb-6">
              <li className="list-disc ml-4">
                <span
                  className="drop-shadow text-[20px] 
				font-semibold text-green-400"
                >
                  Software Development Course : 
                </span>
                 We will be offerring comprehensive courses in programming
                languages, software development tools, frameworks and industry
                best practices.
              </li>
              <li className="list-disc ml-4">
                <span
                  className="drop-shadow text-[20px] 
				font-semibold text-green-400"
                >
                  Mentorship Programs :
                </span>
                We will provide mentorship from industry experts to guide and
                inspire our aspiring software developers
              </li>
              <li className="list-disc ml-4">
                <span
                  className="drop-shadow text-[20px] 
				font-semibold text-green-400"
                >
                  Job Palcement and Creation :
                </span>
                We aim to create our own jobs as we will be also assisting our
                participants to find oppportunities in the Tech Industry through
                our network of partners
              </li>
              <li className="list-disc ml-4">
                <span
                  className="drop-shadow text-[20px] 
				font-semibold text-green-400"
                >
                  Hackathons and Coding competitions :
                </span>
                We will be hosting time to time hackathons and coding
                competitions to provide out participants with hands-on
                experience, ecouraging teamwork and fostering creativity among
                participants
              </li>
              <li className="list-disc ml-4">
                <span
                  className="drop-shadow text-[20px]
				font-semibold text-green-400"
                >
                  Community Engagements :
                </span>
                We are going to make connections, create vibrant communitiy of
                individuals passionate about technology.
              </li>
            </ul>
          </div>
          <button
            className=" border-green-500 text text-xl 
		text-green-500 border-2 p-[8px] 
		pl-[25px] pr-[25px] 
		rounded-md hover:bg-green-800 hover:text-white
		hover:transition-all delay-75 mb-5"
          >
            Find More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
