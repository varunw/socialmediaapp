import { Search } from "lucide-react";
import Wallet from "./Wallet";
import UserDetails from "./UserDetails";

function Navvbar() {
  return (
    <nav className="p-2 bg-gray-900 rounded-md shadow-lg fixed border border-gray-800 left-5 top-4 right-5">
      <div className="px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-white text-xl font-bold">Click</p>{" "}
          <p className="text-white text-2xl font-semibold">X</p>
        </div>
        
        <Wallet />
      </div>
    </nav>

    // <nav className="p-2 bg-gray-900 rounded-md shadow-lg fixed border border-gray-800 left-5 top-4 right-5">
    //   <div className="px-4 md:px-8 flex items-center justify-between">
    //     <div className="flex items-center">
    //       <p className="text-white text-xl font-bold">Click</p>{" "}
    //       <p className="text-white text-2xl font-semibold">X</p>
    //     </div>
    //     <div className="flex items-center space-x-3">
    //       <div className="relative">
    //         <Search />
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="bg-gray-800 text-white w-40 sm:w-64 pl-8 pr-4 py-1 placeholder-gray-500 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>
    //       <Wallet />
    //     </div>
    //   </div>
    // </nav>

    // <nav className="p-2 bg-slate-700 rounded-md fixed  border border-black left-5 top-4 right-5">
    //   <div className="px-28 flex gap-6 justify-between">
    //     <div className="flex">
    //       <p className=" text-xl font-bold "> Click</p>{" "}
    //       <p className="text-2xl font-semibold"> X</p>
    //     </div>
    //     <div className="flex gap-3">
    //       <div className="fbg-white flex flex-row justify-between gap-2 rounded-full p-4 ">
    //         <Search />
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="flex justify-center text-center decoration-none w-90 placeholder-black rounded-md outline-none "
    //         />
    //       </div>

    //       <Wallet />
    //     </div>
    //   </div>
    // </nav>

    /* <nav className="flex flex-row justify-between container p-4  min-w-full b">
        <h1>CLICKX</h1>

        <div className="bg-white flex flex-row justify-between gap-2 rounded-full p-4">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="flex justify-center text-center decoration-none w-90 placeholder-black rounded-md outline-none "
          />
        </div>

        <div>
          <Wallet />
        </div>
        {/* <div>
          <UserDetails />
        </div> */
    /* <nav/> */
  );
}

export default Navvbar;
