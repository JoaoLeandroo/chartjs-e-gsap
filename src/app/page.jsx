"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

import Grafico from "./components/grafico/page"

export default function Home() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)  
    gsap.to(".grafico", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".grafico",
        markers: false,
        start: "top 400px",
        end: "bottom 630px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf(".relogio")
    }
  }, [])

  return (
    <main className="w-screen">
      <div className="w-full h-[500px] bg-blue-800"></div>
      <div className="w-full h-[500px] bg-red-600"></div>
      <div className="w-full flex items-center justify-center">
        <Grafico/>
      </div>
      <div className="w-full h-[500px] bg-yellow-400"></div>
    </main>
  )
}
