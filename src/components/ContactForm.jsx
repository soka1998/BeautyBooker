import React from 'react';
import contactImage from '../assets/contactimg.png'; 

const ContactUs = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <section id='contact' className="flex flex-wrap md:flex-nowrap w-[80%]">
        {/* Left Image Column */}
        <div className="md:w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${contactImage})` }}>
            
          {/* Background image will be added here using inline styles */}
        </div>

        {/* Right Form Column */}
        <div className="md:w-1/2 bg-pink-100 p-8">
        <form className="space-y-6">
  <h2 className="text-4xl font-bold mb-4">STAY IN TOUCH</h2>
  <div className="flex justify-between gap-4">
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">
        Name
        <input type="text" name="name" placeholder="Your Name" className="mt-1 p-2 border-b-2 border-gray-400 bg-transparent focus:border-pink-500 transition-colors w-full"/>
      </label>
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">
        Email
        <input type="email" name="email" placeholder="Your Email" className="mt-1 p-2 border-b-2 border-gray-400 bg-transparent focus:border-pink-500 transition-colors w-full"/>
      </label>
    </div>
  </div>
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700">
      Subject
      <input type="text" name="subject" placeholder="Subject" className="mt-1 p-2 border-b-2 border-gray-400 bg-transparent focus:border-pink-500 transition-colors w-full"/>
    </label>
  </div>
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700">
      Message
      <textarea name="message" placeholder="Type your message here..." className="mt-1 p-2 border-b-2 border-gray-400 bg-transparent focus:border-pink-500 transition-colors w-full" rows="4"></textarea>
    </label>
  </div>
  <button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded-full float-right hover:bg-pink-600 transition-colors">Send</button>
</form>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
