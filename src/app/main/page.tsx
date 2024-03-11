
import React from "react";
import Navvbar from "../components/navvbar";
import UserDetails from "../components/UserDetails";
import Createpost from "../components/Createpost";
import Post from "../components/post";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LeftSidebar from "../components/leftSidebar";
import Comments from "../components/comments";


async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user.username) redirect("/username");
  return (
    <>
      <Navvbar />
      
      <LeftSidebar />
      <Post />
      {/* <Comments /> */}
     

      {/* <UserDetails /> */}
    </>
  );
}

export default page;
