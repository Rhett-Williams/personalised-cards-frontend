import * as React from "react"

type Props = {
  color: string
  image: string
}
const Gildan64000 = ({color, image}: Props) => (
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
              <image xlinkHref={image} width="1100" height="1100" style={{ transform: 'translate(350px, 240px) scale(0.73)' }} />
          </pattern>
      </defs>
    <path
      id="garmentColour"
      fill={color}
      fillRule="evenodd"
      d="m0 325 310-137L600 83c50-13 250-13 300 0l290 105 310 195-125 200-225-25v792H350V558l-225 25m313.2-340.2h623.6v771.6H438.2Z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="m0 325 310-137L600 83c50-13 250-13 300 0l290 105 310 195-125 200-225-25v792H350V558l-225 25Z"
      className="fillTransparent"
      style={{
        stroke: "#000",
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
      }}
      vectorEffect="non-scaling-stroke"
    />
    <path
      id="innerRectangle"
      fill="url(#myPattern)"
      stroke="#000"
      strokeDasharray="1,2"
      strokeWidth={1}
      d="M438.2 242.8h623.6v771.6H438.2z"
      style={{
        stroke: "#000",
        strokeWidth: 1,
        strokeDasharray: "1,2",
        vectorEffect: "non-scaling-stroke",
      }}
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="none"
      stroke="#000"
      d="M600 83c50 117 250 117 300 0"
      className="regularLine fillTransparent"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="none"
      stroke="#000"
      d="M555 100c70 150 320 150 390 0"
      className="regularLine fillTransparent"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
  </div>
)
export default Gildan64000
