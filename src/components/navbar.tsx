"use client"

import { cn } from '@/lib/utils'
import { useScroll } from "framer-motion"
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

type NavItem = {
  title: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: {
    title: string
    description?: string
    href: string
  }[]
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [navBackground, setNavBackground] = useState<string>("transparent")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const router = useRouter();
  const dropdownRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement | null>}>({});

  const { scrollYProgress } = useScroll()

  const navItems: NavItem[] = [
    { title: "Home", href: "/home" },
    { title: "About", href: "/about" },
    {
      title: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Digital Evolution",
          description: "Empower your business to adapt and thrive",
          href: "/services/digital-evolution"
        },
        {
          title: "Cloud Integration",
          description: "Leverage the full potential of cloud-first technologies",
          href: "/services/cloud-integration"
        },
        {
          title: "Smart Applications",
          description: "Modernize operations with intelligent applications",
          href: "/services/smart-applications"
        },
        {
          title: "View All Services",
          href: "/services"
        }
      ]
    },
    {
      title: "Projects",
      href: "#projects",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Recent Work",
          description: "Explore our most recent projects",
          href: "/projects/recent"
        },
        {
          title: "Case Studies",
          description: "In-depth analysis of our successful implementations",
          href: "/projects/case-studies"
        },
        {
          title: "View All Projects",
          href: "/projects"
        }
      ]
    },
    { title: "Contact", href: "/contact" },
  ]

  // Initialize refs for each dropdown item
  useEffect(() => {
    navItems.forEach(item => {
      if (item.hasDropdown) {
        dropdownRefs.current[item.title] = React.createRef();
      }
    });
  }, []);

  const toggleDropdown = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    console.log("Toggling dropdown for:", title);
    setOpenDropdown(prev => (prev === title ? null : title));
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        const dropdownElement = dropdownRefs.current[openDropdown].current;
        const targetElement = event.target as Node;

        // Check if click target is outside the dropdown and its toggle button
        if (dropdownElement && !dropdownElement.contains(targetElement) && 
            !targetElement.parentElement?.classList.contains('dropdown-toggle')) {
          setOpenDropdown(null);
        }
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  const handleNavItemClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.hasDropdown) {
      toggleDropdown(e, item.title);
    } else {
      router.push(item.href);
    }
  }

  return (
    <div className='fixed top-0 left-0 right-0 pt-4 container mx-auto z-30'>
      <div className='bg-gray-100 p-4 rounded-xl'>
        <header className={cn("transition-all duration-300")}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/assets/amecore_logo.png" alt="AmeCore Logo" width={32} height={32} className="h-8 w-8 mr-2" />
              <div className="text-gray-800 font-bold text-2xl">
                <span className="text-red-500">Ame</span>core
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative group dropdown-container">
                  <button
                    onClick={(e) => handleNavItemClick(e, item)}
                    className={cn(
                      "text-sm font-medium transition-colors flex items-center gap-1 dropdown-toggle",
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    )}
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.title ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {item.hasDropdown && (
                    <div
                      ref={dropdownRefs.current[item.title] || null}
                      className={cn(
                        "absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-100 transition-opacity duration-200",
                        openDropdown === item.title ? "opacity-100 visible" : "opacity-0 invisible"
                      )}
                    >
                      <div className="space-y-3">
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <div key={idx} className="group">
                            <Link
                              href={dropdownItem.href}
                              className={cn(
                                "block hover:bg-gray-50 rounded-md p-2 transition-colors",
                                idx === item.dropdownItems!.length - 1
                                  ? "mt-2 text-blue-600 font-medium hover:text-blue-700"
                                  : ""
                              )}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="font-medium">{dropdownItem.title}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                              )}
                            </Link>
                            {idx !== item.dropdownItems!.length - 1 && (
                              <div className="border-b border-gray-100 my-1"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Button */}
            <Button variant="default" size="sm" className="hidden md:flex">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Navbar