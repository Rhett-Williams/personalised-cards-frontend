import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphonexr = ({ backgroundImage, onLoad }: Props) => {
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
                <image onLoad={onLoad} xlinkHref={backgroundImage} width="15000" height="15000" style={{ transform: 'translate(750px, 15000px) scale(1, -1)' }}/>
            </pattern>
            </defs>
            <g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)">
                <path d="M5255 14260 c-111 -8 -271 -28 -445 -56 -112 -18 -213 -49 -255 -78 -320 -221 -489 -505 -547 -921 -18 -128 -20 -216 -25 -1016 l-5 -876 33 -94 34 -94 0 -740 0 -740 -33 -92 -33 -92 4 -3768 c3 -3740 4 -3769 24 -3903 56 -370 199 -642 439 -835 52 -42 109 -85 127 -95 49 -29 162 -55 358 -84 297 -43 426 -48 1134 -44 724 4 692 2 831 67 128 60 141 61 615 61 476 0 475 0 615 -63 143 -64 102 -61 824 -65 710 -4 825 1 1126 43 220 31 326 57 379 92 326 216 499 509 556 943 18 140 19 267 19 3755 l0 3610 -28 80 -27 80 0 1050 0 1050 27 79 27 80 -35 43 c-67 81 -69 93 -69 433 0 343 5 377 71 454 l34 40 0 235 c0 521 -79 813 -292 1078 -88 111 -258 250 -343 282 -61 23 -195 48 -435 83 l-155 22 -2220 2 c-1221 1 -2269 -2 -2330 -6z m205 -491 c127 -35 224 -92 320 -189 97 -98 139 -163 184 -287 l31 -88 0 -765 0 -765 -31 -88 c-44 -122 -87 -189 -179 -282 -124 -124 -238 -182 -411 -212 -83 -14 -113 -14 -189 -5 -317 40 -555 244 -642 552 -17 60 -18 117 -18 800 0 817 -3 780 69 935 101 217 315 377 555 415 81 13 225 3 311 -21z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphonexr;