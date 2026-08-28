import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function BlockSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set("#block", { opacity: 1, y: 230 });
      gsap.set("#shadow", {
        opacity: 1,
        scale: 0,
        transformOrigin: "100% 0%",
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          defaults: { ease: "power1", duration: 1 },
        })
        .to("#block", { y: 0 })
        .to("#shadow", { scale: 1 }, "<");
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        width={500}
        height={699}
        viewBox="0 0 500 699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1593">
          <rect width={500} height={699} fill="white" />
          <g id="block-group">
            <mask
              id="mask0_3650_10045"
              style={{
                maskType: "alpha",
              }}
              maskUnits="userSpaceOnUse"
              x={191}
              y={256}
              width={118}
              height={254}
            >
              <g id="block-mask">
                <path
                  d="M191 497.005H249.8V256.005H191V497.005Z"
                  fill="#76B273"
                />
                <path
                  d="M249.797 496.997H308.997V255.997H249.797V496.997Z"
                  fill="#76B273"
                />
                <path
                  d="M191 497L249.791 510L309 497L249.791 485.5L191 497Z"
                  fill="#76B273"
                />
              </g>
            </mask>
            <g mask="url(#mask0_3650_10045)">
              <g id="block" opacity={0}>
                <rect
                  id="side-left"
                  x={191}
                  y={269.258}
                  width={59}
                  height={241}
                  fill="#31384C"
                />
                <path
                  id="side-right"
                  d="M249.797 269.258H308.997V510.258H249.797V269.258Z"
                  fill="#707C9A"
                />
                <path
                  id="top"
                  d="M191 269.258L249.791 256.258L309 269.258L249.791 280.758L191 269.258Z"
                  fill="#D9D9D9"
                />
              </g>
            </g>
          </g>
          <path
            opacity={0}
            id="shadow"
            d="M16.4977 527.495L190.999 497L249.999 510L55.1632 567.001L16.4977 527.495Z"
            fill="#3D3D3D"
          />
        </g>
      </svg>
    </div>
  );
}
