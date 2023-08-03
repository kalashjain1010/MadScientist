"use client"
import React, { useRef, ChangeEvent } from "react";
import { BsFolderPlus } from "react-icons/bs";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore"; // Import Firestore SDK functions

function ProjectionPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Save the selected file to Firebase Firestore with a fixed userId of "12231"
      const firestore = getFirestore();
      const filesCollectionRef = collection(firestore, "files");

      const fileData = {
        name: selectedFile.name,
        size: selectedFile.size,
        userId: "12231", // Fixed userId for all documents
        // Add more properties if needed
      };

      // Add a new document with a custom ID using setDoc
      await setDoc(doc(filesCollectionRef, selectedFile.name), fileData);

      // Do something with the selected file, like reading its content or uploading it
      console.log(selectedFile);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="m-20 w-[60%] h-[550px] ml-96 border border-black rounded-lg flex flex-row">
      <div className="flex flex-r border border-r-4">
        <div className="ml-[20px] mr-[150px] ">
          <div className="mt-2">~~what is projection?</div>
          <div className="mt-[250px] ml-[150px] ">
            <div className="h-20">
              <BsFolderPlus size="3em" />
            </div>
            <button
              className="border p-2 text-white rounded-lg bg-[#10776b]"
              onClick={handleButtonClick}
            >
              Select Input
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      </div>
      <div>sdf</div>
    </div>
  );
}

export default ProjectionPage;
