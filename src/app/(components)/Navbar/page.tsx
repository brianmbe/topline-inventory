"use client";

import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`flex justify-between items-center w-full mb-7`}>
      {/* left */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
        {/* search */}
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 rounded-full bg-white focus:outline-none focus:border-blue-500"
            type="search"
            placeholder="Search by groups or products......."
          />
          <div className="absolute flex inset-y-0 left-0 pl-3 items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className={`cursor-pointer text-gray-500`} size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center px-[0.4rem] py-1 font-semibold leading-none text-red-100 bg-red-700 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">Profile</div>{" "}
            <span className="font-semibold">Brian</span>
          </div>
        </div>
        <Link href={"/settings"}>
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
}
