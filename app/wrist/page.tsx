"use client";

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            const scrollPercent = window.scrollY / window.innerHeight
            setScrollY(scrollPercent)
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const backgroundStyle = {
    transform: `translate3d(0px, ${-scrollY * 100}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: 'preserve-3d' as const,
    transition: 'transform 0.1s ease-out',
  }

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden font-sans">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      


      {/* Hero content */}
      <div className="relative flex flex-col items-center justify-center px-4 pt-20 text-center text-white">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          <span className="block mb-2">Life connected</span>
          <span className="block text-[#00FF66]">easier faster</span>
        </h1>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button 
            size="lg"
            className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90 text-lg font-semibold px-8 py-3"
          >
            Your Wallet
          </Button>
          <Button 
            size="lg"
            variant="default"
            className="bg-white text-black hover:bg-white/90 text-lg font-semibold px-8 py-3"
          >
            Verify an account
          </Button>
        </div>
      </div>
    </div>
  )
}