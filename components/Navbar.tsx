'use client'

import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="w-full border-2 bg-[#eefaf8] py-6 border-slate-400/40 drop-shadow-md px-4">
      <div className="flex flex-row items-center">
        <div className="relative">
            <Image src="/images/logo.svg" alt="logo" width={200} height={200} className="object-cover"/>
        </div>
        <div className="w-[800px]">
          <div className="absolute ml-[85px] mt-3 px-2">
            <BsSearch />
          </div>
          <input
            className="h-10 border border-slate-400 w-full ml-20 mr-2 rounded-lg pl-10"
            type="text"
            name="name"
            placeholder="Search"
          />
        </div>
        <div>
          <button onClick={() => router.push('/addProjection')} className="p-2 ml-[90px] border bg-[#10776b] text-white border-r-2 rounded-lg flex flex-row items-center gap-x-2">
            <AiOutlinePlus />
            <p className="text-sm font-semibold">Add projection</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
