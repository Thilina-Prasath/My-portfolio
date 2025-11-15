import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto text-center px-6">
        <p className="text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Prasath Thilina. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with React, Node.js, Express, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;