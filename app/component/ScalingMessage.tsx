import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function ScalingMessage() {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const animation = useRef<gsap.core.Timeline | null>(null);
  useGSAP(
    () => {
      animation.current = gsap
        .timeline({ paused: true })
        .to(".title h1", {
          scale: 4,
          backgroundColor: "green",
          duration: 3,
          ease: "back.inOut",
        })
        .add("phase-2-animation")
        .to(
          ".content",
          {
            scale: 2,
            rotate: -90,
            transformOrigin: "top left",
            duration: 1,
            ease: "power1.in",
          },
          "-=2",
        );
    },
    { scope: container },
  );

  function changeAnimation(): void {
    animation.current?.play();
  }

  const jumpPhaseAnimation = (): void => {
    animation.current?.play("phase-2-animation");
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
        onClick={changeAnimation}
        className="p-3 border-2 border-black bg-amber-100"
      >
        Play
      </button>
      <button
        onClick={jumpPhaseAnimation}
        className="p-3 border-2 border-black bg-blue-400"
      >
        {" "}
        Jump Animation
      </button>
    </div>
  );
}
