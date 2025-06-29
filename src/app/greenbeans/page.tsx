"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  {
    image: "/assets/md.jpg",
    title: "Green Bean A",
    description: "เมล็ดกาแฟที่ปลูกบนภูเขาสูง รสชาติเข้ม กลิ่นหอม",
  },
  {
    image: "/assets/mkw.jpg",
    title: "Green Bean B",
    description: "รสชาติละมุน เหมาะสำหรับกาแฟดริป กลิ่นฟรุตตี้",
  },
  {
    image: "/assets/mk.jpg",
    title: "Green Bean C",
    description: "สายพันธุ์พิเศษจากแอฟริกา กลิ่นโดดเด่นแบบ Tropical",
  },
];

export default function Greenbeanspage() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 15000);
    return () => clearInterval(interval);
  }, [slider]);

  const [index, setIndex] = useState(-1);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/tcf.jpg')] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4">
            GREEN BEANS
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-11 px-4">
        <div className="text-3xl sm:text-4xl text-green-800 animate-bounce">↓</div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 space-y-10 text-gray-800">
        <section>
          <h2 className="text-2xl sm:text-3xl text-green-800 mb-2">OUR</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">
            GREEN BEANS
          </h2>
          <p className="mb-2 text-base sm:text-lg py-5">
            We take pride in producing some of the finest Arabica and Robusta
            coffees, offering both washed and natural varieties. Our coffees are
            grown under the shade of lush forests on our own estates, nestled in
            a thriving ecosystem rich in biodiversity. Each coffee is
            hand-picked with care and processed delicately to unlock the
            inherent romance in every cup. From cultivation to harvest and
            processing, we prioritize sustainability at every step, ensuring
            that our coffees are not only exceptional in taste but also kind to
            the environment.
          </p>
        </section>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 space-y-10 text-gray-800">
        <section>
          <h2 className="text-2xl sm:text-3xl text-center text-green-800 mb-2">OUR</h2>
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-green-800 mb-6">
            GREEN BEANS OFFERING
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="relative w-full sm:w-[90%] md:w-[600px] h-[400px] sm:h-[450px] md:h-[500px] group overflow-hidden">
              <img
                src="./assets/mkw.jpg"
                alt="Washed Arabica"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-opacity-60 text-white text-sm px-3 py-2 rounded-tl-lg z-10">
                <p className="font-bold text-xl">WASHED ARABICA</p>
              </div>
              <div className="absolute inset-0 bg-green-900/90 text-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 z-20">
                <h2 className="text-2xl font-bold mb-2">WASHED ARABICA</h2>
                <p className="text-base max-w-md">
                  Focusing solely on the quality, our washed coffees not only
                  reflect the science and art of cultivating and processing the
                  perfect bean, but also highlight the distinctive intrinsic
                  taste profile of the beans.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full sm:w-[90%] md:w-[600px] h-[400px] sm:h-[450px] md:h-[500px] group overflow-hidden">
              <img
                src="./assets/mkw.jpg"
                alt="Washed Robusta"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-opacity-60 text-white text-sm px-3 py-2 rounded-tl-lg z-10">
                <p className="font-bold text-xl">WASHED ROBUSTA</p>
              </div>
              <div className="absolute inset-0 bg-green-900/90 text-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 z-20">
                <h2 className="text-2xl font-bold mb-2">WASHED ROBUSTA</h2>
                <p className="text-base max-w-md">
                  Our select high-quality cultivars offer you some of the best
                  washed and flavourful Robustas from Laos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section title */}
      <div className="max-w-7xl mx-auto mt-20 px-4 space-y-10 text-gray-800">
        <section>
          <h2 className="text-2xl sm:text-3xl text-center text-green-800 mb-2">OUR</h2>
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-green-800 mb-6">
            GREEN BEANS ARE PROCESS
          </h2>
        </section>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-7xl px-4 mx-auto mt-10">
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 bg-gray-600 hover:bg-gray-700 p-3 rounded-full text-white shadow-md"
        >
          &#10094;
        </button>

        <button
          onClick={() => slider.current?.next()}
          className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 bg-gray-600 hover:bg-gray-700 p-3 rounded-full text-white shadow-md"
        >
          &#10095;
        </button>

        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {slides.map((item, i) => (
            <div
              className="keen-slider__slide flex flex-col md:flex-row items-center gap-6 bg-green-900"
              key={i}
            >
              <div className="w-full md:w-[60%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-[40%] text-center md:text-left px-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background image divider */}
      <div className="relative w-full h-[300px] overflow-hidden mt-10">
        <div className="absolute inset-0 bg-[url('/assets/cfmd.jpg')] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Map section */}
      <div className="max-w-7xl mx-auto mt-20 py-10 px-4 text-gray-800">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-2/3 space-y-10">
            <section>
              <h2 className="text-2xl sm:text-3xl text-green-800 mb-2">OUR</h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
                LOCATION COFFEE PLANTATION
              </h1>
              <ul className="list-disc list-inside space-y-1 mb-2 text-base sm:text-lg">
                <li>
                  Total area of plantation of 150 hectare in Kongtoun Village,
                  Paksong district, Champasak province
                </li>
                <li>
                  Located in the middle of Bolaven Plateau: best place for
                  coffee growing in Laos.
                </li>
                <li>Highland with altitude over 1200 masl.</li>
                <li>
                  Soil enriched by volcanic ash contained over 69% minerals.
                </li>
                <li>With cold and wet weather all year round.</li>
                <li>Make it the perfect place for coffee cultivation.</li>
              </ul>
            </section>
          </div>

          <div className="md:w-1/3 grid gap-4">
            {["/assets/map1.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full rounded-xl cursor-pointer hover:opacity-80 transition"
                onClick={() => setIndex(i)}
              />
            ))}
            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={["/assets/map1.png", "/assets/map2.png"].map((src) => ({
                src,
              }))}
              index={index}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 mt-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            LET’S HAVE A CONVERSATION.
          </p>
          <a
            href="mailto:sale@somxaychalern.com"
            className="text-blue-400 hover:underline text-lg sm:text-2xl md:text-3xl"
          >
            info@somxaychalern.com
          </a>
        </div>
      </footer>
    </div>
  );
}
