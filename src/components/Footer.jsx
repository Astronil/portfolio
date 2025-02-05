import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p>© 2023 Your Name. All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-blue-500 mr-4">
            LinkedIn
          </a>
          <a href="#" className="text-white hover:text-blue-500 mr-4">
            GitHub
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
