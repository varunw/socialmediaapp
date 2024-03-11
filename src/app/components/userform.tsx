// pages/UserRegistrationForm.js
"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/lib/address";
import toast from "react-hot-toast";
import { Button } from "./ui/Button";
import { addUserName } from "@/lib/action";

const UserRegistrationForm = () => {
  const [username, setIsusername] = useState("");
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
  const { mutateAsync: registerUser, isLoading } = useContractWrite(
    contract,
    "registerUser"
  );
  const handleSubmit = async () => {
    try {
      const data = await registerUser({ args: [username] });
      toast.success("User added");
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div className="b h-screen flex items-center justify-center bg-black ">
      <div className="bg-slate-800 p-8 rounded shadow-md w-96  ">
        <h2 className="text-2xl font-semibold mb-4">User Registration</h2>

        {/* Form */}
        <form action={addUserName} method="post">
          {/* Username input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black text-sm font-bold mb-2"
            >
              Username
            </label>
            <Input
              onChange={(e) => setIsusername(e.target.value)}
              value={username}
              disabled={!address}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input type="text" hidden readOnly value={address} name="address" id="address"/>
          </div>

          {/* Submit button */}
          <Button
          type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={async () => await handleSubmit()}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
