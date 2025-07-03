import React from 'react';
import RestaurentHome from "../../assets/home.PNG"
import portfolioImg from "../../assets/portfoliohomePage.PNG"
const projects = [
  {
    title: 'Portfolio Website',
     // Replace with your own image
     image:portfolioImg,
    description: 'A personal portfolio built with React to showcase my projects and skills.',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Restaurant App',
    image: RestaurentHome,
    description: 'A full-stack restaurant web app using MERN Stack with user authentication and cart.',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Property Rental Platform',
    image: 'https://bnbforms.com/wp-content/uploads/2024/05/11-homez_vacation-rental-website-templates-1024x461.jpg',
    description: 'A MongoDB-based property listing site built with Express.js and React.',
    demoLink: '#',
    codeLink: '#',
  },
];

const Project = () => {
  return (
    <section id='Project' className=" text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Projects</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/50 transition duration-300"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="h-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-justify">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-400 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-green-400 text-green-400 px-4 py-2 rounded-full font-semibold hover:bg-green-400 hover:text-black transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
