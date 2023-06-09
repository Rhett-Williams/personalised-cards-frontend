import React from 'react'

type Props = {
    backgroundImage: string
    onLoad: () => void
}

const Iphone14ProMax = ({backgroundImage, onLoad}: Props) => {
  return (
    <div style={{transform: 'scale(0.35)', height: 0, width: 0}}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve" width="1500" height="1500">
            <defs>
                <pattern id="myPattern" patternUnits="userSpaceOnUse" width="1500" height="1500">
                    <image onLoad={onLoad} xlinkHref={backgroundImage} width="1500" height="1500" />
                </pattern>
            </defs>
            <g id="Layer_2">
                <g>
                <g>
                    <path d="M1071.71,533.68l8.52-5.88v-11.06l-8.52-5.88V421.2l8.52-5.88v-5.51l-8.52-5.56v-84.84l8.52-5.56V213.3 c0-64.11-51.97-116.08-116.08-116.08H535.14c-64.11,0-116.08,51.97-116.08,116.08v240.74l7.75,26.41V613.7l-7.75,26.41v646.51 c0,64.11,51.97,116.08,116.08,116.08h154.77l7.06-8.69h105.61l7.05,8.69h154.52c64.11,0,116.08-51.97,116.08-116.08V629.23 l-8.52-5.88V533.68z" fill="url(#myPattern)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
                <path d="M690.29,127.43H561.65c-58.76,0-106.39,47.63-106.39,106.39V374.8c0,58.76,47.63,106.39,106.39,106.39h128.64 c58.76,0,106.39-47.63,106.39-106.39V233.82C796.68,175.06,749.05,127.43,690.29,127.43z" fill="white" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
            </g>
        </svg>
    </div>
  )
}

export default Iphone14ProMax