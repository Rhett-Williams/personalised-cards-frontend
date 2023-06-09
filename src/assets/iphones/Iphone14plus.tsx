import React from "react";

type Props = {
  backgroundImage: string
  onLoad: () => void
}

const Iphone14 = ({ backgroundImage, onLoad }: Props) => {
  return (
    <div style={{ transform: "scale(0.35)", height: 0, width: 0 }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        xmlSpace="preserve"
        width="1500"
        height="1500"
      >
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
        <g id="Layer_2">
          <g>
            <g>
              <path
                d="M1071.5,540.71l8.52-5.87v-11.06l-8.52-5.87v-89.66l8.52-5.87v-5.51l-8.52-5.56v-84.82l8.52-5.56V213.27 c0-64.1-51.96-116.06-116.06-116.06H535.01c-64.1,0-116.06,51.96-116.06,116.06v226.5l7.75,26.4V599.4l-7.75,26.4v660.62 c0,64.1,51.96,116.06,116.06,116.06h154.75l7.05-8.69h105.6l7.05,8.69h154.5c64.1,0,116.06-51.96,116.06-116.06V636.24 l-8.52-5.87V540.71z"
                fill="url(#myPattern)"
                stroke="rgb(0, 0, 0)"
                stroke-miterlimit="10"
              />
            </g>
            <path
              d="M645.61,410.45H534.24c-48.92,0-88.57-39.65-88.57-88.57v-113c0-48.92,39.65-88.57,88.57-88.57h111.37 c48.92,0,88.57,39.65,88.57,88.57v113C734.18,370.79,694.53,410.45,645.61,410.45z"
              fill="white"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Iphone14;
