// src/components/HomePage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Header from './Header';
import Footer from './Footer';
// Import blog data if you want to make "Latest Insights" dynamic
// import { blogPosts } from '../data/blogData';

const HomePage = () => {
    useEffect(() => {
        // Animation logic remains the same
        const animateElements = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 150 * index);
            });
        };
        animateElements();
    }, []);

    // Optional: Get latest 2 posts dynamically
    // const latestPosts = blogPosts.slice(0, 2);

    return (
        <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
            {/* ... background elements ... */}
            <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#4a90e2 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            ></div>
            <div className="absolute top-20 -right-24 w-64 h-64 rounded-full border border-gray-200 opacity-20"></div>
            <div className="absolute top-40 -right-32 w-96 h-96 rounded-full border border-gray-200 opacity-10"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border border-gray-100 opacity-20"></div>
            <div className="absolute right-0 top-1/3 w-1/4 h-64 opacity-10 pointer-events-none">
                {/* ... svg shape ... */}
            </div>


            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="h-screen flex items-center px-4 relative">
                    {/* ... gradient overlays ... */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none"></div>
                    <div className="absolute left-0 top-1/3 h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>

                    <div className="container mx-auto max-w-3xl relative z-10">
                        <div className="fade-in opacity-0 transition-all duration-1000 delay-300">
                            {/* ... h1 and p tags ... */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-800 leading-tight mb-8">
                                Bridging research and impact in global health
                            </h1>
                            <p className="text-xl text-gray-500 mb-12 max-w-xl">
                                Connecting evidence to action in developing regions
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Convert 'a' to 'Link' */}
                                <Link
                                    to="/blog" // Use 'to' prop
                                    className="px-8 py-3 text-blue-600 hover:text-blue-700 transition-colors duration-300 inline-flex items-center group"
                                >
                                    Read Our Blog
                                    {/* ... arrow svg ... */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/about" // Use 'to' prop
                                    className="px-8 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 inline-flex items-center group"
                                >
                                    About Us
                                    {/* ... arrow svg ... */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Single Value Statement */}
                <section className="py-32 px-4 bg-gray-50 relative">
                    {/* ... abstract shapes ... */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                        {/* ... svg shape ... */}
                    </div>
                    <div className="container mx-auto max-w-2xl text-center relative z-10">
                        {/* ... p tag ... */}
                        <p className="text-xl md:text-2xl font-extralight text-gray-700 leading-relaxed fade-in opacity-0 transition-all duration-1000 delay-500">
                            "Raviro empowers health professionals in the Global South by creating pathways for research to drive tangible improvements in public health outcomes."
                        </p>
                    </div>
                </section>

                {/* Latest Blog Posts Preview */}
                <section className="py-32 px-4 relative">
                    {/* ... dot pattern ... */}
                    <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(#4a90e2 0.8px, transparent 0.8px)`,
                            backgroundSize: '20px 20px'
                        }}
                    ></div>
                    <div className="container mx-auto max-w-4xl relative z-10">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-16 fade-in opacity-0 transition-all duration-1000 delay-600">
                            Latest Insights
                        </h2>
                        <div className="space-y-16 fade-in opacity-0 transition-all duration-1000 delay-700">
                            {/* Blog Post 1 - Convert 'a' to 'Link' */}
                            <div className="group">
                                <Link to="/blog/implementation-research-explained" className="block group-hover:opacity-90 transition-opacity">
                                    <span className="text-xs text-blue-600 uppercase tracking-wider">Research</span>
                                    <h3 className="text-xl font-light text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                        Implementation Research Explained: Bridging the Know-Do Gap
                                    </h3>
                                    <p className="text-gray-600">
                                        Learn how implementation research is transforming the way we approach public health challenges in resource-limited settings.
                                    </p>
                                    <div className="mt-4 text-sm text-gray-500">March 2, 2025</div>
                                </Link>
                            </div>
                            {/* Blog Post 2 - Convert 'a' to 'Link' */}
                            <div className="group">
                                <Link to="/blog/evidence-based-practices" className="block group-hover:opacity-90 transition-opacity">
                                    <span className="text-xs text-blue-600 uppercase tracking-wider">Best Practices</span>
                                    <h3 className="text-xl font-light text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                        Five Ways to Improve Evidence-Based Practice in Global Health
                                    </h3>
                                    <p className="text-gray-600">
                                        Practical strategies for public health professionals to integrate research findings into their daily practice.
                                    </p>
                                    <div className="mt-4 text-sm text-gray-500">February 18, 2025</div>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-16 text-center fade-in opacity-0 transition-all duration-1000 delay-800">
                            {/* Convert 'a' to 'Link' */}
                            <Link
                                to="/blog"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
                            >
                                View all articles
                                {/* ... arrow svg ... */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-4 bg-gray-50 relative">
                    {/* ... abstract shape ... */}
                    <div className="absolute left-0 bottom-0 w-2/3 h-32 opacity-10">
                        {/* ... svg shape ... */}
                    </div>
                    <div className="container mx-auto max-w-md text-center fade-in opacity-0 transition-all duration-1000 delay-900 relative z-10">
                        {/* Convert 'a' to 'Link' */}
                        <Link
                            to="/contact"
                            className="inline-block px-12 py-4 border border-blue-400 text-blue-600 rounded-full font-light hover:bg-blue-50 transition-all duration-300"
                        >
                            Join Our Network
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;