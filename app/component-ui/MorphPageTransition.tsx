import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(MorphSVGPlugin, GSDevTools);

export default function MorphPageTransition() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set(".middle, .pre-end, .end", { autoAlpha: 0 });
      const tlMorp1 = gsap.timeline({ defaults: { duration: 1 } });
      tlMorp1.to(".start", {
        morphSVG: ".middle",
        ease: "power1.in",
      });
      tlMorp1.to(".start", {
        duration: 0.5,
        morphSVG: ".pre-end",
        ease: "sine",
      });
      tlMorp1.to(".start", {
        morphSVG: ".end",
        ease: "power2.inOut",
      });
      tlMorp1.set(".frame-1", { autoAlpha: 0 });

      const tlMorp2 = gsap.timeline({
        defaults: { duration: 1 },
      });
      tlMorp2.to(".base", { morphSVG: ".middle", ease: "power1.in" });
      tlMorp2.to(".base", {
        duration: 0.5,
        morphSVG: ".pre-end",
        ease: "sine",
      });
      tlMorp2.to(".base", { morphSVG: ".end", ease: "power2.inOut" });
      tlMorp2.to(
        ".frame-2 , .frame-2 text",
        { duration: 0.5, autoAlpha: 1 },
        "-=0.3",
      );

      const masterTl = gsap.timeline({
        id: "SVG Shape Transition",
        repeat: -1,
        repeatDelay: 1,
        // duration: 2,
      });
      masterTl.add(tlMorp1);
      masterTl.add(tlMorp2, 1);

      GSDevTools.create({ animation: masterTl });
    },

    { scope: container },
  );

  return (
    <div ref={container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <g className="frame-1">
          <rect
            width={500}
            height={500}
            style={{
              fill: "rgb(81, 88, 203)",
            }}
          />
          <text
            style={{
              fill: "rgb(234, 234, 234)",
              fontFamily: "Arial, sans-serif",
              fontSize: 54,
              whiteSpace: "pre",
            }}
            x={59.982}
            y={266.63}
          >
            {
              "\u1710\u170C\u1714\u170D\u1713\u1710\u1714 \u1711\u1712\u170C\u170F\u1714"
            }
          </text>
        </g>
        <g
          className="transition-shape"
          style={{}}
          transform="matrix(1.398975, 0, 0, 1.134046, -99.487975, -93.831885)"
        >
          <path
            d="M -143.32 500.377 C -143.32 430.511 -149.37 -93.619 242.849 -93.619 C 636.923 -93.619 642.962 443.206 642.962 500.377 L 642.388 700 L -143.32 700 L -143.32 500.377 Z"
            style={{
              strokeWidth: 1,
              fill: "rgb(68, 68, 68)",
            }}
            className="end"
          />
          <path
            d="M -143.33 388.916 C -143.33 338.851 44.469 292.325 248.887 292.218 C 453.701 292.108 642.962 347.945 642.962 388.916 L 642.388 700 L -143.33 700 L -143.33 388.916 Z"
            style={{
              strokeWidth: 1,
              fill: "rgb(177, 110, 211)",
            }}
            className="pre-end"
          />
          <path
            d="M -0.366 500.377 C -0.366 430.511 119.141 291.422 249.225 291.271 C 379.561 291.119 500 443.206 500 500.377 L 499.634 700 L -0.366 700 L -0.366 500.377 Z"
            style={{
              fill: "rgb(187, 190, 190)",
            }}
            className="middle"
          />
          <path
            d="M -0.362 589.428 C -0.362 519.562 119.141 524.663 249.225 524.512 C 379.561 524.36 500 532.257 500 589.428 L 499.634 789.051 L -0.362 789.051 L -0.362 589.428 Z"
            style={{
              strokeWidth: 1,
              fill: "rgb(73, 224, 224)",
            }}
            className="start"
          />
          <path
            d="M -0.366 764.952 C -0.366 695.082 119.144 700.192 249.226 700.032 C 379.562 699.882 500.001 707.782 500.001 764.952 L 499.635 964.572 L -0.366 964.572 L -0.366 764.952 Z"
            style={{
              strokeWidth: 1,
              fill: "rgb(209, 217, 43)",
            }}
            className="base"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, 0, 0.000008)"
          className="frame-2"
          opacity={0}
        >
          <rect
            width={500}
            height={500}
            style={{
              fill: "rgb(209, 217, 43)",
            }}
          />
          <text
            opacity={0}
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 54,
              whiteSpace: "pre",
            }}
            x={105.997}
            y={268.518}
          >
            {"Zyrus Hiyao"}
          </text>
        </g>
      </svg>
    </div>
  );
}
