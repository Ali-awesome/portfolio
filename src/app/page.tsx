import React from "react";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";

export default function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 min-h-screen">
        <Profile />
      </div>
    </div>
  );
}
