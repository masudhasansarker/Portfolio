import React from 'react';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-emerald-500" /> },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full text-white py-10 sm:py-16 md:py-20 bg-transparent px-6 xl:px-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* Inner container */}
        <div className="bg-black rounded-3xl p-6 sm:p-10 shadow-lg">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            Experience
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <div className="p-3 bg-gray-800/20 rounded-xl shadow-inner hover:bg-gray-800/40 transition duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-base font-semibold mt-2 text-gray-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
