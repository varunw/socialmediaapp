import Followerslist from "@/app/components/Followerslist";
import NavBar from "@/app/components/NavBar";
import UserPost from "@/app/components/UserPosts";
import Follow from "@/app/components/follow";
import Followinglist from "@/app/components/followinglist";
import UserPosts from "@/app/components/getuserPosts";
import Leftsidebar from "@/app/components/leftSidebar";
import Navvbar from "@/app/components/navvbar";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function Page({ params }: { params: { username: string } }) {
   const session = await getServerSession(authOptions);
  const data = await db.user.findUnique({
    where: {
      username: params.username,
      
    },
  });
  return (
    <main className="bg-black min-h-screen">
      <Navvbar />
      <Leftsidebar />
      <div className=" flex items-center justify-center pt-[10rem] absolute right-14 top-[120px] ">
        <Follow _following={data?.address as string} />
      </div>

      {/* <div className="flex items-centre justify-center text-white flex-col absolute right-3 top-[200px] border-1">
        <h2>Name: {data?.name}</h2>
        <div>Username: {data?.username}</div>
        <div>Email: {data?.email}</div>
      </div> */}
      {/* <div className="flex items-center justify-center text-white flex-col absolute right-3 top-[200px] border-1 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Profile Information</h2>
        <div className="mt-2">
          <span className="font-bold">Name:</span> {data?.name}
        </div>
        <div className="mt-2">
          <span className="font-bold">Username:</span> {data?.username}
        </div>
        <div className="mt-2">
          <span className="font-bold">Email:</span> {data?.email}
        </div>
      </div> */}
      <div className="bg-gray-100 p-4 rounded-lg absolute top-[120px] right-4"> 
        <div className="flex flex-row p-3 gap-1">
          <Image
            src={session?.user.image as string}
            height={20}
            width={30}
            alt="profile"
            className="rounded-full"
          />

          <div className="text-xl font-bold mb-2">{session?.user.username}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center ">
            {/* <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold "> */}
            <Followerslist _userAddress={data?.address as string} />
            {/* </div> */}
            <span className="ml-2 ">Followers</span>
          </div>
          <div className="flex items-center">
            {/* <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold "> */}
            <Followinglist _userAddress={data?.address as string} />
            {/* </div> */}
            <span className="ml-2">Following</span>
          </div>
        </div>
      </div>
      <div className="">
        <UserPost address={data?.address as string} />
      </div>
    </main>
  );
}

export default Page;
