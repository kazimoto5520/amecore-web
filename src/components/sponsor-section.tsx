"use client"

import { UserRoundCog, Users } from 'lucide-react'
import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const SponsorSection = () => {
    const sliderRef = useRef(null);
    const partiners = [
        {
            id: 1,
            name: "DCB Bank",
            img: "/assets/dcb_logo_white.png"
        },
        {
            id: 2,
            name: "Stanbic",
            img: "/assets/logo_sbt.png"
        },
        {
            id: 3,
            name: "DCB",
            img: "/assets/amecore_logo.png"
        },
        {
            id: 4,
            name: "Yas",
            img: "/assets/yas.png"
        },
        {
            id: 5,
            name: "Vodacom",
            img: "/assets/vodacom.png"
        },
        {
            id: 6,
            name: "Airtel",
            img: "/assets/airtel.png"
        },
        {
            id: 7,
            name: "Halotel",
            img: "/assets/amecore_logo.png"
        },
    ]

    const partinersSettings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 5000,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className='bg-gray-900 py-8'>
            <div className=''>
                <div className='flex flex-col '>
                    {/* <div className='flex gap-2 items-center justify-center'>
                        <Users className='text-primary w-8 h-8 mb-4' />
                        <h2 className='text-xl font-semibold text-white'>Partners</h2>
                    </div> */}

                    <div className='mt-8'>
                        <Slider {...partinersSettings}>
                            {partiners.map((partiner) => (
                                <div key={partiner.id} className='w-[142px] h-[48px] max-w-[142px]'>
                                    <Image src={partiner.img} width={1000} height={1000} alt={partiner.name} className='w-full h-full object-contain' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorSection