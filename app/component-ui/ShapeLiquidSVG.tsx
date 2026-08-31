import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useRef } from "react";

gsap.registerPlugin(Draggable);

export default function ShapeLiquidSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      Draggable.create(".drag");
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <defs>
          <filter
            id="gaussian-blur-filter-0"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            {/*CreativeCoding Lesson: the <feGaussianBlur> attribute 'result' and <feColorMatrix> and its attribute are a hardcoded tag/attributes not included in the boxy-svg */}
            {/* to make a gooey effect it the shapes should be inside a group and the group should have gaussian blur filter instead of individual shapes.
            opposite to figma to achieve goey effect the individual shapes need to have a blur instead of bluring the group, it also requiring to have a 2 rectangle
            acting as its fill - blend mode is set to Color Dodge and Color Burn respectively. */}
            <feGaussianBlur stdDeviation="8 8" edgeMode="none" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 18 -7"
              result="gaussian-blur-filter-0"
            />
          </filter>
        </defs>
        <g filter="url(#gaussian-blur-filter-0)">
          <ellipse
            style={{
              stroke: "rgb(0, 0, 0)",
              fill: "rgb(126, 106, 204)",
            }}
            cx={196.241}
            cy={199.931}
            rx={51.673}
            ry={51.673}
            className="drag"
          />
          <ellipse
            style={{
              stroke: "rgb(0, 0, 0)",
              fill: "rgb(126, 106, 204)",
            }}
            cx={325.835}
            cy={168.762}
            rx={51.673}
            ry={51.673}
            className="drag"
          />
        </g>
      </svg>{" "}
    </div>
  );
}
