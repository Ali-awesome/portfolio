import React from "react";
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-80 h-screen bg-white border-r-1 border-r-gray-300 px-8 flex flex-col items-center sticky">
      <div className="my-auto grid gap-[50px]">
        <div className="flex flex-col s:flex-row items-start justify-center w-full px-8">
          <h1 className="text-3xl font-extrabold tracking-wide">SANAULLAH</h1>
          <nav className="mt-10  text-[#767676] font-medium">
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-black hover-target" href="\">Home</Link>
              </li>
              <li>
                <Link className="hover:text-black hover-target" href="\About">About</Link>
              </li>
              <li>
                <Link className="hover:text-black hover-target" href="\">Service</Link>
              </li>
              <li>
                <Link className="hover:text-black hover-target" href="\">Portfolio</Link>
              </li>
              <li>
                <Link className="hover:text-black hover-target" href="\">Blogs</Link>
              </li>
              <li>
                <Link className="hover:text-black hover-target" href="\">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-sm text-gray-500 w-full px-8">
          <p>© 2025 Tokyo</p>
          <p>
            Created by{" "}
            <span className="text-black font-semibold">Sanaullah</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
