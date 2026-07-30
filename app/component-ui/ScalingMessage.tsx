import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, GSDevTools);

export default function ScalingMessage() {
  const container = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ defaults: { ease: "back" } })
        .to(".title h1", {
          scale: 4,
          backgroundColor: "green",
          duration: 3,
        })
        .add("phase-2-tl")
        .to(
          ".content",
          {
            scale: 2,
            rotate: -90,
            transformOrigin: "top left",
            duration: 1,
          },
          "-=2",
        );

      GSDevTools.create({ animation: tl.current });
    },
    { scope: container },
  );

  function restarttl(): void {
    tl.current?.restart();
  }

  const jumpPhasetl = (): void => {
    tl.current?.play("phase-2-tl");
  };

  return (
    <div ref={container}>
      <div className="title text-center">
        <h1 className="text-2xl  inline-block">The GSAP</h1>
      </div>
      <div className="content inline-block">
        <p className="inline-block">message to the developer</p>
      </div>
      <button
        onClick={restarttl}
        className="p-3 border-2 border-black bg-amber-100"
      >
        Play
      </button>
      <button
        onClick={jumpPhasetl}
        className="p-3 border-2 border-black bg-blue-400"
      >
        Jump tl
      </button>
    </div>
  );
}
