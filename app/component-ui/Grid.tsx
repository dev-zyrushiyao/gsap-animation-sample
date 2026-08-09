import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Grid() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          defaults: {
            ease: "power1.out",
            easeReverse: "power1.out",
            duration: 1.3,
          },
        })
        .to("#box-pink", { y: -400 })
        .to("#box-pink", { x: 400 }, ">0.5");

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          defaults: {
            ease: "power1.out",
            easeReverse: "power1.out",
            duration: 1.3,
          },
        })
        .to("#box-blue", { y: 100 })
        .to("#box-blue", { x: 100, delay: 0.5 })
        .to("#box-blue", { y: -300, delay: 1 });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="text-center">
      <svg
        fill="blue"
        viewBox="0 0 500 500"
        width={500}
        height={500}
        className="bg-amber-200"
      >
        {/* <circle width={100} height={100} fill="red" r={200} /> */}

        <rect
          stroke="black"
          strokeWidth={3}
          width={500}
          height={500}
          fill="#C3E3DD"
        ></rect>

        {/* horizontal line */}
        <g>
          <line
            stroke="grey"
            strokeWidth={3}
            x1={0}
            y1={100}
            x2={500}
            y2={100}
          ></line>
          <line
            stroke="grey"
            strokeWidth={3}
            x1={0}
            y1={200}
            x2={500}
            y2={200}
          ></line>
          <line
            stroke="grey"
            strokeWidth={3}
            x1={0}
            y1={300}
            x2={500}
            y2={300}
          ></line>
          <line
            stroke="grey"
            strokeWidth={3}
            x1={0}
            y1={400}
            x2={500}
            y2={400}
          ></line>
        </g>

        {/* vertical line */}
        <g>
          <line
            stroke="grey"
            strokeWidth={2.5}
            x1={100}
            y1={0}
            x2={100}
            y2={500}
          ></line>
          <line
            stroke="grey"
            strokeWidth={2.5}
            x1={200}
            y1={0}
            x2={200}
            y2={500}
          ></line>
          <line
            stroke="grey"
            strokeWidth={2.5}
            x1={300}
            y1={0}
            x2={300}
            y2={500}
          ></line>
          <line
            stroke="grey"
            strokeWidth={2.5}
            x1={400}
            y1={0}
            x2={400}
            y2={500}
          ></line>
        </g>

        <g transform="matrix(1 0 0 1 0 400)">
          <rect
            id="box-pink"
            fill="pink"
            stroke="black"
            strokeWidth={3}
            width={100}
            height={100}
          ></rect>
          <rect
            id="box-blue"
            fill="blue"
            stroke="black"
            strokeWidth={3}
            width={100}
            height={100}
            x={200}
            y={-100}
          ></rect>
        </g>
      </svg>
    </div>
  );
}
