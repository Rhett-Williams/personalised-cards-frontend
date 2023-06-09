import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphone13promax = ({ backgroundImage }: Props) => {
  return (
    <div style={{ transform: "scale(0.35)", height: 0, width: 0 }}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1500 1500" xmlSpace="preserve" width="1500" height="1500">
        <defs>
          <pattern
            id="myPattern"
            patternUnits="userSpaceOnUse"
            width="1500"
            height="1500"
          >
            <image xlinkHref={backgroundImage} width="1500" height="1500" />
          </pattern>
        </defs>
        <switch>
            <g>
                <path d="M1079,317.33l6.61-1.14V205.23c0-63.86-51.77-115.64-115.64-115.64H531.2    c-63.86,0-115.64,51.77-115.64,115.64V447c5.12,4.4,7.36,10.92,7.36,18.2v125.23c0,7.28-2.24,13.8-7.36,18.2v685.97    c0,63.86,51.77,115.64,115.64,115.64h148.18l25.18-9.62c2.05-0.78,5.95-1.37,8.87-1.37h70.73c2.91,0,6.81,0.59,8.87,1.37    l25.18,9.62h151.79c63.86,0,115.64-51.77,115.64-115.64V635.56c-3.79-3-6.23-7.64-6.23-12.85v-79.22c0-5.21,2.44-9.85,6.23-12.85    v-8.77c-3.79-3-6.23-7.64-6.23-12.85v-78.22c0-5.21,2.44-9.85,6.23-12.85v-2.4l-6.61-1.14c-2.77-0.48-4.98-3.46-4.98-6.67V324    C1074.02,320.79,1076.23,317.81,1079,317.33z M782.88,361.08c0,55.96-45.36,101.32-101.32,101.32H543.38    c-55.96,0-101.32-45.36-101.32-101.32V213.57c0-55.96,45.36-101.32,101.32-101.32h138.18c55.96,0,101.32,45.36,101.32,101.32    V361.08z" fill="url(#myPattern)" stroke="#000000" stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" />
            </g>
        </switch>
        </svg>
    </div>
  );
};

export default Iphone13promax;
