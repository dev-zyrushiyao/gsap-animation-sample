import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function PrimaryButton() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(".expanding-circle", {
      scale: 1,
      ease: "circ",
      backgroundColor: "#fef08a",
      overwrite: "auto",
    });
    gsap.to(".primary-btn span", { color: "black" });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(".expanding-circle", {
      scale: 0,
      ease: "circ",
      overwrite: "auto",
    });
    gsap.to(".primary-btn span", { color: "white" });
  });

  return (
    <div className="flex justify-center p-20" ref={container}>
      <button
        className="primary-btn bg-blue-900 text-white p-4 h-20 rounded-2xl relative overflow-clip transform-gpu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10"> My button</span>
        <div className="expanding-circle scale-0 h-40 w-40 rounded-full absolute top-1/2 left-1/2 -translate-1/2"></div>
      </button>
    </div>
  );
}
