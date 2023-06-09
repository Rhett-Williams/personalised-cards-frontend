import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphone12 = ({ backgroundImage, onLoad }: Props) => {
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
                <path d="M5194 14040 c-303 -25 -354 -36 -453 -91 -311 -174 -517 -486 -587 -889 -15 -84 -17 -236 -21 -1277 -3 -938 -1 -1190 9 -1220 9 -29 13 -236 16 -897 2 -740 1 -870 -13 -941 -13 -72 -15 -446 -15 -3296 0 -2110 4 -3260 10 -3349 11 -146 37 -287 71 -390 77 -235 235 -452 429 -589 220 -155 282 -163 1355 -168 l771 -4 97 31 c183 58 196 60 647 60 450 0 464 -2 645 -59 l95 -31 701 0 c928 0 1164 18 1317 100 313 169 517 465 594 862 l22 113 3 3153 c3 2450 1 3162 -9 3190 -8 27 -13 187 -15 562 -4 454 -2 539 12 626 16 93 16 108 1 194 -21 125 -23 1045 -2 1153 12 60 11 74 -3 110 -14 37 -16 112 -16 602 0 519 1 564 19 617 17 52 18 84 13 405 -3 260 -9 374 -22 453 -45 282 -166 521 -351 700 -140 135 -263 210 -384 236 -37 7 -179 23 -316 34 -239 19 -326 20 -2329 19 -1895 -1 -2099 -3 -2291 -19z m1456 -305 c200 -38 354 -114 488 -240 141 -132 232 -292 278 -485 16 -67 18 -150 21 -815 4 -766 1 -869 -36 -997 -84 -290 -293 -521 -561 -619 -173 -63 -160 -62 -815 -66 -506 -4 -616 -2 -704 11 -206 31 -368 108 -509 240 -193 183 -280 377 -302 672 -12 167 -12 1221 0 1388 5 71 19 168 31 215 86 349 357 611 709 686 128 28 278 33 805 30 418 -3 525 -6 595 -20z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone12;