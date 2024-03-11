"use client";
import { CONTRACT_ADDRESS } from "@/lib/address";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function Followinglist({ _userAddress }: { _userAddress: string }) {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "followingList", [
    _userAddress,
  ]);
  
  return (
    <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-center items-center text-black ">
            {data?.length}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Following</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {isLoading ? (
              <p>Loading..</p>
            ) : (
              data?.map((following: any) => (
                <div className="">
                  <p>{following}</p>
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

export default Followinglist;
