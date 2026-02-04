import React from 'react';
import ProfileImage from '../../assets/masudhasan.png';

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-15 lg:pt-30  gap-10 px-6 xl:px-0">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          Hello, I am <br /> <span className="text-green-300">Masud Hasan Sarker</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg tracking-tight max-w-xl mx-auto md:mx-0 text-gray-300 text-justify">
          I'm a MERN Stack Developer skilled in React,NextJS, MongoDB, Express.js, and Node.js.
          I build scalable full-stack web applications with clean, efficient, and maintainable code.
        </p>
        <a
          href="#Footer"
          className="bg-green-300 mt-4 inline-block text-black py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:opacity-90 transition duration-300"
        >
          Contact me
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-48 sm:w-60 md:w-72 lg:w-80 rounded-full shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
          src="https://i.ibb.co.com/nM8NNxzN/masudhasan.jpg"
          alt="Masud Hasan"
        />
      </div>
    </div>
  );
};

export default Home;
