// "use client";
import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div>
      <div className="h-screen w-full grid grid-cols-2 gap-1">
        <div className="bg-black col-span-1">hello1</div>
        <div className="bg-black col-span-1">hello2</div>
      </div>
    </div>
  );
};

export default Loader;
