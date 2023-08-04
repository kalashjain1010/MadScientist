"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FileUpload from "./FileUpload";

const AddProjectionClient = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()
  // console.log(show);
  return (
    <div
      className={`grid ${
        show ? "grid-cols-1" : "grid-cols-2"
      } rounded-xl border border-slate-300/80 shadow-xl relative min-h-[60vh] max-w-[60vw] m-auto bg-white`}
    >
      <div onClick={() => router.push('/')} className="absolute top-3 right-3 text-slate-600 hover:cursor-pointer hover:text-black">
        <AiOutlineClose size={'1.5rem'} />
      </div>
      <div className={`${show ? "block" : "hidden"} p-6`}>
        <div
          onClick={() => setShow(false)}
          className="flex flex-row gap-x-2 items-center hover:cursor-pointer group"
        >
          <div className="relative h-6 w-6">
            <Image
              src={"/images/icon.svg"}
              alt="icon"
              fill
              className="object-cover group-hover:opacity-70"
            />
          </div>
          <div className="group-hover:opacity-70">What is projection ?</div>
        </div>
        <div>

            {/* display content here in this div noob */}

        </div>
      </div>
      <div
        className={`border-r-2 border-slate-300/80 p-6 ${
          show ? "hidden" : "block"
        }`}
      >
        <div
          onClick={() => setShow(true)}
          className="flex flex-row gap-x-2 items-center hover:cursor-pointer group"
        >
          <div className="relative h-6 w-6">
            <Image
              src={"/images/icon.svg"}
              alt="icon"
              fill
              className="object-cover group-hover:opacity-70"
            />
          </div>
          <div className="group-hover:opacity-70">What is projection ?</div>
          </div>
          <div className="flex justify-center mt-52 ">
            <FileUpload />
        </div>
      </div>
      <div className={`p-6 ${show ? "hidden" : "block"}`}>grid2</div>
    </div>
  );
};
export default AddProjectionClient;
