// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-extralight tracking-wide text-gray-800"> {/* Use Link */}
                        Raviro
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link // Use Link
                                key={link.name}
                                to={link.path} // Use 'to' prop
                                className="text-sm font-light text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen} // Add aria-expanded
                    >
                        {/* ... SVG icon ... */}
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                    // Add role for accessibility if needed, e.g., role="menu"
                >
                    <div className="rounded-md bg-white p-4 space-y-3 shadow-sm">
                        {navLinks.map((link) => (
                            <Link // Use Link
                                key={link.name}
                                to={link.path} // Use 'to' prop
                                className="block text-sm py-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;