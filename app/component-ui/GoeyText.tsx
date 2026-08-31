import React, { JSX, useState } from "react";

type RangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  updateState: React.Dispatch<React.SetStateAction<number>>,
) => void;

//first component
const RangeComponent = ({
  caption,
  stateValue,
  stateUpdate,
  min,
  max,
}: {
  caption: string;
  stateValue: number;
  stateUpdate: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
}): JSX.Element => {
  return (
    <div className="slidecontainer">
      <p className="inline">{caption}</p>
      <input
        type="range"
        min={`${min}`}
        max={`${max}`}
        value={`${stateValue}`}
        className="slider w-50 h-3 bg-purple-700 rounded-full appearance-none cursor-pointer accent-amber-400
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-6
    [&::-webkit-slider-thumb]:h-6
    [&::-webkit-slider-thumb]:bg-amber-400
    [&::-webkit-slider-thumb]:rounded-full
    [&::-moz-range-thumb]:w-6
    [&::-moz-range-thumb]:h-6
    [&::-moz-range-thumb]:bg-amber-400
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-none"
        onChange={(e) => handleOnchange(e, stateUpdate)}
      />
      <p className="inline">{stateValue}</p>
    </div>
  );
};

const handleOnchange: RangeHandler = (e, stateUpdate): void => {
  const newValue = e.target.value;
  stateUpdate(Number(newValue));
};

