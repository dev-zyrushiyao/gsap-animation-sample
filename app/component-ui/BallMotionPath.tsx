import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SlowMo } from "gsap/EasePack";
import { GSDevTools } from "gsap/GSDevTools";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin, GSDevTools, SlowMo);

export default function BallMotionPath() {
  const container = useRef(null);

  useGSAP(
    () => {
      const balls: SVGEllipseElement[] = gsap.utils.toArray(".balls ellipse");
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 3, ease: "none" },
      });

      //each ball have a constant distance from each other and has different start and ending points. so it stays where on its original position, preventing overlap.
      balls.forEach((ball, index) => {
        const startingPoint: number = index / balls.length;
        // console.log("startingPoint", startingPoint);

        //individual ball animation
        tl.to(
          ball,
          {
            motionPath: {
              path: ".trail-green",
              align: ".trail-green",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: startingPoint,
              end: startingPoint + 1,
            },
          },
          0,
        );
      });
    },
    { scope: container },
  );

  //normal stagger animation
  //     gsap.to(balls, {
  //     motionPath: {
  //       path: ".trail-green",
  //       align: ".trail-green",
  //       autoRotate: true,
  //       alignOrigin: [0.5, 0.5],
  //     },
  //     duration: 5,
  //     repeat: -1,
  //     stagger: 1,
  //     ease: "power1.inOut",
  //   });

  return (
    <div ref={container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        id="stripe-black"
      >
        <defs>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={89.344}
            cy={99.992}
            r={10.714}
            id="ball-ball-gradient-1"
            gradientTransform="matrix(0.961376, 0.688334, -0.719252, 1.004558, 57.074408, -76.937723)"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(175, 117, 117)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(46.048% 5.421% 10.504%)",
              }}
            />
          </radialGradient>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={123.389}
            cy={84.675}
            r={10.714}
            id="ball-gradient-3"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(168, 33, 148)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(46.275% 0% 40.29%)",
              }}
            />
          </radialGradient>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={152.102}
            cy={85.354}
            r={10.714}
            id="ball-gradient-4"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(118, 175, 117)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(19.661% 41.369% 20.678%)",
              }}
            />
          </radialGradient>

          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={207.999}
            cy={84.948}
            r={10.714}
            id="ball-gradient-5"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(101, 93, 100)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(24.649% 21.771% 24.304%)",
              }}
            />
          </radialGradient>
          <filter
            id="cone-shadow"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation={2} />
            <feOffset dx={3} dy={1} />
            <feComponentTransfer result="offsetblur">
              <feFuncA id="spread-ctrl" type="linear" slope={0.8} />
            </feComponentTransfer>
            <feFlood floodColor="rgba(0,0,0,0.3)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="filter-1"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation={2} />
            <feOffset dx={3} dy={1} />
            <feComponentTransfer result="offsetblur">
              <feFuncA id="feFuncA-1" type="linear" slope={0.8} />
            </feComponentTransfer>
            <feFlood floodColor="rgba(0,0,0,0.3)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="c"
            x={-0.31856}
            y={-0.25824}
            width={1.6371}
            height={1.5165}
          >
            <feGaussianBlur stdDeviation={17.570414} />
          </filter>
          <filter id="d">
            <feGaussianBlur stdDeviation={0.456111} />
          </filter>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx={97.539}
            cy={85.627}
            r={10.714}
            id="ball-gradient-6"
          >
            <stop
              offset={0}
              style={{
                stopColor: "rgb(80, 113, 219)",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "rgb(0% 26.008% 64.217%)",
              }}
            />
          </radialGradient>
          <pattern
            id="pattern-0"
            viewBox="0 0 22.76 20.84"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="none"
            width={30}
            height={30}
          >
            <g className="heart-pattern">
              <rect
                width={22.76}
                height={20.84}
                style={{
                  fill: "rgb(68, 58, 216)",
                }}
              />
              <g
                transform="matrix(0.037853, 0, 0, 0.037853, -1.413947, -7.948621)"
                style={{}}
              >
                <defs />
                <g fillRule="evenodd">
                  <path
                    d="m337.99 671.06s236.67-140 202.38-274.29c-34.286-134.29-180-102.86-202.38-31.429-22.382-71.429-168.1-102.86-202.38 31.429-34.286 134.29 202.38 274.29 202.38 274.29z"
                    fill="#f00"
                  />
                  <path
                    d="m370.04 366.63c0.4762 0 0.95239 0 0 0z"
                    stroke="#000"
                    fill="none"
                  />
                </g>
                <g strokeWidth={5.1}>
                  <path
                    d="m428.43 318.09c-16.453 0-31.836 4.4656-44.982 12.23 53.497 3.7485 95.758 47.531 95.758 100.96 0 18.222-4.9167 35.33-13.518 50.106 29.62-13.728 50.132-43.304 50.132-77.554 0-47.322-39.149-85.742-87.39-85.742z"
                    filter="url(#c)"
                    opacity={0.75}
                    fill="#f4d7d7"
                  />
                  <path
                    d="m512.53 408.8-34.867-47.798 11.889 57.842-12.411-57.847-12.665 57.676 12.19-57.894-35.029 47.539 34.684-47.93-51.337 29.181 51.18-29.68-58.767 5.7776 58.827-6.2967-56.037-18.625 56.302 18.175-43.617-39.807 44.042 39.504-23.655-54.106 24.167 54.002 0.3969-59.049 0.1131 59.163 24.38-53.783-23.96 54.094 44.148-39.217-43.891 39.672 56.282-17.87-56.232 18.39 58.684 6.567-58.851-6.0717 50.94 29.868-51.293-29.484 34.387 48.005z"
                    filter="url(#d)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </pattern>
          <pattern
            id="pattern-0-0"
            href="#pattern-0"
            patternTransform="matrix(0.693571, 0, 0, 0.634643, 187.152225, 40.855702)"
          />
        </defs>
        <g transform="matrix(0.049556, 0, 0, 0.049556, 48.134068, -8.476466)">
          <defs />
        </g>
        <path
          d="M 38.838 199.774 C 38.838 199.774 168.703 209.521 209.505 184.305 C 265.658 149.601 233.137 254.414 276.845 245.567 C 293.353 242.226 332.604 218.985 349.351 229.922 C 374.252 246.184 373.994 300 373.994 300"
          style={{
            fill: "none",
            stroke: "rgb(189, 219, 98)",
            strokeWidth: 41,
          }}
          className="trail-green"
        />
        <path
          d="M 38.768 199.774 C 38.768 199.774 168.633 209.521 209.435 184.305 C 265.588 149.601 233.067 254.414 276.775 245.567 C 293.283 242.226 332.534 218.985 349.281 229.922 C 374.182 246.184 373.924 300 373.924 300"
          style={{
            fill: "none",
            stroke: "rgb(240, 245, 243)",
            strokeWidth: 25,
          }}
          className="trail-white"
        />
        <g
          className="balls"
          transform="matrix(1, 0, 0, 1, 74.637337, 22.329994)"
        >
          <ellipse
            style={{
              fill: "url(#ball-ball-gradient-1)",
            }}
            cx={73.476}
            cy={89.203}
            rx={10.714}
            ry={10.714}
          />
          <ellipse
            style={{
              fill: "url(#ball-gradient-6)",
            }}
            cx={100.817}
            cy={89.203}
            rx={10.714}
            ry={10.714}
          />
          <ellipse
            style={{
              fill: "url(#ball-gradient-4)",
            }}
            cx={155.498}
            cy={89.203}
            rx={10.714}
            ry={10.714}
          />
          <ellipse
            style={{
              fill: "url(#ball-gradient-3)",
            }}
            cx={127.011}
            cy={89.203}
            rx={10.714}
            ry={10.714}
          />

          <ellipse
            style={{
              stroke: "rgb(150, 150, 150)",
              fill: "url(#pattern-0-0)",
            }}
            cx={239.006}
            cy={88.384}
            rx={10.714}
            ry={10.714}
          />
          <ellipse
            style={{
              fill: "url(#ball-gradient-5)",
            }}
            cx={210.519}
            cy={88.384}
            rx={10.714}
            ry={10.714}
          />
        </g>
        <path
          d="M 373.804 343.22 L 333.365 266.753 C 343.772 277.247 364.644 279.511 372.751 277.919 C 381.284 277.677 405.677 254.002 405.677 254.002 L 394.499 340.156 L 373.804 343.22 Z"
          style={{
            fill: "rgb(89, 150, 117)",
            filter: "url(#filter-1)",
            transformOrigin: "376.719px 301.2px",
          }}
          className="holes"
        />
        <path
          d="M 0.532 190.506 L 76.395 166.044 C 65.207 173.809 59.812 192.388 59.96 200 C 58.814 207.782 76.395 233.707 76.395 233.707 L 0 209.777 L 0.532 190.506 Z"
          style={{
            filter: "url(#cone-shadow)",
            fill: "rgb(89, 150, 117)",
          }}
          className="holes"
        />
      </svg>
    </div>
  );
}
