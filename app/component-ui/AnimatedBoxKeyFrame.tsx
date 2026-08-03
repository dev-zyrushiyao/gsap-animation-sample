import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function AnimatedBoxKeyFrame() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(container.current, {
        keyframes: {
          "10%": { backgroundColor: "#FF006E", color: "#111827" },
          "20%": { backgroundColor: "#FB5607", color: "#111827" },
          "30%": { backgroundColor: "#FFBE0B", color: "#111827" },
          "40%": { backgroundColor: "#8338EC", color: "#F9FAFB" },
          "50%": { backgroundColor: "#3A86FF", color: "#111827" },
          "60%": { backgroundColor: "#06D6A0", color: "#111827" },
          "70%": { backgroundColor: "#118AB2", color: "#111827" },
          "80%": { backgroundColor: "#EF476F", color: "#111827" },
          "90%": { backgroundColor: "#FFD166", color: "#111827" },
          "100%": { backgroundColor: "#073B4C", color: "#FFFFFF" },
          ease: "linear",
        },
        duration: 25,
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="bg-violet-300 p-6 text-3xl">
      Keyframed Tween Animation
    </div>
  );
}
