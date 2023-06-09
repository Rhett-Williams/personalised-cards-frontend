import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphone13mini = ({ backgroundImage }: Props) => {
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
                <path d="M1078.21,283.79l12.77-2.46v-71.75c0-64.2-52.04-116.24-116.24-116.24H525.4    c-64.2,0-116.24,52.04-116.24,116.24v229.78c4.39,4.77,7.08,11.14,7.08,18.13v161.93c0,7-2.69,13.36-7.08,18.13v652.85    c0,64.2,52.04,116.24,116.24,116.24H675.8l25.4-8.71c2.29-0.78,6.63-1.37,9.88-1.37h78.82c3.25,0,7.59,0.59,9.88,1.37l25.4,8.71    h149.57c64.2,0,116.24-52.04,116.24-116.24V663c-5.59-2.61-9.48-8.27-9.48-14.85v-89.23c0-6.58,3.88-12.24,9.48-14.85v-15.89    c-5.61-2.75-9.48-8.5-9.48-15.16V417.3c0-6.67,3.87-12.41,9.48-15.16v-4.66l-12.77-2.46c-2.77-0.53-4.98-3.85-4.98-7.42v-96.4    C1073.23,287.64,1075.44,284.32,1078.21,283.79z M770.38,342.47c0,56.43-45.74,102.17-102.17,102.17H542.46    c-56.43,0-102.17-45.74-102.17-102.17V214.45c0-56.43,45.74-102.17,102.17-102.17h125.75c56.43,0,102.17,45.74,102.17,102.17    V342.47z" fill="url(#myPattern)" stroke="#000000" stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" />
            </g>
        </switch>
        </svg>
    </div>
  );
};

export default Iphone13mini;