"use client";
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const router = useRouter();

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/user/login", {
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex justify-center items-center h-screen relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className="absolute w-full top-5 px-20 flex items-center text-white">
          <h2 className="text-4xl font-bold mr-5">OYO</h2>
          <p className=" font-bold text-xl  ">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-10/12">
          <div className="w-10/12 mx-10 text-white">
            <p className=" font-bold text-5xl ">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>

          <div className=" ml-24 pb-40 w-10/12 bg-slate-50">
            <p className="h-8 flex items-center px-8 bg-gradient-to-r from-orange-600 to bg-red-600  font-medium text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-8">
              <h3 className=" text-3xl font-bold my-5">Login / Signup</h3>
              <p className=" font-medium  mb-1">
                Please enter your details to continue
              </p>
              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className=" outline-none rounded-sm  border my-3 border-lightgrey px-3 py-1 w-96 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Enter your email"
                className=" outline-none rounded-sm  border my-3 border-lightgrey px-3 py-1 w-96 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className=" outline-none rounded-sm  border my-3 border-lightgrey px-3 py-1 w-96 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className=" w-56 h-12 text-lg font-medium bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-4 rounded-md"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login " : "Sign Up"}
              </button>
              <p className="my-1 text-xl">
                <span>
                  {" "}
                  {login
                    ? "Don`t have an account ?"
                    : "Already have an account ?"}{" "}
                </span>
                <span
                  onClick={handleToggle}
                  className="ml-1 border-b-2 border-red-200 pb-1 text-red-500 hover:cursor-pointer"
                >
                  {" "}
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
