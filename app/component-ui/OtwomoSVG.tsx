import React, { useRef } from "react";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { start } from "repl";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, GSDevTools);

export default function OtwomoSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set("#otwo-char", { opacity: 1, fillOpacity: 0 });
      gsap.set("#otwo-char path", { drawSVG: 0 });
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          defaults: { fillOpacity: 1 },
        })
        .to("#face-shape", {
          drawSVG: true,
          duration: 1.5,
        })
        .to("#mouth", {
          drawSVG: true,
          duration: 1.5,
        })
        .fromTo(
          "#eye-left , #eye-right",
          {
            opacity: 0,
            drawSVG: "100% 100%",
            duration: 1,
          },
          {
            opacity: 1,
            scale: 1,
            drawSVG: true,
            ease: "bounce.inOut",
            duration: 1.5,
          },
        )
        .set("#head-bond", {
          drawSVG: "50% 50%",
          fillOpacity: 0,
        })
        .to(
          "#head-bond",
          { drawSVG: "true", fillOpacity: 1, duration: 1.5 },
          "<=0.7",
        )
        .to("#ear-left-inner , #ear-right-inner", {
          drawSVG: true,
          duration: 1,
        })
        .to("#ear-left-outer , #ear-right-outer", {
          drawSVG: true,
          duration: 1,
        });

      //animation for line curve
      gsap.set("#colored-curve", { opacity: 1, drawSVG: "0% 10%" });
      gsap.to("#colored-curve", {
        repeat: -1,
        repeatDelay: 1,
        drawSVG: "100% 110%",
        ease: "power1",
        duration: 3,
      });

      //jelly nav animation
      gsap.set("#navbar-items #bar", { attr: { x2: 250 } });
      gsap.set("#navbar-items", { autoAlpha: 1 });
      const line = document.querySelector<SVGLineElement>("#navbar-items #bar");

      const ellipses = document.querySelectorAll("#navbar-items ellipse");
      const dots: SVGEllipseElement[] = gsap.utils.toArray(ellipses);

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const dotXaxis = dot.getAttribute("cx");

          if (!dotXaxis) return;

          gsap
            .timeline({ defaults: { duration: 0.5 } })
            .to(line, { duration: 0.3, ease: "sine", attr: { x2: dotXaxis } })
            .to(line, { ease: "bounce", attr: { x1: dotXaxis } });
        });
      });

      // Manual bounce method without the TweenTo
      gsap
        .timeline({ repeat: -1, defaults: {} })
        .to("#bungee #ball", {
          cy: 287,
          duration: 1.3,
          ease: "power1.in",
        })
        .to(
          "#bungee #rope",
          {
            duration: 0.33,
            ease: "sine.out",
            attr: {
              d: "M150 250C150 250 169.3265 336.8055 250 336.8055C330.6735 336.8055 350 250 350 250",
            },
          },
          "1.09",
        )
        .to("#bungee #ball", {
          cy: 46,
          duration: 1,
          ease: "power4.out",
        })
        .to(
          "#bungee #rope",
          {
            // delay: 0.65,
            duration: 0.3,
            ease: "back(2.5)",
            attr: {
              d: "M150 250C150 250 210.948 250 250 250C289.052 250 350 250 350 250",
            },
          },
          "-=1",
        );

      // using tweenTo bounce
      const tl = gsap
        .timeline({ paused: true, defaults: { ease: "none" } })
        .to("#circ", { duration: 1, y: 247 })
        .to(
          "#wire",
          {
            attr: {
              d: "M150 250C150 250 169.3265 336.8055 250 336.8055C330.6735 336.8055 350 250 350 250",
            },
          },
          0.7,
        );

      gsap
        .timeline({ repeat: -1 })
        .add(
          tl.tweenTo(1, {
            ease: "power2.inOut",
            duration: 1,
            repeat: 1,
            yoyo: true,
          }),
        )
        .to(
          "#wire",
          {
            duration: 0.1,
            repeat: 1,
            yoyo: true,

            attr: {
              d: "M150 250C150 250 163 238.5 250 238.5C337 238.5 350 250 350 250",
            },
          },
          "1.43",
        );

      // Arc
      const points: { start: number; end: number } = { start: 0, end: 0 };
      const archPath = gsap.quickSetter("#arc path", "drawSVG");
      gsap.set("#arc", { opacity: 1 });

      function drawArc(): void {
        archPath(`${points.start}% ${points.end}%`);
      }

      gsap
        .timeline({
          onUpdate: drawArc,
          repeat: -1,
          repeatDelay: 1,
          defaults: { duration: 1.5, ease: "slow(0.7 , 0.7 , false)" },
        })
        .to(points, { end: 100 })
        .to(points, { start: 100 }, 0.5);

      // GSDevTools.create({ animation: masterTl });
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      SVG OTWOMO
      <svg
        id="otwo-char"
        opacity={0}
        width="1000"
        height="1000"
        viewBox="0 0 203 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="ear-right-outer"
          d="M177.994 69.4406C179.082 67.8916 180.318 66.1008 181.559 64.2303C183.376 61.4903 185.194 58.602 186.582 56.0728C187.277 54.8078 187.852 53.6534 188.266 52.666C188.69 51.6512 188.898 50.9183 188.939 50.4632C189.403 45.3998 188.059 37.3881 180.086 27.0755C176.058 21.8663 173.116 19.0799 171.114 17.5484C169.127 16.0284 168.113 15.7572 167.482 15.4383C167.491 15.4427 167.466 15.4304 167.394 15.4038C167.326 15.3789 167.232 15.3476 167.11 15.3116C166.866 15.2397 166.534 15.1557 166.113 15.0687C165.274 14.8947 164.112 14.7153 162.651 14.5949C159.73 14.3541 155.636 14.3508 150.551 15.0845C146.767 15.6306 144.316 16.208 142.747 16.701C143.599 17.149 144.609 17.749 145.783 18.5581C149.961 21.4373 156.279 26.9725 165.087 37.6398C174.017 48.4546 177.048 57.9257 177.802 64.7781C177.993 66.5125 178.036 68.0739 177.994 69.4406Z"
          fill="#FFB748"
          stroke="black"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          id="ear-left-outer"
          d="M23.9038 68.917C22.8716 67.4145 21.694 65.6695 20.5114 63.8426C18.8026 61.2026 17.0931 58.4152 15.7855 55.9615C15.1315 54.7343 14.5892 53.6109 14.1987 52.6449C13.7984 51.6547 13.5987 50.9261 13.556 50.4591C13.0927 45.3958 14.4356 37.3846 22.4091 27.0722C26.4367 21.8631 29.3784 19.0767 31.3809 17.5451C33.3682 16.0252 34.3813 15.7539 35.0126 15.435C35.0195 15.432 35.0466 15.4196 35.1004 15.3999C35.1684 15.375 35.2625 15.3437 35.3843 15.3078C35.628 15.2358 35.9604 15.1519 36.3806 15.0648C37.2202 14.8909 38.3819 14.7115 39.8429 14.591C42.7637 14.3503 46.8589 14.3475 51.9435 15.0812C55.6683 15.6187 58.0434 16.1868 59.5425 16.6694C58.7007 17.1217 57.6941 17.7327 56.5145 18.5644C52.4334 21.4417 46.2125 26.9736 37.4079 37.6365C28.494 48.4317 25.2456 57.6822 24.266 64.3221C24.0125 66.0401 23.9129 67.5781 23.9038 68.917Z"
          fill="#FFB748"
          stroke="black"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          id="ear-right-inner"
          d="M134.992 18.2126C134.992 18.2126 149.612 34.2243 157.89 46.9532C166.167 59.6822 168.267 83.412 168.267 83.412L177.344 73.9387C177.344 73.9387 183.717 63.7555 167.169 39.3159C150.621 14.8762 140.083 14.7409 140.083 14.7409L134.992 18.2126Z"
          fill="#F2F2F2"
          stroke="black"
          strokeWidth="2"
        />
        <path
          id="ear-left-inner"
          d="M67.1149 19.0818C67.1149 19.0818 52.4863 34.7138 44.2983 47.2281C36.1103 59.7424 34.5617 83.4191 34.5617 83.4191L24.9791 73.7088C24.9791 73.7088 18.1589 63.3589 34.5544 39.3486C50.9498 15.3382 61.7882 15.4773 61.7882 15.4773L67.1149 19.0818Z"
          fill="#F2F2F2"
          stroke="black"
          strokeWidth="2"
        />
        <path
          id="face-shape"
          d="M101.562 21.3906C137.83 21.3906 166.562 46.5812 166.562 76.8906C166.562 107.2 137.83 132.391 101.562 132.391C65.2947 132.391 36.5625 107.2 36.5625 76.8906C36.5625 46.5812 65.2947 21.3906 101.562 21.3906Z"
          fill="white"
          stroke="black"
          strokeWidth="5"
        />
        <path
          id="eye-right"
          d="M84.0625 73.8828V82.8828"
          stroke="black"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          id="eye-left"
          d="M120.062 73.8828V82.8828"
          stroke="black"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          id="mouth"
          d="M36.0625 84.3828H167.562"
          stroke="black"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          id="head-bond"
          d="M101.771 9.32812C107.898 9.32821 115.253 10.9054 120.999 12.4463C123.889 13.2212 126.403 13.996 128.196 14.5771C129.093 14.8678 129.811 15.1108 130.306 15.2812C130.553 15.3664 130.744 15.4333 130.875 15.4795C130.94 15.5026 130.99 15.521 131.024 15.5332C131.038 15.5373 131.056 15.5421 131.075 15.5479C131.136 15.5657 131.223 15.5924 131.335 15.627C131.559 15.6961 131.884 15.7992 132.296 15.9385C133.119 16.2171 134.293 16.6402 135.71 17.2246C138.541 18.3921 142.364 20.2095 146.324 22.8105C150.283 25.4102 153.069 27.8903 154.876 29.7373C155.779 30.6604 156.437 31.4255 156.876 31.9678C157.095 32.2389 157.26 32.4545 157.372 32.6064C157.428 32.6824 157.471 32.743 157.502 32.7861C157.509 32.7965 157.516 32.8061 157.521 32.8145L157.554 32.8574C157.581 32.8936 157.618 32.9454 157.665 33.0107C157.759 33.1416 157.891 33.3291 158.05 33.5654C158.367 34.0379 158.793 34.7105 159.237 35.5176C160.111 37.1055 161.114 39.3281 161.406 41.6309C161.681 43.7926 161.559 45.2581 161.308 46.2471C161.182 46.7435 161.023 47.1202 160.866 47.4014C160.788 47.5416 160.71 47.6563 160.64 47.749C160.604 47.7953 160.571 47.8359 160.54 47.8711C160.525 47.8886 160.51 47.9051 160.496 47.9199C160.489 47.9274 160.482 47.9346 160.476 47.9414L160.458 47.959L159.403 46.8926L160.456 47.9609L159.06 49.3369L158.097 47.6289V47.6279C158.096 47.6263 158.094 47.624 158.093 47.6211C158.088 47.612 158.078 47.5968 158.065 47.5752C158.04 47.5316 157.999 47.4628 157.942 47.3711C157.829 47.1874 157.653 46.9103 157.413 46.5537C156.932 45.8405 156.192 44.8088 155.171 43.5645C153.127 41.0749 149.962 37.7385 145.503 34.3975C136.6 27.7272 122.493 21.001 101.733 21.001C80.9744 21.001 67.0368 27.7265 58.3037 34.3896C53.9288 37.7276 50.8468 41.0601 48.8652 43.5469C47.8747 44.79 47.1601 45.8212 46.6973 46.5332C46.4662 46.8887 46.2977 47.1645 46.1895 47.3477C46.1353 47.4392 46.0958 47.5084 46.0713 47.5518C46.0591 47.5733 46.0508 47.5887 46.0459 47.5977C46.0434 47.6022 46.0417 47.6052 46.041 47.6064C46.041 47.6064 46.0409 47.606 46.04 47.6055L45.0918 49.3633L43.6689 47.9609L44.7217 46.8926L43.667 47.959L43.6494 47.9414C43.6428 47.9346 43.6359 47.9274 43.6289 47.9199C43.6148 47.9051 43.6004 47.8886 43.585 47.8711C43.554 47.8359 43.5206 47.7953 43.4854 47.749C43.4148 47.6563 43.3371 47.5416 43.2588 47.4014C43.1018 47.1202 42.9434 46.7435 42.8174 46.2471C42.5664 45.2581 42.4444 43.7926 42.7188 41.6309C43.011 39.3281 44.0144 37.1055 44.8877 35.5176C45.3315 34.7105 45.7583 34.0379 46.0752 33.5654C46.2338 33.3291 46.3659 33.1416 46.46 33.0107C46.507 32.9454 46.5445 32.8936 46.5713 32.8574C46.5847 32.8393 46.5957 32.8249 46.6035 32.8145C46.6094 32.8061 46.6157 32.7965 46.623 32.7861C46.6535 32.743 46.6968 32.6824 46.7529 32.6064C46.8651 32.4545 47.0298 32.2389 47.249 31.9678C47.6875 31.4255 48.3458 30.6604 49.249 29.7373C51.0564 27.8903 53.8424 25.4102 57.8008 22.8105C61.7614 20.2095 65.5838 18.3921 68.415 17.2246C69.8322 16.6402 71.0056 16.2171 71.8291 15.9385C72.2408 15.7992 72.5655 15.6961 72.79 15.627C72.9021 15.5924 72.9893 15.5657 73.0498 15.5479C73.0655 15.5432 73.0797 15.5387 73.0918 15.5352C73.1244 15.5231 73.1699 15.5065 73.2275 15.4854C73.3541 15.4391 73.5399 15.3714 73.7793 15.2861C74.2584 15.1154 74.9541 14.873 75.8242 14.582C77.5636 14.0004 80.007 13.2248 82.8252 12.4492C88.4296 10.907 95.642 9.32812 101.771 9.32812Z"
          fill="#3C40B4"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
      <svg
        id="worm-shape"
        viewBox="0 0 155 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="curve-line">
          <path
            id="silver-curve"
            d="M2.5 15.6058C2.5 15.6058 45 45.1122 77.25 15.6126C109.5 -13.8871 152 15.6058 152 15.6058"
            stroke="#C3C3C3"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <path
            id="colored-curve"
            d="M2.5 15.6058C2.5 15.6058 45 45.1122 77.25 15.6126C109.5 -13.8871 152 15.6058 152 15.6058"
            stroke="#3C40B4"
            opacity={0}
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>
      </svg>
      {/* jelly navbar */}
      <svg
        id="navbar-items"
        opacity={0}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 300"
      >
        <line
          id="bar"
          style={{
            fill: "none",
            strokeWidth: 55,
            strokeLinecap: "round",
            stroke: "rgb(255, 183, 72)",
          }}
          x1={250}
          y1={150}
          x2={450}
          y2={150}
        />
        <ellipse
          style={{
            stroke: "rgb(60, 64, 180)",
            strokeWidth: 0,
            fill: "rgb(60, 64, 180)",
          }}
          cx={250}
          cy={150}
          rx={25}
          ry={25}
        />
        <ellipse
          style={{
            stroke: "rgb(60, 64, 180)",
            strokeWidth: 0,
            fill: "rgb(60, 64, 180)",
          }}
          cx={350}
          cy={150}
          rx={25}
          ry={25}
        />
        <ellipse
          style={{
            stroke: "rgb(60, 64, 180)",
            strokeWidth: 0,
            fill: "rgb(60, 64, 180)",
          }}
          cx={450}
          cy={150}
          rx={25}
          ry={25}
        />
      </svg>
      <div className="flex flex-row">
        <div className="text-center">
          <h3>manual tween timeline</h3>
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bungee">
              <rect width="500" height="500" fill="white" />
              <circle id="ball" cx="250" cy="46" r="46" fill="#3286C3" />
              <path
                id="rope"
                d="M150 250C150 250 210.948 250 250 250C289.052 250 350 250 350 250"
                stroke="#00676B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeMiterlimit={120}
              />
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h3>using tweenTo</h3>
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bounce-object">
              <rect width="500" height="500" fill="white" />
              <circle id="circ" cx="250" cy="46" r="46" fill="#3286C3" />
              <path
                id="wire"
                d="M150 250C150 250 210.948 250 250 250C289.052 250 350 250 350 250"
                stroke="#00676B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeMiterlimit={120}
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 400"
          width={500}
          height={500}
          id="arc"
          opacity={0}
        >
          <path
            style={{
              stroke: "rgb(0, 0, 0)",
              fill: "rgb(186, 218, 85)",
              strokeLinecap: "round",
              strokeWidth: 15,
            }}
            d="M 100 300 C 100 300 148 200 250 200 C 352 200 400 300 400 300"
          />
        </svg>
      </div>
    </div>
  );
}
