"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimationControls } from 'framer-motion';
import Link from 'next/link';

// Define project type interface
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Internet Banking Integration",
        description: "A seamless integration of internet banking services, enabling secure transactions, account management, and enhanced user experience.",
        image: "/assets/project_1.png",
        link: "/projects/e-commerce"
    },
    {
        id: 2,
        title: "Core Banking General Ledger Reconciliation",
        description: "An automated reconciliation system for core banking ledgers, ensuring accuracy, efficiency, and compliance with financial regulations.",
        image: "/assets/project_1.png",
        link: "/projects/healthcare"
    },
    {
        id: 3,
        title: "Onboarding System for Corporate Banking",
        description: "A streamlined onboarding platform for corporate banking clients, offering intuitive workflows and robust data management.",
        image: "/assets/project_1.png",
        link: "/projects/finance"
    },
    {
        id: 4,
        title: "Corporate Payments System",
        description: "A comprehensive corporate payments solution, facilitating bulk transactions, real-time tracking, and enhanced security features.",
        image: "/assets/project_1.png",
        link: "/projects/smart-home"
    }
];

const ProjectItem = ({ project, isActive, index, isLast }: { project: Project, isActive: boolean, index: number, isLast: boolean }) => {
    const controls = useAnimationControls();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col lg:flex-row h-screen w-full snap-center ${isActive ? 'z-10' : 'z-0'}`}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
            }}
        >
            {/* Project Info */}
            <motion.div
                className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16"
                variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.6, delay: 0.3 }
                    }
                }}
            >
                <motion.span
                    className="text-sm text-blue-600 font-semibold mb-2"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.3, delay: 0.4 } }
                    }}
                >
                    PROJECT {index + 1}
                </motion.span>

                <motion.h3
                    className="text-3xl lg:text-4xl font-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
                    }}
                >
                    {project.title}
                </motion.h3>

                <motion.p
                    className="text-gray-600 mb-8 text-lg"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
                    }}
                >
                    {project.description}
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }
                    }}
                >
                    <Link href={project.link}>
                        <span className="px-6 py-3 primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-block">
                            View Project
                        </span>
                    </Link>
                </motion.div>

                {/* Add "See All Projects" button for the last project */}
                {isLast && (
                    <motion.div
                        className="mt-8"
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } }
                        }}
                    >
                        <Link href="/projects">
                            <span className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 inline-block">
                                See All Projects
                            </span>
                        </Link>
                    </motion.div>
                )}
            </motion.div>

            {/* Project Image */}
            <motion.div
                className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16"
                variants={{
                    hidden: { x: 50, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.6, delay: 0.3 }
                    }
                }}
            >
                <motion.div
                    className="relative w-full h-64 lg:h-96 overflow-hidden rounded-xl shadow-2xl"
                    whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 }
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const LatestProjects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);

    // Listen to scroll and update active project
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            const newIndex = Math.min(
                PROJECTS.length - 1,
                Math.floor(value * PROJECTS.length)
            );
            setActiveIndex(newIndex);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section className='relative bg-white'>
            <div className="relative container mx-auto" id="latest-projects">
                <div className="max-w-full">
                    <div className="py-16 text-center">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Latest Projects
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-primary mx-auto mb-10"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />

                    </div>

                    <div
                        ref={containerRef}
                        className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar"
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectItem
                                key={project.id}
                                project={project}
                                isActive={index === activeIndex}
                                index={index}
                                isLast={index === PROJECTS.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;