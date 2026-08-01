"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import PrimaryButton from "./component-ui/PrimaryButton";
import ScalingMessage from "./component-ui/ScalingMessage";
import MovingImage from "./component-ui/MovingImage";

export default function Home() {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".title-container", {
        gap: "30px",
        repeat: -1,
        yoyo: true,
        ease: "back.inOut",
      });
      gsap.to(".name-title", {
        y: -20,
        rotate: 15,
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });
    },
    { scope: container },
  );

  return (
    <main ref={container}>
      <div className="flex justify-center bg-lime-600">
        <div className="title-container bg-amber-300 w-fit h-40 flex flex-row text-5xl justify-center items-center p-5">
          <p className="font-serif name-title relative ">Z</p>
          <p className="font-serif name-title relative ">Y</p>
          <p className="font-serif name-title relative">R</p>
          <p className="font-serif name-title relative">U</p>
          <p className="font-serif name-title relative">S</p>
        </div>
      </div>
      <PrimaryButton />
      <ScalingMessage />
      <MovingImage />
    </main>
  );
}
