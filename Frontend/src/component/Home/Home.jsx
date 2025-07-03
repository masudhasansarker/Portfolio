import React from 'react';
import ProfileImage from '../../assets/masudhasan.png';

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20 gap-10">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
          Hello, I am Masud Hasan Sarker
        </h1>
        <p className="text-sm md:text-xl tracking-tight max-w-xl mx-auto md:mx-0">
        I'm a MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js.
        I build scalable full-stack web applications with clean, efficient code.
        </p>
        <button className="bg-green-300 mt-6 text-black py-2 px-6 text-sm md:text-lg font-semibold rounded-full shadow-md hover:scale-105 hover:opacity-90 transition duration-300">
          Contact me
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          className="w-48 sm:w-64 md:w-80 rounded-xl shadow-lg"
          src={ProfileImage}
          alt="Masud Hasan"
        />
      </div>
    </div>
  );
};

export default Home;
