import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AboutVisionMission = () => {
    return (
        <div className="bg-gray-100 mt-24">
            <div className="container mx-auto py-24">
                <div className="py-16 text-center">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Us
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-primary mx-auto mb-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                </div>

                <div className="w-full grid grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-2xl font-bold text-primary'>
                                Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Our mission is to empower businesses with innovative IT solutions that drive digital transformation, enhance operational efficiency, and foster sustainable growth. We are committed to delivering exceptional service and value to our clients, enabling them to thrive in a rapidly evolving digital landscape.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className='text-2xl font-bold text-primary'>
                                Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Our vision is to be a global leader in IT solutions, recognized for our commitment to innovation, excellence, and customer satisfaction. We strive to create a future where technology seamlessly integrates with business processes, enabling organizations to achieve their goals and make a positive impact on society.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutVisionMission