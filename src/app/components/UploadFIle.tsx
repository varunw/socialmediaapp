import { ArrowUpFromLine, Upload } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function UploadFIle() {
  return (
    <Label
      htmlFor="fileUpload"
      className="bg-transparent text-white text-base rounded w-72 h-52 flex flex-col items-center justify-center cursor-pointer border-2  border-dashed mx-auto font-[sans-serif] hover:border-solid"
    >
     
      <ArrowUpFromLine size={48} className="text-white mb-1" />
      Upload 
      <Input multiple type="file" id="fileUpload" className="hidden" />
      <p className="text-xs texr- mt-2">
         your photos and videos
      </p>
    </Label>
  );
}


export default UploadFIle;
