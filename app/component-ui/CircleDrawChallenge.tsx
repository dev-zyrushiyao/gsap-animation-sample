import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import React, { useRef } from "react";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

export default function CircleDrawChallenge() {
  const container = useRef(null);

  useGSAP(
    () => {
      const circleA = document.querySelector(".circle-A");
      const lineConnector = document.querySelector(".line-connector");
      const circleB = document.querySelector(".circle-B");

      gsap.set(circleA, { rotate: -90, transformOrigin: "50% 50%" });
      gsap.set(circleB, { rotate: -90, transformOrigin: "50% 50%" });

      gsap
        .timeline()
        .fromTo(circleA, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%" })
        .from(lineConnector, { drawSVG: 0 })
        .fromTo(circleB, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%" });

      //   GSDevTools.create({ animation: tl });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 500"
        width={500}
        height={500}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            x1={490.143}
            y1={49.982}
            x2={490.143}
            y2={568.899}
            id="red-blue-circle-gradient"
            gradientTransform="matrix(1, 0, 0, 0.963546, -290.143744, -48.159653)"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(79, 147, 216)",
              }}
            />
            <stop
              offset={0.473}
              style={{
                stopColor: "rgb(91, 90, 137)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(129, 46, 56)",
              }}
            />
          </linearGradient>
          <mask id="red-blue-circle-mask">
            <g transform="matrix(1, 0, 0, 1, 0.262001, -50.000009)">
              <g>
                <polyline
                  style={{
                    fill: "none",
                    strokeWidth: 20,
                    stroke: "white",
                  }}
                  points="200.07 200 200 400"
                  className="line-connector"
                />
                <ellipse
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeWidth: 13,
                  }}
                  cx={199.419}
                  cy={150.227}
                  rx={49.773}
                  ry={49.773}
                  className="circle-A"
                />
                <ellipse
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeWidth: 13,
                  }}
                  cx={200.057}
                  cy={449.773}
                  rx={49.773}
                  ry={49.773}
                  className="circle-B"
                />
              </g>
            </g>
          </mask>
        </defs>
        <rect
          x={79.393}
          width={241.215}
          height={500}
          style={{
            stroke: "rgb(0, 0, 0)",
            fill: "url(#red-blue-circle-gradient)",
            mask: "url(#red-blue-circle-mask)",
          }}
        />
      </svg>
    </div>
  );
}
