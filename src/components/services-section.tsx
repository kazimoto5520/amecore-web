"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    bgImage: string;
    color: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Digital Evolution',
        description: 'Empower your business to adapt and thrive by aligning people, systems, and workflows with the future. Build innovative products, services, and strategies through smart integration.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-blue-600 to-indigo-800'
    },
    {
        id: 2,
        title: 'Cloud Integration',
        description: 'Leverage the full potential of cloud-first technologies to boost infrastructure performance, ensure scalability, and increase operational flexibility across your organization.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-sky-500 to-blue-700'
    },
    {
        id: 3,
        title: 'Smart Applications',
        description: 'Modernize your core operations with intelligent business applications that automate processes, enhance collaboration, and improve decision-making.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-purple-600 to-pink-600'
    },
    {
        id: 4,
        title: 'Business Services',
        description: 'Deliver high-impact business solutions that streamline workflows, reduce costs, and unlock new growth opportunities through tailored services and support.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-green-500 to-emerald-700'
    },
    {
        id: 5,
        title: 'Data Intelligence',
        description: 'Uncover powerful insights from your data with advanced analytics, real-time dashboards, and visual reports that guide informed strategic decisions.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-amber-500 to-orange-600'
    },
    {
        id: 6,
        title: 'Cyber Resilience',
        description: 'Build trust and security through proactive, integrated cybersecurity solutions that protect your operations, ensure compliance, and enhance continuity.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-red-600 to-rose-700'
    },
    {
        id: 7,
        title: 'Smart Devices',
        description: 'Empower connectivity and intelligence with the right digital hardware and support systems to enhance productivity and operational control.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-cyan-600 to-blue-800'
    },
    // { 
    //   id: 8, 
    //   title: 'Next-Gen Connectivity', 
    //   description: 'Stay ahead with agile, software-defined networks that support collaboration, cloud access, and scalable communication infrastructure.',
    //   bgImage: '/assets/services_1.jpg',
    //   color: 'from-teal-600 to-cyan-700'
    // },
    // { 
    //   id: 9, 
    //   title: 'Digital Workforce', 
    //   description: 'Transform how your team works with modern HR and payroll solutions that simplify people management and enhance service delivery.',
    //   bgImage: '/assets/services_1.jpg',
    //   color: 'from-pink-500 to-fuchsia-700'
    // },
    {
        id: 10,
        title: 'Automated Testing',
        description: 'Accelerate software delivery with comprehensive testing-as-a-service solutions designed to reduce costs, save time, and ensure high-quality outcomes.',
        bgImage: '/assets/services_1.jpg',
        color: 'from-indigo-600 to-violet-700'
    },
];


const ServicesSection = () => {
    const [activeService, setActiveService] = useState(1);
    const [isHovering, setIsHovering] = useState<number | null>(null);

    // Automatically rotate active service every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService(current => current === services.length ? 1 : current + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.span
                        className="inline-block text-blue-600 font-semibold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        WHAT WE OFFER
                    </motion.span>
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-blue-600 mx-auto mt-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 h-[500px] lg:h-[400px]">
                    {services.map((service, index) => {
                        const isActive = activeService === service.id;
                        const isHovered = isHovering === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                className={`relative cursor-pointer rounded-2xl overflow-hidden`}
                                style={{
                                    flexBasis: isActive ? '60%' : '15%',
                                    transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                                }}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                                onClick={() => setActiveService(service.id)}
                                onMouseEnter={() => setIsHovering(service.id)}
                                onMouseLeave={() => setIsHovering(null)}
                            >
                                {/* Background with overlay */}
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="absolute inset-0 w-full h-full">
                                        <img
                                            src={service.bgImage}
                                            alt={service.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                                </div>

                                {/* Service number */}
                                <motion.div
                                    className="absolute top-6 left-6 text-white/80 text-6xl font-bold opacity-80"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: isActive ? 1 : 0.4, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {(index + 1).toString().padStart(2, '0')}
                                </motion.div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col p-6 lg:p-8">
                                    <div className="mt-auto">
                                        <motion.h3
                                            className={`text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3 ${isActive ? '' : 'whitespace-nowrap transform -rotate-90 origin-bottom-left translate-y-16 lg:translate-y-24'}`}
                                            animate={{
                                                translateY: isActive ? 0 : 80,
                                                opacity: isActive ? 1 : 0.9,
                                                rotate: isActive ? 0 : -90
                                            }}
                                            transition={{ duration: 0.7, ease: "easeInOut" }}
                                        >
                                            {service.title}
                                        </motion.h3>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    className="text-white/90 mb-10 max-w-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                >
                                                    {service.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>

                                        {/* Arrow */}
                                        <motion.div
                                            className="absolute bottom-6 right-6"
                                            animate={{
                                                scale: (isActive && isHovered) ? 1.2 : 1,
                                                rotate: isActive ? 0 : 45
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {isActive ? (
                                                <div className="bg-white rounded-full p-3 shadow-lg">
                                                    <ArrowRight className="w-6 h-6 text-primary" />
                                                </div>
                                            ) : (
                                                <div className="bg-white/70 rounded-full p-2 shadow-md">
                                                    <ArrowUpRight className="w-4 h-4 text-gray-700" />
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Service navigation indicators */}
                <div className='flex flex-col items-center mt-8'>
                    <div className="flex justify-center gap-3 mb-6">
                        {services.map((service) => (
                            <motion.button
                                key={service.id}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeService === service.id ? 'w-8 bg-blue-600' : 'bg-gray-300'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setActiveService(service.id)}
                            />
                        ))}
                    </div>
                    <motion.button
                        className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        onClick={() => {/* Add your navigation logic here */ }}
                    >
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section >
    );
};

export default ServicesSection;