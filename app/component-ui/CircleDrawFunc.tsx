import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import React, { useRef } from "react";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

export default function CircleDrawFunc() {
  const container = useRef(null);

  useGSAP(
    () => {
      const svg = document.querySelector(".circle-connect");
      const ns: string = "http://www.w3.org/2000/svg";
      const elementArray: SVGElement[] = [];

      function createCircle({
        radius,
        cx,
        cy,
        rotation,
      }: {
        radius: number;
        cx: number;
        cy: number;
        rotation: number;
      }): SVGCircleElement {
        const circle = document.createElementNS(
          ns,
          "circle",
        ) as SVGCircleElement;
        //default constant value
        const defaultFill: string = "none";
        const defaultStroke: string = "blue";
        const defaultStrokeWidth: number = 7;
        const defaultTransformOrigin: string = "50% 50%";

        //attributes
        circle.setAttributeNS(null, "r", `${radius}`);
        circle.setAttributeNS(null, "cx", `${cx}`);
        circle.setAttributeNS(null, "cy", `${cy}`);
        circle.setAttributeNS(
          null,
          "transform-origin",
          `${defaultTransformOrigin}`,
        );
        circle.setAttributeNS(null, "fill", `${defaultFill}`);
        circle.setAttributeNS(null, "stroke", `${defaultStroke}`);
        circle.setAttributeNS(null, "stroke-width", `${defaultStrokeWidth}`);

        //set the rotation and origin
        gsap.set(circle, { rotate: rotation, transformOrigin: "50% 50%" });
        //add it to element array
        elementArray.push(circle);
        return circle;
      }

      function createLine({
        x1,
        y1,
        x2,
        y2,
      }: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }): SVGLineElement {
        //default constant value
        const ns: string = "http://www.w3.org/2000/svg";
        const line = document.createElementNS(ns, "line") as SVGLineElement;
        const defaultStroke: string = "blue";
        const defaultStrokeWidth: number = 7;

        //attributes
        line.setAttributeNS(null, "x1", `${x1}`);
        line.setAttributeNS(null, "y1", `${y1}`);
        line.setAttributeNS(null, "x2", `${x2}`);
        line.setAttributeNS(null, "y2", `${y2}`);
        line.setAttributeNS(null, "stroke", `${defaultStroke}`);
        line.setAttributeNS(null, "stroke-width", `${defaultStrokeWidth}`);

        //add it to element array
        elementArray.push(line);
        return line;
      }

      //Calculate distance between elements of circle to line:
      //formula : cx = x2(line) + radius
      const circle1 = createCircle({
        radius: 30,
        cx: 20,
        cy: 50,
        rotation: 180,
      });
      const line1 = createLine({ x1: 50, y1: 50, x2: 150, y2: 50 });
      const circle2 = createCircle({
        radius: 30,
        cx: 180,
        cy: 50,
        rotation: 180,
      });

      const line2 = createLine({ x1: 180, y1: 80, x2: 100, y2: 130 });
      const circle3 = createCircle({
        radius: 30,
        cx: 100,
        cy: 160,
        rotation: -90,
      });

      const line3 = createLine({ x1: 100, y1: 190, x2: 100, y2: 250 });
      const circle4 = createCircle({
        radius: 20,
        cx: 100,
        cy: 270,
        rotation: -90,
      });

      const line4 = createLine({ x1: 80, y1: 280, x2: 40, y2: 320 });
      const circle5 = createCircle({
        radius: 20,
        cx: 25,
        cy: 338,
        rotation: -35,
      });

      const line5 = createLine({ x1: 120, y1: 280, x2: 160, y2: 320 });
      const circle6 = createCircle({
        radius: 20,
        cx: 175,
        cy: 338,
        rotation: -135,
      });

      //loops the array and append it to the target SVG
      for (const element of elementArray) {
        svg?.appendChild(element);
      }

      const individualNodeTl = gsap
        .timeline({ defaults: { duration: 1 } })
        .fromTo(circle1, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%" })
        .from(line1, { drawSVG: 0 })
        .fromTo(circle2, { drawSVG: "100% 100%" }, { drawSVG: "180% 75%" })
        .from(line2, { drawSVG: 0 })
        .fromTo(circle3, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%" })
        .from(line3, { drawSVG: 0 })
        .fromTo(circle4, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%" });

      const simultaneousNodeTl = gsap
        .timeline({ defaults: { duration: 1 } })
        .from(line4, { drawSVG: 0 })
        .from(line5, { drawSVG: 0 }, "<")
        .fromTo(
          circle5,
          { drawSVG: "100% 100%" },
          { duration: 1.5, drawSVG: "-10% 200%" },
        )
        .fromTo(
          circle6,
          { drawSVG: "100% 100%" },
          { duration: 1.5, drawSVG: "200% -10%" },
          "<",
        );

      const masterTl = gsap
        .timeline({ repeat: -1, yoyo: true, repeatDelay: 1 })
        .add(individualNodeTl)
        .add(simultaneousNodeTl, 6.6);

      //   GSDevTools.create({ animation: masterTl });
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <svg
        className="circle-connect bg-amber-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 500"
        width={500}
        height={500}
      ></svg>
    </div>
  );
}
