import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin);

export default function BlobMotionPath() {
  const container = useRef(null);

  useGSAP(
    () => {
      const svg = document.querySelector<SVGSVGElement>(".blob-svg");
      const tl = gsap.timeline();

      function createCircle(numCircles: number) {
        //svg guard clause
        if (!svg) return;

        for (let i = 0; i < numCircles; i++) {
          //create a new circle element for each loop
          const newCircle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
          );

          //set attributes for the new circle
          newCircle.setAttribute("cx", "100");
          newCircle.setAttribute("cy", "100");
          newCircle.setAttribute("r", "30");
          newCircle.setAttribute("stroke", "white");
          newCircle.setAttribute("stroke-width", "4");
          newCircle.setAttribute(
            "fill",
            `hsl(${(i / numCircles) * 360} , 80%, 50%)`,
          );

          //append the new circle to the SVG
          svg.appendChild(newCircle);

          //get the starting point of the circle to equally space the circles along the path
          const startingPoint: number = i / numCircles;

          //set and animate the position of each circle along the path
          tl.to(
            newCircle,
            {
              duration: 10,
              ease: "linear",
              repeat: -1,
              motionPath: {
                path: ".blob-path",
                align: ".blob-path",
                alignOrigin: [0.5, 0.5],
                start: startingPoint,
                end: startingPoint + 1,
              },
            },
            0,
          );

          tl.to(
            newCircle,
            {
              scale: 0.6,
              repeat: -1,
              yoyo: true,
              duration: 1,
            },
            i * 0.25,
          );
        }
      }

      //create a circle element
      createCircle(14);
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        className="blob-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <path
          className="blob-path"
          style={{
            fill: "none",
            strokeWidth: 8,
            stroke: "rgb(123, 123, 123)",
          }}
          d="M 175.561 111.202 C 210.81 111.202 240.216 138.133 243.308 173.246 C 247.51 220.959 290.172 255.855 337.771 250.511 C 391.038 244.531 430.804 298.456 409.349 347.577 C 387.895 396.698 321.311 404.173 289.499 361.033 C 287.099 357.778 284.987 354.321 283.187 350.7 C 260.54 305.143 214.938 275.48 164.111 273.246 C 101.54 271.676 64.132 202.959 96.778 149.556 C 113.314 122.504 144.068 107.532 175.561 111.202 Z"
        />
      </svg>
    </div>
  );
}
