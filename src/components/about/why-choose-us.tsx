import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeCheck, Rocket, Users } from 'lucide-react'

const WhyChooseUs = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-24">
                <div className="py-16 text-center">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Amecore
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-primary mx-auto mb-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                </div>

                <div className="w-full grid grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                                <BadgeCheck className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Expertise
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Our team comprises industry experts with extensive experience in various IT domains, ensuring high-quality solutions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Innovation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                We stay at the forefront of technology trends, integrating cutting-edge solutions to drive your business forward.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl font-bold">
                                Customer-Focused
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                We prioritize understanding your business needs to deliver tailored solutions that address your specific challenges.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs