// src/components/BlogPostPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom'; // Import useParams, Link, Navigate
import Header from './Header';
import Footer from './Footer';
import { getPostBySlug, blogPosts } from '../data/blogData'; // Import data and helper

const BlogPostPage = () => {
    const { slug } = useParams(); // Get slug from URL parameters
    const post = getPostBySlug(slug); // Find the post using the helper

    useEffect(() => {
        // Animation logic remains the same, but trigger only if post exists
        if (post) {
            const animateElements = () => {
                const elements = document.querySelectorAll('.fade-in');
                elements.forEach((element, index) => {
                    // Reset styles for re-animation if navigating between posts
                    element.classList.remove('visible');
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(1rem)';

                    setTimeout(() => {
                        element.classList.add('visible');
                        // Inline styles might interfere after initial load, rely on class toggling
                        element.style.opacity = '';
                        element.style.transform = '';
                    }, 100 * index + 50); // Slight delay after component mount/update
                });
            };
            // Run animation slightly after component renders/updates
            const timer = setTimeout(animateElements, 50);
            return () => clearTimeout(timer);
        }
    }, [post]); // Re-run effect if the post changes

    // Handle post not found - redirect or show message
    if (!post) {
        // Option 1: Redirect to Blog page (or a 404 page)
        // return <Navigate to="/blog" replace />;

        // Option 2: Show a "not found" message
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <main className="flex-grow pt-24 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-2xl font-light text-gray-700 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-500 mb-6">Sorry, we couldn't find the post you were looking for.</p>
                    <Link to="/blog" className="text-blue-600 hover:underline">
                        Back to Blog
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }


    // Find related posts based on slugs, filter out the current post
    const relatedPostDetails = (post.relatedPosts || [])
        .map(related => blogPosts.find(p => p.slug === related.slug))
        .filter(foundPost => foundPost && foundPost.slug !== post.slug);


    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow pt-24">
                <article className="py-16 px-4">
                    <div className="container mx-auto max-w-2xl">
                        {/* Article Header */}
                        <header className="mb-16 fade-in"> {/* Removed opacity/transition from here - handled by JS */}
                            {/* ... Header content using 'post' data ... */}
                            <div className="mb-4">
                                <span className="text-xs text-blue-600 uppercase tracking-wider">{post.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extralight text-gray-800 mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {/* Map through post.content */}
                            {post.content.map((block, index) => {
                                const delay = 200 + (index * 50); // Keep delay calculation if needed for staggered styles
                                const animationClasses = "fade-in"; // Base animation class

                                switch(block.type) {
                                    case 'paragraph':
                                        return <p key={index} className={`mb-6 text-gray-700 ${animationClasses}`} >{block.content}</p>;
                                    case 'heading':
                                        return <h2 key={index} className={`text-2xl font-light text-gray-800 mt-12 mb-6 ${animationClasses}`}>{block.content}</h2>;
                                    case 'quote':
                                        return <blockquote key={index} className={`border-l-2 border-blue-400 pl-6 italic my-8 text-gray-700 ${animationClasses}`}>{block.content}</blockquote>;
                                    case 'list':
                                        return (
                                            <ul key={index} className={`list-disc pl-6 mb-6 space-y-2 text-gray-700 ${animationClasses}`}>
                                                {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                                            </ul>
                                        );
                                    default: return null;
                                }
                            })}
                        </div>

                        {/* Author Bio */}
                        <div className="mt-16 pt-8 border-t border-gray-100 fade-in">
                            {/* ... Author bio using 'post.author' ... */}
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-medium">
                                    {/* Simple initials */}
                                    {post.author.split(' ').map(name => name[0]).join('')}
                                </div>
                                <div className="ml-4">
                                    <div className="font-medium text-gray-800">{post.author}</div>
                                    <div className="text-sm text-gray-500">Team Raviro</div> {/* Assuming default role */}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts Section */}
                {relatedPostDetails.length > 0 && (
                    <section className="py-16 px-4 bg-gray-50">
                        <div className="container mx-auto max-w-2xl fade-in">
                            <h3 className="text-xl font-light text-gray-800 mb-8">
                                Related Articles
                            </h3>
                            <div className="space-y-6">
                                {relatedPostDetails.map((relatedPost, index) => (
                                    <Link // Use Link
                                        key={index}
                                        to={`/blog/${relatedPost.slug}`} // Use 'to' prop
                                        className="block p-6 bg-white rounded-md hover:shadow-sm transition-shadow duration-300"
                                    >
                                        <h4 className="text-lg font-light text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                            {relatedPost.title}
                                        </h4>
                                        {/* Optionally add excerpt or date */}
                                        <p className="text-sm text-gray-500 mt-2">{relatedPost.excerpt?.substring(0,100)}...</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BlogPostPage;