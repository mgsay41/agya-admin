import React, { useState } from "react";
import {
  Search,
  Plus,
  ListFilter,
  Bell,
  FileText,
  Calendar,
  FilePlus,
} from "lucide-react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [postOpen, setPostOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <>
        {postOpen === true ? (
          <div className=" z-[1000] absolute bg-black/40 w-[1340px] h-[110vh] left-0 -top-[4px]  ">
            <div className=" bg-white flex flex-col py-4 px-4 justify-center top-[25%] absolute left-[30%] items-center">
              <div className=" relative border-main border p-4">
                <div
                  onClick={() => setPostOpen(false)}
                  className="my-2 w-fit cursor-pointer text-right float-right bg-main rounded-full py-[4px] px-3 text-white"
                >
                  X
                </div>
                <h3 className=" text-xl font-medium mt-10 text-center">New Post</h3>
                <textarea className=" border border-black mt-4 resize-none w-[500px] h-32 ">
                  {" "}
                </textarea>
                <div className=" flex justify-center items-center">
                <button className=" block  bg-main text-white py-2 px-10 my-4 rounded-xl ">Post</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <header className="w-full py-3 ">
          <div className=" flex items-center justify-between gap-4">
            {/* Centered Search Bar */}
            <div className="flex-1 max-w-xl flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-main" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-secondary text-main rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-main placeholder-gray-500"
                />
              </div>
            </div>
  
            {/* Right Section */}
            <div className="flex items-center gap-2 relative">
              {/* New Button */}
              <button
                className="hidden sm:flex items-center px-9 py-[10px] bg-main text-white rounded-xl hover:bg-opacity-90 relative"
                onClick={toggleDropdown}
              >
                <Plus className="w-5 h-5" />
                <span>New</span>
              </button>
  
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-14 pb-4 right-0 w-48 bg-main text-white rounded-xl shadow-lg z-50">
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 right-24 w-4 h-4 bg-main transform rotate-45"></div>
                  {/* Dropdown Items */}
                  <div
                    className="flex items-center cursor-pointer gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
                    onClick={() => setPostOpen(true)}
                  >
                    <FileText className="w-5 h-5" />
                    <span>New Post</span>
                  </div>
                  <hr className="border-t border-gray-300 w-11/12 mx-auto" />
                  <a
                    href="/new-article"
                    className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
                  >
                    <FilePlus className="w-5 h-5" />
                    <span>New Article</span>
                  </a>
                  <hr className="border-t border-gray-300 w-11/12 mx-auto" />
                  <a
                    href="/activity/new-activity"
                    className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-opacity-90"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>New Activity</span>
                  </a>
                  <hr className="border-t border-gray-300 w-11/12 mx-auto" />
                </div>
              )}
            </div>
          </div>
        </header>
      </>
  )
}
