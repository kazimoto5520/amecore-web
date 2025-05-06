"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from '@/lib/utils'
import { useInView } from "react-intersection-observer"
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

type NavItem = {
  title: string
  href: string
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [navBackground, setNavBackground] = useState<string>("transparent")


  const { scrollYProgress } = useScroll()
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])


  const navItems: NavItem[] = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ]

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // InView hooks for revealing animations
  const [aboutRefInView, aboutInView] = useInView({ threshold: 0.3, triggerOnce: false })
  const [servicesRefInView, servicesInView] = useInView({ threshold: 0.2, triggerOnce: false })
  const [statsRefInView, statsInView] = useInView({ threshold: 0.5, triggerOnce: false })
  const [testimonialsRefInView, testimonialsInView] = useInView({ threshold: 0.3, triggerOnce: false })
  const [projectsRefInView, projectsInView] = useInView({ threshold: 0.2, triggerOnce: false })
  const [contactRefInView, contactInView] = useInView({ threshold: 0.3, triggerOnce: false })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Change navbar background when scrolling down
      if (scrollPosition > 50) {
        setNavBackground("bg-background/80 backdrop-blur-md shadow-sm")
      } else {
        setNavBackground("transparent")
      }

      // Determine active section based on scroll position
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: servicesRef, id: "services" },
        { ref: projectsRef, id: "projects" },
        { ref: contactRef, id: "contact" },
      ]

      for (const section of sections.reverse()) {
        if (section.ref.current && section.ref.current.getBoundingClientRect().top <= 200) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section when clicking nav links
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>

      <div className='fixed top-0 left-0 right-0 pt-4 container mx-auto z-30'>
        <div className='bg-gray-100 p-4 rounded-xl'>
          <header className={cn("transition-all duration-300")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src="/assets/amecore_logo.png" alt="AmeCore Logo" width={32} height={32} className="h-8 w-8 mr-2" />
                <div className="text-gray-800 font-bold text-2xl">
                  <span className="text-red-500">Ame</span>core
                </div>
              </div>

              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      activeSection === item.href.substring(1) ? "text-primary" : "text-black hover:text-primary",
                    )}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              <Button variant="default" size="sm" className="hidden md:flex">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </header>
        </div>
      </div> </>
  )
}

export default Navbar