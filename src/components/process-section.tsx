"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"; // Assuming the Button component is imported from shadcn

const ProcessSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const items = [
        {
            title: 'Innovation',
            description: 'We build with purpose and creativity. Our team is dedicated to exploring new ideas and pushing boundaries to deliver solutions that inspire and transform. By embracing change and fostering a culture of innovation, we ensure that our work remains relevant and impactful.',
            image: 'https://plus.unsplash.com/premium_vector-1723818992666-16645110097b?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Integrity',
            description: 'We earn trust through transparency and consistency. Our commitment to ethical practices and honest communication ensures that we build lasting relationships with our clients and partners. Integrity is the foundation of everything we do, guiding our decisions and actions.',
            image: 'https://plus.unsplash.com/premium_vector-1723818992666-16645110097b?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Collaboration',
            description: 'We grow together with our clients, communities, and partners. By fostering open communication and teamwork, we create an environment where everyone can contribute and thrive. Collaboration is at the heart of our success, enabling us to achieve shared goals and deliver exceptional results.',
            image: 'https://plus.unsplash.com/premium_vector-1723818992666-16645110097b?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Excellence',
            description: 'We deliver results that matter, on time and beyond expectations. Our dedication to quality and continuous improvement drives us to exceed standards and deliver value to our clients. Excellence is not just a goal; it is a mindset that defines our approach to every project.',
            image: 'https://plus.unsplash.com/premium_vector-1723818992666-16645110097b?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-gray-100 mt-24">
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-4 gap-8">
                    {/* List Column */}
                    <div>
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-4 py-6 mb-4 cursor-pointer rounded-2xl transition-all duration-300 ${
                                    activeIndex === index
                                        ? 'bg-gray-900 text-white shadow-xl'
                                        : 'bg-white text-gray-700'
                                }`}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <span className='text-2xl font-medium'>{item.title}</span>
                                    <span className={`text-xl font-medium text-center flex items-center justify-center transition-all ${activeIndex === index ? 'text-white bg-red-500 rounded-full w-8 h-8' : 'text-gray-500 bg-gray-100 rounded-full w-8 h-8'}`}>
                                        {activeIndex === index ? '-' : '+'}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <motion.div
                                        className="mt-2 text-sm"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.description}</p>
                                        <Button className="mt-4 w-full">Learn more</Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Column */}
                    <motion.div
                        layout
                        className={`col-span-3 bg-gray-200 transition-all duration-300 rounded-2xl flex justify-center items-center relative h-full`}
                    >
                        <AnimatePresence mode="wait">
                            {activeIndex !== null && (
                                <motion.img
                                    key={items[activeIndex].image}
                                    src={items[activeIndex].image}
                                    alt={items[activeIndex].title}
                                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-0 right-0 max-w-[80%] max-h-[80%] object-contain p-8"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
