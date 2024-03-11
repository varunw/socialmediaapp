import React from "react";
import UserPage from "../components/UserPage";
import UserPosts from "../components/getuserPosts";
import Navvbar from "../components/navvbar";
import Leftsidebar from "../components/leftSidebar";
import Userprofile from "../components/userprofile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Followerslist from "../components/Followerslist";
import { db } from "@/lib/db";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/Button";
import Followinglist from "../components/followinglist";
import UserPost from "../components/UserPosts";
import Image from "next/image";
import { PackageX } from "lucide-react";
async function page() {
  const session = await getServerSession(authOptions);
  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });
  return (
    <main className="">
      {/* <div className="absolute top-[100px] right-32"> 
        <div className="  text-white  ">{session?.user.username}</div>
      </div>
      <div className="absolute top-[135px] right-40 h-7 w-18 bg-white">
        <p className="text-black ">Followers</p>
      </div>
      <div className="absolute top-[135px] right-20 h-7 w-18 bg-white">
        <p className="text-black ">Following</p>
      </div> */}

      <div className="bg-gray-100 p-4 rounded-lg absolute top-[120px] right-4">
        <div className="flex flex-row p-3 gap-3">
      <Image src={session?.user.image as string}
      height={20}
      width={30}
      alt="profile"
      className="rounded-full"/>

     
        <div className="text-xl font-bold mb-2">{session?.user.username}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center ">
            {/* <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold "> */}
            <Followerslist _userAddress={user?.address as string} />
            {/* </div> */}
            <span className="ml-2 ">Followers</span>
          </div>
          <div className="flex items-center">
            {/* <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold "> */}
            <Followinglist _userAddress={user?.address as string} />
            {/* </div> */}
            <span className="ml-2">Following</span>
          </div>
        </div>
      </div>

      {/* <Followerslist _userAddress={user?.address as string} />
      <Followinglist _userAddress={user?.address as string} /> */}

      <Navvbar />
      <UserPosts />
      <Leftsidebar />
      {/* <Userprofile /> */}
    </main>
  );
}

export default page;
