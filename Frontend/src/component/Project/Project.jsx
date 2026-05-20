import React from 'react';
import RestaurentHome from "../../assets/home.PNG";
import newspaperImg from "../../assets/news.PNG";

const projects = [
  {
    title: 'Bukittag',
    image: "https://i.ibb.co.com/N6HG17hX/bukittag.png",
    description:
      'A full-stack MERN application built for a real client to showcase customizable branding and promotional products.Designed with a modern responsive UI, product management, and scalable backend architecture.',
    demoLink: 'https://www.bukittag.sg/',
    codeLink: 'clientProject',
  },
  {
    title: 'Grameen Caledonian College of Nursing',
    image: "https://i.ibb.co.com/svd1xY7w/gccn.png",
    description:
      'A full-stack GCCN admin web application built using the MERN stack, designed for managing GCCN institutional data and content in a real-world system.',
    demoLink: 'http://clienttest.weepoka.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Dious',
    image: "https://i.ibb.co.com/BHK6rBnR/home.png",
    description:
      'A full-stack Dious web application built with the MERN stack, showcasing Dious-related products for a real client in a modern, responsive interface.',
    demoLink: 'https://diousbd.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Vertical Blinds',
    image: "https://i.ibb.co.com/JwzhPCLG/verticle-Blind.png",
    description:
      'A full-stack Vertical Blinds web application built with the MERN stack, showcasing Vertical Blinds-related products for a real client.',
    demoLink: 'https://hifashionvertical.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Hi-Fashion',
    image: "https://i.ibb.co.com/DDM6JVMj/home.png",
    description:
      'A full-stack Hi-Fashion web application built with the MERN stack, showcasing Hi-Fashion-related products for a real client.',
    demoLink: 'https://hifashiongallery.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Organic Shop',
    image: "https://i.ibb.co.com/d0wLXjxb/organic.png",
    description:
      'A full-stack Organic Shop web application built with the MERN stack, showcasing Organic Shop-related products for a real client.',
    demoLink: 'https://organic.weepokallc.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Cakehub',
    image: "https://i.ibb.co.com/KcRrd36H/cakehub.png",
    description:
      'A full-stack Cakehub web application built with the MERN stack, showcasing Cakehub-related products for a real client.',
    demoLink: 'https://cakehub.weepokallc.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'GCCN admin',
    image: "https://i.ibb.co.com/rGqWmYwk/adminhome.png",
    description:
      'A full-stack GCCN admin web application built with the MERN stack, showcasing GCCN-related products for a real client.',
    demoLink: 'https://gccn-admin.onrender.com/',
    codeLink: 'clientProject',
  },
  {
    title: 'Restaurant App',
    image: RestaurentHome,
    description:
      'A full-stack restaurant web app using MERN Stack with user authentication and cart.',
    demoLink: '#',
    codeLink: 'https://github.com/masudhasansarker/restaurent-Management',
  },
  {
    title: 'Property Rental Platform',
    image:
      'https://bnbforms.com/wp-content/uploads/2024/05/11-homez_vacation-rental-website-templates-1024x461.jpg',
    description:
      'A MongoDB-based property listing site built with Express.js and React.',
    demoLink: '#',
    codeLink: 'https://github.com/masudhasansarker/Rent-Home',
  },
  {
    title: 'News Portal',
    image: newspaperImg,
    description:
      'A personal News portal built with React, where different news show in one place.',
    demoLink: '#',
    codeLink: 'https://github.com/masudhasansarker/News',
  },
];

const Project = () => {
  return (
    <section
      id="Project"
      className="text-white py-10 sm:py-16 md:py-20 px-6 xl:px-0"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl hover:-translate-y-2 transition duration-500 overflow-hidden shadow-lg hover:shadow-green-500/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 text-justify">
                  {project.description}
                </p>

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
                    href={
                      project.codeLink === "clientProject"
                        ? undefined
                        : project.codeLink ||
                          "https://github.com/masudhasansarker"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-2 rounded-full font-semibold transition ${
                      project.codeLink === "clientProject"
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none"
                        : "bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    }`}
                  >
                    {project.codeLink === "clientProject"
                      ? "Client Project"
                      : "Source Code"}
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