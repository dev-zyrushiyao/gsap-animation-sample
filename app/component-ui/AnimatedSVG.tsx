import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, GSDevTools);

export default function AnimatedSVG() {
  const container = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.set("svg", { opacity: 1 });

      //   timeline-text 2.2seconds animation
      gsap
        .timeline({
          repeat: -1,
          defaults: {
            ease: "back(2)",
            duration: 0.6,
            transformOrigin: "50% 50%",
          },
        })
        .from("#message-1", { scale: 0 })
        .from("#message-3", { scaleX: 0 })
        .from("#message-2", { scale: 0, ease: "bounce.out", duration: 1 });
      // timeline-circle 2seconds animation
      tl.current = gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.2,
          defaults: {
            ease: "power1",
            duration: 0.5,
            transformOrigin: "50% 50%",
          },
        })
        .from("#circle-1", { scale: 0 })
        .from("#circle-2", { scale: 0 })
        .from("#circle-3", { scale: 0 })
        .from("#circle-4", { scale: 0 });

      //   GSDevTools.create({ animation: tl.current });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width={1000}
        height={1000}
        className="bg-[#FDFBF7] opacity-0"
      >
        <circle
          id="circle-1"
          r={140}
          fill="#EADFF2"
          cx={"50%"}
          cy={"50%"}
          className="origin-center"
        />

        <circle
          id="circle-2"
          r={120}
          fill="#D8E8E2"
          cx={"50%"}
          cy={"50%"}
          className="origin-center"
        />

        <circle
          id="circle-3"
          r={100}
          fill="#E3E8ED"
          cx={"50%"}
          cy={"50%"}
          className="origin-center"
        />

        <circle
          id="circle-4"
          r={80}
          fill="#F4EBE1"
          cx={"50%"}
          cy={"50%"}
          className="origin-center"
        />

        <g transform="matrix(0.702296, 0, 0, 0.702296, -75.478439, -86.808159)">
          <text
            id="message-1"
            style={{
              fill: "rgb(117, 45, 45)",
              fontFamily: '"Bagel Fat One"',
              fontSize: "28px",
              textTransform: "uppercase",
              whiteSpace: "pre",
            }}
            x="200.741"
            y="212.604"
          >
            This is{" "}
          </text>
          <text
            id="message-2"
            style={{
              fill: "rgb(117, 45, 45)",
              fontFamily: '"Bagel Fat One"',
              fontSize: "76px",
              textTransform: "uppercase",
              whiteSpace: "pre",
            }}
            transform="matrix(0.980979, 0, 0, 0.904945, 30.593969, 74.048767)"
            x="147.323"
            y="228.049"
          >
            SVG
          </text>
          <text
            id="message-3"
            style={{
              fill: "rgb(117, 45, 45)",
              fontFamily: '"Bagel Fat One"',
              fontSize: "40px",
              textTransform: "uppercase",
              whiteSpace: "pre",
            }}
            x="142.614"
            y="332.145"
          >
            Animation
          </text>
        </g>
        <defs>
          <style>
            {`@import url(https://fonts.googleapis.com/css2?family=Bagel+Fat+One%3Aital%2Cwght%400%2C400&display=swap);`}
          </style>
        </defs>
      </svg>
    </div>
  );
}
