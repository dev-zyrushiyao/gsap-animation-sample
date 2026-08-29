import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function BlockSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .set(".side , #shadow", { opacity: 0 })
        .from("#block-animate #top", {
          scale: 0,
          transformOrigin: "50% 50%",
        })
        .set(".side , #shadow", { opacity: 1 })
        .to("#block-animate", { y: -200, ease: "back(2)" })
        .to("#shadow", { scaleX: -1.9, ease: "back(2)" }, "<");
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        width={713}
        height={699}
        viewBox="0 0 713 699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={713} height={699} fill="white" />
        <rect
          id="shadow"
          width={100}
          height={100}
          transform="matrix(0.866025 -0.5 0.866025 0.5 270 496)"
          fill="#434343"
        />
        <g id="block" overflow={"visible"}>
          <mask
            id="mask0_3650_10045"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={270}
            y={154}
            width={174}
            height={392}
          >
            <g id="Vector">
              <path d="M270 496H357V154H270V496Z" fill="#1E6C2A" />
              <path d="M357 496H444V154H357V496Z" fill="#1E6C2A" />
              <path
                d="M270 496L356.603 546L443.205 496L356.603 446L270 496Z"
                fill="#1E6C2A"
              />
            </g>
          </mask>
          <g mask="url(#mask0_3650_10045)">
            <g id="block-animate">
              <rect
                className="side side-left"
                x={270}
                y={496}
                width={87}
                height={342}
                fill="#4B5467"
              />
              <rect
                className="side side-right"
                x={357}
                y={496}
                width={87}
                height={342}
                fill="#61B6DA"
              />
              <rect
                id="top"
                width={100}
                height={100}
                transform="matrix(0.866025 -0.5 0.866025 0.5 270 496)"
                fill="#5E9EC7"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
