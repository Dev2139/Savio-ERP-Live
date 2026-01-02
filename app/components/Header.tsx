'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1766252828/vztkaqjmbpr5ernaekqk.png" 
              alt="SavioERP Logo" 
              width={100} 
              height={25}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/about') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/savio-erp" 
            className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/savio-erp') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
          >
            Modules
          </Link>
          <Link 
            href="/clients" 
            className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/clients') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
          >
            Clients
          </Link>
          <Link 
            href="/contact" 
            className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/contact') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/about') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/savio-erp" 
              className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/savio-erp') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Modules
            </Link>
            <Link 
              href="/clients" 
              className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/clients') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/contact') ? 'text-blue-600 border-b-2 border-red-600 pb-1' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg text-center transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;