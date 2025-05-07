"use client"

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
    // const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            // toast({
            //     title: "Message Sent!",
            //     description: "Thank you for contacting us. We'll get back to you soon.",
            // });
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setLoading(false);
        }, 1500);
    };
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Office Location</h3>
                                    <p className="mt-1 text-gray-600">
                                        123 Tech Street, Dar es Salaam, Tanzania
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Email Address</h3>
                                    <p className="mt-1 text-gray-600">
                                        <a href="mailto:info@amecore.co.tz" className="hover:text-primary-600 transition-colors">
                                            info@amecore.co.tz
                                        </a>
                                    </p>
                                    <p className="mt-1 text-gray-600">
                                        <a href="mailto:support@amecore.co.tz" className="hover:text-primary-600 transition-colors">
                                            support@amecore.co.tz
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Phone Number</h3>
                                    <p className="mt-1 text-gray-600">
                                        <a href="tel:+255123456789" className="hover:text-primary-600 transition-colors">
                                            +255 123 456 789
                                        </a>
                                    </p>
                                    <p className="mt-1 text-gray-600">
                                        <a href="tel:+255987654321" className="hover:text-primary-600 transition-colors">
                                            +255 987 654 321
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Clock size={20} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium">Business Hours</h3>
                                    <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                    <p className="mt-1 text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help you?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message here..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full md:w-auto"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <Send className="mr-2 h-4 w-4" /> Send Message
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm