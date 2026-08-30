import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useRef } from "react";

gsap.registerPlugin(Draggable);

export default function ShapeLiquidSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      Draggable.create(".drag-object");
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <svg
        // width={441}
        // height={295}
        viewBox="0 0 441 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1594" clipPath="url(#clip0_3676_9879)">
          <rect width={441} height={295} fill="white" />
          <g className="drag-object" filter="url(#filter0_f_3676_9879)">
            <circle cx={127} cy={103} r={31} fill="#1D3287" />
          </g>
          <g className="drag-object" filter="url(#filter1_f_3676_9879)">
            <circle cx={181} cy={111} r={31} fill="#1D3287" />
          </g>
          <g id="color-dodge" style={{ pointerEvents: "none" }}>
            <rect
              width={441}
              height={295}
              fill="#D9D9D9"
              style={{
                mixBlendMode: "color-dodge",
              }}
            />
          </g>
          <g id="color-burn" style={{ pointerEvents: "none" }}>
            <rect
              width={441}
              height={295}
              fill="#1D3287"
              style={{
                mixBlendMode: "color-burn",
              }}
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_3676_9879"
            x={92}
            y={68}
            width={70}
            height={70}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={2}
              result="effect1_foregroundBlur_3676_9879"
            />
          </filter>
          <filter
            id="filter1_f_3676_9879"
            x={146}
            y={76}
            width={70}
            height={70}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={2}
              result="effect1_foregroundBlur_3676_9879"
            />
          </filter>
          <clipPath id="clip0_3676_9879">
            <rect width={441} height={295} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
