import React from 'react'

type Props = {
    backgroundImage: string
}

const Iphone14Pro = ({backgroundImage}: Props) => {
  return (
    <div style={{transform: 'scale(0.35)', height: 0, width: 0}}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve" width="1500" height="1500">
            <defs>
                <pattern id="myPattern" patternUnits="userSpaceOnUse" width="1500" height="1500">
                    <image xlinkHref={backgroundImage} width="1500" height="1500" />
                </pattern>
            </defs>
            <g id="Layer_2">
                <g>
                <g>
                    <path d="M1071.38,571.03l6.33-4.37v-15.84l-6.33-4.37v-96.59l6.33-4.37v-9.75l-6.33-4.13v-91.38l6.33-4.13V219.83 c0-63.57-51.54-115.11-115.11-115.11H537.06c-63.57,0-115.11,51.54-115.11,115.11V503.1l8.35,28.44v143.53l-8.35,28.44v580.38 c0,63.57,51.54,115.11,115.11,115.11h146.4l9.94-12.25h113.76l9.94,12.25h145.5c63.57,0,115.11-51.54,115.11-115.11V671.99 l-6.33-4.37V571.03z" fill="url(#myPattern)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
                <path d="M712.49,138.11H573.76c-63.01,0-114.08,51.08-114.08,114.08v150.35c0,63.01,51.08,114.08,114.08,114.08 h138.74c63.01,0,114.08-51.08,114.08-114.08V252.2C826.58,189.19,775.5,138.11,712.49,138.11z" fill="white" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
            </g>
        </svg>
    </div>
  )
}

export default Iphone14Pro