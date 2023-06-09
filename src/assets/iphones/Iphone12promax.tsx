import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphone12promax = ({ backgroundImage }: Props) => {
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
                <path d="M5320 14073 c-103 -9 -446 -66 -503 -83 -118 -37 -298 -183 -412 -335 -62 -82 -148 -261 -179 -370 -62 -218 -59 -160 -63 -1562 -3 -1014 -2 -1290 8 -1320 10 -29 14 -206 17 -726 2 -586 1 -701 -13 -777 -13 -80 -15 -459 -15 -3398 0 -2034 4 -3362 10 -3449 11 -164 29 -261 71 -389 74 -227 208 -416 393 -555 132 -101 164 -112 431 -153 284 -44 375 -48 1135 -44 l715 4 80 29 80 30 430 0 430 0 80 -30 80 -29 710 -4 c753 -3 857 1 1130 43 250 39 285 49 388 118 155 104 296 264 380 432 38 77 84 215 109 328 l23 102 -2 3325 c-1 1829 -3 3530 -4 3780 -2 250 -2 502 0 560 1 58 -1 299 -4 535 -4 296 -3 454 5 506 8 60 8 88 -2 125 -18 69 -19 944 0 993 16 45 17 1152 1 1286 -46 378 -230 695 -510 880 -101 67 -123 73 -429 123 l-165 26 -2180 2 c-1199 0 -2200 -1 -2225 -3z m1406 -272 c424 -41 749 -316 862 -731 l27 -95 3 -775 c2 -527 -1 -802 -8 -860 -14 -104 -68 -270 -117 -358 -110 -197 -294 -353 -511 -432 -176 -64 -189 -65 -917 -65 -712 0 -749 2 -907 56 -299 102 -550 371 -628 674 -33 129 -40 276 -40 900 0 633 8 826 39 947 105 408 437 696 851 738 107 10 1237 11 1346 1z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone12promax;