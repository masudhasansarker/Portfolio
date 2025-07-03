import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const techStack = [
  { name: 'React', description: 'Building responsive and dynamic frontends.' },
  { name: 'Express.js', description: 'Developing fast and scalable backend APIs.' },
  { name: 'Node.js', description: 'Handling server-side logic and integrations.' },
  { name: 'MongoDB', description: 'Managing flexible NoSQL databases.' },
];

const About = () => {
  return (
    <section id='About' className="text-white py-16 px-6 md:px-20">
      {/* Outer padding for spacing (20px = p-5) */}
      <div className="p-5 bg-transparent rounded-3xl shadow-inner">
        {/* Inner black container */}
        <div className="bg-black rounded-3xl px-6 md:px-10 py-10 w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 text-justify">
            I’m a passionate MERN Stack Developer with a strong focus on building full-stack web applications
            that are scalable, efficient, and user-centric. From crafting intuitive front-end interfaces to
            developing robust server-side logic and managing databases, I enjoy solving real-world problems
            through clean, optimized code and modern technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-800 bg-opacity-20 p-4 rounded-lg shadow-sm hover:bg-opacity-30 transition duration-300"
              >
                <IoArrowForward size={24} className="text-green-300 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
