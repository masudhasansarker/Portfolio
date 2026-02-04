import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const techStack = [
  { name: 'React', description: 'Building responsive and dynamic frontends.' },
  { name: 'Express.js', description: 'Developing fast and scalable backend APIs.' },
  { name: 'Node.js', description: 'Handling server-side logic and integrations.' },
  { name: 'MongoDB', description: 'Managing flexible NoSQL databases.' },
  { name: 'Next.js', description: 'Building fast, scalable React-based web applications with server-side rendering.' },
  { name: 'TypeScript', description: 'Enhancing JavaScript with static typing for more robust and maintainable code.' },
];

const About = () => {
  return (
    <section id="About" className="w-full bg-transparent text-white py-10 sm:py-16 md:py-20 px-6 xl:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-12 text-justify ">
          I’m a passionate MERN Stack Developer with a strong focus on building full-stack web applications
          that are scalable, efficient, and user-centric. From crafting intuitive front-end interfaces to
          developing robust server-side logic and managing databases, I enjoy solving real-world problems
          through clean, optimized code and modern technologies.
        </p>

        {/* Tech Stack Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-800/20 p-5 rounded-xl shadow-md hover:bg-gray-800/30 transition duration-300"
            >
              <IoArrowForward size={22} className="text-green-300 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
