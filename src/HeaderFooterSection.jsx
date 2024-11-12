import React from 'react';
import { FaHome, FaUser, FaCalendarAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

function HeaderFooterSection() {
  return (
    <div className="bg-black h-auto text-white flex flex-col justify-between container mx-auto max-w-[1200px] px-4 md:px-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 py-4 text-md gap-5">
        <a href="#" className="flex flex-row gap-3 md:gap-3 items-center">
          <FaHome size={22} />
          <span>Home</span>
        </a>
        <a href="#" className="flex flex-row gap-3 md:gap-3 items-center">
          <FaUser size={22} />
          <span>About me</span>
        </a>
        <a href="#" className="flex flex-row gap-3 md:gap-3 items-center">
          <FaCalendarAlt size={22} />
          <span>Event</span>
        </a>
        <a href="#" className="flex flex-row gap-3 md:gap-3 items-center">
          <FaPhoneAlt size={22} />
          <span>Contact</span>
        </a>
        <a href="#" className="flex flex-row gap-3 md:gap-3 items-center">
          <FaPen size={22} />
          <span>Blog</span>
        </a>
      </header>

      {/* Footer Section */}
      <footer className="flex flex-col items-center text-center py-8 px-4">
        <p className="mb-6 text-white text-sm md:text-base">
          I’m currently looking to join a cross-functional team that values improving people’s lives <br className="hidden md:inline-block" />
          through accessible design. Or have a project in mind? Let’s connect.
        </p>
        <p className="mb-8 text-white text-sm md:text-base">ibrahimmemon930@gmail.com</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 gap-6 justify-center mb-4">
          <a href="#" className="text-pink-500 animate-pulse">
            <FaInstagram size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-400 animate-pulse">
            <FaTwitter size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-700 animate-pulse">
            <FaLinkedin size={28} md:size={32} />
          </a>
          <a href="#" className="text-blue-600 animate-pulse">
            <FaFacebook size={28} md:size={32} />
          </a>
          <a href="#" className="text-red-600 animate-pulse">
            <FaYoutube size={28} md:size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HeaderFooterSection;
