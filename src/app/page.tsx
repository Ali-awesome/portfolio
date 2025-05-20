import React from "react";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Profile />
      </div>
    </div>
  );
}
