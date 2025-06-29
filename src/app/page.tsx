import React from "react";

export default function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pok.png')] bg-cover bg-center flex items-center justify-center transition-transform duration-700 ease-in hover:scale-105">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            WELCOME TO SOMXAY COFFEE
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl sm:text-3xl text-green-800 mb-2">ABOUT</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
            SOMXAY COFFEE
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            At Somxay Coffee, we are dedicated to actively promoting the
            cultivation of Lao coffee. We offer consultation services on
            planting and cultivating Lao coffee varieties to support local
            farmers in improving their agricultural practices. Currently, we are
            developing a 150-hectare project in Pakxong, focusing on both coffee
            cultivation and livestock farming to enhance productivity and
            promote sustainable agriculture in the region.
            <br />
            <br />
            In addition, we participate in key industry events such as the
            Bolaven Plateau Coffee, Tea, and Agricultural Products Festival
            2025, collaborating with leading stakeholders in the Lao coffee
            sector to drive the industry forward. We are also proud to have been
            selected for a government-backed halal certification project, which
            underscores our potential in exporting Lao coffee products to Muslim
            markets worldwide.
          </p>
        </section>
      </div>
    </div>
  );
}
