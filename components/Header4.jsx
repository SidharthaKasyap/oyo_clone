"use client";
import Image from "next/image";
import React from "react";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border border-gray-300 px-5 py-2">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-5"
        />
        <div>
          <p className=" text-xl  font-bold">Get access to exclusive deals</p>
          <p className="text-gray-500">Only the best deals reach your inbox</p>
        </div>
      </div>

      <div className="flex mr-10">
        <input
          type="email"
          className="px-6 py-3 rounded-lg mr-5 w-70 h-12 outline-none border border-gray-300"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className=" w-32 rounded-lg h-12 font-semibold bg-red-600 text-white cursor-pointer"
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default Header4;
