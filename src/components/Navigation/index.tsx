import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, Phone, Car, Menu, X, Calculator } from 'lucide-react';
import { Logo } from '../Logo';
import { AuthButton } from '../Auth/AuthButton';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" isActive={location.pathname === '/'} />
              <NavLink 
                to="/services" 
                icon={<Car className="h-5 w-5" />} 
                text="Services" 
                isActive={location.pathname === '/services'} 
              />
              <NavLink 
                to="/estimate" 
                icon={<Calculator className="h-5 w-5" />} 
                text="Get Estimate" 
                isActive={location.pathname === '/estimate'} 
              />
              <NavLink 
                to="/book" 
                icon={<Calendar className="h-5 w-5" />} 
                text="Book Now" 
                isActive={location.pathname === '/book'} 
              />
              <NavLink 
                to="/contact" 
                icon={<Phone className="h-5 w-5" />} 
                text="Contact" 
                isActive={location.pathname === '/contact'} 
              />
            </div>
            <AuthButton />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" isActive={location.pathname === '/'} onClick={toggleMenu} />
              <MobileNavLink 
                to="/services" 
                icon={<Car className="h-5 w-5" />} 
                text="Services" 
                isActive={location.pathname === '/services'} 
                onClick={toggleMenu}
              />
              <MobileNavLink 
                to="/estimate" 
                icon={<Calculator className="h-5 w-5" />} 
                text="Get Estimate" 
                isActive={location.pathname === '/estimate'} 
                onClick={toggleMenu}
              />
              <MobileNavLink 
                to="/book" 
                icon={<Calendar className="h-5 w-5" />} 
                text="Book Now" 
                isActive={location.pathname === '/book'} 
                onClick={toggleMenu}
              />
              <MobileNavLink 
                to="/contact" 
                icon={<Phone className="h-5 w-5" />} 
                text="Contact" 
                isActive={location.pathname === '/contact'} 
                onClick={toggleMenu}
              />
              <div className="px-4">
                <AuthButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}