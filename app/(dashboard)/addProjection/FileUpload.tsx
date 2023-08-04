import React, { useState } from "react";
import { BsFolderPlus } from "react-icons/bs";

function FileUpload() {
  const [file, setFile] = useState(null);
  // console.log(e)
  const uploadFile = () => {};

  return (
    <div className="flex-col  justify-center">
      <BsFolderPlus size="3rem" />

      <input
        className="bg-[#10776b] p-2 rounded-md text-white text-sm"
        type="file"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
}

export default FileUpload;
