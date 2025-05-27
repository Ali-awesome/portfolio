import React from "react";
import ProfilePic from "@/app/components/ProfilePic"
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="flex flex-row items-center justify-end h-screen px-8 bg-transparent">
          <ProfilePic/>
          <div className="ms-6 mt-6 md:mt-0 md:ml-12 text-center md:text-left w-2/3">
            <h1 className="w-full text-4xl md:text-5xl font-extrabold tracking-wide uppercase">
              MOHAMMAD SANAULLAH
            </h1>
            <p className="text-gray-600 mt-4 max-w-md">
              As a passionate Data Scientist and Web Developer, I thrive at both
              data and development.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              <a
                href="https://www.facebook.com/mohammad.rabby.944"
                target="_blank"
              >
                <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://github.com/Ali-awesome/" target="_blank">
                <FaGithub className="hover:text-blue-400 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-sanaullah-1377a21ab/"
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
