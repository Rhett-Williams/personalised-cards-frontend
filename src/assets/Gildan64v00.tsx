import * as React from "react"

type Props = {
  color: string
  image: string
  onLoad: () => void
}
const Gildan64v00 = ({color, image, onLoad}: Props) => (
  //@ts-ignore
  <div style={{transform: 'scale(0.4)', height: 0, width: 0, marginLeft: -50}}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={1500}
    height={1500}
    shapeRendering="geometricPrecision"
  >
      <defs>
          <pattern id="myPattern" patternUnits="userSpaceOnUse" width="1100" height="1100">
              <image onLoad={onLoad} xlinkHref={image} width="1100" height="1100" style={{ transform: 'translate(350px, 270px) scale(0.7)' }} />
          </pattern>
      </defs>
    <path d="M0,325 L310,188 L600,83 C650,70 850,70 900,83 L1190,188 L1500,383 L1375,583 L1150,558 V1350 H350 V558 L125,583     M438.2 270 H1061.8 V1041.6 H438.2 Z" id="garmentColour" fill-rule="evenodd" fill={color} />
    <path d="M0,325     L310,188     L600,83     C650,70 850,70 900,83     L1190,188     L1500,383     L1375,583     L1150,558     V1350     H350     V558     L125,583     Z" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
    <rect x="438.2" y="270" width="623.6" height="771.6" id="innerRectangle" fill="url(#myPattern)" stroke="black" stroke-width="1" stroke-dasharray="1,2" vector-effect="non-scaling-stroke" />
    <path d="M600,83, L750,185 L900,83" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" fill="none" />
    <path d="M555,100 L750,235, L945,100" stroke="black" stroke-width="1" vector-effect="non-scaling-stroke" fill="none" />

  </svg>
  </div>
)
export default Gildan64v00
