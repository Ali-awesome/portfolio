"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfilePic: React.FC = () => {
  return (
    <div>
      <motion.div
        className="ms-[70px] w-[300px] h-[300px] border-8 border-gray-700 overflow-hidden relative rounded-full"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/Doodle1.png"
          alt="Profile"
          width={350}
          height={350}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default ProfilePic;
