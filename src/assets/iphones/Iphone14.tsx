
import React from 'react'

type Props = {
    backgroundImage: string
    onLoad: () => void
}

const Iphone14 = ({backgroundImage, onLoad}: Props) => {
  return (
    <div style={{transform: 'scale(0.35)', height: 0, width: 0}}>
        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve" width="1500" height="1500">
        <defs>
            <pattern id="myPattern" patternUnits="userSpaceOnUse" width="1500" height="1500">
                <image onLoad={onLoad} xlinkHref={backgroundImage} width="1500" height="1500" />
            </pattern>
        </defs>
            <g id="Layer_2">
                <g>
                <g>
                    <path d="M1070.32,580.75l5.56-3.83v-16.89l-5.56-3.83v-96.51l5.56-3.83v-10.78l-5.56-3.62v-91.31l5.56-3.62V219.62 c0-63.5-51.48-114.98-114.98-114.98H533.87c-63.5,0-114.98,51.48-114.98,114.98v252.43l7.7,26.21v143.41l-7.7,26.21v610.87 c0,63.5,51.48,114.98,114.98,114.98h149.09l9.7-11.95h113.67l9.7,11.95H960.9c63.5,0,114.98-51.48,114.98-114.98V681.09 l-5.56-3.83V580.75z" fill="url(#myPattern)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
                <path d="M676.23,126.95H556.35c-52.65,0-108.7,42.69-108.7,95.34v121.63c0,52.65,42.68,95.34,95.34,95.34h119.88 c52.65,0,95.34-42.69,95.34-95.34V222.29C758.21,169.63,728.88,126.95,676.23,126.95z" fill="white" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" />
                </g>
            </g>
            </svg>
    </div>
  )
}

export default Iphone14