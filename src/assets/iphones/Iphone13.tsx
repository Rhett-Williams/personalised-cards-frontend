import React from "react";

type Props = {
  backgroundImage: string;
};

const Iphone13 = ({ backgroundImage }: Props) => {
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
			    <path d="M1077.21,343.96l10.12-1.76V209c0-63.87-51.78-115.65-115.65-115.65H529.02     c-63.87,0-115.65,51.78-115.65,115.65v275.69c3.83,4.4,6.15,10.14,6.15,16.43v138.6c0,6.29-2.32,12.03-6.15,16.43V1291     c0,63.87,51.78,115.65,115.65,115.65h144.52l24.89-8.71c2.24-0.78,6.5-1.37,9.68-1.37h77.25c3.18,0,7.44,0.59,9.68,1.37     l24.89,8.71h151.74c63.87,0,115.65-51.78,115.65-115.65V688.93c-4.13-2.98-6.82-7.82-6.82-13.3v-89.23c0-5.48,2.7-10.32,6.82-13.3     v-3.38c-4.14-3.09-6.82-8.01-6.82-13.57v-96.49c0-5.53,1.57-10.43,5.67-13.52l-8.97-1.75c-2.77-0.48-4.98-3.48-4.98-6.7v-87.03     C1072.23,347.44,1074.43,344.44,1077.21,343.96z M748.27,329.51c0,52.12-42.25,94.38-94.38,94.38H537.73     c-52.12,0-94.38-42.25-94.38-94.38V211.26c0-52.12,42.25-94.38,94.38-94.38h116.16c52.12,0,94.38,42.25,94.38,94.38V329.51z" fill="url(#myPattern)" stroke="#000000" stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" />
            </g>
        </switch>
        </svg>
    </div>
  );
};

export default Iphone13;
