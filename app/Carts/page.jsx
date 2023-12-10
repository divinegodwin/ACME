import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Carts = () => {
  return (
    <div>
      <div className="">
        <div>
          <img
            src="Cart/cart.jpg"
            className="w-[200px] h-[200px] ml-[5.8rem] mt-[5rem]"
            alt="Shopping Cart Image"
          />
        </div>
        <div>
          <p className="text-[#212529] pl-[5.6rem] font-bold text-2xl">
            Your cart is empty
          </p>

          <p className="text-[#212529] pl-[2rem] pt-8">
            Looks like you haven't made your menu yet
          </p>
        </div>
      </div>

      <Button
        className="w-[200px] ml-[6rem] shadow-lg rounded mt-10 h-[50px] bg-[#00296B] text-white"
        label="Continue Shopping"
      ></Button>

      <Navbar />
    </div>
  );
};

export default Carts;
