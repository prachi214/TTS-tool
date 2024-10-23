import React from 'react';
import { IconBrandFacebook, IconBrandX, IconBrandInstagram
, IconBrandLinkedin } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
<>
<h1 className="text-4xl mb-5 font-bold text-center text-white mt-6  " id='Footer'>
    <span className="text-primaryColor">03. &nbsp;</span>Footer
  </h1>
    <footer className="bg-gray-900 text-white py-10 m-30  items-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <p className="text-gray-400">
              Making the world a better place through innovation and creativity.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Services</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="hover:text-red-500">Blog</a></li>
              <li><a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="hover:text-red-500">Help Center</a></li>
              <li><a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="hover:text-red-500">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="relative overflow-hidden rounded-full px-6 py-3 text-lime-200 border border-white
                 group hover:text-white transition-all duration-500 ease-in-out hover:bg-black"><IconBrandFacebook size={24} /></a>
              <a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className='relative overflow-hidden rounded-full px-6 py-3 text-lime-200 border border-white
                 group hover:text-white transition-all duration-500 ease-in-out hover:bg-black'><IconBrandX size={24} /></a>
              <a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="relative overflow-hidden rounded-full px-6 py-3 text-lime-200 border border-white
                 group hover:text-white transition-all duration-500 ease-in-out hover:bg-black"><IconBrandInstagram
 size={24} /></a>
              <a href="https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/Activities/Internship.html" className="relative overflow-hidden rounded-full px-6 py-3 text-lime-200 border border-white
                 group hover:text-white transition-all duration-500 ease-in-out  hover:bg-black"><IconBrandLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
