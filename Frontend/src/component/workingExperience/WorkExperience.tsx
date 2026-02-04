import React from 'react';

const experiences = [
  {
    role: 'Junior MERN Stack Software Engineer',
    company: 'Weero Digital',
    duration: 'February 2026 - Present',
    details: [
      'Developed a scalable e-commerce website with product management, secure user authentication, and image upload functionality using the MERN stack (MongoDB, Express, React, Node.js).',
      'Improved operational efficiency and ensured a fully responsive, high-performance user experience.',
    ],
  },
  {
    role: 'MERN Stack Software Engineer Intern',
    company: 'Weero Digital',
    duration: 'October 2025 - January 2026',
    details: [
      'Contributed to MERN stack development for web applications.',
      'Enhanced website features and optimized performance.',
      'Utilized ReactJS for building reusable components and dynamic UI.',
    ],
  },
  {
    role: 'Sales Executive',
    company: 'Beshati Online Shop',
    duration: 'March 2022 - March 2024',
    details: [
      'Worked on a Customer Relationship Management (CRM) system for an online sales company.',
      'Managed client interactions, tracked job applications and sales leads, and supported customer inquiries to ensure timely follow-up and improved sales performance.',
    ],
  },
];

const WorkingExperience = () => {
  return (
    <section id="Experience" className="text-white py-10 sm:py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Work Experience</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-6 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-xl sm:text-xl font-bold mb-1 text-center">{exp.role}</h3>
              <p className="text-green-300 font-semibold mb-1 text-center">{exp.company}</p>
              <p className="text-gray-400 italic mb-4 text-center">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingExperience;
