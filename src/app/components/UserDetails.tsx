import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function UserDetails() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className=" flex  rounded-lg bg-gray-600 w-full ">
      {/* <div className="max-w-md w-full p-5 rounded-lg shadow-md fixed top-[100px] right-0 m-4 bg-gray-600"> */}
        <div className="flex items-center mb-4 ">
          <Image
            className="rounded-full"
            src={session?.user.image as string}
            alt="image"
            height={40}
            width={40}
          />
          <span className="text-black">{session?.user.name}</span>
        </div>
      </div>
      </div>
    // </div>
  );
}

export default UserDetails;
