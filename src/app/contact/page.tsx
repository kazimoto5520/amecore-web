"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContactHeroSection from '@/components/contact/contant-hero-section'
import ContactForm from '@/components/contact/contact-form'
import ContactMap from '@/components/contact/contact-map'

const ContactPage = () => {
    return (
        <>
            <motion.div className="fixed inset-0 bg-gradient-to-b from-[#081130] via-[#102a60] to-[#0a1c40] z-[-2]"
            />
            <ContactHeroSection />
            <ContactForm />
            <ContactMap />
        </>
    )
}

export default ContactPage