'use client'

import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Product = () => {
  const categories = ["Trousers", "Caps", "Hoodies", "Shirts", "Shorts"];

  const [clickedElement, setClickedElement] = useState(null);

  function checkClick(e){
    setClickedElement(e)
  }


  return (
    <div>
      <div className="shadow-lg mb-2">
        <p className="text-black pt-4 pl-4 pb-4 font-bold">CATEGORIES</p>
      </div>

<div className="">
      <div className="fixed w-[90px] h-[100%] bg-[#E9ECEF]">
  
      <ul className="flex gap-20 flex-col">
        {
      categories.map((category)=>( 
        <li key={category}
        className={`pt-4 pl-2 ${clickedElement? "text-white": "text-black" }`}
        onClick={checkClick}>
            {category}
        </li>
      ))
    }
    </ul>
    </div>


      </div>

      <Navbar />
    </div>
  );
};

export default Product;
