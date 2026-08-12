import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, GSDevTools);

export default function HouseSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set("#house", { transformOrigin: "center" });
      const houseTween: gsap.core.Tween = gsap.from("#house", {
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        attr: {
          d: "M99.712 399.987L100 398.071 300 396.143 500 398.071 500 400z",
        },
        ease: "back",
        duration: 1.5,
      });

      // GSDevTools.create({ animation: houseTween });
    },
    { scope: container },
  );

  return (
    <svg
      ref={container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      width={1000}
      height={1000}
    >
      <g>
        <path
          id="house"
          d="M99.712 399.309L100 300 300 200 500 300 500 400z"
          fill="none"
          stroke="#000"
          strokeWidth="15px"
          strokeLinejoin="miter"
        />
        <line
          x1="99.5"
          y1="399"
          x2="500"
          y2="399"
          stroke="black"
          strokeLinecap="square"
          strokeWidth="17px"
        ></line>
      </g>
    </svg>
  );
}
