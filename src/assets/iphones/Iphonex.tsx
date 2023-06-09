import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphonex = ({ backgroundImage, onLoad }: Props) => {
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
                <path d="M5095 14184 c-243 -20 -414 -42 -472 -59 -34 -10 -76 -36 -125 -76 -211 -176 -338 -421 -385 -739 -14 -99 -17 -244 -20 -1039 -4 -910 -4 -925 16 -980 51 -141 51 -133 51 -946 0 -809 -1 -817 -50 -953 l-21 -57 4 -3775 c4 -3735 4 -3776 24 -3895 52 -310 177 -546 376 -711 103 -84 130 -92 442 -126 185 -20 262 -22 1051 -25 l851 -4 59 21 c32 12 88 33 124 46 65 23 67 23 485 23 418 0 420 0 485 -23 36 -13 92 -34 124 -46 l59 -21 851 4 c695 3 878 7 1001 20 369 40 386 44 492 130 155 126 276 313 336 523 66 228 62 -11 62 3959 l-1 3610 -29 85 -30 85 0 1120 0 1120 29 97 28 98 -30 35 c-52 59 -56 83 -60 430 -4 368 3 417 66 487 l34 38 -5 293 c-6 327 -19 445 -68 607 -59 197 -183 386 -332 507 -106 85 -119 89 -492 130 -135 15 -380 17 -2460 19 -1868 1 -2341 -1 -2470 -12z m310 -499 c203 -43 369 -193 442 -400 l28 -80 0 -705 0 -705 -28 -80 c-55 -156 -160 -279 -300 -349 -290 -146 -647 -33 -796 253 -73 141 -72 126 -69 909 l3 697 23 65 c67 185 212 325 397 383 95 30 195 34 300 12z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphonex;