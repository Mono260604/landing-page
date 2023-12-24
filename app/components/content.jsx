"use client"
import React from "react";
import logo from "./judul.png";

const Content = () => {
  return (
    <>
      <div className="w-full m-0  bg-body pt-14 mt-4">
        <div className="mx-auto w-full">
          <div className=" bg-product mt-14 container w-128 h-64 mx-auto"></div>
          <div className="py-8 px-8">
            <h1 className="font-bold text-primary">
              Log in to Shopifye for easy access to dresses, footwear,
              accessories, and bags. Your go-to spot for effort less style
              awaits
            </h1>
          </div>
        </div>
        <div className="mx-auto px-32">
          <div className="bg-primary rounded-md w-full">
            <img src={logo} alt="Logo" className="mx-auto px-12 py-4" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-4 py-4">
          <div className="border bg-product container lg:w-96 md:w-64 h-96 mx-auto md:ml-24 flex items-center justify-center">
            product1
          </div>
          <div className="col-span-2 md:col-span-1 md:mr-36 md:pr-12 py-8 mx-auto">
            <h1 className="font-black text-text text-4xl text-center md:text-left">
              It is all about style
            </h1>
          </div>
          <div className="col-span-2 md:col-span-1 md:ml-36 md:pl-12 py-8 mx-auto">
            <h1 className="font-black text-text text-4xl text-center md:text-right">
              Add comfort to your looks
            </h1>
          </div>
          <div className="border bg-product container lg: w-96 md:w-64 h-96 mx-auto md:mr-24 flex items-center justify-center">
            product2
          </div>
        </div>
        <div className="py-4 mx-auto">
          <div className=" bg-product mt-14 container w-128 h-64 mx-auto"></div>
          <div className="py-8 px-8">
            <h1 className="font-bold text-3xl text-primary">
              Easy and secure payment
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
