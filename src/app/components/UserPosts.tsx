"use client";
import { CONTRACT_ADDRESS } from "@/lib/address";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/Button";
import { Heart, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Comments from "./comments";
import Likedby from "./Likedby";

function UserPost({ address }: { address: string }) {
  const session = useSession();
  const imgUrl = session.data?.user.image;
  const { contract } = useContract(CONTRACT_ADDRESS);
  const data = useContractRead(contract, "getUserPosts", [address]);
  const posts = data.data;
  console.log(posts);
  const { mutateAsync: likePost, isLoading } = useContractWrite(
    contract,
    "likePost"
  );

  const call = async (_postId: Number) => {
    try {
      const data = await likePost({ args: [_postId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div className="">
      <main className="flex min-h-screen flex-col p-1 justify-center items-center bg-black">
        {data.isLoading ? (
          <p>post loading</p>
        ) : (
          posts?.map((items: any) => (
            <div key={items.postId} className="mb-8">
              <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden mt-[7rem]">
                <div className="p-4">
                  <Link href={`/main/users/${items.username}`}>
                    <h1 className="text-lg font-semibold text-white cursor-pointer hover:text-gray-300">
                      {items.username}
                    </h1>
                  </Link>
                  <p className="text-gray-400">@{items.username}</p>
                </div>
                <div>
                  <Image
                    className="rounded"
                    height={400}
                    width={400}
                    src={items.postHash}
                    alt="Description of the image"
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => call(items.postId)}
                      className="text-red-500"
                    >
                      <Heart />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="text-white">
                          <MessageCircle color="black" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Comments _postId={items.postId} />
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="text-gray-400 cursor-pointer">
                        Likes: {parseInt(items.likes, 16)}
                      </p>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>likdeby</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <Likedby _postId={items.postId} />
                      </div>
                      <DialogFooter></DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className=""></div>
                <div className="p-4">
                  <p className="text-white">{items.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
    // <div className="">
    //   <main className="flex w-full flex-col p-1 justify-center items-center bg-black  ">
    //     {data.isLoading ? (
    //       <p>post loading</p>
    //     ) : (
    //       posts?.map((items: any) => (
    //         <div className=" ">
    //           <div className="bg-slate-700 p-2  rounded shadow-md mt-[7rem] container">
    //             <div className="flex items-center mb-2">
    //               <img
    //                 className="w-10 h-10 rounded-full mr-4"
    //                 src="user-profile-image.jpg"
    //                 alt="User Profile Picture"
    //               />
    //               <div>
    //                 <Link href={`/main/users/${items.username}`}>
    //                   <h1 className="text-lg font-semibold">
    //                     {items.username}
    //                   </h1>
    //                 </Link>
    //                 <p className="text-gray-500">@{items.username}</p>
    //               </div>
    //             </div>

    //             <Image
    //               className="rounded"
    //               height={400}
    //               width={400}
    //               src={items.postHash}
    //               alt="Description of the image"
    //             />

    //             <div className="flex p-2 gap-2 mt-4">
    //               <Button onClick={() => call(items.postId)} className="">
    //                 <Heart />
    //               </Button>

    //               <Dialog>
    //                 <DialogTrigger asChild>
    //                   <Button variant="outline" className="bg-slate-400">
    //                     <MessageCircle />
    //                   </Button>
    //                 </DialogTrigger>
    //                 <DialogContent className="sm:max-w-[425px]">
    //                   <DialogHeader>
    //                     <DialogTitle>Edit profile</DialogTitle>
    //                   </DialogHeader>
    //                   <div className="grid gap-4 py-4 ">
    //                     <Comments _postId={items.postId} />
    //                   </div>
    //                   <DialogFooter>

    //                   </DialogFooter>
    //                 </DialogContent>
    //               </Dialog>
    //             </div>
    //             <div>
    //               <p>Likes: {parseInt(items.likes, 16)}</p>
    //             </div>
    //             <div className="container w-full items-center">
    //               <p className="mb-4  ">{items.content}</p>
    //             </div>
    //           </div>
    //         </div>

    //       ))
    //     )}

    //   </main>
    // </div>
  );
}

export default UserPost;
