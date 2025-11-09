import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to='/' className="flex items-center gap-2">
              <img src="/src/assets/VFilms Logo.png" alt="logo" className="h-8 w-auto"/>
              <span className="font-semibold text-lg">V Films</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/film-production" className="text-gray-700 hover:text-gray-900">Film Production</Link>
            <Link to="/branding" className="text-gray-700 hover:text-gray-900">Branding</Link>
            <Link to="/art-curation" className="text-gray-700 hover:text-gray-900">Art Curation</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Contact</Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/services" className="block py-2">Services</Link>
            <Link to="/film-production" className="block py-2">Film Production</Link>
            <Link to="/branding" className="block py-2">Branding</Link>
            <Link to="/art-curation" className="block py-2">Art Curation</Link>
            <Link to="/portfolio" className="block py-2">Portfolio</Link>
            <Link to="/about" className="block py-2">About</Link>
            <Link to="/contact" className="block py-2 text-white bg-blue-600 text-center rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
