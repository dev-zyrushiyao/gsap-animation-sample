import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import React, { useRef } from "react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, SlowMo, GSDevTools);

export default function JumpingWormSVG() {
  const container = useRef(null);

  useGSAP(
    () => {
      //holes
      gsap.set("#holes , #worm-1 , #worm-2", { opacity: 1 });
      gsap.set("#holes ellipse", { scale: 0, transformOrigin: "50% 50%" });
      function openHole(hole: string): gsap.core.Timeline {
        const tl = gsap
          .timeline({ defaults: { duration: 0.5 } })
          .to(hole, { scale: 1, ease: "back" })
          .to(hole, { scale: 0, duration: 0.5, ease: "power2.in" }, "+=0.1");
        return tl;
      }

      //worm-1 (short)
      const pointsShort = { start: 0, end: 0 };
      const drawShort = gsap.quickSetter("#worm-1", "drawSVG");
      function updateShort(): void {
        drawShort(`${pointsShort.start}% ${pointsShort.end}%`);
      }

      //worn-2(tall)
      const pointTall = { start: 0, end: 0 };
      const drawTall = gsap.quickSetter("#worm-2", "drawSVG");
      function updateTall(): void {
        drawTall(`${pointTall.start}% ${pointTall.end}%`);
      }

      //setup the initial value of start:0 and end:0 to #worm-1 and #worm-2
      updateShort();
      updateTall();

      const tlShort = gsap
        .timeline({
          onUpdate: updateShort,
          // repeat: -1,
          defaults: { duration: 1, ease: "slow(0.5,0.6)" },
        })
        .add(openHole("#hole-1"))
        .to(
          pointsShort,
          {
            end: 100,
          },
          0.6,
        )
        .to(pointsShort, { start: 100 }, 0.3)
        .add(openHole("#hole-2"), "-=0.9");

      const tlTall = gsap
        .timeline({
          onUpdate: updateTall,
          defaults: { duration: 1, ease: SlowMo.config(0.5, 0.8) },
        })
        .add(openHole("#hole-3"))
        .to(pointTall, { end: 100 }, 0.3)
        .to(pointTall, { start: 100 }, 0.5)
        .add(openHole("#hole-4"), "-=0.8");

      const masterTl = gsap.timeline({ repeat: -1 });
      masterTl.add(tlShort);
      masterTl.add(tlTall);
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <svg
        width={1200}
        height={614}
        viewBox="0 0 1200 614"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="jump-hole">
          <rect width={1200} height={614} fill="white" />
          <g id="holes" opacity={0}>
            <ellipse
              id="hole-1"
              cx={100}
              cy={510}
              rx={77}
              ry={28}
              fill="#1F1F1F"
            />
            <ellipse
              id="hole-2"
              cx={500}
              cy={510}
              rx={77}
              ry={28}
              fill="#1F1F1F"
            />
            <ellipse
              id="hole-3"
              cx={800}
              cy={510}
              rx={77}
              ry={28}
              fill="#1F1F1F"
            />
            <ellipse
              id="hole-4"
              cx={1100}
              cy={510}
              rx={77}
              ry={28}
              fill="#1F1F1F"
            />
          </g>
          <g id="first-jump">
            <mask
              id="mask0_3610_9890"
              style={{
                maskType: "alpha",
              }}
              maskUnits="userSpaceOnUse"
              x={70}
              y={257}
              width={456}
              height={268}
            >
              <path
                id="worm-mask"
                d="M100 495C100 495 131.59 286.5 299.5 286.5C467.41 286.5 497 495 497 495"
                stroke="#45DBAC"
                strokeWidth={58}
                strokeLinecap="round"
              />
            </mask>
            <g mask="url(#mask0_3610_9890)">
              <path
                id="worm-1"
                opacity={0}
                d="M94 545C94 545 123.631 287 297.022 287C470.412 287 502 543.503 502 543.503"
                stroke="#DB4545"
                strokeWidth={38}
                strokeLinecap="round"
              />
            </g>
          </g>
          <g id="second-jump">
            <mask
              id="mask1_3610_9890"
              style={{
                maskType: "alpha",
              }}
              maskUnits="userSpaceOnUse"
              x={751}
              y={16}
              width={389}
              height={509}
            >
              <path
                id="worm-mask_2"
                d="M794.361 483.633C794.361 483.633 759.916 56.5 943.5 56.5C1127.08 56.5 1097.33 475.649 1097.33 475.649"
                stroke="#207D2E"
                strokeWidth={81}
                strokeLinecap="round"
              />
            </mask>
            <g mask="url(#mask1_3610_9890)">
              <path
                id="worm-2"
                opacity={0}
                d="M801.071 557.996C801.071 557.996 755.893 66.0859 939.477 66.0859C1123.06 66.0859 1096.91 558 1096.91 558"
                stroke="#DB4545"
                strokeWidth={38}
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
