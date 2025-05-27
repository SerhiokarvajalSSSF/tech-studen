import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, LogOut, User, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoggedIn, logout } = useUser();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Historia', path: '/subject/historia' },
    { label: 'Filosofía', path: '/subject/filosofia' },
    { label: 'Matemáticas', path: '/subject/matematicas' },
    { label: 'Español', path: '/subject/español' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <BookOpen className="h-8 w-8 text-[#00FFFF]" />
              <span className="ml-2 text-xl font-bold text-white">Tech-Student</span>
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#00FFFF] bg-black/40'
                      : 'text-gray-300 hover:text-[#00FFFF] hover:bg-black/40'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* User section */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/profile" className="flex items-center mr-4">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-600">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <User className="h-5 w-5 text-gray-300" />
                    )}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-300">{user?.name}</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={logout}
                  leftIcon={<LogOut className="h-4 w-4" />}
                >
                  Salir
                </Button>
              </div>
            ) : (
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => {}} 
                leftIcon={<LogIn className="h-4 w-4" />}
              >
                Iniciar Sesión
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-[#00FFFF] bg-black/40'
                    : 'text-gray-300 hover:text-[#00FFFF] hover:bg-black/40'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {isLoggedIn ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-600">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      <User className="h-6 w-6 text-gray-300" />
                    )}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user?.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user?.email}</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-auto"
                  onClick={logout}
                  leftIcon={<LogOut className="h-4 w-4" />}
                >
                  Salir
                </Button>
              </div>
            ) : (
              <div className="px-5">
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => {}} 
                  leftIcon={<LogIn className="h-4 w-4" />}
                >
                  Iniciar Sesión
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;