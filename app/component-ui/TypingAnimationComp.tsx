"use client";

import React, { useRef } from "react";

import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function TypingAnimationComp() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to("#dynamic-text", {
        text: {
          value: "I love Cheese",
          delimiter: "",
        },
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        duration: 1.5,
        ease: "linear",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-green-200 p-5 text-center">
      <h3
        id="dynamic-text"
        className="text-5xl text-center font-sans inline-block bg-amber-200 w-100"
      >
        Favorite food?
      </h3>
    </div>
  );
}
