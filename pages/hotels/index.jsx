import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      {hotels &&
        hotels.map((hotel) => (
          <div className=" m-5" key={hotel._id}>
            <Hotel hotel={hotel} />
          </div>
        ))}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}
export default Hotels;
