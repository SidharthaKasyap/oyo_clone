import Image from "next/image";
import React, { useEffect, useState } from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";

const Header1 = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-20 px-12">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-24 h-24"
      />
      <div className=" h-full flex">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
        <div className="flex items-center px-3 border-l">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className=" w-7 h-7 rounded-full mr-2 "
          />
          {auth ? (
            <h3 className=" cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3>Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
