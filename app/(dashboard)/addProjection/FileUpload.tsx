import React, { useState } from "react";
import { BsFolderPlus } from "react-icons/bs";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/firebase";


function FileUpload() {
  const [file, setFile] = useState(null);
  // console.log(e)
  const uploadFile = () => {};
  const onChange =(event:React.ChangeEvent<HTMLInputElement>) => {
    const storageRef = ref(storage, event.target.value);

    if(! event.target.files?.[0] ) {return};
    uploadBytes(storageRef,event.target.files[0]).then((snapshot) => {
      console.log('Uploaded an array!');
    });
  }

  return (
    <div className="flex-col  justify-center">
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
