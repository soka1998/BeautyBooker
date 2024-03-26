import React from "react";
import serviceData from "../data/service"; // Make sure the path is correct

const Services = () => {
  // Inline styles for fonts
  const titleStyle = { fontFamily: "'Lora', serif" };
  const contentStyle = { fontFamily: "'Unbounded', sans-serif" };
  
  // Define a class for images to control their appearance
  const imageClass = "object-contain mb-4 rounded-lg h-64 w-full"; 

  return (
    <section id="services" className="py-20 lg:pb-40 lg:pt-48 animate-fadeIn">
      <div className="container mx-auto text-center">
        <h2 style={titleStyle} className="text-5xl md:text-6xl font-bold text-pink-500 animate-pulse">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {serviceData.services.map((service, index) => (
            <div key={index} className={`flex-1 px-3 p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service animate-fadeIn ${index % 2 === 0 ? 'delay-200' : 'delay-400'}`} style={contentStyle}>
              <img src={service.image} alt={service.title} className={imageClass} />
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
