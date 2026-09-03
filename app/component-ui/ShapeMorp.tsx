import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(MorphSVGPlugin);

export default function ShapeMorp() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set(".shapes-g", { opacity: 1 });

      //converts all to path
      MorphSVGPlugin.convertToPath(".shapes-g > *");

      const tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } });

      //targets all the path and converts them to an array of paths
      const shapes = gsap.utils.toArray<SVGPathElement>(".shapes-g > path");
      const texts = gsap.utils.toArray<SVGPathElement>(".texts-g > path");

      //loop the shapes and add each path animation to timeline referencing the direct .letters<path> as the morph
      shapes.forEach((shape, i) => {
        tl.to(shape, {
          morphSVG: texts[i],
          fill: "rgb(59, 114, 160)",
          stroke: "none",
        });
      });
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <g className="shapes-g">
          <rect
            y={208.779}
            width={76.171}
            height={76.171}
            style={{
              fill: "rgb(59, 114, 160)",
              strokeMiterlimit: 16.06,
            }}
            x={23.829}
            className="square"
          />
          <ellipse
            style={{
              fill: "rgb(59, 114, 160)",
              strokeMiterlimit: 16.06,
            }}
            cx={168.605}
            cy={247.037}
            rx={40.099}
            ry={40.099}
            className="circle"
          />
          <path
            d="M 276.162 207.785 L 315.113 285.688 L 237.21 285.688 L 276.162 207.785 Z"
            style={{
              fill: "rgb(59, 114, 160)",
              strokeMiterlimit: 16.06,
            }}
            className="triangle"
          />
          <path
            d="M 406.117 214.766 L 343.619 278.707 M 343.619 214.766 L 406.117 278.707"
            style={{
              strokeLinecap: "round",
              strokeWidth: 8,
              fill: "rgb(59, 114, 160)",
              stroke: "rgb(59, 114, 160)",
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
              strokeMiterlimit: 16.06,
            }}
            className="cross"
          />
          <path
            d="M 456.316 282.947 C 456.316 288.938 451.46 293.794 445.469 293.794 C 439.478 293.794 434.622 288.938 434.622 282.947 C 434.622 276.956 439.478 272.1 445.469 272.1 C 451.46 272.1 456.316 276.956 456.316 282.947 Z M 444.458 199.679 L 444.458 265.613"
            style={{
              strokeWidth: 5,
              stroke: "rgb(59, 114, 160)",
              fill: "none",
              strokeMiterlimit: 16.06,
            }}
            className="exclamation"
          />
        </g>
        <g className="texts-g" style={{ visibility: "hidden" }}>
          <path
            d="M 34.16 279.754 L 34.16 271.413 L 68.96 227.902 Q 72.667 223.268 76.003 219.839 L 38.099 219.839 L 38.099 211.823 L 86.753 211.823 L 86.753 219.839 L 48.617 266.965 L 44.493 271.738 L 87.865 271.738 L 87.865 279.754 Z"
            style={{
              fill: "rgb(51, 51, 51)",
              textWrapMode: "nowrap",
              strokeMiterlimit: 11.86,
            }}
          />
          <path
            d="M 162.699 279.909 L 162.699 251.133 L 136.518 211.978 L 147.454 211.978 L 160.845 232.459 Q 164.552 238.205 167.75 243.951 Q 170.808 238.622 175.164 231.949 L 188.324 211.978 L 198.796 211.978 L 171.688 251.133 L 171.688 279.909 Z"
            style={{
              fill: "rgb(51, 51, 51)",
              textWrapMode: "nowrap",
              strokeMiterlimit: 11.86,
            }}
          />
          <path
            d="M 252.594 279.751 L 252.594 211.82 L 282.714 211.82 Q 291.796 211.82 296.523 213.65 Q 301.249 215.48 304.076 220.114 Q 306.902 224.748 306.902 230.355 Q 306.902 237.584 302.222 242.542 Q 297.542 247.5 287.765 248.844 Q 291.333 250.558 293.186 252.226 Q 297.125 255.841 300.647 261.262 L 312.463 279.751 L 301.157 279.751 L 292.167 265.618 Q 288.228 259.501 285.68 256.258 Q 283.131 253.014 281.115 251.717 Q 279.1 250.419 277.014 249.909 Q 275.485 249.585 272.01 249.585 L 261.584 249.585 L 261.584 279.751 Z M 261.584 241.8 L 280.907 241.8 Q 287.07 241.8 290.545 240.526 Q 294.02 239.252 295.828 236.448 Q 297.635 233.645 297.635 230.355 Q 297.635 225.536 294.136 222.431 Q 290.638 219.326 283.085 219.326 L 261.584 219.326 Z"
            style={{
              fill: "rgb(51, 51, 51)",
              textWrapMode: "nowrap",
              strokeMiterlimit: 11.86,
            }}
          />
          <path
            d="M 392.732 211.857 L 401.722 211.857 L 401.722 251.105 Q 401.722 261.346 399.405 267.369 Q 397.088 273.393 391.041 277.17 Q 384.994 280.946 375.17 280.946 Q 365.625 280.946 359.555 277.656 Q 353.484 274.366 350.889 268.134 Q 348.294 261.902 348.294 251.105 L 348.294 211.857 L 357.284 211.857 L 357.284 251.059 Q 357.284 259.909 358.929 264.103 Q 360.574 268.296 364.582 270.567 Q 368.59 272.837 374.383 272.837 Q 384.299 272.837 388.516 268.343 Q 392.732 263.848 392.732 251.059 Z"
            style={{
              fill: "rgb(51, 51, 51)",
              textWrapMode: "nowrap",
              strokeMiterlimit: 11.86,
            }}
          />
          <path
            d="M 415.224 258.139 L 423.704 257.397 Q 424.306 262.495 426.507 265.761 Q 428.708 269.028 433.342 271.044 Q 437.976 273.06 443.768 273.06 Q 448.912 273.06 452.85 271.53 Q 456.789 270.001 458.712 267.337 Q 460.635 264.672 460.635 261.522 Q 460.635 258.324 458.782 255.938 Q 456.928 253.551 452.665 251.93 Q 449.931 250.864 440.571 248.616 Q 431.211 246.369 427.457 244.376 Q 422.592 241.828 420.205 238.051 Q 417.819 234.275 417.819 229.595 Q 417.819 224.451 420.738 219.98 Q 423.658 215.508 429.264 213.191 Q 434.871 210.874 441.729 210.874 Q 449.282 210.874 455.052 213.307 Q 460.821 215.74 463.925 220.466 Q 467.03 225.193 467.262 231.17 L 458.643 231.819 Q 457.948 225.378 453.939 222.088 Q 449.931 218.798 442.1 218.798 Q 433.945 218.798 430.214 221.787 Q 426.484 224.776 426.484 228.992 Q 426.484 232.653 429.125 235.016 Q 431.72 237.379 442.679 239.859 Q 453.638 242.338 457.716 244.191 Q 463.647 246.925 466.474 251.119 Q 469.3 255.312 469.3 260.78 Q 469.3 266.202 466.196 270.998 Q 463.091 275.794 457.276 278.458 Q 451.46 281.122 444.185 281.122 Q 434.964 281.122 428.732 278.435 Q 422.499 275.747 418.954 270.349 Q 415.409 264.951 415.224 258.139 Z"
            style={{
              fill: "rgb(51, 51, 51)",
              textWrapMode: "nowrap",
              strokeMiterlimit: 11.86,
            }}
          />
        </g>
      </svg>
    </div>
  );
}
