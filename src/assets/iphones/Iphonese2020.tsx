import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphonese2020 = ({ backgroundImage, onLoad }: Props) => {
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
                <path d="M5180 14589 c-195 -9 -328 -37 -467 -96 -118 -52 -201 -112 -301 -218 -120 -128 -194 -287 -239 -510 -17 -86 -18 -363 -21 -6105 -2 -3894 1 -6080 7 -6200 6 -102 18 -219 26 -260 54 -246 156 -419 332 -561 86 -69 152 -104 277 -148 197 -70 -1 -64 2596 -68 1625 -3 2390 -1 2491 7 306 23 526 120 701 309 146 158 224 359 249 636 6 71 9 2295 7 6220 l-3 6110 -23 100 c-103 444 -363 688 -822 771 -88 16 -270 18 -2370 19 -1251 2 -2349 -1 -2440 -6z m1310 -192 c130 -50 214 -109 297 -209 102 -122 147 -254 146 -428 0 -97 -4 -128 -27 -197 -66 -204 -246 -379 -451 -439 -54 -16 -122 -18 -660 -21 -658 -5 -719 -1 -847 49 -180 69 -340 251 -394 449 -28 102 -24 263 9 365 46 138 145 270 270 356 69 47 106 63 201 89 66 17 114 18 726 16 l655 -2 75 -28z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphonese2020;