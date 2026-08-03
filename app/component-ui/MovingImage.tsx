import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

import hermanImage from "@/public/assets/herman.png";
import { GSDevTools } from "gsap/all";

gsap.registerPlugin(useGSAP, GSDevTools);

export default function MovingImage() {
  const container = useRef(null);

  useGSAP(
    () => {
      //shadow init
      gsap.set("#shadow", { opacity: 0, scaleX: 0.0 });

      gsap
        .timeline({
          id: "herman-tl",
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          defaults: {
            duration: 0.5,
          },
        })

        // hole appears close to open
        .from("#hole", { scale: 0, duration: 1.5 })
        // herman jump
        .to("#herman-wrapper", {
          y: -400,
          duration: 0.5,
          ease: "power1.out",
        })

        // herman falls down
        .to(
          "#herman-wrapper",
          {
            delay: 0.1,
            scaleY: 1,
            y: -220,
            duration: 0.7,
            ease: "power1.in",
          },
          "-=0.1",
        )
        // hole disappears
        .to("#hole", { scale: 0, duration: 0.5, ease: "power1.out" }, "<")
        // set shadow and expand a bit when herman is about to land
        .to(
          "#shadow",
          { opacity: 0.6, scaleX: 0.5, duration: 0.5, ease: "ease" },
          "-=0.5",
        )
        //   herman squashes
        .to("#herman-wrapper", {
          transformOrigin: "center bottom",
          scaleY: 0.6,
          scaleX: 1.3,
          ease: "power1.in",
          duration: 0.2,
        })
        //shadow expands when Herman squish
        .to(
          "#shadow",
          {
            opacity: 1,
            scaleX: 0.9,
            duration: 0.3,
            ease: "slow",
          },
          "-=0.2",
        )

        .to("#herman-wrapper", { scale: 1, duration: 1, ease: "back(1.7)" })
        // shadow shrinks
        .to("#shadow", { scaleX: 0.5, duration: 1, ease: "power1" }, "<");

      // GSDevTools.create({
      //   id: "herman-devtools",
      //   animation: "herman-tl",
      //   // container: "#video-container",
      // });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div id="video-container" className="flex flex-col items-center">
        <div id="title-container" className="bg-blue-300 inline">
          <p className="text-2xl bg-blue-200 inline">Herman Animation</p>
        </div>
        <div
          id="canvass"
          className="border-2 border-red-700 h-120 w-200 relative "
        >
          <div
            id="hole"
            className="absolute top-95 left-1/2 -translate-1/2 border-2 border-black rounded-[50%] h-10 w-60 bg-black  "
          ></div>

          <div
            id="shadow"
            className="absolute -z-10 top-95 left-1/2 -translate-1/2 border-2 border-[#747474] rounded-[50%] h-5 w-60 bg-[#747474] blur-xs  "
          ></div>

          {/* Jumping Herman */}
          <div
            id="animation-scope"
            className="relative border-5 border-transparent h-95.5 rounded-[100%] overflow-clip"
          >
            <div
              id="herman-wrapper"
              className="scale-x-70 scale-y-150 border-2 border-transparent absolute top-130 left-1/2 -translate-1/2 origin-center"
            >
              <Image src={hermanImage} alt="Herman Photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
