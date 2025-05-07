import React from 'react'
import { Button } from '../ui/button'

const AboutHeroSection = () => {
    return (
        <div className='container mx-auto pt-16 mt-24 h-screen '>
            <div className="grid grid-cols-2 gap-8">
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-white'>
                        About Amecore Technologies
                    </h1>
                    <p className='text-gray-200 mt-4'>
                        Amecore Technologies is a leading provider of innovative IT solutions, dedicated to empowering businesses with cutting-edge technology and exceptional service. Our mission is to drive digital transformation and deliver sustainable success for our clients through tailored solutions that meet their unique needs.
                    </p>

                    <Button className='mt-8 w-fit'>
                        Contact Us
                    </Button>
                </div>

                <div>
                    <img
                        src="/assets/about_us.jpeg"
                        alt="About Amecore"
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutHeroSection