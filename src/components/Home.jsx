import React from "react";
import beautyhome from "../assets/beautyhome.png"; // Adjust the path as necessar
// import background from "../assets/background.jpg"; 


const Home = () => {
  return (
    <div>
      <main className="text-gray-900">
        <section className="pt-20 md:pt-20">
          <div className="container mx-auto lg:flex">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Book Quick, Save Time
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                Book appointments easily, save time, and increase your earnings
                with our app
              </p>
              <p className="mt-8 md:mt-12">
                <button
                  type="button"
                  className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#eaa2ed] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#d5a6cc] transition duration-300 ease-in-out"
                >
                  Get Started
                </button>
              </p>
              <p className="mt-4 text-gray-600">
                Sed fermentum felis ut cursus
              </p>
            </div>
            <div className="lg:w-2/3 xl:w-3/4 flex justify-end items-center">
              <img
                src={beautyhome}
                alt="Hero Home"
                className="max-w-xs md:max-w-sm lg:w-lg xl:max-w-xl "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
