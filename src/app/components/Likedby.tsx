import { CONTRACT_ADDRESS } from "@/lib/address";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";

function Likedby({ _postId }: { _postId: String }) {
  const { contract } = useContract(CONTRACT_ADDRESS);
   const { data, isLoading } = useContractRead(contract, "likedBy", [_postId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        data?.map((Likedby: any) => (
          <div className="">
            <p>{Likedby}</p>
          </div>
        ))
        // <div>hello</div>
      )}
    </div>
  );
}

export default Likedby;
