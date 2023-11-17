import React from "react";

const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Chennai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gurgaon",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Kolkata",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Noida",
    },

    { name: "Pune" },
    { name: "All Cities" },
  ];
  return (
    <div>
      <div className="flex px-20 py-2 bg-gray-100 justify-between">
        {List.map((e) => {
          return (
            <span className="text-gray-700 font-light text-sm"  key={e.name}>
              {e.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Header2;
