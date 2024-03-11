"use client";
import {
  useAddress,
  useConnect,
  useContract,
  useContractWrite,
  useStorageUpload,
} from "@thirdweb-dev/react";
import React, { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { CONTRACT_ADDRESS } from "@/lib/address";
import { Label } from "./ui/label";
import { ArrowUpFromLine } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "./ui/Button";

function UploadForm() {
  const [isfiles, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutateAsync: upload } = useStorageUpload();
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const retriveFile = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.files;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const file = data[i];
        setFiles((prev) => [...prev, file]);
        setFileNames((prev) => [...prev, file.name]);
      }
    }
    e.preventDefault();
  };

  const uploadFile = async () => {
    const Url = await upload({
      data: isfiles,
      options: {
        uploadWithGatewayUrl: true,
      },
    });
    return Url;
  };

  const { mutateAsync: createPost, isLoading } = useContractWrite(
    contract,
    "createPost"
  );

  const handleSubmit = async () => {
    const hash = await uploadFile();
    const uri = hash[0];
    try {
      const data = await createPost({ args: [title, uri] });
      toast.success("post created");
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="flex flex-col justify-normal items-center gap-10 mt-[5rem]">
      <Label
        htmlFor="fileUpload"
        className="bg-transparent text-white text-base rounded w-72 h-52 flex flex-col items-center justify-center cursor-pointer border-2  border-dashed mx-auto font-[sans-serif] hover:border-solid"
      >
        <ArrowUpFromLine size={48} className="text-white mb-1" />
        Upload
        <Input
          multiple
          type="file"
          id="fileUpload"
          className="hidden"
          disabled={!address}
          onChange={retriveFile}
        />
        <p className="text-xs texr- mt-2">your photos and videos</p>
      </Label>
      <div className="flex flex-col text-stone-950 text-center ">
        Title
        <Input
          onChange={(e) => setTitle(e.target.value)}
          disabled={!address}
          value={title}
          type="text"
          name="title"
          id=""
          placeholder={address ? "Enter Title" : "Connect Wallet"}
          className="outline-none w-[800px]  placeholder: text-center bg-transparent border-2 text-white"
        />
      </div>
      {/* <div className="flex flex-col text-stone-950 text-center ">
        Description
        <Input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          disabled={!address}
          type="textarea"
          name="title"
          id=""
          placeholder={address ? "Enter description" : "Connect Wallet"}
          className="outline-1 w-[1000px] h-[200px] placeholder: text-center bg-transparent  border-2 text-white"
        />
      </div> */}
      <Button type="submit" disabled={!address} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default UploadForm;
