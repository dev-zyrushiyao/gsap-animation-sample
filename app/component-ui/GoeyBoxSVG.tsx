import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { SplitText } from "gsap/SplitText";
import React, { useRef, useState } from "react";

gsap.registerPlugin(Draggable, useGSAP, SplitText);

export default function GoeyBoxSVG() {
  const container = useRef(null);

  const clickTl = useRef<gsap.core.Timeline | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useGSAP(
    () => {
      //svg gooey
      gsap.set(".box-2", { scale: 0, opacity: 1 });
      gsap
        .timeline({ defaults: { ease: "back(2)" } })
        .to(".box-2", { x: 15, y: 15 })
        .to(".box-2", { scaleX: 2, scaleY: 1 });
      Draggable.create(".drag");

      //html gooey using svg-filter
      const splitText = SplitText.create(".message-box", {
        type: "chars",
      });
      gsap.set(".div-box-2 , .message-box", { opacity: 1 });
      gsap.set(splitText.chars, {
        scale: 0,
        opacity: 0,
        transformOrigin: "50% 100%",
      });

      clickTl.current = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.3 },
        })
        .fromTo(
          ".div-box-2",
          { scale: 0, transformOrigin: "0% 0%" },
          { scaleX: 1, scaleY: 1 },
        )
        .to(".div-box-2", { scaleX: 3, duration: 0.4, ease: "back(2)" })
        .to(splitText.chars, {
          scale: 1,
          opacity: 1,
          ease: "back(2)",
          duration: 0.6,
        });
    },
    { scope: container },
  );

  function handleClick(): void {
    if (!isClicked) {
      clickTl.current?.play();
    } else {
      clickTl.current?.reversed(true);
    }

    setIsClicked((prev): boolean => !prev);
  }

  return (
    <div ref={container}>
      <div className="liquid-wrapper">
        <h3 className="text-4xl">Click me</h3>
        <div className="filter-[url(#gaussian-blur-filter-0)]">
          <div
            className="div-box-1 bg-blue-500 w-30 h-30 static"
            onClick={handleClick}
          >
            <div className="div-box-2 bg-blue-500 w-30 h-30 relative top-25 left-25 opacity-0"></div>
          </div>
        </div>
        <p className="message-box relative left-55 top-4 text-5xl inline-block text-white opacity-0">
          Hello!
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={500}
        height={500}
      >
        <defs>
          <filter
            id="gaussian-blur-filter-0"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <title>{"Gaussian blur"}</title>
            <feGaussianBlur
              stdDeviation="3 5"
              edgeMode="none"
              in="SourceGraphic"
              result="gaussian-blur-0"
            />
            <feColorMatrix
              result="color-matrix-0"
              in="gaussian-blur-0"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
            />
          </filter>
        </defs>
        <foreignObject
          className="svg-html-text"
          x={50}
          y={50}
          width={150}
          height={50}
        >
          <h3 className="text-4xl">Drag me</h3>
        </foreignObject>
        <g
          style={{
            filter: "url(#gaussian-blur-filter-0)",
          }}
        >
          <rect
            className="drag box-1"
            x={100}
            y={100}
            width={100}
            height={100}
            style={{
              stroke: "rgb(0, 0, 0)",
              fill: "rgb(203, 79, 79)",
            }}
          />
          <rect
            className="drag box-2"
            opacity={0}
            x={185}
            y={185}
            width={100}
            height={100}
            style={{
              stroke: "rgb(0, 0, 0)",
              fill: "rgb(203, 79, 79)",
            }}
          />
        </g>
      </svg>
    </div>
  );
}
