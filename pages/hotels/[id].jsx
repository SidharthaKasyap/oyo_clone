import Head from "next/head";
import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <>
      <Head>
        <title>Taj hotel</title>
      </Head>
      <div className=" w-7/12 my-10 mx-auto">
        <Image
          src={"/background.avif"}
          alt="hotel"
          width={2000}
          height={2000}
          className=" w-full h-large-box my-5"
        />
        <div>
          <h3 className="text-3xl font-bold">Taj hotel</h3>
          <p className="text-xl my-5 text-justify"> a good hotel to stay</p>
          <button className=" w-60 h-14 rounded-md bg-blue-500 text-lg text-neutral-50">
            Price : &#8377; 2334
          </button>
          text-neutral-50"
          <p className=" text-3xl font-bold my-5">Facilities : </p>
          <ul className="flex text-xl justify-between">
            <li>Swimming Pool</li>
            <li>Swimming Pool</li>
            <li>Swimming Pool</li>
            <li>Swimming Pool</li>
          </ul>
          <button className=" w-60 h-14 rounded-md bg-red-500 text-neutral-50 my-5 text-lg">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleHotel;
