import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, GSDevTools);

export default function StrokeAnimation() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.defaults({ duration: 2 });
      //line
      gsap.set("#shape-line", {
        opacity: 1,
        strokeDasharray: 200,
        strokeDashoffset: 200,
      });

      gsap.to("#shape-line", {
        repeat: -1,
        repeatDelay: 0.5,
        strokeDashoffset: -200,
        duration: 2,
      });

      //thumb
      const thumb = document.getElementById(
        "shape-thumb",
      ) as unknown as SVGPathElement;
      if (thumb === null) return;
      const thumbLength = thumb.getTotalLength();

      gsap.set(thumb, {
        opacity: 1,
        strokeDasharray: thumbLength,
        strokeDashoffset: -581,
      });
      gsap
        .timeline({ repeat: -1, repeatDelay: 1 })
        .to(thumb, { delay: 0.5, strokeDashoffset: 0, duration: 4 })
        .to(thumb, { strokeDashoffset: -thumbLength, duration: 4 });

      //square
      gsap.set("#shape-square", {
        strokeDasharray: 600,
        strokeDashoffset: 600,
      });
      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5 })
        .to("#shape-square", { strokeDashoffset: 0, duration: 2 })
        .to("#shape-square", { strokeDashoffset: -600, duration: 2 });

      //spiral
      const spiral = document.getElementById(
        "shape-spiral",
      ) as unknown as SVGPathElement;
      if (spiral === null) return;
      const spiralLength = spiral.getTotalLength();

      gsap.set(spiral, {
        strokeDasharray: spiralLength,
        strokeDashoffset: spiralLength,
      });

      gsap
        .timeline({ repeat: -1, repeatDelay: 1, yoyo: true })
        .to(spiral, { strokeDashoffset: 0, duration: 5 })
        .to(spiral, { strokeDashoffset: -518, duration: 5 });
      //()
      // GSDevTools.create({ animation: tl });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
        viewBox="0 0 500 500"
        width={500}
        height={500}
      >
        <line
          opacity={0}
          overflow={"hidden"}
          id="shape-line"
          x1="100"
          y1="71"
          x2="300"
          y2="71"
          strokeWidth="10"
          strokeDasharray="0"
          fill="none"
          stroke="rgb(0, 0, 0)"
        ></line>
        <path
          opacity={0}
          stroke="rgb(0, 0, 0)"
          fill="none"
          strokeWidth="18"
          strokeLinecap="round"
          d="M 100.19 244.9 C 102.04 295.39 272.57 341.39 267.05 197.96 C 267.05 197.96 257.86 138.39 188.01 152.05 C 141.47 55.53 100.14 143.36 100.14 143.36 L 100.17 244.78"
          id="shape-thumb"
        ></path>
        <rect
          x="100.14"
          y="327.18"
          width="200"
          height="100"
          stroke="rgb(0, 0, 0)"
          strokeWidth="8"
          strokeLinecap="square"
          fill="none"
          id="shape-square"
        ></rect>
        <path
          d="M 374.94 255.31 Q 374.94 254.48 375.69 254 Q 376.5 253.49 377.55 253.8 Q 378.73 254.14 379.47 255.31 Q 380.3 256.62 380.17 258.33 Q 380.02 260.24 378.71 261.85 Q 377.27 263.63 374.94 264.37 Q 372.39 265.18 369.66 264.46 Q 366.69 263.68 364.48 261.35 Q 362.1 258.83 361.36 255.31 Q 360.55 251.54 361.87 247.76 Q 363.27 243.75 366.64 240.93 Q 370.21 237.95 374.94 237.2 Q 379.93 236.4 384.75 238.32 Q 389.82 240.33 393.24 244.74 Q 396.83 249.37 397.58 255.31 Q 398.37 261.51 395.86 267.39 Q 393.23 273.5 387.77 277.53 Q 382.09 281.72 374.94 282.48 Q 367.52 283.27 360.6 280.15 Q 353.43 276.92 348.8 270.4 Q 344 263.67 343.24 255.31 Q 342.46 246.68 346.18 238.71 Q 350.02 230.49 357.58 225.24 Q 365.36 219.85 374.94 219.08 Q 384.78 218.3 393.81 222.63 Q 403.08 227.08 408.93 235.69 Q 414.93 244.52 415.7 255.31 Q 416.48 266.37 411.54 276.44 Q 406.49 286.76 396.83 293.22 Q 386.94 299.83 374.94 300.59 Q 362.67 301.37 351.54 295.83 Q 340.18 290.17 333.11 279.46 Q 325.89 268.52 325.13 255.31 Q 324.35 241.83 330.49 229.65 Q 336.76 217.23 348.52 209.56 Q 360.51 201.74 374.94 200.97 Q 374.72 200.98 374.94 200.97"
          stroke="rgb(0, 0, 0)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          id="shape-spiral"
        ></path>
      </svg>
    </div>
  );
}
