"use client";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import toast from "react-hot-toast";
import { CONTRACT_ADDRESS } from "@/lib/address";

function Comments({ _postId }: { _postId: String }) {
  const [comment, setComment] = useState("");
  const { contract } = useContract(CONTRACT_ADDRESS);

  const { mutateAsync: addComment, isLoading: writeIsLoading } =
    useContractWrite(contract, "addComment");
  const handleAddComment = async () => {
    try {
      const data = await addComment({ args: [_postId, comment] });
      if (data) toast.success("Comment Added");
      console.info("contract call success", data);

      // Optionally, you can reset postId and comment state after successful addition
    } catch (err: any) {
      toast.error("something wrong", err.message);
      console.error("contract call failure", err);
    }
  };
  const allcomments = useContractRead(contract, "getComments", [_postId]);
  console.log(allcomments.data);

  return (
    <div className="">
      <ScrollArea className="">
        <div className="">
          <div className="  ">
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              type="text"
              className="border bg-slate-700 border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Enter your comment..."
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Post
            </button>
          </div>
        </div>
        <h1 className="">Comments</h1>
        <h1 className=" ">
          {allcomments.isLoading ? (
            <p>Loading..</p>
          ) : (
            allcomments.data?.map((comment: any) => (
              <div className="">
                <p>{comment.username}</p>
                <p>{comment.comment}</p>
              </div>
            ))
            // <div>hello</div>
          )}
        </h1>
      </ScrollArea>
    </div>
  );
}

export default Comments;
