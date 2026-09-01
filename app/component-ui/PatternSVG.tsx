import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function PatternSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to("#stripe", {
        paused: false,
        repeat: -1,
        duration: 5,
        ease: "none",
        attr: { patternTransform: "scale(1) rotate(45) translate(100 , 0)" },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        id="stripe-pattern"
      >
        <defs>
          <pattern
            id="stripe"
            viewBox="0 0 39.89 100"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="none"
            width={50}
            height={50}
            patternTransform="scale(1) rotate(45) translate(0 , 0)"
          >
            <rect
              id="stripe-yellow"
              width={20}
              height={100}
              style={{
                fill: "rgb(226, 216, 56)",
              }}
            />
            <rect
              id="stripe-black"
              width={19.895}
              height={100}
              style={{}}
              x={19.995}
            />
            <ellipse
              style={{
                fill: "rgb(255, 255, 255)",
              }}
              cx={10}
              cy={10}
              rx={4}
              ry={10}
            />
          </pattern>
          <pattern
            id="box-pattern"
            href="#stripe"
            patternTransform="matrix(1, 0, 0, 1, 200.000006, 200.000006)"
          />
          <pattern
            id="text-pattern"
            href="#stripe"
            patternTransform="matrix(1, 0, 0, 1, 199.982828, 287.167214)"
          />
        </defs>
        <rect
          y={0.483}
          width={498.815}
          height={499.517}
          style={{
            stroke: "rgb(0, 0, 0)",
            fill: "rgb(57, 56, 56)",
          }}
        />
        <rect
          x={150}
          y={200}
          width={200}
          height={100}
          style={{
            stroke: "rgb(0, 0, 0)",
            fill: "url(#stripe)",
          }}
        />
        <text
          style={{
            fill: "url(#stripe)",
            fontFamily: "Arial, sans-serif",
            fontSize: 28,
            whiteSpace: "pre",
          }}
          x={132.287}
          y={347.11}
        >
          {"STRIPE PATTERN"}
        </text>
      </svg>
    </div>
  );
}
