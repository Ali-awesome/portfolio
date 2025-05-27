import React from "react";
import Sidebar from "@/app/components/Sidebar";

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-row items-center justify-end">
      <h1>About Me</h1>
      <img className="w-2xl h-1/2" src="/images/Doodle1.png" alt="My Photo" />
      <div>
        <h3></h3>
        <p></p>
      </div>
      <hr />
      <p></p>
      <hr />
      <div>
        <p></p>
      </div>
      <hr />
      <button></button>
    </section>
  );
};

export default About;
