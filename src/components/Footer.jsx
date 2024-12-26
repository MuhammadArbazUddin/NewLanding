// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <div className="flex flex-col justify-center p-6 text-white">
//         <div className="flex flex-col items-center gap-4 mb-8">
//           <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center">
//             Let's work together.
//           </h1>
//           <button className="button mt-4">Get A Custom Proposal</button>
//         </div>
//         <hr className="border-gray-600" />
//         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4">
//           <div className="text-sm md:text-base">
//             © {new Date().getFullYear()} Arbaz. All rights reserved.
//           </div>
//           <div className="text-sm md:text-base">
//             <ul className="flex gap-4 items-center underline">
//               <li>
//                 <Link to="/privacy-policy">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <p className="mb-4 font-sans">
              <span role="img" aria-label="USA Flag"></span> Toronto, Ontario
              Canada
            </p>
            <p className="mb-2 font-sans">info@sociallywired.com</p>
            <p className="font-sans">+1 519 697 8425</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a
                href="https://www.instagram.com/sociallywiredinc/profilecard/?igsh=MTNnMnFzdWx1YW5pZQ%3D%3D"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/socially-wired-inc/"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/people/Socially-wired-Inc/61565652324656/?mibextid=LQQJ4d&rdid=3xRLjcFFVTLi7Uot&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCh4GsGhjoMJXrrVo%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono font-bold mb-4 text-xl">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Youtube
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Meta
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Snapchat
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#our-offers"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Our Offers
                </a>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-base text-gray-400 flex flex-col md:flex-row justify-between">
          <p className="font-sans">©Techxudo All Rights Reserved</p>
          <div className="flex space-x-4">
            <NavLink
              to="/privacy-policy"
              className="hover:text-white font-sans"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
