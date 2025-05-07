import React from 'react'
import { motion } from 'framer-motion'

const ContactMap = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="py-16 text-center">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                       Find Us On The Map
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-primary mx-auto mb-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                </div>


                <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.962294206779!2d39.21627158784649!3d-6.7744439487597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4e9233cc0ea9%3A0x5203154c70c291e1!2sMlimani%20Tower!5e0!3m2!1sen!2sus!4v1746615772455!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Amecore Technologies Location"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactMap