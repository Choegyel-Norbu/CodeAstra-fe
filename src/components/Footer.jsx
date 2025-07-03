import React from "react";

const Footer = () => {
  return (
    <footer className="h-[70vh] bg-white text-gray-700 border-t border-gray-200 mt-10">
      {/* Decorative dots for footer */}
      <div className="flex justify-center items-center pt-8 pb-4 bg-white dark:bg-transparent">
        <span className="h-1 w-1 rounded-full bg-black dark:bg-gray-400 mx-1.5"></span>
        <span className="h-1 w-1 rounded-full bg-black dark:bg-gray-400 mx-1.5"></span>
        <span className="h-1 w-1 rounded-full bg-black dark:bg-gray-400 mx-1.5"></span>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Chogyal</h2>
          <p className="mt-2 text-sm">
            Building purposeful apps that empower real change. Focused on clean
            code, modern UI, and meaningful solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                About Me
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
          <p className="text-sm">
            📞 Phone:{" "}
            <a href="tel:17482648" className="hover:text-blue-500">
              17482648
            </a>
          </p>
          <p className="text-sm mt-2">
            📧 Email:{" "}
            <a
              href="mailto:choegyell@gmail.com"
              className="hover:text-blue-500"
            >
              choegyell@gmail.com
            </a>
          </p>

          {/* Social Icons (placeholder) */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-40 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Chogyal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
