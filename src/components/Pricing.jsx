import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router v6

// Sample data for services
const servicesData = [
  {
    id: 1,
    name: 'Skin Care',
    price: '300 MAD',
    description: 'Rejuvenating skin treatments for a radiant glow.'
  },
  {
    id: 2,
    name: 'Waxing',
    price: '150 MAD',
    description: 'Smooth and effective waxing for all body areas.'
  },
  {
    id: 3,
    name: 'Facial Treatments',
    price: '350 MAD',
    description: 'Luxurious facial treatments tailored to your skin type.'
  },
  {
    id: 4,
    name: 'Makeup',
    price: '500 MAD',
    description: 'Professional makeup applications for any occasion.'
  },
  {
    id: 5,
    name: 'Manicures and Pedicures',
    price: '200 MAD',
    description: 'Pampering hand and foot care for relaxation and beauty.',
    subServices: [
      {
        name: 'Art Manicure',
        price: '250 MAD'
      },
      {
        name: 'Gel Pedicure',
        price: '300 MAD'
      }
    ]
  },
  {
    id: 6,
    name: 'Hair Styling',
    price: '250 MAD',
    description: 'Stylish haircuts and custom styling for every hair type.'
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const navigateToBooking = (serviceId) => {
    // Function to navigate to the booking form
    navigate(`/booking/${serviceId}`);
  };

  return (
    <section id="pricing" className="container mx-auto px-4 py-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center my-10 text-pink-500 animate-pulse">Our Pricing</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={service.id} className={`p-6 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105 animate-fadeIn ${index % 2 === 0 ? 'delay-200' : 'delay-400'}`}>
            <h3 className="text-xl font-semibold mb-2 text-pink-500" style={{ fontFamily: "'Great Vibes', cursive", color: "#FF007F" }}>{service.name}</h3>
            <p className="mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>{service.description}</p>
            <p className="text-lg font-bold">{service.price}</p>
            {/* Add any sub-services here */}
            <button
              className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
              onClick={() => navigateToBooking(service.id)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
