"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <>
            <motion.div className="fixed inset-0 bg-gradient-to-b from-[#081130] via-[#102a60] to-[#0a1c40] z-[-2]"
            />
            <div className='container mx-auto pt-16 mt-16'>
                <div className='w-full'>
                    <div className='grid grid-cols-2 gap-8'>
                        {/* First column */}
                        <div className='flex flex-col p-6 rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-md shadow-lg h-full'>
                            <div className='flex flex-col flex-grow'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-4xl font-bold text-white'>Transforming <br /> Businesses Through Technology Solutions</h1>
                                    <p className='text-gray-200 mt-4'>At Amecore Technologies, we are dedicated to providing innovative IT solutions that empower businesses to thrive in the digital age.</p>
                                </div>
                                <div className='grid grid-cols-2 gap-4 my-8'>
                                    <div className='p-4 rounded-xl bg-primary/20 backdrop-blur-md border-primary/50 pb-12'>
                                        <h2 className='text-white text-2xl font-bold'>50%</h2>
                                        <p className='text-gray-200'>Cost Reduction</p>
                                    </div>
                                    <div className='p-4 rounded-xl bg-primary/20 backdrop-blur-md border-primary/50 pb-12'>
                                        <h2 className='text-white text-2xl font-bold'>50%</h2>
                                        <p className='text-gray-200'>Cost Reduction</p>
                                    </div>
                                </div>
                                <Button className='py-6 mt-auto'>Learn More</Button>
                            </div>
                        </div>

                        {/* Second column */}
                        <div className='flex flex-col'>
                            {/* Full-width image */}
                            <div>
                                <img
                                    src="/assets/bank_integration.png"
                                    alt="Bank Integration"
                                    className='w-full h-auto rounded-2xl shadow-lg'
                                />
                            </div>

                            {/* Description and mobile app image */}
                            <div className='grid grid-cols-2 gap-4 mt-8'>
                                {/* Description */}
                                <div className='p-6 rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-md shadow-lg'>
                                    <h2 className='text-2xl font-bold text-white'>Seamless Bank Integration</h2>
                                    <p className='text-gray-200 mt-4'>
                                        Our solutions enable secure and efficient integration with banking systems, ensuring smooth financial operations for your business.
                                    </p>
                                </div>

                                {/* Mobile app image */}
                                <div className='overflow-hidden rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-md shadow-lg'>
                                    <img
                                        src="/assets/mobile_app_mockup.png"
                                        alt="Mobile App Mockup"
                                        className='w-full h-auto object-cover'
                                        style={{ maxHeight: '300px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeroSection