"use client";
import { CONTRACT_ADDRESS } from "@/lib/address";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/Button";

function Followerslist({ _userAddress }: { _userAddress: string }) {
    
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "followersList", [
    _userAddress,
  ]);
  console.log(data)

  return (
    // <div className="flex justify-center items-center absolute top-[180px] right-44 bg-white text-white h-10 w-10 ">
    <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-center items-center text-black">
            {data?.length}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Followers</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {isLoading ? (
              <p>Loading..</p>
            ) : (
              data?.map((followers: any) => (
                <div className="">
                  <p>{followers}</p>
                </div>
              ))
              // <div>hello</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Followerslist;
