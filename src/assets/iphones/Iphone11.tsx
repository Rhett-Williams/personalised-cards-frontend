import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphone11 = ({ backgroundImage, onLoad }: Props) => {
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
                <path d="M5190 14099 c-41 -4 -142 -13 -225 -19 -259 -19 -291 -30 -466 -172 -172 -139 -306 -341 -373 -563 -66 -221 -68 -250 -73 -1212 l-5 -863 30 -72 c58 -143 57 -124 57 -873 0 -755 1 -737 -61 -874 l-25 -56 4 -3700 c3 -3449 4 -3707 20 -3810 54 -341 198 -608 430 -797 108 -88 183 -132 252 -147 28 -6 118 -16 200 -21 83 -6 191 -15 240 -20 50 -5 446 -10 881 -10 l791 0 93 46 c152 75 142 74 548 74 407 0 415 -1 552 -78 l65 -37 780 -3 c795 -3 858 -2 1270 38 126 13 202 48 333 155 178 147 309 344 378 568 73 237 68 -78 71 3885 l3 3563 -37 107 -38 107 -3 943 c-2 569 1 978 7 1031 5 48 22 125 38 170 l28 83 -24 19 c-45 37 -51 87 -51 428 0 190 4 331 11 354 5 21 24 53 41 73 l31 35 -6 287 c-4 184 -11 326 -22 394 -48 323 -199 598 -431 784 -164 132 -204 146 -459 164 -82 6 -190 15 -240 20 -110 12 -4507 11 -4615 -1z m1104 -259 c87 -6 188 -18 225 -26 78 -19 210 -79 276 -124 139 -96 275 -267 334 -420 67 -173 66 -158 66 -960 0 -716 0 -726 -22 -812 -46 -180 -112 -303 -229 -427 -84 -90 -208 -178 -306 -218 -187 -76 -257 -83 -843 -83 -621 1 -679 8 -880 105 -187 91 -327 228 -416 410 -26 55 -55 129 -64 165 -29 124 -37 373 -32 979 4 556 6 591 26 686 39 173 107 310 215 431 167 187 395 283 706 297 169 8 802 6 944 -3z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone11;