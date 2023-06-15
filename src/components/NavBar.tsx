    //@ts-ignore
import React from "react";
import { gsap } from "gsap";
import './Navbar/style.css'
import { Link } from "react-router-dom";

const { useRef, useState, useEffect, createRef } = React

const Navbar = () => {
  const items = [
  {
    name: "Home",
    color: "orange",
    href: "/"
  },
  {
    name: "Create",
    color: "blue",
    href: "/create"
  }
];
  const $root = useRef()
  const $indicator1 = useRef()
  const $indicator2 = useRef()
  const $items = useRef(items.map(createRef))
  const [ active, setActive ] = useState(0)
  
  const animate = () => {
    //@ts-ignore
    const menuOffset = $root.current.getBoundingClientRect()
    const activeItem = $items.current[active].current
        //@ts-ignore
    const { width, height, top, left } = activeItem.getBoundingClientRect()
    
    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: .8
    }
        //@ts-ignore
    gsap.to($indicator1.current, {
      ...settings,
    })
        //@ts-ignore
    gsap.to($indicator2.current, {
      ...settings,
      duration: 1
    })
  }
  
  useEffect(() => {
    animate()
    window.addEventListener('resize', animate)
    
    return (() => {
      window.removeEventListener('resize', animate)
    })    
  }, [active])
  
  return (
    <div
        //@ts-ignore
      ref={$root}
      className="menu"
    >
          {/* @ts-ignore */}
      {items.map((item, index) => (
        <Link to={item.href}>
        <div
          key={item.name}
              //@ts-ignore
          ref={$items.current[index]}
          className={`item ${active === index ? 'active' : ''}`}
          onMouseEnter={() => {
            setActive(index)
          }}
         >
          {item.name}
        </div>
      </Link>
      ))}
      <div
          //@ts-ignore
        ref={$indicator1}
        className="indicator"
       />
      <div
          //@ts-ignore
        ref={$indicator2}
        className="indicator"
       />
    </div>
  )
}

export default Navbar;