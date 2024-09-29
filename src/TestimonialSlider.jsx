import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Seymour Buts',
    designation: 'CEO, Google Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client1.png',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 2,
    name: 'Seymour Buts',
    designation: 'CEO, Google Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client2.png',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 3,
    name: 'Robert Jhon',
    designation: 'CEO, Apple Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client4.png',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 4,
    name: 'Robert Jhon',
    designation: 'CEO, Apple Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 5,
    name: 'Selina Andrey',
    designation: 'CEO, Google Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
  },
  {
    id: 6,
    name: 'Selina Andrey',
    designation: 'CEO, Google Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
  },
  {
    id: 7,
    name: 'Selina Andrey',
    designation: 'CEO, Google Inc',
    image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative py-12 px-36 bg-[#ff7906] overflow-hidden">
      <div className="flex justify-center items-center transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* Slider content: Render all testimonials in a row */}
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
            <div className="p-8 rounded-lg bg-white text-center w-52 h-24 border mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-12 mt-5 mx-auto"
              />
              <p className="text-sm mt-4">{testimonial.testimonial}</p>
              <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
              <span className="text-xs text-gray-500">{testimonial.designation}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Manual controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default TestimonialSlider;
