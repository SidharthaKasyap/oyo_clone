"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="p-5">
        <h2 className=" text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-7 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-50  h-14 outline-none px-3 text-lg border-r-2 border-gray-400 "
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Search..."
            className="h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-14 outline-none px-3 text-lg col-span-1"
          />
          <button
            type="submit"
            className=" h-14 px-3 py-2 w-52 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex px-32  font-b0ld">
          <button
            type="submit"
            className="h-14 px-3 hover:cursor-pointer text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className=" h-14 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
