import React from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-black text-white py-10 px-6 md:px-16 lg:px-24 mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact Me
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Feel free to reach out for collaboration or any inquiries.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-400 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">
              +8801719145071
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-400 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base break-all">
              masudhasanantorsarker@gmail.com
            </span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-3">
            <FaFacebook className="text-green-400 text-lg sm:text-xl" />
            <a
              href="https://www.facebook.com/antorsarkar.antorsarker.3/"
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base hover:text-green-400 transition-colors duration-200"
            >
              facebook.com/masudhasan
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-green-400 text-lg sm:text-xl" />
            <a
              href="https://www.linkedin.com/in/masud-hasan-sarker-970418293/"
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base hover:text-green-400 transition-colors duration-200"
            >
              linkedin.com/in/masud-hasan-sarker
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-left text-gray-500 mt-10 text-xs sm:text-sm">
        © {new Date().getFullYear()} Masud Hasan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
