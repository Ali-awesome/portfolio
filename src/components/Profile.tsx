import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-8 bg-transparent">
      <div className="rounded-full overflow-hidden w-60 h-60 border-8 border-gray-300">
        <Image
          src="/profile.jpg" // Place the image in /public/profile.jpg
          alt="Profile"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase">
          MOHAMMAD SANAULLAH
        </h1>
        <p className="text-gray-600 mt-4 max-w-md">
          I am a Data Scientist and Web Developer and create features that are best
          suited for the job at hand.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaGithub className="hover:text-blue-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
