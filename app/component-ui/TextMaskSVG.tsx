import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function TextMaskSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set("#text-caption", { opacity: 1, x: -500 });
      gsap.to("#text-caption", {
        x: 500,
        duration: 9,
        repeat: -1,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 300"
        width={500}
        height={500}
      >
        <defs>
          <style>
            {
              "@import url(https://fonts.googleapis.com/css2?family=Bakbak+One%3Aital%2Cwght%400%2C400&display=swap);"
            }
          </style>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            x1={250}
            y1={71.726}
            x2={250}
            y2={228.275}
            id="text-mask-gradient"
            gradientTransform="matrix(0, 3.193957, -3.193957, 0, 729.100362, -643.596583)"
          >
            <stop offset={0} style={{}} />
            <stop
              offset={0.095}
              style={{
                stopColor: "rgb(255, 255, 255)",
              }}
            />
            <stop
              offset={0.497}
              style={{
                stopColor: "rgb(255, 255, 255)",
              }}
            />
            <stop
              offset={0.895}
              style={{
                stopColor: "rgb(255, 255, 255)",
              }}
            />
            <stop offset={1} style={{}} />
          </linearGradient>
          <mask id="mask-0">
            <rect
              id="text-mask"
              y={71.726}
              width={500}
              height={156.549}
              style={{
                stroke: "rgb(0, 0, 0)",
                fill: "url(#text-mask-gradient)",
              }}
            />
          </mask>
        </defs>
        <g
          style={{
            mask: "url(#mask-0)",
          }}
        >
          <text
            id="text-caption"
            opacity={0}
            style={{
              fill: "rgb(51, 51, 51)",
              fontFamily: "&quot",
              fontSize: "46.5px",
              whiteSpace: "pre",
            }}
            x={75.542}
            y={166.307}
          >
            {"ANIMATED TEXT"}
          </text>
        </g>
      </svg>
    </div>
  );
}
