import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="border-t py-4 lg:h-[55vh] lg:py-20 relative">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-96">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaFacebook className="h-8 w-8" />
            <FaInstagram className="h-8 w-8" />
            <FaLinkedin className="h-8 w-8" />
            <RiTwitterXLine className="h-8 w-8" />
          </div>
          <p className="text-gray-600">
            Follow us to be part of our community
          </p>
          <a href="#" className="text-primary flex items-center">
            collegeCounsel.group <FaArrowRight className="inline h-4 w-4 ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:gap-36">
          <div>
            <h3 className="text-lg font-semibold">Course</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  MCA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  MBA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  B.tech
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600 flex items-center">
                  Blog{" "}
                  <span className="ml-2 bg-secondary text-white px-2 py-1 rounded-full">1</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Online Counselling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Tech
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute px-2 lg:bottom-0 text-center w-full text-[50px] lg:text-[200px] font-bold text-gray-200 pointer-events-none">
        College Counsel
      </div>
      <div className="space-y-4 md:col-span-3 px-6 mt-44 text-center md:text-left">
        <p className="text-black">© 2024 College Counsel</p>
      </div>
    </footer>
  );
}

export default Footer;
