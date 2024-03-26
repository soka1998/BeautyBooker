import React from "react";
import hairImg from "../assets/hair.jpg";
import manicuresImg from "../assets/nails.jpg"; 
import facialImg from "../assets/FacialTreatments.jpg";
import makeupImg from "../assets/Makeup.jpg";
import waxingImg from "../assets/Waxing.jpg";
import skinCareImg from "../assets/SkinCare.jpg";
import nailArtImg from "../assets/NailArt.jpg";

const Services = () => {
    // Inline styles for fonts
    const titleStyle = { fontFamily: "'Lora', serif" };
    const contentStyle = { fontFamily: "'Unbounded', sans-serif" };
  // Define a class for images to control their appearance
  const imageClass = "object-contain mb-4 rounded-lg h-64 w-full"; // This class will make sure all images fit within a consistent size

  return (
    <section id="services" className="py-20 lg:pb-40 lg:pt-48 animate-fadeIn">
    <div className="container mx-auto text-center">
      <h2 style={titleStyle} className="text-5xl md:text-6xl font-bold text-pink-500 animate-pulse">
        Our Services
      </h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {/* Service 1 */}
          <div className="flex-1 px-3">
            <div  style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service">
              <img src={hairImg} alt="Hair Styling" className={imageClass} />
              <p className="font-semibold text-xl">Hair Styling</p>
              <p className="mt-4">
                Offering a variety of hair styling services from classic cuts to modern styles to ensure you look your best.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex-1 px-3">
            <div  style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service"
              >
              <img src={manicuresImg} alt="Manicures and Pedicures" className={imageClass} />
              <p className="font-semibold text-xl">Manicures and Pedicures</p>
              <p className="mt-4">
                Relax while we pamper your hands and feet with our luxurious manicure and pedicure services.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex-1 px-3">
            <div style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service">
              <img src={facialImg} alt="Facial Treatments" className={imageClass} />
              <p className="font-semibold text-xl">Facial Treatments</p>
              <p className="mt-4">
                Indulge in our facial treatments that rejuvenate, revitalize, and refresh your skin.
              </p>
            </div>
          </div>
        </div>
        {/* Second row for services 4 to 6 */}
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          {/* Service 4 */}
          <div className="flex-1 px-3">
            <div  style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service">
              <img src={makeupImg} alt="Makeup" className={imageClass} />
              <p className="font-semibold text-xl">Makeup</p>
              <p className="mt-4">
                Professional makeup services for all occasions, ensuring you feel beautiful and confident.
              </p>
            </div>
          </div>
          {/* Service 5 */}
          <div className="flex-1 px-3">
            <div style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service">
              <img src={waxingImg} alt="Waxing" className={imageClass} />
              <p className="font-semibold text-xl">Waxing</p>
              <p className="mt-4">
                Experience smooth skin with our gentle and effective waxing services for all body areas.
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
            <div  style={contentStyle} className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-service">
              <img src={skinCareImg} alt="Skin Care" className={imageClass} />
              <p className="font-semibold text-xl">Skin Care</p>
              <p className="mt-4">
                Our skin care treatments are designed to nourish and rejuvenate your skin, giving you a radiant and youthful glow.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
   
  );
};

export default Services;
