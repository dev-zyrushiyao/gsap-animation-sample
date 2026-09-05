import React from "react";

export default function FlowerSVG() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" style={{}}>
        <defs>
          <filter
            id="leaf-right-filter-shadow"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation={1} />
            <feOffset dx={-2} dy={-1} />
            <feComponentTransfer result="offsetblur">
              <feFuncA id="spread-ctrl" type="linear" slope={0.34} />
            </feComponentTransfer>
            <feFlood floodColor="#000000a0" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="leaf-left-filter-shadow"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation={1} />
            <feOffset dx={-1} dy={1} />
            <feComponentTransfer result="offsetblur">
              <feFuncA id="spread-ctrl" type="linear" slope={1} />
            </feComponentTransfer>
            <feFlood floodColor="rgba(0,0,0,0.3)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="outer-petal-filter-shadow"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation={1} />
            <feOffset dx={1} dy={4} />
            <feComponentTransfer result="offsetblur">
              <feFuncA id="spread-ctrl" type="linear" slope={1} />
            </feComponentTransfer>
            <feFlood floodColor="rgba(0,0,0,0.3)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g
          className="flower"
          transform="matrix(1, 0, 0, 1, 1.154228, -13.751999)"
        >
          <g
            className="leaf leaf-right"
            transform="matrix(1, 0, 0, 1, -6.611467, -13.588678)"
          >
            <path
              d="M 207.743 237.29 C 217.251 234.665 227.251 230.355 204.606 226.036 C 181.961 221.718 152.549 235.05 152.549 247.987 C 152.549 254.62 159.498 258.232 161.995 258.706 C 166.238 259.51 171.259 256.138 179.522 250.805 C 196.479 239.859 198.234 239.916 207.743 237.29 Z"
              style={{
                fill: "rgb(162, 206, 105)",
                filter: "url(#leaf-right-filter-shadow)",
                transformBox: "fill-box",
                transformOrigin: "50% 50%",
              }}
              transform="matrix(-1, 0, 0, -1, 0.000018, -0.000014)"
            />
            <g className="midrib-right">
              <path
                style={{
                  fill: "none",
                  stroke: "rgb(97, 138, 90)",
                  strokeLinecap: "round",
                }}
                d="M 170.503 251.249 C 170.503 251.249 186.697 250.131 194.035 245.929 C 199.214 242.963 206.45 234.4 207.171 233.018 M 198.511 243.168 C 199.957 244.976 207.46 244.524 207.46 244.524 M 191.187 246.965 C 189.379 246.603 193.9 238.557 193.9 238.557"
              />
            </g>
          </g>
          <g
            id="leaf-stem"
            transform="matrix(1, 0, 0, 1, 1.340151, -14.741662)"
          >
            <path
              style={{
                fill: "none",
                strokeLinecap: "round",
                strokeWidth: 9,
                stroke: "rgb(148, 184, 107)",
              }}
              d="M 145.661 251.726 C 145.661 251.726 138.755 239.108 144.404 223.159 C 146.938 216.006 154.045 200.291 148.96 188.498 C 133.092 151.697 147.357 152.005 147.357 152.005"
              className="stem-border"
            />
            <path
              style={{
                fill: "none",
                strokeWidth: 6,
                strokeLinecap: "round",
                stroke: "rgb(162, 206, 105)",
              }}
              d="M 146.608 252.193 C 146.608 252.193 138.993 237.253 144.642 221.859 C 147.176 214.954 154.283 199.786 149.198 188.404 C 133.33 152.883 147.595 153.181 147.595 153.181"
              className="stem"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 0.030157, -16.639734)"
            className="leaf leaf-left"
          >
            <path
              d="M 135.936 248.54 C 145.353 252.786 160.416 266.349 132.83 266.742 C 105.244 267.135 81.016 251.829 81.276 231.238 C 81.412 220.51 88.157 214.666 90.631 213.9 C 94.833 212.599 99.805 218.053 107.988 226.68 C 124.782 244.385 126.52 244.292 135.936 248.54 Z"
              style={{
                fill: "rgb(162, 206, 105)",
                filter: "url(#leaf-left-filter-shadow)",
                transformBox: "fill-box",
                transformOrigin: "50% 50%",
              }}
              transform="matrix(0.992658, -0.120957, 0.120957, 0.992658, 0, 0)"
            />
            <g
              className="midrib-left"
              transform="matrix(1.067774, -0.018638, 0.01675, 0.959622, 0.763628, 4.391307)"
              style={{
                transformOrigin: "113.342px 237.775px",
              }}
            >
              <path
                style={{
                  fill: "none",
                  stroke: "rgb(97, 138, 90)",
                  strokeLinecap: "round",
                }}
                d="M 90.889 223.539 C 90.331 227.813 97.917 235.227 107.224 241.381 C 118.748 249.001 127.346 253.522 135.824 251.55 M 98.184 234.335 C 101.437 233.251 100 224.998 100 224.998 M 102.826 238.579 C 102.826 240.438 93.489 239.455 93.489 239.455 M 108.98 242.505 C 109.838 242.505 108.674 234.92 108.105 232.877 M 117.734 248.34 C 115.506 250.477 109.145 249.759 107.23 250.383"
              />
            </g>
          </g>
          <g
            className="leaf-face"
            transform="matrix(1, 0, 0, 1, 1.340151, -14.741662)"
          >
            <ellipse
              style={{
                strokeWidth: 1,
                fill: "rgb(245, 101, 52)",
                filter: "url(#outer-petal-filter-shadow)",
              }}
              cx={151.738}
              cy={139.568}
              rx={66.27}
              ry={51.309}
              className="outer-petal"
            />
            <ellipse
              style={{
                strokeWidth: 1,
                fill: "rgb(243, 207, 59)",
              }}
              cx={151.738}
              cy={139.568}
              rx={48.154}
              ry={37.283}
              className="inner-petal"
            />
            <g
              className="leaf-face"
              transform="matrix(1, 0, 0, 1, 9.247013, -3.773018)"
            >
              <ellipse
                style={{
                  fill: "rgb(231, 231, 231)",
                }}
                cx={142.491}
                cy={143.341}
                rx={30.913}
                ry={23.934}
              />
              <g className="eyes">
                <ellipse
                  style={{}}
                  cx={130.543}
                  cy={143.341}
                  rx={3.826}
                  ry={9.236}
                  className="left-eye"
                />
                <ellipse
                  style={{}}
                  cx={152.839}
                  cy={143.341}
                  rx={3.826}
                  ry={9.236}
                  className="left-eye"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
