import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 h-screen bg-white border-r-1 border-r-gray-300 px-8 flex flex-col items-center">
      <div className="my-auto grid gap-[50px]">
        <div className="flex flex-col s:flex-row items-start justify-center w-full px-8">
          <h1 className="text-3xl font-extrabold tracking-wide">SANAULLAH</h1>
          <nav className="mt-10 flex flex-col gap-3 text-[#767676] font-medium">
            {["Home", "About", "Service", "Portfolio", "Blogs", "Contact"].map(
              (item) => (
                <a href={`#${item.toLowerCase()}`} className="hover:text-black">
                  {item}
                </a>
              )
            )}
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
