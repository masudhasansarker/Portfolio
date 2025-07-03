import React from 'react';
import { FaPhoneAlt, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='Footer' className="bg-black text-white py-8 px-6 md:px-20 mt-20">
      <div className='flex'>
        <div>
            <h1 className='text-5xl font-bold px-20'>Contact Me</h1>
        </div>
        <div className="max-w-5xl mx-auto  flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Contact Info */}
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-400" />
          <span className="text-sm md:text-base">+8801719145071</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-green-400" />
          <span className="text-sm md:text-base">masudhasanantorsarker@gmail.com</span>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-3">
          <FaFacebook className="text-green-400" />
          <a
            href="https://www.facebook.com/antorsarkar.antorsarker.3/"
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-base hover:underline"
          >
            facebook.com/masudhasan
          </a>
        </div>
      </div>

      </div>
      <p className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Masud Hasan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
