import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
function Navbar() {
  return (
    <div className="w-full h-[65px] border border-solid border-zinc-600 border-2 bg-[#eefaf8]">
      <div className=" p-2 flex flex-row">
        <div className="p-2 h-30">logo</div>
        <div className="w-[800px]">
          <div className="absolute ml-[85px] mt-3 ">
            <BsSearch />
          </div>
          <input
            className="h-10 border border-black w-full ml-20 mr-2 rounded-lg "
            type="text"
            name="name"
            placeholder="      Search"
          />
        </div>
        <div>
          <button className="p-2 ml-[90px] border bg-[#10776b] text-white border-r-2 rounded-lg flex flex-row">
            <AiOutlinePlus />
            add projection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
