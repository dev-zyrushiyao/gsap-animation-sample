import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function MovingSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      //circle timeline
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
          defaults: { duration: 0.5, fill: "none", strokeLinejoin: "round" },
        })
        //seq-1
        .to("polyline", {
          fill: "none",
          ease: "back.in",

          attr: { points: "100 -100 100 0 100 -100" },
        })
        //seq-2
        .to("polyline", {
          delay: 1,

          ease: "back.out",
          duration: 0.5,
          attr: { points: "0 0 100 0 200 0" },
        })
        //seq-3
        .to("polyline", {
          delay: 1,

          ease: "back",

          duration: 0.5,
          attr: { points: "0 0 100 200 200 0" },
        });

      //path animation
      gsap.to("path", {
        delay: 2,
        duration: 1,
        ease: "back.inOut",
        fill: "blue",
        strokeWidth: 3,
        attr: {
          d: " M 454.453 315.898 C 455.11 329.512 433.335 131.466 448.248 140.024 C 462.971 148.473 479.13 264.095 498.499 265.898 C 517.889 267.703 551.084 302.822 565.898 295.159 C 580.892 287.402 460.899 136.972 615.898 215.898 C 615.053 196.724 578.083 185.493 591.102 178.091 C 604.252 170.614 621.468 168.501 639.773 170.334 C 658.103 172.17 675.897 177.91 689.57 186.479 C 696.338 190.72 701.531 195.235 705.348 200.455 C 707.23 203.03 708.514 205.366 709.493 208.075 C 710.466 210.767 615.898 315.898 615.898 315.898",
        },
      });
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <svg
        viewBox="0 0 800 800"
        width={800}
        height={800}
        className="bg-green-200"
      >
        {/* manual computation of translate
        svg width - line width / 2 = answer / 4 for translate-x-[value] */}
        <g className="translate-x-75 translate-y-100 ">
          <polyline
            points="0 0 100 0 200 0"
            strokeLinecap="round"
            strokeWidth={5}
            stroke="black"
          />
        </g>

        <g className="translate-x-1 translate-y-80 ">
          <svg viewBox="315.898 15.898 500 500">
            <path
              fill="none"
              stroke="rgb(32, 99, 155)"
              strokeWidth="{10}"
              strokeMiterlimit="{3.8}"
              strokeLinecap="round"
              d="M 410.518 215.658 C 411.175 229.272 421.874 242.26 436.787 250.818 C 451.51 259.267 471.489 265.188 490.858 266.991 C 510.248 268.796 530.544 266.527 545.358 258.864 C 560.352 251.107 570.787 236.202 570.897 215.796 C 570.052 196.622 578.083 185.493 591.102 178.091 C 604.252 170.614 621.468 168.501 639.773 170.334 C 658.103 172.17 675.897 177.91 689.57 186.479 C 696.338 190.72 701.531 195.235 705.348 200.455 C 707.23 203.03 708.514 205.366 709.493 208.075 C 710.466 210.767 711.196 217.596 711.196 217.596"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
