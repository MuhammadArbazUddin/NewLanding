import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLinkClick = () => setMenu(false);

  const toggleMenu = () => {
    setIsAnimating(true);
    setMenu((prev) => !prev);
  };

  return (
    <div>
      <nav
        className={`flex cursor-pointer ${
          menu ? "fixed" : "absolute"
        } justify-between items-center pt-4 px-3 md:px-16 w-full z-[999]`}
      >
        <a href="/">
          <div>
            <img
              className="w-18"
              src="https://sociallywiredinc.com/wp-content/uploads/thegem-logos/logo_5ed0fad380d2d79934f28a88e69d3c71_1x.png"
              alt="Logo"
            />
          </div>
        </a>

        <div className="flex items-center lg:gap-14 gap-5 hover:bg-[#3F3F42] rounded-full transition-all ease-in-out duration-300">
          <div onClick={toggleMenu} className="text-center p-3">
            {menu ? (
              <RxCross1
                className="transition-all ease-in-out duration-700"
                color="white"
                size={35}
              />
            ) : (
              <HiBars3
                className="transition-all ease-in-out duration-700"
                color="white"
                size={35}
              />
            )}
          </div>
        </div>
      </nav>

      <div
        className={`z-50 bg-black fixed ${
          menu ? "h-screen" : "h-0"
        } bottom-0 transition-all ease-in-out duration-700 overflow-hidden w-full flex flex-col items-center justify-center gap-10 text-xl sm:text-5xl text-white`}
      >
        <a href="/" onClick={handleLinkClick}>
          <p>Home</p>
        </a>
        <a href="/about" onClick={handleLinkClick}>
          <p>About</p>
        </a>
        <a href="/services" onClick={handleLinkClick}>
          <p>Services</p>
        </a>
        <a href="/contact" onClick={handleLinkClick}>
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
