"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    const hoverables = document.querySelectorAll(".hover-target");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Background circle expanding on hover */}
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          scale: isHovered ? 5 : 1,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 border-2 border-gray-700 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-gray-700 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
// "use client";

// import {
//   motion,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import React, { useState, useEffect } from "react";

// export default function CursorFollower() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const springConfig = { damping: 50, stiffness: 1000 };
//   const cursorX = useSpring(mouseX, springConfig);
//   const cursorY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     const enter = () => setIsHovered(true);
//     const leave = () => setIsHovered(false);

//     window.addEventListener("mousemove", handleMouseMove);
//     const hoverables = document.querySelectorAll(".hover-target");
//     hoverables.forEach((el) => {
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     hoverables.forEach((el) => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//       });
//   };
//  }, []);

//   return (
//     <>
//       <motion.div
//         className="custom-cursor"
//         style={{
//           translateX: cursorX,
//           translateY: cursorY,
//           scale: isHovered ? 5 : 1,
//         }}
//       />
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 border-2 border-gray-700 rounded-full"
//         style={{
//           x: cursorX,
//           y: cursorY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />

//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-gray-700 rounded-full"
//         style={{
//           x: mouseX,
//           y: mouseY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />
//     </>
//   );
// }
