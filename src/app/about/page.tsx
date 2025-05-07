"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AboutHeroSection from '@/components/about/about-hero-section'
import AboutVisionMission from '@/components/about/about-vision-mission'
import WhyChooseUs from '@/components/about/why-choose-us'
import GetInTouch from '@/components/about/get-in-touch'

const AboutPage = () => {
    return (
        <>
            <motion.div className="fixed inset-0 bg-gradient-to-b from-[#081130] via-[#102a60] to-[#0a1c40] z-[-2]"
            />
            <AboutHeroSection />
            <AboutVisionMission />
            <WhyChooseUs />
            <GetInTouch />
        </>
    )
}

export default AboutPage