import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
        <div className="w-full text-right">
          <button className="p-2 fa fa-bars text-4xl text-gray-600"></button>
        </div>
      </div>

      <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
        <div className="p-5 bg-white sticky top-0">
          <img
            className="border border-indigo-100 shadow-lg round"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
            Your
          </div>
        </div>
        <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
          <Link
            className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
            href="/profile"
          >
            <i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
            Profile
          </Link>
          <Link
            className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
            href="/"
          >
            <i className="fa fa-comment text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
            Home
          </Link>
          <Link
            className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
            href="/message"
          >
            <i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
            Message
          </Link>
          <a
            className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold"
            href=""
          >
            <i className="fa fa-arrow-left text-gray-600 text-2xl pr-1 pt-1 float-right"></i>
            Log out
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
