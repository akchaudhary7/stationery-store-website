import React, { useEffect, useState, useRef } from 'react'
import { assets } from '../assets/assets';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";





const Hero = () => {

    const slides = [

        {
            img: 'https://res.cloudinary.com/dfgt3arga/image/upload/v1785204744/banner2_hoom9j.jpg'
        },
        {
            img: 'https://res.cloudinary.com/dfgt3arga/image/upload/v1785204744/banner_chj9gc.avif'
        },
        {
            img: 'https://res.cloudinary.com/dfgt3arga/image/upload/v1785204744/banner3_tpsdjk.jpg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval)
    }, []);


    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;

        const touchEndX = event.changedTouches[0].clientX;
        const swipeDistance = touchStartX.current - touchEndX;

        // Ignore taps and very short movements
        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                goToNext(); // swipe left
            } else {
                goToPrevious(); // swipe right
            }
        }

        touchStartX.current = null;
    };

    return (
        <div className='w-full h-full'>
            {/* <h1 className='text-4xl font-extrabold '>Hello react slider</h1> */}
            {/* Container */}
            <div className='w-full h-[60svh] sm:h-[65svh] lg:h-[70svh] mx-auto'>
                {/* sliderStyles */}
                <div
                    className='h-full relative overflow-hidden rounded-[10px]'
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* left arrow
                    <div onClick={goToPrevious} className='absolute top-1/2 translate-x-0 translate-y-1/2 left-[32px] text-[45px] text-[#070707] z-1 cursor-pointer' ><IoIosArrowBack /></div>

                    right arrow

                    <div onClick={goToNext} className='absolute top-1/2 translate-x-0 translate-y-1/2 right-[32px] text-[45px] text-[#090909] z-1 cursor-pointer '><IoChevronForward />
                    </div> */}

                    {/* Backward arrow */}
                    <button
                        onClick={goToPrevious}
                        aria-label="Previous slide"
                        className="absolute left-3 sm:left-5 z-10 top-1/2 -translate-y-1/2 grid h-9 w-9 sm:h-[50px] sm:w-[50px] place-items-center rounded-full bg-slate-700/80 text-white transition hover:bg-slate-800"
                    >
                        <HiChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" size={32} strokeWidth={1} />
                    </button>

                    {/* Forward arrow */}
                    <button
                        onClick={goToNext}
                        aria-label="Next slide"
                        className="absolute right-3 sm:right-5 z-10 top-1/2 -translate-y-1/2 grid h-9 w-9 sm:h-[50px] sm:w-[50px] place-items-center rounded-full bg-slate-700/80 text-white transition hover:bg-slate-800"
                    >
                        <HiChevronRight className="h-6 w-6 sm:h-8 sm:w-8" size={32} strokeWidth={1} />
                    </button>

                    {/* slideStyles */}
                    <div
                        key={currentIndex}
                        className='w-full h-full bg-center bg-cover animate-slide-fade'
                        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}></div>

                    {/* <div className='flex justify-center'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className='mx-[3px] cursor-pointer text-[20px]'
                                onClick={() => goToSlide(slideIndex)}>⬤</div>
                        ))}
                    </div> */}

                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:gap-3 rounded-full bg-black/35 px-2.5 py-1.5 sm:px-3 sm:py-2">
                        {slides.map((slide, slideIndex) => (
                            <button
                                key={slideIndex}
                                type="button"
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                aria-current={currentIndex === slideIndex ? "true" : undefined}
                                onClick={() => goToSlide(slideIndex)}
                                className={`h-3 rounded-full border border-white transition-all duration-300 ease-in-out ${currentIndex === slideIndex
                                    ? "w-10 bg-white"
                                    : "w-3 bg-white/20 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
