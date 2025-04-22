// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
// import './App.css'; // Optional: if you have App-specific styles

function App() {
  return (
      <div className="App">
        {/* Header and Footer can be included here if they are on ALL pages,
          or included within each page component individually */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Route for individual blog posts using a URL parameter ':slug' */}
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
  );
}

export default App;