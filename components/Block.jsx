import Image from "next/image";
import React from "react";

const Block = ({ title, para }) => {
  return (
    <div className="border-l border-gray-300 px-4 h-full flex items-center justify-center">
      <Image
        src={"./demo.svg"}
        alt="demo"
        width={200}
        height={200}
        className=" w-7 h-7 rounded-full mr-2.5"
      />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className=" text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
