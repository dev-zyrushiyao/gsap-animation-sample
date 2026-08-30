import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function FlagFilter() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          defaults: { duration: 2.2, ease: "none" },
        })
        .to("feDisplacementMap", {
          attr: { scale: 23 },
        })
        .to(
          "feTurbulence",
          {
            attr: { baseFrequency: 0.005 },
          },
          "<",
        );

      //   const splitText = SplitText.create("#flag-ph", {
      //     type: "chars",
      //   });

      //   gsap.to(splitText.chars, { x: 10 });

      //   GSDevTools.create({ animation: tl });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={500}
        height={500}
      >
        <defs>
          <filter
            id="warp-filter-0"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feComponentTransfer>
              <feFuncR type="table" tableValues="1 0.5" />
            </feComponentTransfer>
            <feMerge result="a">
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0.0}
              numOctaves={1}
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale={0}
              in="a"
              in2="warp"
            />
          </filter>
        </defs>
        <rect
          width={500.328}
          height={501.94}
          style={{
            fill: "rgb(230, 230, 230)",
          }}
        />
        <g
          transform="matrix(0.28222, 0, 0, 0.286671, 100, 148.423859)"
          style={{
            filter: "url(#warp-filter-0)",
          }}
          id="flag"
        >
          <path d="m0 0h1063v708.66h-1063z" fill="#f50013" fillRule="evenodd" />
          <path d="m0 0h1063v354.33h-1063z" fill="#00189a" fillRule="evenodd" />
          <path
            d="m0 0 609.96 353.88-609.96 353.42v-707.3z"
            fill="#feffff"
            fillRule="evenodd"
          />
          <path
            transform="matrix(.87393 1.9702 -2.0604 .91397 897.48 -367.59)"
            d="m266.186,534.45-10.408-7.432-10.357,7.505 3.852-12.196-10.338-7.531 12.79-.105 3.967-12.159 4.052,12.131 12.79.016-10.285,7.602 3.937,12.169z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(.70232 -.71186 .71186 .70232 -193.88 244.12)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(1,.00099,-.00099,1,.35201,-.19373)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(.69319 .72076 -.72076 .69319 314.87 -31.94)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(-.00152 1 -1 -.00152 549.12 159.46)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(-.69917 .71495 -.71495 -.69917 584.26 461.92)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(-.99998 .00588 -.00588 -.99998 391.98 706.6)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(-.70468 -.70952 .70952 -.70468 81.249 741.57)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(-.00558 -.99998 .99998 -.00558 -157.83 550.8)"
            d="m212.741,285.315 11.383-41.98-7.826-9.962-9.249,51.229 5.692.713zm-24.192,0-7.115-57.633 13.518-15.653 13.519,12.807-6.403,59.766-13.519.713zm-10.673.712-11.383-41.98 7.826-9.962 9.249,51.229-5.692.713z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(2.0518 .65988 -.69011 2.1458 327.17 -931.59)"
            d="m266.186,534.45-10.408-7.432-10.357,7.505 3.852-12.196-10.338-7.531 12.79-.105 3.967-12.159 4.052,12.131 12.79.016-10.285,7.602 3.937,12.169z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="matrix(1.579 1.467 -1.5342 1.6513 444.17 -1137)"
            d="m266.186,534.45-10.408-7.432-10.357,7.505 3.852-12.196-10.338-7.531 12.79-.105 3.967-12.159 4.052,12.131 12.79.016-10.285,7.602 3.937,12.169z"
            fill="#eca300"
            fillRule="evenodd"
          />
          <path
            transform="translate(4.269 -2.397e-5)"
            d="m263.71 353.88a73.029 73.029 0 1 0-146.06 0 73.029 73.029 0 1 0 146.06 0"
            fill="#eca300"
            fillRule="evenodd"
          />
        </g>
        <text
          style={{
            whiteSpace: "pre",
            fill: "rgb(51, 51, 51)",
            fontFamily: "Arial, sans-serif",
            fontSize: "31.4px",
          }}
          x={100}
          y={128.266}
          transform="matrix(0.968765, 0, 0, 1, 3.123466, 0)"
          id="flag-ph"
        >
          {
            "\u170F\u1706\u170F\u1706\u1714 \u1705\u1714 \u1709\u1712\u170E\u1712\u1709\u1712\u1708\u1710\u1714"
          }
        </text>
        <text
          style={{
            fill: "rgb(51, 51, 51)",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            whiteSpace: "pre",
          }}
          transform="matrix(0.968765, 0, 0, 1, 160.167282, -31.259409)"
          x={100}
          y={128.266}
          id="flag-en"
        >
          {"Flag of the Philippines"}
        </text>
      </svg>
    </div>
  );
}
