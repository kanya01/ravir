// src/components/BlogPage.jsx
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Import Link
import { blogPosts } from '../data/blogData'; // Import data

const BlogPage = () => {
    useEffect(() => {
        // Animation logic remains the same
        const animateElements = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 100 * index);
            });
        };
        animateElements();

        const handleScroll = () => {
            const scrollElements = document.querySelectorAll('.scroll-fade');
            scrollElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight * 0.8) {
                    el.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use imported blogPosts data
    const categories = [...new Set(blogPosts.map(post => post.category))];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow pt-24">
                {/* ... Blog Header section remains the same ... */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6 fade-in opacity-0 transition-all duration-1000">
                            Insights
                        </h1>
                        <p className="text-lg text-gray-600 fade-in opacity-0 transition-all duration-1000 delay-200">
                            Perspectives on implementation research, evidence-based practice, and global health impact
                        </p>
                    </div>
                </section>
                <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent fade-in opacity-0 transition-all duration-1000 delay-300"></div>


                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        {/* ... Categories Filter section remains the same (functionality not implemented) ... */}
                        <div className="mb-16 overflow-x-auto whitespace-nowrap fade-in opacity-0 transition-all duration-1000 delay-400">
                            <div className="inline-flex space-x-4">
                                <button className="px-4 py-1 text-sm text-blue-600 border-b-2 border-blue-600">All</button>
                                {categories.map((category, index) => (
                                    <button key={index} className="px-4 py-1 text-sm text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300">
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-20">
                            {blogPosts.map((post, index) => (
                                <article
                                    key={index}
                                    className="scroll-fade opacity-0 transition-all duration-700 transform translate-y-4"
                                    style={{transitionDelay: `${index * 100}ms`}}
                                >
                                    <Link to={`/blog/${post.slug}`} className="block group"> {/* Use Link and 'to' prop */}
                                        <div className="mb-3">
                                            <span className="text-xs text-blue-600 uppercase tracking-wider">{post.category}</span>
                                        </div>
                                        <h2 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ... Newsletter Subscribe section remains the same (functionality not implemented) ... */}
                <section className="py-20 px-4 bg-gray-50 mt-16">
                    <div className="container mx-auto max-w-xl text-center scroll-fade opacity-0 transition-all duration-700 transform translate-y-4">
                        <h2 className="text-2xl font-extralight text-gray-800 mb-6">Stay Updated</h2>
                        <p className="text-gray-600 mb-8">Subscribe to receive the latest insights directly in your inbox</p>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()}> {/* Added form and preventDefault */}
                            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"/>
                            <button type="submit" className="px-6 py-3 bg-white text-blue-600 border border-blue-400 rounded-md font-light hover:bg-blue-50 transition-colors duration-300">Subscribe</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;