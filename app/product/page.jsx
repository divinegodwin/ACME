"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { CategoryItems } from "../components/categoryItems";

const Product = () => {
  const categories = ["Trousers", "Caps", "Hoodies", "Shirts", "Shorts"];

  const [clickedElement, setClickedElement] = useState(null);

  function checkClick(e) {
    setClickedElement(e);
  }

  return (
    <div>
      <div className="shadow-lg mb-2 fixed w-[100%]">
        <p className="text-white pt-4 pl-4 pb-4 font-bold bg-[#212529]">CATEGORIES</p>
      </div>
+
      <div className="">
        <div className="fixed w-[90px] h-[100%] bg-[#E9ECEF] mt-9">
          <ul className="flex gap-20 flex-col">
            {categories.map((category) => (
              <li
                key={category}
                className={`pt-4 pl-2 ${
                  clickedElement ? "text-white" : "text-black"
                }`}
                onClick={checkClick}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
              
              
        <div>
          <CategoryItems image="Trousers/trouser1.jpg" price="$50.00" />

          <CategoryItems image="Trousers/trouser2.jpg" price="$90.00" />

          <CategoryItems image="Trousers/trouser3.jpg" price="$60.00" />

          <CategoryItems image="Trousers/trouser4.jpg" price="$80.00" />

          <CategoryItems image="Trousers/trouser5.jpg" price="$65.00" />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Product;
