function NavBar() {
  return (
    // <nav className="flex flex-row justify-between container p-1  min-w-full ">
    //   <h1 className="text-2xl text-black">ClickX</h1>
    //   <h1 className="text-2xl text-black">About</h1>
    //   <div className="bg-black p-2 flex items-center text-white rounded-lg">
    //     Get started
    //   </div>
    // </nav>
    <nav className="p-5   border-white border-2 rounded-md bg-black ">
      <div className="px-28 flex gap-6 justify-between">
        <div className="flex">
          <p className=" text-xl font-bold text-white"> Click</p>{" "}
          <p className="text-2xl font-semibold text-white"> X</p>
        </div>
        <div className="flex gap-3">
        
          <p className="text-white"> Contact us</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
