import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center items-center p-5 text-white px-4 lg:px-16 gap-8 lg:gap-16">
      <div className="flex-1 flex justify-center items-center mb-5 lg:mb-0">
        <video
          playsInline
          muted
          preload="yes"
          autoPlay
          loop
          className="rounded-xl w-full max-w-md lg:max-w-lg"
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="flex-1 p-5">
        <h4 className="mb-2 text-xl text-center lg:text-left">About Us</h4>
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">
          Amplifying Your Digital Presence
        </h1>
        <h2 className="text-2xl mb-4 text-center lg:text-left">
          Elevate Your Brand, Ignite Engagement. <br /> Unleash possibilities,
          Ignite Influence
        </h2>
        <p className="text-lg mb-6 text-center lg:text-left">
          Seasoned professionals who have been at the forefront of the industry
          for nearly a decade. Fueled by a passion for shaping compelling
          narratives and driving impactful results, our founders embarked on a
          journey to redefine the landscape of digital communication. Their
          collective expertise forms the cornerstone of our agency, ensuring
          that every client receives a blend of experience, creativity, and
          strategic insight.
        </p>
        <button className="button">Read More</button>
      </div>
    </div>
  );
};

export default About;
