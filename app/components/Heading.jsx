import React from "react";

const Heading = () => {
  return (
    <div className="fixed w-[100%]">
      <div className="h-12 bg-[#212529] flex flex-row">
        <p className=" p-2 text-xl font-bold text-white">ACME</p>
        <svg
          className="w-7 h-7 text-white ml-[16rem] mt-2.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
      
      
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Heading;
