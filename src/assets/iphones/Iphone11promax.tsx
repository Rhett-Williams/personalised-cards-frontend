import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphone11promax = ({ backgroundImage }: Props) => {
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
                <path d="M4995 14020 c-271 -26 -302 -35 -421 -123 -184 -136 -318 -342 -380 -583 -41 -164 -45 -289 -42 -1249 l4 -900 29 -75 30 -75 0 -715 0 -715 -30 -75 -30 -75 0 -3770 c0 -3084 2 -3785 13 -3854 45 -284 178 -528 373 -684 139 -112 176 -123 492 -152 134 -12 335 -15 994 -15 l825 0 82 38 81 37 490 0 490 0 81 -38 82 -37 825 0 c659 0 860 3 994 15 317 29 351 39 490 150 109 86 201 202 268 340 64 130 99 256 114 415 9 84 11 1066 9 3685 l-3 3570 -30 75 -30 75 -3 985 c-2 653 1 1001 8 1034 6 26 22 77 36 112 l25 64 -19 25 c-36 46 -44 139 -40 460 l3 300 28 56 29 56 -5 389 c-4 291 -9 408 -20 466 -62 314 -227 564 -468 710 -76 46 -116 55 -369 78 -196 19 -306 20 -2515 18 -2105 -1 -2326 -2 -2490 -18z m1481 -171 c213 -29 414 -133 551 -282 101 -111 165 -232 211 -397 l27 -95 3 -697 c3 -675 2 -699 -18 -800 -42 -205 -117 -347 -255 -483 -141 -140 -292 -215 -501 -250 -86 -14 -176 -16 -699 -13 l-600 4 -95 26 c-117 32 -189 63 -277 121 -190 123 -314 301 -381 545 l-26 97 -4 660 c-3 708 1 785 50 943 102 331 387 569 743 622 82 12 1183 11 1271 -1z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone11promax;