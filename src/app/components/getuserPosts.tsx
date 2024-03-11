"use client";
import { CONTRACT_ADDRESS } from "@/lib/address";
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Comments from "./comments";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/Button";
import { Heart, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Likedby from "./Likedby";

function UserPosts() {
  const session = useSession();
  const imgUrl = session.data?.user.image;
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
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
                      <DialogFooter>
                        
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="">
                
                </div>
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
    //   <main className="flex min-h-screen flex-col p-1 justify-center items-center bg-black  ">
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
    //               <Button
    //                 onClick={() => call(items.postId)}
    //                 className="bg-white"
    //               >
    //                 <Heart />
    //               </Button>

    //               {/* <button className="flex items-center mr-4 text-gray-500 hover:text-blue-500"> */}
    //               {/* <svg
    //                   className="w-5 h-5 mr-1"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   viewBox="0 0 24 24"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M6 3C6 1.34315 7.34315 0 9 0C10.6569 0 12 1.34315 12 3C12 4.6 9 9 9 9C9 9 6 4.6 6 3Z"
    //                   ></path>
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M19 7V21H5V7H19Z"
    //                   ></path>
    //                 </svg> */}
    //               {/* </button> */}
    //               <Dialog>
    //                 <DialogTrigger asChild>
    //                   <Button variant="outline">
    //                     <MessageCircle />
    //                   </Button>
    //                 </DialogTrigger>
    //                 <DialogContent className="sm:max-w-[425px]">
    //                   <DialogHeader>
    //                     <DialogTitle>Edit profile</DialogTitle>
    //                   </DialogHeader>
    //                   <div className="grid gap-4 py-4">
    //                     <Comments _postId={items.postId} />
    //                   </div>
    //                   <DialogFooter>
    //                     <Button type="submit">Save changes</Button>
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
    //         // <div>
    //         //   <h1>name: {items.content}</h1>
    //         //   <h1>name: {items.username}</h1>
    //         //   <div>
    //         //     <img src={items.postHash} alt="Description of the image" />
    //         //     Name: {items.postHash}
    //         //   </div>
    //         // </div>
    //       ))
    //     )}
    //     {/* <div className="bg-gray-100 h-screen flex items-center justify-center w-fit bg-transparent">
    //       <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
    //         <div className="mb-4">
    //           <div className="text-gray-700">

    //           </div>
    //         </div>

    //         <div className="flex justify-between items-center">
    //           <div className="flex space-x-4">
    //             <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
    //               <svg
    //                 className="w-5 h-5"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3M5 3C5 3.55228 4.55228 4 4 4C3.44772 4 3 3.55228 3 3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3ZM3 10V20C3 20.5523 3.44772 21 4 21H9L11 23L13 21H20C20.5523 21 21 20.5523 21 20V10H3ZM5 3V8H19V3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3V8H7V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3Z"
    //                 ></path>
    //               </svg>
    //               <span>Like</span>
    //             </button>

    //             <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
    //               <svg
    //                 className="w-5 h-5"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M21 10H3M21 6H3M21 14H3M21 18H3"
    //                 ></path>
    //               </svg>
    //               <span>Comment</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="flex flex-col justify-center items-center border-2 border-black m-auto w-fit gap-7 p-5">
    //       <div>hello</div>
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>{" "}
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>{" "}
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>
    //     </div> */}
    //   </main>
    // </div>
    // <div className="">
    //   <main className="flex min-h-screen flex-col p-1 justify-center items-center bg-black  ">
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
    //                     <Button type="submit">Save changes</Button>
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
    // <div>
    //   <h1>name: {items.content}</h1>
    //   <h1>name: {items.username}</h1>
    //   <div>
    //     <img src={items.postHash} alt="Description of the image" />
    //     Name: {items.postHash}
    //   </div>
    // </div>
    //   ))
    // )}
    // {/* <div className="bg-gray-100 h-screen flex items-center justify-center w-fit bg-transparent">
    //   <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
    //     <div className="mb-4">
    //       <div className="text-gray-700">

    //       </div>
    //     </div>

    //     <div className="flex justify-between items-center">
    //       <div className="flex space-x-4">
    //         <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
    //           <svg
    //             className="w-5 h-5"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3M5 3C5 3.55228 4.55228 4 4 4C3.44772 4 3 3.55228 3 3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3ZM3 10V20C3 20.5523 3.44772 21 4 21H9L11 23L13 21H20C20.5523 21 21 20.5523 21 20V10H3ZM5 3V8H19V3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3V8H7V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3Z"
    //             ></path>
    //           </svg>
    //           <span>Like</span>
    //         </button>

    //         <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
    //           <svg
    //             className="w-5 h-5"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M21 10H3M21 6H3M21 14H3M21 18H3"
    //             ></path>
    //           </svg>
    //           <span>Comment</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //     </div>
    //     {/* <div className="flex flex-col justify-center items-center border-2 border-black m-auto w-fit gap-7 p-5">
    //       <div>hello</div>
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>{" "}
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>{" "}
    //       <div>hello</div> <div>hello</div> <div>hello</div> <div>hello</div>
    //     </div> */}
    //   </main>
    // </div>
  );
}

export default UserPosts;
