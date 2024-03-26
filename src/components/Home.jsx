import React from "react";
import beautyhome from "../assets/beautyhome.jpg"; // Adjust the path as necessary

const Home = () => {
  return (
    <div>
      <main className="text-white">
        <section className="pt-20 md:pt-32 bg-custom-name h-screen bg-cover flex items-center" id="home">
          <div className="container mx-auto lg:flex">
            <div className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Book Quick, Save Time
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                Book appointments easily, save time, and increase your earnings with our app
              </p>
              <p className="mt-8 md:mt-12">
                <button
                  type="button"
                  className="animate-pop-in w-40 h-12 bg-white text-gray-900 cursor-pointer rounded-3xl border-2 border-[#eaa2ed] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#d5a6cc] transition duration-300 ease-in-out"
                >
                  Get Started
                </button>
              </p>
              <p className="mt-4 text-gray-300">
                Sed fermentum felis ut cursus
              </p>
            </div>
            {/* <div className="lg:w-2/3 xl:w-3/4 flex justify-end items-center">
              {/* Image can be uncommented and used as necessary */} 
              {/* <img
                src={beautyhome}
                alt="Hero Home"
                className="max-w-xs md:max-w-sm m-lg xl:max-w-xl animate-float"
              />
            </div>  */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
