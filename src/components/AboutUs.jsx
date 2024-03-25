import React from "react";
import image from "../assets/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center my-10 text-gray-800 fadeInDown animation-slow">
          About Us
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
          <div className="w-full md:w-1/2 fadeInLeft animation-fast">
            <img
              src={image}
              alt="About Us"
              className="rounded-lg shadow-lg animate-fadeInLeft animation-delay-1s"
            />
          </div>
          <div className="w-full md:w-1/2 fadeInUp animation-delay-2s">
            <p className="text-lg text-gray-700">
              Founded with the vision to simplify beauty care, Beauty Booker is your first online destination for discovering and scheduling top-notch beauty services. We connect you with expert professionals to enhance your beauty and wellness journey, making self-care accessible and convenient. Join our community and experience the transformative power of looking and feeling your best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
