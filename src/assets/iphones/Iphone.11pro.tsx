import React from "react";

type Props = {
  backgroundImage: string;
  onLoad: () => void
};

const Iphone11Pro = ({ backgroundImage, onLoad }: Props) => {
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
              <path d="M5285 14035 c-5 -2 -95 -9 -200 -15 -104 -6 -223 -18 -264 -25 -120 -23 -234 -98 -376 -246 -165 -172 -251 -344 -302 -599 -15 -76 -17 -203 -20 -1167 l-4 -1081 24 -59 c53 -126 52 -115 52 -903 l0 -735 -38 -107 -37 -107 2 -3528 c3 -3350 4 -3533 21 -3618 51 -253 145 -436 314 -608 134 -138 253 -214 368 -235 150 -29 410 -37 1165 -37 l765 0 65 32 c36 18 89 37 119 43 71 13 1050 13 1121 0 29 -5 88 -26 131 -46 l79 -35 783 4 c891 5 1100 16 1217 65 68 28 176 108 265 197 192 191 295 405 336 701 10 69 13 846 16 3396 l4 3308 -31 71 c-62 141 -61 105 -58 1277 l3 1067 34 97 c31 89 33 99 19 115 -8 10 -24 41 -34 68 -17 46 -19 81 -19 400 0 381 2 398 61 468 24 28 24 29 24 255 -1 306 -16 619 -35 720 -47 245 -151 440 -326 613 -132 130 -249 199 -374 218 -203 32 -361 34 -2605 37 -1240 1 -2259 1 -2265 -1z m1282 -185 c214 -17 366 -65 520 -166 200 -130 342 -330 410 -579 l28 -100 0 -810 0 -810 -27 -100 c-107 -393 -417 -671 -818 -735 -105 -17 -1107 -25 -1295 -11 -308 24 -525 118 -703 305 -87 91 -121 142 -177 258 -102 211 -107 274 -103 1158 4 679 5 720 25 805 41 182 122 338 237 462 182 195 396 298 674 322 126 12 1086 12 1229 1z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone11Pro;