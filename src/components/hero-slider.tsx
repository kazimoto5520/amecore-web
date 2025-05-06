"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "https://amecore.co.tz/catalina/images/slider/slider4.jpg",
    title: "TELECOM SOLUTIONS & SERVICES",
    description: "Amecore Technologies Ltd is a telecom solutions provider, combining highly skilled installation engineers with efficient superlative ongoing support. We deliver tailored telecoms solutions across a broad range of technology sectors and maintain partnerships with many of the world-leading manufacturers."
  },
  {
    image: "https://amecore.co.tz/catalina/images/slider/slider7.jpg",
    title: "Equipment Supplies Hardware and Software",
    description: "Computer supplies such as laptops, smartphones, email, web servers, video conferences, shared file servers – companies have become heavily reliant on IT for day to day to operations, and ensuring you have the right IT equipment for your business is crucial."
  },
  {
    image: "https://amecore.co.tz/catalina/images/slider/slider2.jpg",
    title: "BACKUPS AND RECOVERY",
    description: "We provide data backup plans and recovery services and ensuring you have the right data crucial for running your business."
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  
  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setDirection('left');
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(true);
    }, 10);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setDirection('right');
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(true);
    }, 10);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > currentIndex ? 'right' : 'left');
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(slideIndex);
      setIsAnimating(true);
    }, 10);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext();
    }, 6000);
    
    return () => clearInterval(slideInterval);
  }, [goToNext]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Main slider */}
      <div 
        className="h-full w-full"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10 bg-gradient-to-t from-black/95 to-black/40"></div>
        <div className="relative z-20 text-white max-w-5xl mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center justify-center h-full">
          <h1 
            className={cn(
              "mb-6 font-extrabold leading-tight tracking-tight text-5xl md:text-6xl lg:text-7xl max-w-5xl",
              isAnimating ? 
                direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left' : 
                'opacity-0'
            )}
          >
            {slides[currentIndex].title}
          </h1>
          <p 
            className={cn(
              "mb-10 max-w-3xl text-lg md:text-xl text-gray-200",
              isAnimating ? 'animate-fade-in animate-delay-300' : 'opacity-0'
            )}
          >
            {slides[currentIndex].description}
          </p>
          <Button 
            size="lg"
            className={cn(
              "bg-primary hover:bg-primary text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-lg",
              isAnimating ? 'animate-fade-in animate-delay-500' : 'opacity-0'
            )}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === slideIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}