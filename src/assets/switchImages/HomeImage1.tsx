import React from 'react'
import image from './horizontalPhones.png'

export default function HomeImage1() {

  return (
    <svg className='hero-media-image' width="538" height="380" viewBox="0 0 538 380" xmlns="http://www.w3.org/2000/svg"><defs>
        <pattern
          id="myPattern"
          patternUnits="userSpaceOnUse"
          width="538"
          height="380"
        >
          <image
            xlinkHref={image}
            width="538"
            height="380"
          />
        </pattern>
      </defs><path d="M0 0h538v380H0z" fill="url(#myPattern)" fill-rule="evenodd"/></svg>
  )
}
