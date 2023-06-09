import * as React from "react";

type Props = {
  color: string;
  image: string;
};
const Delta97100 = ({ color, image }: Props) => (
  //@ts-ignore
  <div
    style={{ transform: "scale(0.4)", height: 0, width: 0, marginLeft: -50 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1500}
      height={1500}
      shapeRendering="geometricPrecision"
    >
      <defs>
        <pattern
          id="myPattern"
          patternUnits="userSpaceOnUse"
          width="1100"
          height="1100"
        >
          <image
            xlinkHref={image}
            width="1100"
            height="1100"
            style={{ transform: "translate(350px, 210px) scale(0.7)" }}
          />
        </pattern>
      </defs>
      <path
        d="M0,0 H1500, V1500, H0, Z         M164,1418 L175,465 C190,200 238,175 265,160 L600,1 C650,15 850,15 900,1 L1235,160 C1262,175 1310,200 1325,465 L1336,1418 L1320,1499 H1240 L1220,1418 L1110,560 V1404 H390 V560 L280,1418 L260,1499 H180         Z"
        fill-rule="evenodd"
        fill="none"
      />
      <path
        d="M164,1418 L175,465 C190,200 238,175 265,160 L600,1 C650,15 850,15 900,1 L1235,160 C1262,175 1310,200 1325,465 L1336,1418 L1320,1499 H1240 L1220,1418 L1110,560 V1404 H390 V560 L280,1418 L260,1499 H180         M450,225 H1050, V977, H450, Z"
        fill={color}
        fill-rule="evenodd"
        id="garmentColour"
      />
      <path
        d="M164,1418         L175,465         C190,200 238,175 265,160         L600,1         C650,15 850,15 900,1         L1235,160         C1262,175 1310,200 1325,465         L1336,1418         L1320,1499         H1240         L1220,1418         L1110,560         V1404         H390         V560         L280,1418         L260,1499         H180         Z"
        stroke="black"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
      <rect
        x="450"
        y="225"
        width="600"
        height="752"
        fill="url(#myPattern)"
        id="innerRectangle"
        stroke="black"
        stroke-width="1"
        stroke-dasharray="1,2"
        vector-effect="non-scaling-stroke"
      />
      <path
        d="M600,1, C650 111, 850 111, 900 1"
        stroke="black"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
      <path
        d="M555,22, C625 170, 875 170, 945 22"
        stroke="black"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
      <path
        d="M165,1418 H280 M1220,1418 H1336"
        stroke="black"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
      <path
        d="M390,1335 H1110"
        stroke="black"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
      <path
        d="M265,160 Q400,300 390,560 M1235,160 Q1100,300 1110,560"
        stroke="black"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
    </svg>
  </div>
);
export default Delta97100;
