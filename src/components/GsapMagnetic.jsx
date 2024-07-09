'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


const GsapMagnetic = ({children}) => {
    const ref = useRef(null);
    useEffect(() => {
        const mouseMove = (e) => {
            const {clientX, clientY} = e;
            const {height, width, top, left} = ref.current.getBoundingClientRect();
            const x = clientX - (left + width/2);
            const y = clientY - (top + height/2);

            gsap.to(ref.current, {x: x})
            gsap.to(ref.current, {y: y})
        }

        const mouseLeave = (e) => {
            gsap.to(ref.current, {x: 0})
            gsap.to(ref.current, {y: 0})
        }

        ref.current.addEventListener('mousemove', mouseMove);
        ref.current.addEventListener('mouseleave', mouseLeave);

        return () => {
            ref.current.addEventListener('mousemove', mouseMove);
            ref.current.addEventListener('mouseleave', mouseLeave);
        }
    }, [ ])
  return (
    React.cloneElement(children, {ref})
  )
}

export default GsapMagnetic