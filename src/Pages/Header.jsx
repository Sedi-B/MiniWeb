import React from "react";

const Header = () => {
  return (
    <div id="header" className="flex items-center justify-between">
      <div className="text-[24px] ml-[80px] font-semibold ">SEDI-DEVHUB </div>
      <div>
        <ul className="flex cursor-pointer m-6">
          <a  className="text-gray-700"href="#aboutUS">
            <li
              className="p-6 text-l 
              hover:text-green-300
             
              transition-all delay-75
                hover:bg-slate-400 hover:delay-75
              "
            >
              <a  className="text-gray-700"href="#header">About Us</a>
            </li>
          </a>
          <li
            className="p-6 text-l 
            hover:text-green-300text-orange-800
             transition-all delay-75
            hover:bg-slate-400 hover:delay-75
            "
          >
            <a  className="text-gray-700"href="#services">Our Services</a>
          </li>
          <li
            className="p-6 text-l
             hover:text-green-300
            
             transition-all delay-75
            hover:bg-slate-400 hover:delay-75 
            "
          >
            <a  className="text-gray-700"href="#contact">Contact Us</a>
          </li>
          <li
            className="p-6 text-l 
            hover:text-green-300
           
            transition-all delay-75
            hover:bg-slate-400 hover:delay-75
            "
          >
            <a  className="text-gray-700" href="#footer">Find Us</a>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Header;
