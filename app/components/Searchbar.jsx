import React from "react";

export const Searchbar = () => {
  return (
    <div className="mt-[5rem]">
      <div className="flex justify-center mt-2 flex-row">
        <svg
          className="text-black h-7 w-7 ml-[16rem] absolute mt-2"
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="search"
          placeholder="search..."
          className="w-80 h-10 pl-2 rounded-2xl border-2 outline-none border-[#b0b0b0] "
        ></input>
      </div>
    </div>
  );
};
