"use client";

import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between">
      {/* Top Logo */}
      <div className="flex items-center justify-between gap-3 pt-8 md:justify-normal">
        <div className="">Logo</div>
        <h1 className="text-2xl font-extrabold">Topline</h1>
        <button
          className="rounded-full bg-gray-100 p-3 hover:bg-blue-100 md:hidden"
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* Links */}
      <div className="mt-8 flex-grow">Liks here</div>

      {/* footer */}
      <footer className="text-center text-xs text-gray-500">
        Topline&copy; 2024{" "}
      </footer>
    </div>
  );
}
