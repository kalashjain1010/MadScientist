"use client";

import FileUpload from "@/components/FileUpload";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "@/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const AddProjectionClient = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [projection, setProjection] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    if (!file) {
      return;
    }
    e.preventDefault();

    try {
      const storageRef = ref(storage, fileName);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, "posts"), {
        label: projection,
        url: url,
      });

      setFileName("");
      setProjection("");
      setFile(null);

      toast.success("Projection added");
      router.push('/')
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
    } finally {
      
    }
  };

  const router = useRouter();

  return (
    <form onSubmit={onSubmit}>
      <div
        className={`grid ${
          show ? "grid-cols-1" : "grid-cols-2"
        } rounded-xl border border-slate-300/80 shadow-xl relative min-h-[60vh] max-w-[60vw] m-auto bg-white`}
      >
        <div
          onClick={() => router.push("/")}
          className="absolute top-3 right-3 text-slate-600 hover:cursor-pointer hover:text-black"
        >
          <AiOutlineClose size={"1.5rem"} />
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
          <div className="p-6">
            <p className="mb-2">Files / Media uploaded to MadScientist are referred to as "Projections" . A Projection can be anything you wish to upload on the MadScientist platform to show your interest in Science & Technology.</p>
            <p className="mt-8">The following are the file types & sizes a Projection can accept :</p>
            <p className="mt-5">rightPointingHandImage : PNG, JPEG/JPG, GIF - Max file size - 7 MB</p>
            <p>Video : MP4, MOV, MPEG, WEBM - Max file size - 60 MB</p>
            <p>Audio : MP3, AAC - Max file size - 10 MB</p>
            <p>Document: PDF - Max file size - 12 MB</p>
            <p>3D : GLB , GLTF (For a better user experience, please convert your other type 3D files into canvas ready GLTF/GLB 3D files and upload them to MadScientist ) - Max file size - 100 MB</p>
            <p className=" mt-24 ">Note: You can upload one type of projection at a time. We are trying to improve this.</p>
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
          <div className="">
            <FileUpload setFileName={setFileName} setFile={setFile} />
          </div>
        </div>
        <div
          className={`p-6 ${
            show ? "hidden" : "block"
          } flex justify-between flex-col items-start`}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your projection here..."
              className="border-transparent focus:outline-none"
              onChange={(e) => setProjection(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={projection.length === 0}
            className="disabled:opacity-70 disabled:cursor-not-allowed border border-slate-500 py-2 px-4 bg-[#11776a] text-white font-semibold text-sm rounded-lg hover:opacity-80 transition"
          >
            Project
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProjectionClient;
