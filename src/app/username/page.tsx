import React from "react";
import UserRegistrationForm from "../components/userform";
import Navvbar from "../components/navvbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Leftsidebar from "../components/leftSidebar";

async function Page() {
  const session = await getServerSession(authOptions)
  // if(session?.user.username) redirect("/main") 
  return (
    <div>
      <Navvbar/>
      <UserRegistrationForm />
      <Leftsidebar/>
    </div>
  );
}

export default Page;
