// src/components/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '' // Changed from 'inquiry' to match form field name
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null); // Keep error state for potential future use or client-side validation feedback

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(null); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic client-side validation (can be expanded)
        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill out all fields.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1 second delay

        // --- Simulate Success ---
        // Since there's no backend, we just set the submitted state
        console.log("Simulated Form Submission:", formData); // Log data to console for verification
        setIsSubmitted(true);
        setFormData({ // Reset form
            name: '',
            email: '',
            message: ''
        });
        // --- End Simulation ---

        // // --- Keep error handling structure in case a backend is added later ---
        // try {
        //     // Replace with actual fetch call when backend is available
        //     // const response = await fetch('/api/inquiries', { ... });
        //     // if (!response.ok) throw new Error('Failed to submit');
        //
        //     // Simulate success for now
        //     await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        //     console.log("Simulated Form Submission:", formData);
        //
        //     setIsSubmitted(true);
        //     setFormData({ name: '', email: '', message: '' }); // Reset form on success
        //
        // } catch (err) {
        //     setError(err.message || 'An error occurred. Please try again.');
        // } finally {
        //     setIsSubmitting(false);
        // }
        // --- End error handling structure ---
        setIsSubmitting(false); // Ensure submitting state is reset
    };

    const dismissSuccessMessage = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow pt-24">
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-3xl">
                        {/* ... Rest of the intro content ... */}
                        <h1 className="text-4xl font-extralight text-gray-800 mb-12 fade-in opacity-0 transition-all duration-1000">
                            Get in Touch
                        </h1>
                        <div className="grid md:grid-cols-2 gap-20">
                            <div className="fade-in opacity-0 transition-all duration-1000 delay-200">
                                <p className="text-gray-600 mb-10">
                                    Have questions about our work or interested in collaborating?
                                    We'd love to hear from you.
                                </p>
                                {/* ... Contact info remains the same ... */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-medium text-blue-600 mb-1">Email</h3>
                                        <p className="text-gray-700">contact@raviro.com</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-blue-600 mb-1">Location</h3>
                                        <p className="text-gray-700">Nairobi, Kenya</p> {/* TODO: Update location */}
                                    </div>
                                </div>
                            </div>

                            <div className="fade-in opacity-0 transition-all duration-1000 delay-400">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {error && (
                                            // Simple error display - enhance as needed
                                            <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm mb-4">
                                                {error}
                                            </div>
                                        )}
                                        {/* ... Form fields remain the same (ensure 'name' attributes match state keys) ... */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" disabled={isSubmitting}/>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" disabled={isSubmitting}/>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none" disabled={isSubmitting}/>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-blue-50 text-blue-600 border border-blue-200 rounded-md font-light hover:bg-blue-100 transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                                                {isSubmitting ? (
                                                    <>
                                                        {/* ... SVG spinner ... */}
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : 'Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    // Success Message remains the same
                                    <div className="h-full flex flex-col items-center justify-center text-center py-8">
                                        <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="text-xl font-light text-gray-800 mb-3">Thank you for your message</h3>
                                        <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
                                        <button onClick={dismissSuccessMessage} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm">
                                            Send another message
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;