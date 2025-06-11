import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="relative w-full h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pok.png')] bg-cover bg-center flex items-center justify-center transition-transform duration-700 ease-in hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
            WELLCONE TO SOMXAY COFFEE
          </h1>
        </div>
      </div>

      <div className="max-w-7xl  mx-auto py-10  space-y-10 text-gray-800">
        <section>
          <h2 className="text-3xl text-green-800 mb-2">
            ABOUT
          </h2>
          <h2 className="text-4xl font-bold text-green-800 mb-2">
            SOMXAY COFFEE 
          </h2>
          <p className="mb-2 text-lg py-5 ">We take pride in producing some of the finest Arabica and Robusta coffees, offering both
            washed and natural varieties. Our coffees are grown under the shade of lush forests on our own estates,
            nestled in a thriving ecosystem rich in biodiversity. Each coffee is hand-picked with care and processed
            delicately to unlock the inherent romance in every cup. From cultivation to harvest and processing, we
            prioritize sustainability at every step, ensuring that our coffees are not only exceptional in taste but
            also kind to the environment.</p>
        </section>
      </div>
    </div>
  );
};
export default Homepage;
