import React from "react";
import image from "../assets/aboutimg.jpg"; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-10 animate-fadeIn" id="about">
      <h2 className="text-5xl md:text-6xl font-bold text-center my-10 text-pink-500 animate-pulse" style={{ fontFamily: "'Great Vibes', cursive" }}>
        About Us
      </h2>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
        <div className="w-full md:w-1/2 animate-fadeInLeft">
          <img
            src={image}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 animate-fadeInRight">
          <p className="text-lg text-gray-700" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Beauty Booker is dedicated to providing you with an effortless way to book and experience beauty treatments. Our curated selection ensures you receive top-tier service, tailored to your individual style and preferences. Join us and find out how we can amplify your natural beauty and elevate your daily routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
