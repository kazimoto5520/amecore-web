import React from 'react'
import { Button } from '@/components/ui/button'

const GetInTouch = () => {
    return (
        <div className="bg-primary">
            <div className="container mx-auto py-24">
                <div className='flex flex-col justify-center items-center text-white'>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                        Ready to Transform Your IT Infrastructure?
                    </h2>
                    <p>
                        Contact us today to discuss how Amecore Technologies can help your business leverage technology for growth and success.
                    </p>

                    <Button className='mt-8 w-fit bg-white text-primary hover:bg-gray-200'>
                        Get in Touch
                    </Button>
                </div>
            
            </div>
        </div>
    )
}

export default GetInTouch