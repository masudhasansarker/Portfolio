import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-emerald-500" /> },
];

const Experience = () => {
  return (
    <section id='Experience' className=" text-white py-16 px-6 md:px-20">
      <div className='bg-black p-10 rounded-3xl'>
        <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-105 transition duration-300">
              <div className="mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
