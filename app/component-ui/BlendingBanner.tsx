import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function BlendingBanner() {
  const container = useRef(null);

  useGSAP(
    () => {
      const rectangles = gsap.utils.toArray([".rect-1", ".rect-2", ".rect-3"]);
      rectangles.forEach((rect) => {
        gsap.set(rect as SVGRectElement, { x: 0 });
      });

      gsap
        .timeline({
          defaults: { repeat: -1, yoyo: true, ease: "linear" },
        })
        .to(".rect-1", { x: 400, duration: 30 })
        .to(".rect-2", { x: 360, duration: 24 }, "<")
        .to(".rect-3", { x: 340, duration: 38 }, "<")
        .timeScale(1.5)
        .time(gsap.utils.random(0, 60));
    },
    { scope: container },
  );

  return (
    // rectangles are color blend
    <div ref={container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
        <defs>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={62.343}
            cy={148.113}
            r={200}
            id="banner-gradient"
            gradientTransform="matrix(1.661554, 0.013365, -0.008043, 0.999968, -40.051926, -0.828406)"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(41, 62, 180)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(5, 20, 48)",
              }}
            />
          </radialGradient>
        </defs>
        <rect
          width={400}
          height={200}
          style={{
            fill: "url(#banner-gradient)",
          }}
          className="base"
        />
        <rect
          x={5.253}
          width={72.3}
          height={334.627}
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
            fill: "rgb(124, 197, 213)",
            mixBlendMode: "soft-light",
          }}
          y={-67.801}
          transform="matrix(0.951057, 0.309017, -0.309017, 0.951057, 22.302978, -4.792501)"
          className="rect-1"
        />
        <rect
          x={3.747}
          width={51.576}
          height={334.627}
          style={{
            strokeWidth: 1,
            transformOrigin: "29.535px 99.513px",
            fill: "rgb(85, 88, 160)",
            mixBlendMode: "overlay",
          }}
          y={-67.801}
          transform="matrix(0.951057, 0.309017, -0.309017, 0.951057, 110.075533, 9.157416)"
          className="rect-2"
        />
        <rect
          x={5.304}
          width={73.012}
          height={340.594}
          style={{
            strokeWidth: 1,
            fill: "rgb(78, 92, 216)",
            fillOpacity: 0.56,
            mixBlendMode: "multiply",
            transformOrigin: "41.81px 101.288px",
          }}
          y={-69.01}
          transform="matrix(0.951057, 0.309017, -0.309017, 0.951057, 195.511873, 1.982141)"
          className="rect-3"
        />
      </svg>
    </div>
  );
}
