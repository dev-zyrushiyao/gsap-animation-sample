"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function AnimatedNavbar() {
  const container = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.defaults({ duration: 0.5, ease: "power1.inOut" });
    },
    { scope: container },
  );

  const handleMouseEnter = contextSafe((e: React.MouseEvent) => {
    const item = e.currentTarget;

    gsap.to(item.querySelector(".menu"), {
      scale: 1.2,
      x: 24,
      color: "#FFFFFF",
    });
    gsap.to(item.querySelector(".dot"), { backgroundColor: "#FFFFFF" });
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent) => {
    const item = e.currentTarget;
    gsap.to(item.querySelector(".menu"), { scale: 1, x: 0, color: "#6a7282" });
    gsap.to(item.querySelector(".dot"), { backgroundColor: "#6a7282" });
  });

  const mainMenu: string[] = ["Home", "Portfolio", "Contact"];

  return (
    <div ref={container} className="bg-black flex flex-col gap-3.5 p-5">
      {mainMenu.map((value) => {
        return (
          <div
            key={value}
            className="nav-menu flex flex-row gap-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dot bg-[#6a7282] border-2 rounded-full h-12 w-12"></div>
            <div className="menu text-[#6a7282] text-5xl">{value}</div>
          </div>
        );
      })}
    </div>
  );
}
