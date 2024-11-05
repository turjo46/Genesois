import React, { useState, useEffect} from 'react';

const ScrollToTopAndNavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Toggle the visibility of the scroll button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Toggle the navbar when scrolled past a certain point
  const toggleNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', toggleNavbar);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', toggleNavbar);
    };
  }, []);

  return (
    <div>
      {/* Navbar that appears on scroll */}
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        } bg-yellow-500 shadow-md`}
      >
        <nav className="flex justify-between items-center px-4 py-2">
          <span className="text-white text-lg font-semibold">My Navbar</span>
          <ul className="flex space-x-4 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      {/* Scroll-to-top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-3 rounded-full bg-yellow-500 text-white shadow-md transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopAndNavBar;