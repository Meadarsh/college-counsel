"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  '/homePage/landingCrausel/hero-1.png',
  '/homePage/landingCrausel/hero-2.png',
  '/homePage/landingCrausel/hero-3.png',
  '/homePage/landingCrausel/hero-4.png',
];

const LandingSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section 
      className='relative overflow-hidden pt-4 bg-gradient-to-br from-background via-background to-secondary/20'
      aria-label="Hero Section"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20'>
          
          {/* Left Content */}
          <div className='space-y-8 text-center lg:text-left order-2 lg:order-1'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20'>
              <GraduationCap className='w-4 h-4 text-primary' />
              <span className='text-sm font-medium text-primary'>India&apos;s Trusted Education Platform</span>
            </div>

            {/* Main Heading */}
            <div className='space-y-4'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                Find Your Perfect
                <span className='block text-primary mt-2'>University Match</span>
              </h1>
              <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl'>
                Compare top universities, explore courses, and make informed decisions about your educational future with expert guidance.
              </p>
            </div>

            {/* Stats */}
            <div className='flex flex-wrap justify-center lg:justify-start gap-8 py-4'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Award className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <p className='text-2xl font-bold'>50+</p>
                  <p className='text-sm text-muted-foreground'>Universities</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <Users className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <p className='text-2xl font-bold'>10,000+</p>
                  <p className='text-sm text-muted-foreground'>Happy Students</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Link href='/about-university'>
                <Button size='lg' className='w-full sm:w-auto text-base px-8 h-12 group'>
                  Explore Universities
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <Link href='/apply'>
                <Button size='lg' variant='outline' className='w-full sm:w-auto text-base px-8 h-12'>
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className='flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground pt-4'>
              <div className='flex -space-x-2'>
                <div className='w-8 h-8 rounded-full bg-primary/20 border-2 border-background' />
                <div className='w-8 h-8 rounded-full bg-accent/20 border-2 border-background' />
                <div className='w-8 h-8 rounded-full bg-secondary/40 border-2 border-background' />
              </div>
              <p>Trusted by thousands of students nationwide</p>
            </div>
          </div>

          {/* Right Image */}
          <div className='order-1 lg:order-2 relative'>
            <div className='relative aspect-[4/3]'>
              {/* Decorative elements */}
              <div className='absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10' />
              <div className='absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-2xl -z-10' />
              
              {/* Main Image */}
              <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-border/50'>
                {/* Carousel Images */}
                {carouselImages.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`University life scene ${index + 1} - UniCompare helps you find the perfect educational path`}
                      fill
                      priority={index === 0}
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>
                ))}
                
                {/* Floating Card Overlay */}
                <div className='absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50 z-10'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <GraduationCap className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <p className='font-semibold text-sm'>Start Your Journey</p>
                      <p className='text-xs text-muted-foreground'>Compare & Choose the Best</p>
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation Dots */}
                <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-primary w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LandingSection
