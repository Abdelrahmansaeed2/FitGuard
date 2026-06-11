import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background antialiased relative">
      {/* Background Pattern */}
      <style>{`
        .bg-pattern {
            background-image: radial-gradient(theme('colors.outline-variant') 1px, transparent 1px);
            background-size: 24px 24px;
        }
      `}</style>
      
      {/* TopNavBar (Marketing) */}
      <nav className="w-full h-[64px] sticky top-0 bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline z-50">
        <div className="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
          <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            FitGuard
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200 opacity-80">Home</Link>
            <Link to="/about" className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">About</Link>
            <Link to="/faq" className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">FAQ</Link>
            <Link to="/contact" className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-on-surface font-label-md text-label-md hover:text-primary transition-colors">Login</Link>
            <Link to="/register" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-on-background w-full py-16 border-t border-outline-variant dark:border-outline mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto">
          <div className="font-headline-sm text-primary dark:text-primary-fixed-dim mb-6 md:mb-0">
            FitGuard
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link to="/privacy" className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Terms of Service</Link>
            <a href="#" className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">HIPAA Compliance</a>
            <a href="#" className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">API Documentation</a>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
            © 2024 FitGuard AI. Clinical Precision in Motion.
          </div>
        </div>
      </footer>
    </div>
  );
}
