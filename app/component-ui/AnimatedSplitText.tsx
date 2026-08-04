import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export default function AnimatedSplitText() {
  const container = useRef(null);

  useGSAP(
    () => {
      const splitText = SplitText.create("h3", { type: "chars" });

      gsap.from(splitText.chars, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "back.out(4)",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        stagger: { amount: 1 },
      });

      gsap.from(SplitText.create("h2", { type: "words" }).words, {
        x: 20,
        opacity: 0,
        duration: 1.3,
        rotate: -30,
        ease: "back.out(4)",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        stagger: { amount: 1 },
      });

      //   GSDevTools.create({ animation: myTextAnimation });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-blue-800 p-20">
      <h3 className="text-4xl text-white text-center">Welcome to my page</h3>
      <h2 className="text-4xl text-white text-center">I love cheese</h2>
    </div>
  );
}
