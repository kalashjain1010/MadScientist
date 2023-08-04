'use client'

import React, { useState } from "react";
import { BsFolderPlus } from "react-icons/bs";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/firebase";

interface FileUploadProps{
    setFile: (file: File) => void
    setFileName: (name: string) => void
}


const FileUpload: React.FC<FileUploadProps> = ({setFile, setFileName}) => {
  const uploadFile = () => {};
//   const onChange =(event:React.ChangeEvent<HTMLInputElement>) => {
//     const storageRef = ref(storage, event.target.value);

//     if(! event.target.files?.[0] ) {return};
//     uploadBytes(storageRef,event.target.files[0]).then((snapshot) => {
//       console.log('Uploaded an array!');
//     });
//   }

  const onChange =(event:React.ChangeEvent<HTMLInputElement>) => {
    if(! event.target.files?.[0] ) {return};
    setFile(event.target.files[0])
    setFileName(event.target.value)
  }

  return (
    <div className="flex justify-center items-center mt-52 flex-col gap-y-4">
      <BsFolderPlus size="3rem" />

      <input
        className="bg-[#10776b] p-2 rounded-md text-white text-sm"
        type="file"
        onChange={onChange}
      />
    </div>
  );
}

export default FileUpload;