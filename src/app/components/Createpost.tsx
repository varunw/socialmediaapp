import React from "react";
import { Button } from "./ui/Button";
import Link from "next/link";

function Createpost() {
  return (
    <div className="max-w-md mr-15 h-[4rem] w-[12rem] rounded-lg shadow-md fixed top-[100px] right-5 m-4 bg-gray-600">
      <div className="flex justify-center items-center h-full">
      <Link href={"/upload"}>
        <Button className=" flex ">Create post</Button>
      </Link>
      </div>
    </div>
  );
}

export default Createpost;
