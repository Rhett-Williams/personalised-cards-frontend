import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphonexsmax = ({ backgroundImage }: Props) => {
  return (
    <div style={{ transform: "scale(0.35)", height: 0, width: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1500px" height="1500px" shape-rendering="geometricPrecision">
            <defs >
            <pattern
                id="myPattern"
                patternUnits="userSpaceOnUse"
                width="15000"
                height="15000"
            >
                <image xlinkHref={backgroundImage} width="15000" height="15000" style={{ transform: 'translate(750px, 15000px) scale(1, -1)' }}/>
            </pattern>
            </defs>
            <g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)">
                <path d="M5145 14293 c-22 -2 -119 -10 -215 -19 -304 -26 -337 -35 -452 -118 -207 -148 -347 -377 -415 -674 l-26 -117 -4 -907 -4 -907 28 -78 28 -78 0 -720 0 -720 -28 -81 -27 -80 2 -4080 3 -4079 27 -120 c70 -316 217 -547 441 -695 103 -69 118 -73 393 -102 178 -18 281 -21 977 -25 862 -5 962 -1 1075 45 l67 27 490 0 490 0 74 -28 c122 -46 209 -49 1065 -44 706 4 801 6 991 26 116 11 235 28 265 36 75 20 169 87 276 197 153 157 240 329 291 572 l28 131 3 3921 2 3921 -24 64 c-46 124 -48 154 -44 1159 l3 945 29 87 29 87 -26 30 c-56 67 -62 108 -62 436 0 333 5 365 67 452 l31 43 -6 272 c-6 233 -11 292 -32 398 -33 165 -91 308 -176 435 -77 115 -152 192 -259 264 -90 62 -133 76 -287 91 -65 6 -154 16 -198 23 -57 8 -771 11 -2465 12 -1312 1 -2403 0 -2425 -2z m259 -473 c123 -31 209 -81 306 -179 64 -65 94 -104 122 -161 76 -156 73 -126 73 -875 0 -754 3 -723 -77 -885 -139 -285 -509 -431 -823 -325 -231 77 -381 236 -448 474 -20 73 -21 99 -25 681 -2 393 1 633 7 685 40 297 222 510 501 586 93 25 263 25 364 -1z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphonexsmax;