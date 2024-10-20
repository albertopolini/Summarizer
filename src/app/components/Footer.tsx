import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 SummarizeAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
