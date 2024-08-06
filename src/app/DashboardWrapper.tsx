import React from "react";
import Navbar from "@/app/(components)/Navbar/page";
import Sidebar from "@/app/(components)/SideBar/page";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-h-screen w-full bg-gray-50 text-gray-900 light`}>
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}
