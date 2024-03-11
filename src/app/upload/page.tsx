import UploadFIle from "@/app/components/UploadFIle";
import React from "react";
import Navvbar from "../components/navvbar";
import { Input } from "../components/ui/input";
import { useAddress } from "@thirdweb-dev/react";
import UploadForm from "../components/UploadForm";
import Leftsidebar from "../components/leftSidebar";

function page() {
  return (
    <>
      <Navvbar />
      <main className="min-h-screen p-10 flex flex-col justify-center items-center bg-black  ">
        
        <UploadForm />
        <Leftsidebar/>
      </main>
    </>
  );
}

export default page;
