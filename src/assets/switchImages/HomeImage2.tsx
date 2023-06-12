import React from 'react'
import image from './modelShirt.png'

export default function HomeImage2() {
  return (
    <svg className="features-box" xmlns="http://www.w3.org/2000/svg" width={540} height={370}>
    <defs>
      <linearGradient id="a" x1="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#F8F9FB" />
        <stop offset="100%" stopColor="#FFF" />
      </linearGradient>
    </defs>
    <pattern
          id="myPattern1"
          patternUnits="userSpaceOnUse"
          width="538"
          height="380"
        >
          <image
            xlinkHref={image}
            width="538"
            height="380"
            transform='translate(20, 0)'
          />
        </pattern>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#myPattern1)" d="M0 0h540v370H0z" />
      <path fill="none" d="M0 34.571h540v124.268H0z" />
    </g>
  </svg>
  )}
