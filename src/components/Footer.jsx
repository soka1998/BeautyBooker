import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-gray-900 ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get an update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring focus:ring-pink-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
          {/* You can add other sections here */}
        </div>
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* App store badges and social media icons sections */}
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-pink-500">
          © 2023 Your Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
