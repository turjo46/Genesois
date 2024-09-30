import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-6 bg-white shadow-md w-72">
      {/* Logo */}
      <div className=" mb-6">
        <img src="https://webextheme.com/html/loxicat/images/logo-sidebar-dark.png" alt="Loxicat Logo" className="w-10 h-10" />
        
      </div>

      {/* Office Address */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Office Address</h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt text-orange-600"></i>
            <span>121 King Street, Australia</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-envelope text-orange-600"></i>
            <span>example@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-phone text-orange-600"></i>
            <span>(00) 2500-123-4567</span>
          </li>
        </ul>
      </div>

      {/* Pinterest Images */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Pintarest</h2>
        <div className="grid grid-cols-3 gap-2">
          <img src="https://webextheme.com/html/loxicat/images/side-panel/1.jpg" alt="Industrial Image 1" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/2.jpg" alt="Industrial Image 2" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/3.jpg" alt="Industrial Image 3" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/4.jpg" alt="Industrial Image 4" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/5.jpg" alt="Industrial Image 5" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/6.jpg" alt="Industrial Image 6" className="w-full h-20 object-cover" />
        </div>
      </div>

      {/* Social List */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Social List</h2>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="text-red-600">
            <i className="fab fa-google-plus-g text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
