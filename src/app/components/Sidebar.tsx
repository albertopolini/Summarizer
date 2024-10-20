import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-surface w-64 min-h-screen p-4">
      <nav className="mt-8">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-text rounded-md transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-20">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Generate New
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-text rounded-md transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-20">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              History
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-text rounded-md transition duration-300 ease-in-out hover:bg-primary hover:bg-opacity-20">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Upgrade Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
