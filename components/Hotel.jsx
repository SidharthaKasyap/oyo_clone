import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-74 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-62 mr-3"
        />
        <div className="flex flex-col justify-between">
          {hotel
            ? hotel.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-28 h-16 object-cover  "
                  />
                );
              })
            : ""}
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">{hotel?.name}</h2>
          <p className=" text-justify my-5 text-lg">{hotel?.description}</p>
          <div className="text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex">
              {hotel
                ? hotel.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-500 text-lg text-neutral-50">
              Price : &#8377; {hotel?.price}
            </button>
            <Link
              href={`/hotels/${hotel?.id}`}
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
