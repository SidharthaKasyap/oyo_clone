import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-74 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={"/background.avif"}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-62 mr-3"
        />
        <div className="flex flex-col justify-between ">
          <Image
            src={"/background.avif"}
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-16 object-cover"
          />
          <Image
            src={"/background.avif"}
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-16 object-cover"
          />
          <Image
            src={"/background.avif"}
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-16 object-cover"
          />
          <Image
            src={"/background.avif"}
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-16 object-cover"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">
            lorem10nddnhd eweweej wwwwwjjw dejdnddjmd v jvc
          </h2>
          <p className=" text-justify my-5 text-lg">
            qqqqqqqq qqqq jvdfdsx hsnhsndndn jisdikdndnd ivndkdn sddnddn
            isdsndddn oscvndnv dnvdki ndki n dik
          </p>
          <div className="text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <span>Free wifi swimming pool bedroom</span>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-500 text-lg text-neutral-50">
              Price : &#8377; 23444
            </button>
            <Link
              href={`/hotels/${12}`}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
