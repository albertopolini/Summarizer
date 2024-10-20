import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkTheme(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  };

  return (
    <header className={`bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl w-full ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">Summarify</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Generate New
          </Link>
          <Link href="/history" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            History
          </Link>
          <Link href="/upgrade" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Upgrade
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
          {isAuthenticated ? (
            <div className="ml-4">
              <span className="text-white mr-4">Welcome, {user}</span>
              <button 
                onClick={logout}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 ml-4"
            >
              Sign In / Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
