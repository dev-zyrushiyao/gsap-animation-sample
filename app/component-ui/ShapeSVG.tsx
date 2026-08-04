"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function ShapeSVG() {
  const container = useRef(null);

  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      tweenRef.current = gsap.to("#tap-circle", {
        paused: true,
        attr: { r: 150 },
        duration: 0.6,
        ease: "bounce.in",
      });

      gsap.set("#animated-circle", { attr: { strokeOpacity: 0 } });

      gsap
        .timeline({
          defaults: { repeat: -1, repeatDelay: 1, yoyo: true, duration: 3 },
        })
        .to("#animated-circle", {
          duration: 1.5,
          ease: "power1.out",
          stroke: "black",
          strokeOpacity: 1,
          strokeWidth: 30,
          strokeLinecap: "round",
          strokeDasharray: "80 80",
        })
        .to("#animated-circle", {
          strokeOpacity: 0,
          strokeWidth: 0,
          strokeDasharray: "0 0",
        })
        .to(
          "#animated-circle",
          {
            attr: { r: 0 },
          },
          "<-=0.3",
        );
    },
    { scope: container },
  );

  const handleMouseEnter = () => {
    tweenRef.current?.play();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.reverse();
  };

  return (
    <div ref={container}>
      <p className="text-2xl">Hover me!</p>
      <svg
        viewBox="0 0 800 400"
        width={800}
        height={400}
        className="bg-gray-300"
      >
        <g className="translate-x-50 translate-y-[50%]">
          <circle
            id="tap-circle"
            r={100}
            fill="blue"
            stroke="green"
            strokeWidth="10px"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </g>

        <g className="translate-x-150 translate-y-1/2">
          <circle id="animated-circle" r={100} fill="red" />
        </g>
      </svg>
    </div>
  );
}
