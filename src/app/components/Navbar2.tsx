import React from "react";
import Searchbar from "./Searchbar";
import Wallet from "./Wallet";

function Navbar2() {
  return (
    <div>
      <nav className="p-2 bg-gray-900 rounded-md shadow-lg fixed border border-gray-800 left-5 top-4 right-5">
        <div className="px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-white text-xl font-bold">Click</p>{" "}
            <p className="text-white text-2xl font-semibold">X</p>
          </div>
          <Searchbar />
          <Wallet />
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
