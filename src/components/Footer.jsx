import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center p-6 text-white">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center">
            Let's work together.
          </h1>
          <button className="button mt-4">Get A Custom Proposal</button>
        </div>
        <hr className="border-gray-600" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4">
          <div className="text-sm md:text-base">
            © {new Date().getFullYear()} Arbaz. All rights reserved.
          </div>
          <div className="text-sm md:text-base">
            Contact us for more information.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
