import React from "react";
import img from "../Assets/nike.png";
import "../App.css";

const ProductCard = () => {
  return (
    <div className="container mx-auto p-4 animate-fadeIn relative">
      <div className="card h-[450px] w-[320px] bg-neutral-800 relative shadow-lg rounded-3xl max-w-md overflow-hidden lg:max-w-xl lg:flex lg:gap-4">
        <div className="img h-[220px] z-[10000] lg:w-1/2 absolute top-1/2 duration-500 -translate-y-1/2">
          <img
            src={img}
            alt="Nike Running Shoes"
            className="w-[270px] -translate-x-1/2 -translate-y-1/2 -rotate-25 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none absolute top-1/2 left-1/2"
          />
        </div>
        <div className="content duration-700 bottom-0 z-[10] absolute flex flex-col p-4 lg:w-1/2 ">
          <h2 className="text-2xl relative font-semibold mb-3 text-white tracking-[1px]">
            Nike Running
          </h2>
          <p className="text-white w-72 text-sm pb-3">
            Cushioning in both the forefoot and heel.
          </p>
          <div className="size mb-4 pb-1">
            <h3 className="text-lg font-semibold mb-1">Size</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer">
                7
              </span>
              <span className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer">
                8
              </span>
              <span className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer">
                9
              </span>
              <span className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer">
                10
              </span>
            </div>
          </div>
          <div className="color pb-1">
            <h3 className="text-lg font-semibold mb-1">Color</h3>
            <div className=" gap-2">
              <span className="w-6 h-6 rounded-full bg-green-500">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="w-6 h-6 rounded-full bg-blue-500">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="w-6 h-6 rounded-full bg-red-500">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <price className="-tracking-tighter price w-[130%] text-white duration-200 opacity-0">
           MRP : ₹5,139.00
          </price>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 duration-200 opacity-0">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
