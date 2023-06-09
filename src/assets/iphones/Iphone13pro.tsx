import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphone13pro = ({ backgroundImage, onLoad }: Props) => {
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
            <image onLoad={onLoad} xlinkHref={backgroundImage} width="1500" height="1500" />
          </pattern>
        </defs>
        <switch>
            <g>
                <path d="M1076.6,344.17l9.54-1.65V208.92c0-63.83-51.74-115.57-115.57-115.57H528.72    c-63.83,0-115.57,51.74-115.57,115.57v276.78c4.38,4.46,7.08,10.58,7.08,17.32v134.59c0,6.75-2.7,12.86-7.08,17.32v636.15    c0,63.83,51.74,115.57,115.57,115.57h150.12l26.8-10.24c2.05-0.78,5.95-1.37,8.87-1.37h70.73c2.91,0,6.81,0.59,8.87,1.37    l26.8,10.24h149.67c63.83,0,115.57-51.74,115.57-115.57V687.08c-3.8-3-6.25-7.64-6.25-12.86v-89.23c0-5.22,2.45-9.86,6.25-12.86    v-8.75c-3.8-3-6.25-7.64-6.25-12.86v-89.23c0-5.22,2.45-9.86,6.25-12.86v-2.52l-9.54-1.65c-2.77-0.48-4.98-3.46-4.98-6.67v-86.73    C1071.61,347.64,1073.82,344.65,1076.6,344.17z M814.65,388.82c0,60.81-49.29,110.1-110.1,110.1H554.38    c-60.81,0-110.1-49.29-110.1-110.1V228.52c0-60.81,49.29-110.1,110.1-110.1h150.16c60.81,0,110.1,49.29,110.1,110.1V388.82z" fill="url(#myPattern)" stroke="#000000" stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" />
            </g>
        </switch>
        </svg>
    </div>
  );
};

export default Iphone13pro;
