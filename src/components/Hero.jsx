import React from "react";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-between px-32 relative">
      <div>
        <img
          className="w-32 absolute bottom-10 right-10 rotate-12 animate-pulse"
          src="https://static.vecteezy.com/system/resources/thumbnails/041/503/276/small/cloud-3d-icon-with-cartoon-style-for-website-design-presentation-3d-rendering-icon-png.png"
          alt=""
        />
        <img
          className="w-20 absolute top-20 left-10 animate-pulse"
          src="https://static.vecteezy.com/system/resources/thumbnails/041/503/276/small/cloud-3d-icon-with-cartoon-style-for-website-design-presentation-3d-rendering-icon-png.png"
          alt=""
        />
      </div>
      <div className="text-8xl font-bold flex-1">
        Think <br />
        Create <br />
        Solution
      </div>
      <div className="text-2xl font-bold flex-1">
        <div>
          In the world of Webflow templates, Cubōrg leads the pack with
          user-favored designs that resonate seamlessly.
          <div></div>
          <br />
          Its user-friendly approach sets Cubōrg apart, making it a frontrunner
          in the landscape of Webflow templates.
        </div>
        <button className="button mt-4">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
