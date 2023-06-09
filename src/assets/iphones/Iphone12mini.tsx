import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphone12mini = ({ backgroundImage, onLoad }: Props) => {
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
                <path d="M5335 14033 c-16 -2 -109 -13 -205 -24 -201 -23 -298 -43 -355 -72 -76 -38 -160 -101 -244 -181 -210 -204 -325 -453 -361 -782 -8 -80 -10 -410 -5 -1234 6 -1241 6 -1193 2 -6205 -2 -3370 -1 -3534 16 -3625 62 -324 215 -584 450 -761 147 -111 208 -131 542 -171 181 -21 224 -22 930 -23 l740 0 100 35 100 35 455 0 455 0 100 -35 100 -35 740 0 c709 1 748 2 930 24 327 39 383 55 512 147 205 146 354 352 432 596 44 138 60 246 71 458 5 105 9 1543 10 3315 0 2729 -2 3139 -15 3200 -21 102 -21 978 0 1080 13 61 13 78 0 142 -12 58 -15 164 -15 537 0 301 4 483 11 516 9 41 8 62 -2 98 -11 37 -14 158 -14 557 0 466 2 513 18 544 15 29 17 63 17 245 -1 315 -16 574 -40 701 -61 312 -226 578 -465 747 -135 96 -181 111 -475 150 l-165 23 -2170 1 c-1193 1 -2183 -1 -2200 -3z m1350 -293 c137 -12 234 -38 352 -95 235 -114 407 -327 475 -590 l23 -90 0 -830 0 -830 -27 -98 c-90 -328 -321 -557 -649 -646 -115 -32 -304 -41 -829 -41 -498 0 -709 9 -815 36 -333 83 -579 324 -665 649 -36 140 -42 290 -37 1025 5 743 5 745 59 907 109 330 415 567 778 602 122 12 1204 13 1335 1z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="url(#myPattern)" />
            </g>
        </svg>
    </div>
  );
};

export default Iphone12mini;