//second component
export default function GoeyText() {
  const [blur, setBlur] = useState<number>(5);
  const [alpha4, setAlpha4] = useState<number>(20);
  const [alpha5, setAlpha5] = useState<number>(-10);

  return (
    <div className="bg-mist-400">
      <div className="range-ui">
        {RangeComponent({
          caption: "Blur",
          stateValue: blur,
          stateUpdate: setBlur,
          min: 1,
          max: 50,
        })}
        {RangeComponent({
          caption: "Alpha4",
          stateValue: alpha4,
          stateUpdate: setAlpha4,
          min: 1,
          max: 50,
        })}
        {RangeComponent({
          caption: "Alpha5",
          stateValue: alpha5,
          stateUpdate: setAlpha5,
          min: -30,
          max: 0,
        })}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{}}>
        <defs>
          <filter
            id="goo-text"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <title>{"Gaussian blur"}</title>
            <feGaussianBlur
              stdDeviation={`${blur} ${blur}`}
              edgeMode="none"
              in="SourceGraphic"
              result="goo-text-blur"
            />
            <feColorMatrix
              //   type="matrix"
              result="color-matrix-0"
              in="goo-text-blur"
              values={`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 ${alpha4} ${alpha5}`}
            />
          </filter>
        </defs>
        <g
          style={{
            filter: "url(#goo-text)",
          }}
        >
          <path
            d="M 148.326 109.975 L 148.326 99.844 L 174.494 99.844 L 174.494 123.797 Q 170.679 127.488 163.44 130.298 Q 156.201 133.107 148.777 133.107 Q 139.344 133.107 132.33 129.149 Q 125.316 125.191 121.789 117.829 Q 118.262 110.467 118.262 101.812 Q 118.262 92.42 122.199 85.119 Q 126.137 77.818 133.724 73.922 Q 139.508 70.928 148.121 70.928 Q 159.318 70.928 165.614 75.624 Q 171.91 80.32 173.715 88.605 L 161.656 90.861 Q 160.385 86.432 156.878 83.868 Q 153.371 81.305 148.121 81.305 Q 140.164 81.305 135.468 86.35 Q 130.771 91.395 130.771 101.32 Q 130.771 112.025 135.529 117.378 Q 140.287 122.73 147.998 122.73 Q 151.812 122.73 155.647 121.233 Q 159.482 119.736 162.23 117.603 L 162.23 109.975 Z M 182.929 109.687 Q 182.929 103.945 185.759 98.572 Q 188.589 93.199 193.778 90.369 Q 198.966 87.539 205.365 87.539 Q 215.249 87.539 221.566 93.958 Q 227.882 100.377 227.882 110.18 Q 227.882 120.064 221.504 126.565 Q 215.126 133.066 205.447 133.066 Q 199.458 133.066 194.024 130.359 Q 188.589 127.652 185.759 122.423 Q 182.929 117.193 182.929 109.687 Z M 194.742 110.303 Q 194.742 116.783 197.818 120.228 Q 200.894 123.674 205.406 123.674 Q 209.917 123.674 212.973 120.228 Q 216.029 116.783 216.029 110.221 Q 216.029 103.822 212.973 100.377 Q 209.917 96.932 205.406 96.932 Q 200.894 96.932 197.818 100.377 Q 194.742 103.822 194.742 110.303 Z M 234.236 109.687 Q 234.236 103.945 237.066 98.572 Q 239.896 93.199 245.085 90.369 Q 250.273 87.539 256.672 87.539 Q 266.557 87.539 272.873 93.958 Q 279.189 100.377 279.189 110.18 Q 279.189 120.064 272.811 126.565 Q 266.434 133.066 256.754 133.066 Q 250.766 133.066 245.331 130.359 Q 239.896 127.652 237.066 122.423 Q 234.236 117.193 234.236 109.687 Z M 246.049 110.303 Q 246.049 116.783 249.125 120.228 Q 252.201 123.674 256.713 123.674 Q 261.225 123.674 264.28 120.228 Q 267.336 116.783 267.336 110.221 Q 267.336 103.822 264.28 100.377 Q 261.225 96.932 256.713 96.932 Q 252.201 96.932 249.125 100.377 Q 246.049 103.822 246.049 110.303 Z M 313.434 118.219 L 324.918 120.146 Q 322.704 126.463 317.925 129.765 Q 313.147 133.066 305.969 133.066 Q 294.608 133.066 289.153 125.643 Q 284.846 119.695 284.846 110.631 Q 284.846 99.803 290.506 93.671 Q 296.166 87.539 304.821 87.539 Q 314.541 87.539 320.161 93.958 Q 325.78 100.377 325.534 113.625 L 296.659 113.625 Q 296.782 118.752 299.448 121.603 Q 302.114 124.453 306.092 124.453 Q 308.799 124.453 310.645 122.977 Q 312.491 121.5 313.434 118.219 Z M 314.09 106.57 Q 313.967 101.566 311.506 98.962 Q 309.045 96.357 305.518 96.357 Q 301.745 96.357 299.284 99.105 Q 296.823 101.853 296.864 106.57 Z M 350.794 132.082 L 350.794 106.775 L 328.769 71.953 L 343.001 71.953 L 357.152 95.742 L 371.015 71.953 L 385.001 71.953 L 362.894 106.857 L 362.894 132.082 Z"
            style={{
              fill: "rgb(216, 216, 216)",
              textWrapMode: "nowrap",
            }}
          />
          <rect
            x={100}
            y={132.872}
            width={300}
            height={24.586}
            style={{
              fill: "rgb(216, 216, 216)",
            }}
          />
          <g transform="matrix(1, 0, 0, 1, -3.960413, 0.537424)">
            <rect
              x={104.012}
              y={147.088}
              width={18.725}
              height={88.588}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={110.785}
              cy={245.704}
              rx={19.112}
              ry={19.112}
            />
          </g>
          <g
            transform="matrix(0.737354, 0, 0, 0.737354, 71.939095, 40.127926)"
            style={{}}
          >
            <rect
              x={88.616}
              y={146.287}
              width={15.893}
              height={74.253}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={97.563}
              cy={233.384}
              rx={16.038}
              ry={20.712}
            />
          </g>
          <g
            transform="matrix(0.999469, 0, 0, 0.891799, 86.459328, 19.359465)"
            style={{}}
          >
            <rect
              x={94.747}
              y={155.005}
              width={9.724}
              height={45.433}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={98.543}
              cy={212.995}
              rx={8.082}
              ry={10.438}
            />
          </g>
          <g
            transform="matrix(0.999469, 0, 0, 1.049585, 132.804382, -6.119648)"
            style={{}}
          >
            <rect
              x={91.012}
              y={144.462}
              width={11.101}
              height={74.253}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={96.923}
              cy={219.681}
              rx={15.886}
              ry={7.009}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={98.142}
              cy={236.393}
              rx={14.353}
              ry={4.578}
            />
          </g>
          <g
            transform="matrix(0.737354, 0, 0, 0.521027, 199.377365, 67.609085)"
            style={{}}
          >
            <rect
              x={93.098}
              y={152.63}
              width={7.825}
              height={74.253}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={97.563}
              cy={233.384}
              rx={16.038}
              ry={20.712}
            />
          </g>
          <g transform="matrix(1, 0, 0, 1, 195.613815, -4.283209)">
            <rect
              x={104.012}
              y={147.088}
              width={18.725}
              height={88.588}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={111.749}
              cy={249.561}
              rx={14.64}
              ry={14.035}
              transform="matrix(1, 0, 0.02816, 1, -4.199106, 2.393039)"
            />
          </g>
          <g
            transform="matrix(0.737354, 0, 0, 0.737354, 286.946899, 32.994965)"
            style={{}}
          >
            <rect
              x={81.706}
              y={144.905}
              width={15.893}
              height={74.253}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={89.689}
              cy={233.384}
              rx={23.912}
              ry={20.712}
            />
          </g>
          <g transform="matrix(1, 0, 0, 1, 276.263031, -4.557548)">
            <rect
              x={105.012}
              y={147.088}
              width={18.725}
              height={116.101}
              style={{
                fill: "rgb(216, 216, 216)",
              }}
            />
            <ellipse
              style={{
                fill: "rgb(216, 216, 216)",
              }}
              cx={111.804}
              cy={272.198}
              rx={19.112}
              ry={19.112}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
