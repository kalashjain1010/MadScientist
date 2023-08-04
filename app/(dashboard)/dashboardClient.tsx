"use client";

import { post } from "@/types";
import Image from "next/image";
import React from "react";
import { BsFolderPlus } from "react-icons/bs";

interface DashboardClientProps {
  data: post[];
}
const DashboardClient: React.FC<DashboardClientProps> = ({ data }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 mt-10">
        {data.map((post) => (
          <div key={post.url}>
            label: {post.label}
            <Image src={post.url} alt="post" width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardClient;
