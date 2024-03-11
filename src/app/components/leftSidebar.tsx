import { Home, Link, LogOut, Pen, PlusSquare, Search, Users } from "lucide-react";
import React from "react";

function Leftsidebar() {
  return (
    <div className="w-72 bg-gray-900 fixed h-[800px] left-5 top-[115px] overflow-y-auto rounded-md shadow-lg">
      <ul className="p-4">
        <li className="flex pb-4 justify-start items-center gap-4">
          <Home className="text-white w-6 h-6" />
          <a href="/main" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li className="flex pb-4 justify-start items-center gap-4">
          <PlusSquare className="text-white w-6 h-6" />
          <a href="/upload" className="text-white hover:text-gray-300">
            Create Post
          </a>
        </li>
        <li className="flex pb-4 justify-start items-center gap-4">
          <Search className="text-white w-6 h-6" />
          <a href="/search" className="text-white hover:text-gray-300">
            Search
          </a>
        </li>
        <li className="flex pb-4 justify-start items-center gap-4">
          <Pen className="text-white w-6 h-6" />
          <a href="/username" className="text-white hover:text-gray-300">
            Change Username
          </a>
        </li>
        <li className="flex pb-4 justify-start items-center gap-4">
          <Users className="text-white w-6 h-6" />
          <a href="/userrofile" className="text-white hover:text-gray-300">
            User Profile
          </a>
        </li>
      </ul>
      <div className="flex justify-start items-center px-4 py-2 mt-auto text-white">
        <LogOut className="w-6 h-6 mr-2" />
        <a href="/sign-in" className="text-white hover:text-gray-300">
          Log-out
        </a>
      </div>
    </div>

    // <div className="w-72 bg-slate-700 fixed h-[800px] left-5 top-[115px] overflow-y-auto rounded-md ">
    //   {/* <div className="p-4 ">
    //     <h2 className="text-white text-lg font-bold mb-4">Your App</h2> */}
    //   <ul className=" p-8">
    //     <li className=" flex pb-12 justify-start items-center gap-4">
    //       <Home className="text-white p-1 " />

    //       <a href={"/main"} className="text-white hover:text-gray-300 mr-4 p-1">
    //         Home
    //       </a>
    //     </li>
    //     <li className="  flex  border-black  pb-12 justify-start items-center gap-4">
    //       <PlusSquare className="text-white p-1" />
    //       <a href={"/upload"} className="text-white hover:text-gray-300 p-1 ">
    //         Create Post
    //       </a>
    //     </li>
    //     <li className="  flex  border-black  pb-12 justify-start items-center gap-4">
    //       <Pen className="text-white p-1" />
    //       <a href={"/username"} className="text-white hover:text-gray-300 p-1">
    //         Change Username
    //       </a>
    //     </li>

    //     <li className="  flex  border-black  pb-12 justify-start items-center gap-4">
    //       <Users className="text-white p-1" />
    //       <a
    //         href={"/userrofile"}
    //         className="text-white hover:text-gray-300 p-1"
    //       >
    //         User Profile
    //       </a>
    //     </li>
    //   </ul>
    //   <div className="flex text-white fixed inset-x bottom-0 items container items-center w-64 mb-5">
    //     <LogOut className="text-white  " />
    //     <a href={"/sign-in"} className="text-white hover:text-gray-300 p-1">
    //       Log-out
    //     </a>
    //   </div>
    // </div>
  );
}

export default Leftsidebar;
