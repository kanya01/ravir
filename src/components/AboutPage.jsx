// src/components/AboutPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonialIntervalRef = useRef(null);

    // --- Hardcoded Testimonial Data ---
    // Data taken from the original app/javascript/components/AboutPage.jsx
    const testimonials = [
        {
            quote: "Raviro has transformed how we access and implement research findings. Their platform bridges a critical gap in our public health initiatives.",
            location: "Nairobi, Kenya"
        },
        {
            quote: "The research resources provided by Raviro have been instrumental in developing our community health programs with evidence-based approaches.",
            location: "Kampala, Uganda"
        },
        {
            quote: "Their knowledge hub helps us find research partners and funding opportunities that align perfectly with our regional health priorities.",
            location: "Addis Ababa, Ethiopia"
        },
        {
            quote: "Raviro's platform has enabled us to translate complex research into actionable programs that address our community's specific health challenges.",
            location: "Lagos, Nigeria"
        }
    ];
    // --- End Testimonial Data ---
    const teamMembers = [
        { name: "Lucy Kanya", title: "Director" },
        { name: "Flo Thungu", title: "Regional Researcher" },
        { name: "Moses Mwangi", title: "Product Engineer" }
    ];

    // --- useEffect for general page animations (fade-in, scroll-fade) ---
    useEffect(() => {
        console.log("Animation Effect triggered");
        const fadeInElements = document.querySelectorAll('.fade-in');
        console.log(`Found ${fadeInElements.length} fade-in elements`);
        fadeInElements.forEach((element, index) => {
            console.log(`Adding .visible to fade-in element ${index}:`, element);
            element.classList.add('visible');
        });

        const scrollFadeElements = document.querySelectorAll('.scroll-fade');
        console.log(`Found ${scrollFadeElements.length} scroll-fade elements`);
        const handleScroll = () => {
            console.log("Scroll event detected");
            scrollFadeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight * 0.85 && !el.classList.contains('visible')) {
                    console.log("Adding .visible to scroll-fade element:", el);
                    el.classList.add('visible');
                }
            });
        };
        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
        return () => {
            console.log("Cleaning up scroll listener");
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // --- Function to reset the interval timer ---
    const resetInterval = () => {
        if (testimonialIntervalRef.current) {
            clearInterval(testimonialIntervalRef.current);
        }
        testimonialIntervalRef.current = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 7000); // Restart interval
    };

    // --- useEffect for Testimonials Auto-Scroll ---
    useEffect(() => {
        console.log("Starting testimonial interval");
        resetInterval(); // Start the initial interval

        // Clear interval on component unmount
        return () => {
            if (testimonialIntervalRef.current) {
                console.log("Clearing testimonial interval on unmount");
                clearInterval(testimonialIntervalRef.current);
            }
        };
    }, [testimonials.length]); // Re-run if the number of testimonials changes (although unlikely here)

    // --- Navigation Functions (including interval reset) ---
    const nextTestimonial = () => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        resetInterval(); // Reset interval on manual navigation
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
        resetInterval(); // Reset interval on manual navigation
    };
    // --- End Navigation Functions ---
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-24">
                {/* --- Intro section --- */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-12 fade-in">
                            About Raviro
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 fade-in">
                            We bridge the gap between public health research and real-world impact in developing regions.
                        </p>
                        <p className="text-gray-600 leading-relaxed fade-in">
                            Through knowledge brokering and collaborative solutions, we connect evidence to action, enabling better health outcomes where they're needed most.
                        </p>
                    </div>
                </section>

                {/* --- Our approach section --- */}
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 scroll-fade">
                            Our Approach
                        </h2>
                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="scroll-fade">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Knowledge Equity</h3>
                                <p className="text-gray-600">
                                    Making research accessible and actionable for all stakeholders in public health.
                                </p>
                            </div>
                            <div className="scroll-fade">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Collaboration</h3>
                                <p className="text-gray-600">
                                    Fostering partnerships between research institutions and implementing organizations.
                                </p>
                            </div>
                            <div className="scroll-fade">
                                <h3 className="text-xl font-light text-blue-600 mb-4">Impact</h3>
                                <p className="text-gray-600">
                                    Measuring success through tangible improvements in public health outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- NEW: Meet the Team Section --- */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl font-extralight text-gray-800 mb-16 text-center scroll-fade">
                            Meet the Team
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="text-center scroll-fade"
                                    // Optional: Add slight delay based on index for staggered effect
                                    // style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Placeholder for image/avatar */}
                                    <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl font-semibold mb-4">
                                        {getInitials(member.name)}
                                    </div>
                                    <h4 className="text-lg font-medium text-gray-800 mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-blue-600">
                                        {member.title}
                                    </p>
                                    {/* Optional: Add social links or short bio later */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* --- End Meet the Team Section --- */}


                {/* --- Testimonials section --- */}
                <section className="py-32 px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 text-center fade-in"> {/* Changed to fade-in */}
                            What Our Clients Say
                        </h2>
                        <div className="relative"> {/* Removed scroll-fade */}
                            {/* Testimonial carousel container */}
                            <div className="relative min-h-[180px] md:min-h-[150px] overflow-hidden">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`testimonial-item absolute inset-0 transition-all duration-700 ease-in-out ${
                                            index === currentTestimonial
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-8 pointer-events-none'
                                        }`}
                                    >
                                        <blockquote className="text-lg md:text-xl font-light text-gray-700 italic mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <p className="text-blue-600 text-right">— {testimonial.location}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Navigation dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        // Use direct state setting for dots, reset interval
                                        onClick={() => {
                                            setCurrentTestimonial(index);
                                            resetInterval();
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentTestimonial
                                                ? 'bg-blue-500 w-4'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                            {/* Navigation arrows */}
                            <button
                                onClick={prevTestimonial} // Calls function which includes resetInterval
                                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 text-gray-300 hover:text-blue-500 transition-colors duration-300 hidden md:block"
                                aria-label="Previous testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={nextTestimonial} // Calls function which includes resetInterval
                                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 text-gray-300 hover:text-blue-500 transition-colors duration-300 hidden md:block"
                                aria-label="Next testimonial"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- Simple CTA section --- */}
                <section className="py-32 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-xl text-center scroll-fade">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-8">
                            Want to know more?
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block px-12 py-4 text-blue-600 border border-blue-400 rounded-full font-light hover:bg-blue-50 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;