"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Historypage() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/assets/pok.png)] bg-cover bg-center flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
            HISTORY
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-11 p-11">
        <div className="text-4xl text-green-800 animate-bounce">↓</div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 text-gray-800">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* ซ้าย: เนื้อหา */}
          <div className="md:w-2/3 space-y-10">
            {/* Company History */}
            <section>
              <h2 className="text-3xl text-green-800 mb-2">OUR</h2>
              <h1 className="text-4xl font-bold text-green-800 mb-6">
                COMPANY HISTORY
              </h1>
              <ul className="list-disc list-inside space-y-1 mb-2 text-lg">
                <li>
                  2011 Started growing coffee arabica (catimor) with plantation
                  area 20 ha
                </li>
                <li>2012 to 2015 plantation area increased to 150 ha</li>
                <li>2015 Established wet milling</li>
                <li>2019 Became model coffee farm</li>
                <li>2020 From large scale farmer to become own exporter.</li>
                <li>Plantation output: 500 tons of green beans</li>
                <li>Customer: Thailand, Vietnam</li>
              </ul>
            </section>

            {/* Company Vision */}
            <section>
              <h2 className="text-3xl text-green-800 mb-2">OUR</h2>
              <h1 className="text-4xl font-bold text-green-800 mb-6">
                COMPANY VISION
              </h1>
              <ul className="list-disc list-inside space-y-1 mb-2 text-lg">
                <li>From Soil to Beans, we handle with care.</li>
                <li>
                  With Sustainability as our goal we minimize our impact on the
                  environment.
                </li>
                <li>
                  2021 with Gov&apos;t support, we started promoting small holder
                  farmers to increase their capacity.
                </li>
                <li>
                  We are acquiring Rainforest Alliance and UTZ Certificate in
                  2022.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-3xl text-green-800 mb-2">OUR</h2>
              <h1 className="text-4xl font-bold text-green-800 mb-6">
                LOCATION COFFEE PLANTATION
              </h1>
              <ul className="list-disc list-inside space-y-1 mb-2 text-lg">
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

          {/* ขวา: รูปภาพ */}
          <div className="md:w-1/3 grid gap-4">
            {[
              "/assets/htr.png",
              "/assets/pok.png",
              "/assets/snng2.jpeg",
              "/assets/tcf3.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full rounded-5xl shadow cursor-pointer hover:opacity-80 transition"
                onClick={() => setIndex(i)}
              />
            ))}

            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={[
                "/assets/htr.png",
                "/assets/pok.png",
                "/assets/snng2.jpeg",
                "/assets/tcf3.jpg",
              ].map((src) => ({ src }))}
              index={index}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

