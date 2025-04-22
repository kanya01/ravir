// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import Font Awesome stuff
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import specific brand icons

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const mainLinks = [
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    // Update socialLinks to use the imported icons
    const socialLinks = [
        { name: 'Twitter', icon: faTwitter, url: '#' }, // Use icon object
        { name: 'LinkedIn', icon: faLinkedin, url: '#' } // Use icon object
    ];

    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-6">
                {/* ... Rest of the footer structure ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="text-xl font-extralight text-gray-800 mb-6">Raviro</div>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Bridging the gap between public health research and real-world impact in developing regions.
                        </p>
                    </div>
                    <div className="flex flex-col md:items-end">
                        <nav className="flex flex-wrap gap-6 mb-8">
                            {mainLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Use FontAwesomeIcon component */}
                        <div className="flex gap-6">
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    aria-label={link.name}
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                    // Add target="_blank" rel="noopener noreferrer" if external links
                                >
                                    {/* Replace <i> tag with FontAwesomeIcon */}
                                    <FontAwesomeIcon icon={link.icon} size="lg" /> {/* Use size="lg" for larger icons if needed */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* ... Copyright section ... */}
                <div className="border-t border-gray-100 mt-12 pt-8 text-center">
                    <p className="text-xs text-gray-400">
                        © {currentYear} Raviro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;